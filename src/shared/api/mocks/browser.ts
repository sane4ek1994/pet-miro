import { setupWorker } from 'msw/browser'
import { authHandlers } from '@/shared/api/mocks/handlers/auth'
import { boardsHandlers } from '@/shared/api/mocks/handlers/boards'

export const worker = setupWorker(...authHandlers, ...boardsHandlers)
