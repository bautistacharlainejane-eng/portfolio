import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './page/Homepage.tsx'
import Projects from './page/Projects.tsx'

const router = createBrowserRouter([
{path:"/",element:<Homepage/>},
{path:"/projects",element:<Projects/>},


]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
