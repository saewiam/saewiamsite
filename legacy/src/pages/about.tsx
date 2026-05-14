import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

function AboutPage() {
  return (
    <>
        <h2>about me</h2>
        <p>i am working on this page</p>
    </>
  )
}

// Route of the About page
export const AboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage, 
});