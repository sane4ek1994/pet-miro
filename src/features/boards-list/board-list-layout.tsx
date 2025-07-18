export function BoardListLayout({ header, children }: { header: React.ReactNode; children: React.ReactNode }) {
  return <div className='container mx-auto p-4'>{header}</div>
}

export function BoardListLayoutHeader({
  title,
  description,
  actions
}: {
  title: string
  description: string
  actions?: React.ReactNode
}) {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl font-bold mb-6'>{title}</h1>
      {description && <p className='text-gray-500'>{description}</p>}
      {actions}
    </div>
  )
}

export function BoardListLayoutFilters() {
  return <div className='mb-9'></div>
}
