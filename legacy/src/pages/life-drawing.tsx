import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import { ArtDisplay } from '../components/art-display/ArtDisplay';
import { imageIndex } from '../components/art-display/import_images';

function LifeDrawingPage() {
  return (
    <>
        <h2>figure drawing</h2>
        <ArtDisplay images = {imageIndex["life-drawing"]} columns={2} captionsVisible={false}/>
    </>
  )
}

export const LifeDrawingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/life-drawing',
  component: LifeDrawingPage, 
});