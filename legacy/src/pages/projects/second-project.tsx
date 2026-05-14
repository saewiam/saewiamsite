import { createRoute } from '@tanstack/react-router'
import { ArtDisplay } from '../../components/art-display/ArtDisplay';
import { imageIndex } from '../../components/art-display/import_images';
import { ProjectsRoute } from './projects';

function SecondProjectPage() {
    return (    
        <>
            <h2>character design works for sonic contrast fan game</h2>
            <ArtDisplay
                images = {imageIndex.secondProject}
                columns={1}
                captionsVisible={true}
                compressLongImages={true} />
        </>
    )
}

export const SecondProjectRoute = createRoute({
  getParentRoute: () => ProjectsRoute,
  path: '/sonic-contrast-fangame',
  component: SecondProjectPage, 
});
