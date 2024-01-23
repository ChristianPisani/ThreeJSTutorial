import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import { Group, Mesh } from 'three'
import { OrbitControls } from '@react-three/drei'
import { useGLTFWithShadows } from '../hooks/useGLTFWithShadows.tsx'
const CardModel = () => {
    const { scene } = useGLTFWithShadows('/Card.gltf')

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
        <group position={[-2, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
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
                <mesh geometry={buyText.geometry} castShadow receiveShadow>
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
    )
}

const shadowCameraBounds = 5

export const TaskCreateMaterials = () => {
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
                    position={[2, 5, 4]}
                    distance={1000}
                    castShadow
                    /* Play around with these settings to see better how the shadow map works.  */
                    shadow-mapSize-height={2048}
                    shadow-mapSize-width={2048}
                    shadow-bias={-0.00007}
                    shadow-camera-left={-shadowCameraBounds}
                    shadow-camera-right={shadowCameraBounds}
                    shadow-camera-bottom={shadowCameraBounds}
                    shadow-camera-top={-shadowCameraBounds}
                />
                <CardModel />
            </Suspense>
        </Canvas>
    )
}
