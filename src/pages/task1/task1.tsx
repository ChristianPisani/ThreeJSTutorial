import { TaskTemplate } from '../../components/task-template.tsx'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../../components/Loader.tsx'
import { Box, PerspectiveCamera } from '@react-three/drei'

export const Task1Canvas = () => {
    return (
        <Canvas>
            <Suspense fallback={<Loader />}>
                <directionalLight intensity={1} position={[20, 10, 20]} />
                <PerspectiveCamera makeDefault position={[0, 0, 2]} />
                <Box rotation={[Math.PI / 4, Math.PI / 2, 0]}>
                    <meshPhongMaterial />
                </Box>
            </Suspense>
        </Canvas>
    )
}

export const Task1 = () => {
    return (
        <TaskTemplate
            title={'Rendering a cube'}
            description={
                <>
                    <p>
                        In this task you will first setup the basic components
                        for rendering <i>anything</i> to the screen with three
                        js fiber.
                    </p>
                    <p>This means we need to add a canvas, and a camera.</p>
                    <p>
                        After that you must try to get a basic cube rendering,
                        so that you know the canvas is working.
                    </p>
                </>
            }
            canvasDescription={
                'Play around with the rotation and scale parameters to get a better feel of the shape. Rotations are in radians, so use divisions of PI (PI = 180 degrees). F.ex: To rotate 45 degrees, use Math.PI / 4.'
            }
            canvasTitle={'Render a shape here'}
            tips={[
                'A camera can either be added directly to the canvas as a prop, or added as a child in combination with the "makeDefault" prop',
                <p>
                    Drei shapes documentation{' '}
                    <a
                        className={'text-blue-600'}
                        href={
                            'https://github.com/pmndrs/drei?tab=readme-ov-file#shapes'
                        }
                        target={'_blank'}
                    >
                        (link)
                    </a>
                </p>,
                'Try different shapes, not just the Box',
            ]}
            taskCanvas={<Task1Canvas />}
        />
    )
}
