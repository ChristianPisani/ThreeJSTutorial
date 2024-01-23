import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'

const Model = () => {
    // add box with material, and a light here
    return null
}

export const TaskBasicLighting = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0, 2],
            }}
        >
            <Suspense fallback={<Loader />}>
                <Model />
            </Suspense>
        </Canvas>
    )
}
