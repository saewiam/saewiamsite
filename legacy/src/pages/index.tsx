import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

import '../components/art-display/import_images'

function IndexPage() {
  return (
    <>
    </>
  )
}

// Route of the index page
export const IndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage, 
});
