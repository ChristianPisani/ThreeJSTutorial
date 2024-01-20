import { TaskTemplate } from '../../components/task-template.tsx'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from '../../components/Loader.tsx'
import { Group } from 'three'
import { OrbitControls, useGLTF } from '@react-three/drei'

const LogoModel = () => {
    const ref = useRef<Group>(null!)
    const logo = useGLTF('AT-Logo.gltf')

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()

        ref.current.rotation.y = Math.sin(elapsedTime) / 2
    })

    return (
        <group ref={ref}>
            <primitive object={logo.scene}></primitive>
        </group>
    )
}

const Task4Canvas = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0, 4],
            }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls />
                <ambientLight intensity={4} />
                <directionalLight intensity={1} position={[0, 0, 10]} />
                <LogoModel />
            </Suspense>
        </Canvas>
    )
}

export const Task4 = () => {
    return (
        <TaskTemplate
            title={'Add a model!'}
            description={
                <>
                    <p>
                        The box was fun, but it might get a bit boring with only
                        that. We need something else. Let's import a 3D model
                        into our scene.
                    </p>
                    <p>
                        You can either try to create your own model in Blender
                        and import it, or use the model "
                        <span className={'text-pink-400'}>
                            /public/AT-Logo.gltf
                        </span>
                        "
                    </p>
                    <p>Try to incorporate some movement into this as well.</p>
                </>
            }
            canvasDescription={''}
            canvasTitle={'Add a model!'}
            tips={[
                'Use the useGLTF hook to load the model',
                <p>
                    Use <span className={'text-pink-400'}>{'<primitive>'}</span>{' '}
                    to use your model in the scene
                </p>,
                <p>
                    If you want to look around your scene, add{' '}
                    <span className={'text-pink-400'}>{'<OrbitControls>'}</span>{' '}
                    into your canvas
                </p>,
            ]}
            taskCanvas={<Task4Canvas />}
        />
    )
}
