import { AuthLayout } from '@/features/auth/ui/auth-layout'
import { href, Link } from 'react-router'
import { ROUTES } from '@/shared/model/routes'
import { RegisterForm } from '@/features/auth/ui/register.form'

function RegisterPage() {
  return (
    <AuthLayout
      form={<RegisterForm />}
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
