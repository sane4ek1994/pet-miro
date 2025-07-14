import { ROUTES } from '@/shared/model/routes'
import { createBrowserRouter, redirect } from 'react-router'
import { Providers } from '@/app/providers'
import { App } from '@/app/app'
import { ProtectedRoute } from '@/app/protected-route'
import { AppHeader } from '@/features/header'

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        element: (
          <>
            <AppHeader />
            <ProtectedRoute />
          </>
        ),
        children: [
          {
            path: ROUTES.BOARDS,
            lazy: () => import('@/features/boards-list/boards-list.page')
          },
          {
            path: ROUTES.BOARD,
            lazy: () => import('@/features/board/board.page')
          }
        ]
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.BOARDS)
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import('@/features/auth/login.page')
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import('@/features/auth/register.page')
      }
    ]
  }
])
