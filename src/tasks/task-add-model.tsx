import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import { OrbitControls } from '@react-three/drei'

const LogoModel = () => {
    // ADD MODEL HERE
    return null
}

export const TaskAddModel = () => {
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
