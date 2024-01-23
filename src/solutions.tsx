import { TaskAddModel } from './solutions/task-add-model.tsx'
import { TaskAnimationTransforms } from './solutions/task-animation-transforms.tsx'
import { TaskBasicLighting } from './solutions/task-basic-lighting.tsx'
import { BasicRender } from './solutions/task-basic-render.tsx'
import { TaskCreateMaterials } from './solutions/task-create-materials.tsx'
import { TaskInstancingCanvas } from './solutions/task-instancing.tsx'
import { TaskMakeItInteractive } from './solutions/task-make-it-interactive.tsx'
import { TaskPointCloud } from './solutions/task-point-cloud.tsx'
import { TaskPostProcessing } from './solutions/task-post-processing.tsx'
import { TaskShadows } from './solutions/task-shadows.tsx'

export const solutions = [
    { element: <BasicRender />, title: 'Basic render' },
    { element: <TaskBasicLighting />, title: 'Basic lighting' },
    { element: <TaskAnimationTransforms />, title: 'Animation transforms' },
    { element: <TaskAddModel />, title: 'Add model' },
    { element: <TaskPointCloud />, title: 'Point cloud' },
    { element: <TaskInstancingCanvas />, title: 'Instancing' },
    { element: <TaskPostProcessing />, title: 'Post processing' },
    { element: <TaskShadows />, title: 'Adding shadows' },
    { element: <TaskCreateMaterials />, title: 'Creating materials' },
    {
        element: <TaskMakeItInteractive />,
        title: 'Make it interactive (example)',
    },
]
