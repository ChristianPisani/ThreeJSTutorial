import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import { OrbitControls, useGLTF } from '@react-three/drei'

const LogoModel = () => {
    const logo = useGLTF('/AT-Logo.gltf')

    // Sample the logo mesh and render the points sampled
    // You can remove the primitive object, but it can also work as a visual reference

    return (
        <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <primitive
                rotation={[-Math.PI / 2, 0, 0]}
                object={logo.scene}
            ></primitive>
        </group>
    )
}

export const TaskPointCloud = () => {
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
