import { rqClient } from '@/shared/api/instance'
import { RefCallback, useCallback } from 'react'

type BoardsSortOption = 'createdAt' | 'updatedAt' | 'lastOpenedAt' | 'name'

type UseBoardsListParams = {
  limit?: number
  search?: string
  isFavorite?: boolean
  sort?: BoardsSortOption
}

export function useBoardsList({ limit = 20, search, isFavorite, sort }: UseBoardsListParams) {
  const { fetchNextPage, data, isFetchingNextPage, isPending, hasNextPage } = rqClient.useInfiniteQuery(
    'get',
    '/boards',
    {
      params: {
        query: {
          page: 1,
          limit,
          search,
          isFavorite,
          sort
        }
      }
    },
    {
      initialPageParam: 1,
      pageParamName: 'page',
      getNextPageParam: (lastPage, _, lastPageParams) =>
        Number(lastPageParams) > lastPage.totalPages ? lastPageParams + 1 : null
    }
  )

  const cursorRef: RefCallback<HTMLDivElement> = useCallback(
    (el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchNextPage()
          }
        },
        { threshold: 0.5 }
      )

      if (el) {
        observer.observe(el)

        return () => {
          observer.disconnect()
        }
      }
    },
    [fetchNextPage]
  )

  const boards = data?.pages.flatMap((page) => page.list) ?? []

  return { cursorRef, boards, isFetchingNextPage, isPending, hasNextPage }
}
