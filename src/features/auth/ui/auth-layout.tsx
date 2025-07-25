import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/kit/card'

export function AuthLayout({
  form,
  title,
  description,
  footerText
}: {
  form: React.ReactNode
  title: string
  description: string
  footerText?: React.ReactNode
}) {
  return (
    <main className='grow flex flex-col items-center pt-[200px]'>
      <Card className='w-full max-w-[400px]'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{form}</CardContent>
        <CardFooter>
          <p className='text-sm text-muted-foreground ml-2.5 [&_a]:underline [&_a]:text-primary'>{footerText}</p>
        </CardFooter>
      </Card>
    </main>
  )
}
