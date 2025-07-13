import { AuthLayout } from '@/features/auth/auth-layout.tsx'
import { href, Link } from 'react-router'
import { ROUTES } from '@/shared/model/routes.ts'

function LoginPage() {
  return (
    <AuthLayout
      form={<form></form>}
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
