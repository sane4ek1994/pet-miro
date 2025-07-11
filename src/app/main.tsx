// import { createRoot } from 'react-dom/client'
// import { StrictMode } from 'react'
// import './index.css'
// import { RouterProvider } from 'react-router'
// import { router } from '@/app/router.tsx'
//
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router'

async function enableMocking() {
  if (import.meta.env.PROD) {
    return
  }

  const { worker } = await import('@/shared/api/mocks/browser')
  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
})
