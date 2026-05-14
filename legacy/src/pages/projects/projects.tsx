import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../__root'
import { ArtDisplay } from '../../components/art-display/ArtDisplay';
import { imageIndex } from '../../components/art-display/import_images';
// import { SecondProjectRoute } from './second-project';

function ProjectsPage() {
    return (    
        <>
            <h2>prawjects</h2>
            <ArtDisplay
                images={imageIndex.projects}
                columns={1}
                captionsVisible={true}
                compressLongImages={true} />
        </>
    )
}

const ProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'projects',
});

const ProjectsIndexRoute = createRoute({
  getParentRoute: () => ProjectsRoute,
  path: '/',
  component: ProjectsPage, 
});

export { ProjectsRoute, ProjectsIndexRoute }
