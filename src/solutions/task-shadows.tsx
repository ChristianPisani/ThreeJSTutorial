import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import { Group, Mesh } from 'three'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'

const CardModel = () => {
    const { scene } = useGLTF('/Card.gltf')

    const body = scene.children.find((c) => c.name === 'Body')! as Group
    const button = scene.children.find((c) => c.name === 'Button')! as Mesh
    const buyText = scene.children.find((c) => c.name === 'Buy')! as Mesh
    const description = scene.children.find(
        (c) => c.name === 'Description'
    ) as Mesh
    const cardTop = body.children[0] as Mesh
    const cardBottom = body.children[1] as Mesh
    const title = scene.children.find((c) => c.name === 'Title') as Mesh

    return (
        <>
            <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh geometry={cardTop.geometry} castShadow receiveShadow>
                    <meshPhysicalMaterial color={'grey'} />
                </mesh>

                <mesh geometry={cardBottom.geometry} castShadow receiveShadow>
                    <meshPhysicalMaterial color={'grey'} />
                </mesh>

                <mesh geometry={description.geometry} castShadow receiveShadow>
                    <meshPhysicalMaterial color={'grey'} />
                </mesh>
                <mesh geometry={button.geometry} castShadow receiveShadow>
                    <mesh geometry={buyText.geometry}>
                        <meshPhysicalMaterial color={'grey'} />
                    </mesh>
                    <meshPhysicalMaterial color={'grey'} />
                </mesh>
                <mesh geometry={title.geometry} castShadow receiveShadow>
                    <meshPhysicalMaterial color={'grey'} />
                </mesh>

                {/* This is just here as a reference for an object with materials, so you can see how the light affects it as well */}
                <primitive position={[5, 0, 0]} object={scene}></primitive>
            </group>
        </>
    )
}

const shadowCameraBounds = 0.1

export const TaskShadows = () => {
    return (
        <Canvas
            shadows={'soft'}
            camera={{
                position: [-1, 0, 4.5],
            }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls />
                <spotLight
                    intensity={500}
                    position={[2, 5, 2]}
                    castShadow
                    shadow-mapSize-height={2048}
                    shadow-mapSize-width={2048}
                    shadow-camera-left={-shadowCameraBounds}
                    shadow-camera-right={shadowCameraBounds}
                    shadow-camera-bottom={shadowCameraBounds}
                    shadow-camera-top={-shadowCameraBounds}
                />
                <CardModel />
                <Environment
                    background={true} // can be true, false or "only" (which only sets the background) (default: false)
                    blur={0.5} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
                    preset={'sunset'}
                />
            </Suspense>
        </Canvas>
    )
}
