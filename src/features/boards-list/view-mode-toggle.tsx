import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/kit/tabs'

export function ViewModeToggle() {
  return (
    <Tabs defaultValue='all' className='mb-6'>
      <TabsList>
        <TabsTrigger value='all'>Все доски</TabsTrigger>
        <TabsTrigger value='favorites'>Избранные</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
