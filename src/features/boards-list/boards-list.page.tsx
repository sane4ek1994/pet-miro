import { href, Link } from 'react-router'
import { ROUTES } from '@/shared/model/routes'
import { CONFIG } from '@/shared/model/config'
import { rqClient } from '@/shared/api/instance'
import { useQueryClient } from '@tanstack/react-query'
import { Button } from '@/shared/ui/kit/button'
import { Card, CardFooter, CardHeader } from '@/shared/ui/kit/card'
import { Input } from '@/shared/ui/kit/input'

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
    <div className='container mx-auto p-4'>
      <h1>BoardListPage {CONFIG.API_BASE_URL}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formDate = new FormData(e.currentTarget as HTMLFormElement)
          createBoardMutation.mutate({ body: { name: formDate.get('name') as string } })
        }}
      >
        <Input name='name' placeholder='Board name' />
        <Button type='submit' disabled={createBoardMutation.isPending}>
          Create
        </Button>
      </form>
      <div className='grid grid-cols-3 gap-4'>
        {boardsQuery.data?.map((board) => (
          <Card key={board.id}>
            <CardHeader>
              <Button asChild variant='link'>
                <Link to={href(ROUTES.BOARD, { boardId: board.id })}>{board.name}</Link>
              </Button>
            </CardHeader>
            <CardFooter>
              <Button
                variant='destructive'
                disabled={deletedBoardMutation.isPending}
                onClick={() => deletedBoardMutation.mutate({ params: { path: { boardId: board.id } } })}
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export const Component = BoardListPage
