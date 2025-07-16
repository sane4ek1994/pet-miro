import { useNavigate } from 'react-router'
import type { ApiSchemas } from '@/shared/api/schema'
import { useSession } from '@/shared/model/session'
import { ROUTES } from '@/shared/model/routes'
import { publicRqClient } from '@/shared/api/instance'

export function useLogin() {
  const session = useSession()
  const navigate = useNavigate()
  const loginMutation = publicRqClient.useMutation('post', '/auth/login', {
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
