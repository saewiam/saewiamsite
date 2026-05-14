import { createRoute } from '@tanstack/react-router'
import { ArtDisplay } from '../../components/art-display/ArtDisplay';
import { imageIndex } from '../../components/art-display/import_images';
import { ProjectsRoute } from './projects';

function ThirdProjectPage() {
    return (    
        <>
            <h2>spirit world</h2>
            <ArtDisplay
                images={imageIndex.thirdProject}
                columns={1}
                captionsVisible={false}
                compressLongImages={true} />
        </>
    )
}

export const ThirdProjectRoute = createRoute({
  getParentRoute: () => ProjectsRoute,
  path: '/spirit-world',
  component: ThirdProjectPage, 
});
