import { ROUTES } from '../shared/model/routes'
import { createBrowserRouter, redirect } from 'react-router'
import { App } from '@/app/app.tsx'
import { Providers } from '@/app/providers'

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        path: ROUTES.BOARDS,
        lazy: () => import('@/features/boards-list/boards-list.page')
      },
      {
        path: ROUTES.BOARD,
        lazy: () => import('@/features/board/board.page')
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import('@/features/auth/ui/login.page.tsx')
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import('@/features/auth/ui/register.page.tsx')
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.BOARDS)
      }
    ]
  }
])
