import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import { Color, Group, MeshPhysicalMaterial } from 'three'
import { OrbitControls, useGLTF } from '@react-three/drei'

const LogoModel = () => {
    const ref = useRef<Group>(null!)
    const logo = useGLTF('/AT-Logo.gltf')

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

export const Task5Canvas = () => {
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
