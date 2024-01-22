import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
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

export const Task4Canvas = () => {
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
