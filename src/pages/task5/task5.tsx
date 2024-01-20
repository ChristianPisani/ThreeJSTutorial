import { TaskTemplate } from '../../components/task-template.tsx'
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../../components/Loader.tsx'
import { Color, Group, MeshPhysicalMaterial } from 'three'
import { OrbitControls, useGLTF } from '@react-three/drei'

const LogoModel = () => {
    const ref = useRef<Group>(null!)
    const logo = useGLTF('AT-Logo.gltf')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const material = logo.scene.children[0].material
    const originalColor = material.color
    const materialRef = useRef<MeshPhysicalMaterial>(material)

    console.log(logo)

    return (
        <group
            ref={ref}
            position={[0, 0, 0]}
            onPointerOver={() => {
                const newScale = 1.1
                ref.current.scale.set(newScale, newScale, newScale)
                materialRef.current.color = new Color('red')
            }}
            onPointerOut={() => {
                ref.current.scale.set(1, 1, 1)
                materialRef.current.color = new Color(originalColor)
            }}
        >
            <primitive object={logo.scene}></primitive>
        </group>
    )
}

const Task5Canvas = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0, 3],
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

export const Task5 = () => {
    return (
        <TaskTemplate
            title={'Make it interactive!'}
            description={
                <>
                    <p>Now we need to make it interactive.</p>
                    <p>
                        Try to make the logo change color and size when hovered.
                    </p>
                    <p>
                        You're going to need to dig a bit in the gltf object for
                        this one
                    </p>
                </>
            }
            canvasDescription={''}
            canvasTitle={'Do something to me!'}
            tips={[
                'Look into the scene object in the gltf',
                'You can store a reference to a material',
                'Take a look at pointer events in three fiber',
                'Store the original color of the object material',
            ]}
            taskCanvas={<Task5Canvas />}
        />
    )
}
