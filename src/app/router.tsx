import { createBrowserRouter, redirect } from 'react-router'
import { App } from './app'
import { Providers } from './providers'
import { protectedLoader, ProtectedRoute } from './protected-route'
import { AppHeader } from '@/features/header'
import { ROUTES } from '@/shared/model/routes'

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        loader: protectedLoader,
        element: (
          <>
            <AppHeader />
            <ProtectedRoute />
          </>
        ),
        children: [
          {
            path: ROUTES.BOARDS,
            lazy: () => import('../../../pet-miro/src/features/boards-list/boards-list.page')
          },
          {
            path: ROUTES.FAVORITE_BOARDS,
            lazy: () => import('../../../pet-miro/src/features/boards-list/boards-list-favorite.page')
          },
          {
            path: ROUTES.RECENT_BOARDS,
            lazy: () => import('../../../pet-miro/src/features/boards-list/boards-list-recent.page')
          },
          {
            path: ROUTES.BOARD,
            lazy: () => import('@/features/board/board.page')
          }
        ]
      },

      {
        path: ROUTES.LOGIN,
        lazy: () => import('@/features/auth/login.page')
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import('@/features/auth/register.page')
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.BOARDS)
      }
    ]
  }
])
