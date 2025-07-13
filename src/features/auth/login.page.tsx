import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/kit/card.tsx'
import { href, Link } from 'react-router'
import { ROUTES } from '@/shared/model/routes.ts'

function LoginPage() {
  return (
    <main className='grow flex flex-col items-center pt-[200px]  container mx-auto'>
      <Card className='w-full max-w-[400px]'>
        <CardHeader>
          <CardTitle>Вход в систему</CardTitle>
          <CardDescription>Введите логин и пароль</CardDescription>
        </CardHeader>
        <CardContent>
          <form></form>
        </CardContent>
        <CardFooter>
          Нет аккаунта?
          <p className='text-sm text-muted-foreground ml-2.5'>
            <Link className='underline text-primary' to={href(ROUTES.REGISTER)}>
              Зарегистрируйтесь
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}

export const Component = LoginPage
