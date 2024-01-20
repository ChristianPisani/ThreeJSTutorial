import { TaskTemplate } from '../../components/task-template.tsx'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../../components/Loader.tsx'
import { Box } from '@react-three/drei'

const Task2Canvas = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0, 2],
            }}
        >
            <Suspense fallback={<Loader />}>
                <directionalLight intensity={1} position={[10, 20, 10]} />
                <Box
                    rotation={[-Math.PI / 4, 0, Math.PI / 4]}
                    material-color={'blue'}
                >
                    <meshPhysicalMaterial color={'red'}></meshPhysicalMaterial>
                </Box>
            </Suspense>
        </Canvas>
    )
}

export const Task2 = () => {
    return (
        <TaskTemplate
            title={'Lighting'}
            description={
                <>
                    <p>
                        The box is lacking a bit of dimension, so we need to
                        light it!
                    </p>
                    <p>
                        To do this, there are two things that needs to be done:
                    </p>
                    <ul>
                        <li>Add a light to the scene</li>
                        <li>Add a material to the box</li>
                    </ul>
                    <p>
                        Add at least a directional light to the scene. The
                        directional light will be rotated towards the [0,0,0]
                        coordinate by default. You can either rotate it by
                        changing the lookAt coordinate, or by changing the
                        position of the light. The rotation parameter will not
                        change the direction of this light.
                    </p>
                </>
            }
            canvasDescription={''}
            canvasTitle={'Light the cube!'}
            tips={[
                'The meshPhongMaterial and the meshPhysicalMaterial work with lights',
            ]}
            taskCanvas={<Task2Canvas />}
        />
    )
}
