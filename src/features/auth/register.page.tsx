import { AuthLayout } from '@/features/auth/auth-layout.tsx'
import { href, Link } from 'react-router'
import { ROUTES } from '@/shared/model/routes.ts'

function RegisterPage() {
  return (
    <AuthLayout
      form={<form></form>}
      title='Регистрация'
      description='Введите ваш email и пароль для регистрации в системе'
      footerText={
        <>
          Уже есть аккаунт? <Link to={href(ROUTES.LOGIN)}>Войти</Link>
        </>
      }
    />
  )
}

export const Component = RegisterPage
