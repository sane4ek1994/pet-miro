import { rqClient } from '@/shared/api/instance.ts'
import { ROUTES } from '@/shared/model/routes.ts'
import { useNavigate } from 'react-router'
import type { ApiSchemas } from '@/shared/api/schema'
import { useSession } from '@/shared/model/session'

export function useLogin() {
  const session = useSession()
  const navigate = useNavigate()
  const loginMutation = rqClient.useMutation('post', '/auth/login', {
    onSuccess(data) {
      session.login(data.accessToken)
      navigate(ROUTES.HOME)
    }
  })

  const login = (data: ApiSchemas['LoginRequest']) => {
    loginMutation.mutate({ body: data })
  }

  const errorMessage = loginMutation.isError ? loginMutation.error?.message : undefined

  return { login, isPending: loginMutation.isPending, errorMessage }
}
