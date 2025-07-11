import { rqClient } from '@/shared/api/instance.ts'

function LoginPage() {
  const loginMutation = rqClient.useMutation('post', '/auth/login')

  loginMutation.mutate({ body: {} })

  return <div>LoginPage</div>
}

export const Component = LoginPage
