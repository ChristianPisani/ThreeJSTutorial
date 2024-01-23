import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import { Box } from '@react-three/drei'

export const TaskBasicLighting = () => {
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
