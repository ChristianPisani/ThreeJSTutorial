import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import { Box, PerspectiveCamera } from '@react-three/drei'

export const BasicRender = () => {
    return (
        <Canvas>
            <Suspense fallback={<Loader />}>
                <directionalLight intensity={1} position={[20, 10, 20]} />
                <PerspectiveCamera makeDefault position={[0, 0, 2]} />
                <Box rotation={[Math.PI / 4, Math.PI / 2, 0]}>
                    <meshPhongMaterial />
                </Box>
            </Suspense>
        </Canvas>
    )
}
