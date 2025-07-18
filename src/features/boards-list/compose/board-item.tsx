import { BoardsFavoriteToggle } from '../ui/boards-favorite-toggle'
import { BoardsListItem } from '../ui/boards-list-item'
import { useDeleteBoard } from '../model/use-delete-board'
import { useUpdateFavorite } from '../model/use-update-favorite'
import { ApiSchemas } from '@/shared/api/schema'
import { DropdownMenuItem } from '@/shared/ui/kit/dropdown-menu'

export function BoardItem({ board }: { board: ApiSchemas['Board'] }) {
  const deleteBoard = useDeleteBoard()
  const updateFavorite = useUpdateFavorite()

  return (
    <BoardsListItem
      key={board.id}
      board={board}
      rightActions={
        <BoardsFavoriteToggle
          isFavorite={updateFavorite.isOptimisticFavorite(board)}
          onToggle={() => updateFavorite.toggle(board)}
        />
      }
      menuActions={
        <DropdownMenuItem
          variant='destructive'
          disabled={deleteBoard.getIsPending(board.id)}
          onClick={() => deleteBoard.deleteBoard(board.id)}
        >
          Удалить
        </DropdownMenuItem>
      }
    />
  )
}
