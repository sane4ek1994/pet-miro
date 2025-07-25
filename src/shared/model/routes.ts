import 'react-router'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  BOARDS: '/boards',
  BOARD: '/boards/:boardId',
  FAVORITE_BOARDS: '/boards/favorite',
  RECENT_BOARDS: '/boards/recent'
} as const

export type PathParams = {
  [ROUTES.BOARD]: {
    boardId: string
  }
}

declare module 'react-router' {
  interface Register {
    params: PathParams
  }
}
