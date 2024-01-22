import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import { Group } from 'three'

const BoxModel = () => {
    const boxRef = useRef<Group>(null!)
    const moonRef = useRef<Group>(null!)

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()

        boxRef.current.rotation.y = elapsedTime
        moonRef.current.rotation.z = elapsedTime * 1.25
        boxRef.current.rotation.z = elapsedTime / 2
    })

    return (
        <group ref={boxRef} rotation={[-Math.PI / 4, 0, Math.PI / 4]}>
            <mesh position={[0, 0, 1]} scale={[0.25, 0.25, 0.25]}>
                <boxGeometry />
                <group ref={moonRef}>
                    <mesh position={[0, 2, 0]} scale={[0.5, 0.5, 0.5]}>
                        <boxGeometry></boxGeometry>
                        <meshPhysicalMaterial
                            color={'grey'}
                        ></meshPhysicalMaterial>
                    </mesh>
                </group>
                <meshPhysicalMaterial color={'red'}></meshPhysicalMaterial>
            </mesh>
        </group>
    )
}

export const Task3Canvas = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0, 2],
            }}
        >
            <Suspense fallback={<Loader />}>
                <directionalLight intensity={1} position={[10, 20, 10]} />
                <mesh scale={[0.5, 0.5, 0.5]}>
                    <circleGeometry />
                    <meshPhysicalMaterial color={'rgb(251,191,32)'} />{' '}
                </mesh>
                <BoxModel />
            </Suspense>
        </Canvas>
    )
}
