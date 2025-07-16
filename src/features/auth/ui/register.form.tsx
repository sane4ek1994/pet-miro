import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/kit/form'
import { Input } from '@/shared/ui/kit/input'
import { useForm } from 'react-hook-form'
import { Button } from '@/shared/ui/kit/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegister } from '@/features/auth/modal/use-register'

const registerSchema = z
  .object({
    email: z.email({ error: 'Email некорректен' }),
    password: z.string({ error: 'Обязательное поле' }).min(6, 'Минимум 6 символов'),
    confirmPassword: z.string().optional()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword']
  })

export function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerSchema)
  })

  const { register, errorMessage, isPending } = useRegister()

  const onSubmit = form.handleSubmit(register)

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
        />{' '}
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Подтверждение пароля</FormLabel>
              <FormControl>
                <Input placeholder='*******' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {errorMessage && <p className='text-destructive text-sm'>{errorMessage}</p>}
        <Button disabled={isPending} type='submit'>
          Зарегистрироваться
        </Button>
      </form>
    </Form>
  )
}
