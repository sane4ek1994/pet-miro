import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from '@/app/router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
