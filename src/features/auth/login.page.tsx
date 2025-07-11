import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/kit/card.tsx'
import { href, Link } from 'react-router'
import { ROUTES } from '@/shared/model/routes.ts'
import { Button } from '@/shared/ui/kit/button.tsx'

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
          <p>
            Нет аккаунта?
            <Button asChild variant='link'>
              <Link to={href(ROUTES.REGISTER)}>Зарегистрируйтесь</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}

export const Component = LoginPage
