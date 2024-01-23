import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'

const BoxModel = () => {
    // Make the box rotate

    return (
        <group rotation={[-Math.PI / 4, 0, Math.PI / 4]}>
            <mesh position={[0, 0, 0]}>
                <boxGeometry />
                <meshPhysicalMaterial color={'red'}></meshPhysicalMaterial>
            </mesh>
        </group>
    )
}

export const TaskAnimationTransforms = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0, 2],
            }}
        >
            <Suspense fallback={<Loader />}>
                <directionalLight intensity={1} position={[10, 20, 10]} />
                <BoxModel />
            </Suspense>
        </Canvas>
    )
}
