import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/kit/form'
import { Input } from '@/shared/ui/kit/input'
import { useForm } from 'react-hook-form'
import { Button } from '@/shared/ui/kit/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from '@/features/auth/modal/use-login'

const loginSchema = z.object({
  email: z.email({ error: 'Email некорректен' }),
  password: z.string({ error: 'Обязательное поле' }).min(6, 'Минимум 6 символов')
})

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema)
  })

  const { login, isPending, errorMessage } = useLogin()

  const onSubmit = form.handleSubmit(login)

  return (
    <Form {...form}>
      <form className='flex flex-col gap-4' onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='email@gmail.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input type='password' placeholder='*******' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {errorMessage && <p className='text-destructive text-sm'>{errorMessage}</p>}
        <Button disabled={isPending} type='submit'>
          Войти
        </Button>
      </form>
    </Form>
  )
}
