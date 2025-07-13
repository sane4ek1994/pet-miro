import { rqClient } from '@/shared/api/instance.ts'
import { ROUTES } from '@/shared/model/routes.ts'
import { useNavigate } from 'react-router'
import type { ApiSchemas } from '@/shared/api/schema'

export function useRegister() {
  const navigate = useNavigate()
  const registerMutation = rqClient.useMutation('post', '/auth/register', {
    onSuccess() {
      navigate(ROUTES.HOME)
    }
  })

  const register = (data: ApiSchemas['RegisterRequest']) => {
    registerMutation.mutate({ body: data })
  }

  const errorMessage = registerMutation.isError ? registerMutation.error?.message : undefined

  return { register, isPending: registerMutation.isPending, errorMessage }
}
