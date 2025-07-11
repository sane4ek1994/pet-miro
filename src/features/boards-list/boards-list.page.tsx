import { href, Link } from 'react-router'
import { ROUTES } from '@/shared/model/routes.ts'
import { CONFIG } from '@/shared/model/config.ts'
import { rqClient } from '@/shared/api/instance.ts'
import { useQueryClient } from '@tanstack/react-query'

export { BoardCard } from './board-card'

function BoardListPage() {
  const queryClient = useQueryClient()

  const boardsQuery = rqClient.useQuery('get', '/boards')

  const createBoardMutation = rqClient.useMutation('post', '/boards', {
    onSettled: async () => {
      await queryClient.invalidateQueries(rqClient.queryOptions('get', '/boards'))
    }
  })

  const deletedBoardMutation = rqClient.useMutation('delete', '/boards/{boardId}', {
    onSettled: async () => {
      await queryClient.invalidateQueries(rqClient.queryOptions('get', '/boards'))
    }
  })

  return (
    <div>
      <h1>BoardListPage {CONFIG.API_BASE_URL}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formDate = new FormData(e.currentTarget as HTMLFormElement)
          createBoardMutation.mutate({ body: { name: formDate.get('name') as string } })
        }}
      >
        <input name='name' placeholder='Board name' />
        <button type='submit' disabled={createBoardMutation.isPending}>
          Create
        </button>
      </form>
      {boardsQuery.data?.map((board) => (
        <div key={board.id}>
          <Link to={href(ROUTES.BOARD, { boardId: board.id })}>{board.name}</Link>
          <button
            disabled={deletedBoardMutation.isPending}
            onClick={() => deletedBoardMutation.mutate({ params: { path: { boardId: board.id } } })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export const Component = BoardListPage
