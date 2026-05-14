import { ArtDisplay } from '../components/art-display/ArtDisplay';
import { rootRoute } from './__root'
import { createRoute } from '@tanstack/react-router'

import { imageIndex } from '../components/art-display/import_images';

function IllustrationPage() {

    return (
        <>
            <h2>grid of illustrations will be here</h2>

            <ArtDisplay 
                images={imageIndex.illustrations} 
                columns={2} 
                captionsVisible={false} />
        </>
    )
}

export const IllustrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/illustration',
  component: IllustrationPage, 
});
