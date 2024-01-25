import {
    BasicBox,
    BasicScene,
    DreiTutorial,
    ThreeJsAndFiber,
} from './tutorial/basics-tutorial.tsx'
import { ReactNode } from 'react'
import {
    BasicLightExample,
    LightingTutorial,
    AmbientLightTutorial,
    PointLightTutorial,
    SpotLightTutorial,
    ShadowsTutorial,
    ShadowsAdvancedTutorial,
    EnvironmentMapsTutorial,
} from './tutorial/lighting-tutorial.tsx'
import { MaterialsTutorial } from './tutorial/materials-tutorial.tsx'
import { ExportingModels, LoadingModels } from './tutorial/models-tutorial.tsx'

export type TutorialPage = {
    title: string
    element?: ReactNode
    children?: TutorialPage[]
}

export const tutorialPages: TutorialPage[] = [
    {
        title: 'Basics',
        children: [
            {
                title: 'Three JS and Fiber',
                element: <ThreeJsAndFiber />,
            },
            {
                title: 'Simple scene setup',
                element: <BasicBox />,
            },
            {
                title: 'Drei',
                element: <DreiTutorial />,
            },
            {
                title: 'Basic box example',
                element: <BasicScene />,
            },
        ],
    },
    {
        title: 'Lighting',
        children: [
            {
                title: 'Basic lighting',
                element: <LightingTutorial />,
            },
            {
                title: 'Ambient light',
                element: <AmbientLightTutorial />,
            },
            {
                title: 'Spot light',
                element: <SpotLightTutorial />,
            },
            {
                title: 'Point light',
                element: <PointLightTutorial />,
            },
            {
                title: 'Shadows',
                element: <ShadowsTutorial />,
            },
            {
                title: 'Shadows advanced',
                element: <ShadowsAdvancedTutorial />,
            },
            {
                title: 'Environment maps',
                element: <EnvironmentMapsTutorial />,
            },
        ],
    },
    {
        title: 'Materials',
        children: [
            {
                title: 'Basic materials',
                element: <MaterialsTutorial />,
            },
        ],
    },
    {
        title: 'Models',
        children: [
            {
                title: 'Loading models',
                element: <LoadingModels />,
            },
            {
                title: 'Exporting from Blender',
                element: <ExportingModels />,
            },
        ],
    },
]
