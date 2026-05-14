import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import '../assets/font-inter/inter.css'
import { rootRoute } from './pages/__root.tsx'
import { IndexRoute } from './pages/index.tsx'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { AboutRoute } from './pages/about.tsx'
import { IllustrationRoute } from './pages/illustration.tsx'
import { LifeDrawingRoute } from './pages/life-drawing.tsx'
import { ProjectsIndexRoute, ProjectsRoute } from './pages/projects/projects.tsx'
import { SecondProjectRoute } from './pages/projects/second-project.tsx'
import { ThirdProjectRoute } from './pages/projects/third-project.tsx'

const routeTree = rootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  IllustrationRoute,
  LifeDrawingRoute,
  ProjectsRoute.addChildren([
    ProjectsIndexRoute,
    SecondProjectRoute,
    ThirdProjectRoute,
  ])
])

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
