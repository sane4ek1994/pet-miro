import { href, Link } from 'react-router'
import { ROUTES } from '@/shared/model/routes.ts'
import { CONFIG } from '@/shared/model/config.ts'

export { BoardCard } from './board-card'

function BoardListPage() {
  return (
    <div>
      <h1>BoardListPage {CONFIG.API_BASE_URL}</h1>
      <Link to={href(ROUTES.BOARD, { boardId: '1' })}>Board - 1</Link>
    </div>
  )
}

export const Component = BoardListPage
