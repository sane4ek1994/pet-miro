import { AuthLayout } from '@/features/auth/ui/auth-layout'
import { href, Link } from 'react-router'
import { ROUTES } from '@/shared/model/routes'
import { LoginForm } from '@/features/auth/ui/login-form'

function LoginPage() {
  return (
    <AuthLayout
      form={<LoginForm />}
      title='Вход в систему'
      description='Введите ваш email и пароль'
      footerText={
        <>
          Нет аккаунта? <Link to={href(ROUTES.REGISTER)}>Зарегистрируйтесь</Link>
        </>
      }
    />
  )
}

export const Component = LoginPage
