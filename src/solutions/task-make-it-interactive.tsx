import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import { Group, Mesh, MeshPhysicalMaterial, Vector3 } from 'three'
import { Environment, OrbitControls } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { useGLTFWithShadows } from '../hooks/useGLTFWithShadows.tsx'

const CardModel = () => {
    const ref = useRef<Group>(null!)
    const buyButtonMaterialRef = useRef<MeshPhysicalMaterial>(null!)
    const buyButtonRef = useRef<Mesh>(null!)
    const buyTextRef = useRef<Mesh>(null!)
    const buttonHovered = useRef<boolean>(false)

    const { scene } = useGLTFWithShadows('/Card.gltf')

    const body = scene.children.find((c) => c.name === 'Body')! as Group
    const button = scene.children.find((c) => c.name === 'Button')! as Mesh
    const buyText = scene.children.find((c) => c.name === 'Buy')! as Mesh
    const description = scene.children.find(
        (c) => c.name === 'Description'
    ) as Mesh
    const title = scene.children.find((c) => c.name === 'Title') as Mesh
    const cardTop = body.children[0] as Mesh
    const cardBottom = body.children[1] as Mesh

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()

        ref.current.rotation.z = Math.sin(elapsedTime) / 4 + Math.PI / 16

        if (buttonHovered.current) {
            const current = new Vector3(
                buyButtonMaterialRef.current.emissiveIntensity,
                buyButtonRef.current.position.y,
                buyTextRef.current.position.y
            )
            const target = new Vector3(1.2, 0.2, 0.2)

            const lerped = current.lerp(target, 0.05)

            buyButtonMaterialRef.current.emissiveIntensity = lerped.x
            buyButtonRef.current.position.y = lerped.y
            buyTextRef.current.position.y = lerped.z
        } else {
            const current = new Vector3(
                buyButtonMaterialRef.current.emissiveIntensity,
                buyButtonRef.current.position.y,
                buyTextRef.current.position.y
            )
            const target = new Vector3(0, 0, 0)

            const lerped = current.lerp(target, 0.1)

            buyButtonMaterialRef.current.emissiveIntensity = lerped.x
            buyButtonRef.current.position.y = lerped.y
            buyTextRef.current.position.y = lerped.z
        }
    })

    return (
        <>
            <group
                ref={ref}
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <mesh geometry={cardTop.geometry} castShadow receiveShadow>
                    {/* Image texture, don't change this */}
                    <meshPhysicalMaterial
                        {...((body.children[0] as Mesh)
                            .material as MeshPhysicalMaterial)}
                    />
                </mesh>

                <mesh geometry={cardBottom.geometry} castShadow receiveShadow>
                    <meshPhysicalMaterial
                        color={'#6f429a'}
                        metalness={0.6}
                        roughness={0.2}
                    />
                </mesh>

                <mesh geometry={description.geometry} castShadow receiveShadow>
                    <meshPhysicalMaterial
                        color={'white'}
                        metalness={0.4}
                        roughness={0.2}
                    />
                </mesh>
                <mesh
                    ref={buyButtonRef}
                    geometry={button.geometry}
                    castShadow
                    receiveShadow
                    onPointerOver={() => {
                        buttonHovered.current = true
                    }}
                    onPointerOut={() => {
                        buttonHovered.current = false
                    }}
                    onPointerDown={() => {
                        buyButtonRef.current.position.y = 0
                        buyTextRef.current.position.y = 0
                    }}
                >
                    <meshPhysicalMaterial
                        ref={buyButtonMaterialRef}
                        color={'hotpink'}
                        metalness={0.75}
                        roughness={0.1}
                        emissive={'hotpink'}
                    />
                    <mesh
                        ref={buyTextRef}
                        geometry={buyText.geometry}
                        castShadow
                        receiveShadow
                    >
                        <meshPhysicalMaterial
                            color={'gold'}
                            emissive={'gold'}
                            emissiveIntensity={10}
                        />
                    </mesh>
                </mesh>
                <mesh geometry={title.geometry} castShadow receiveShadow>
                    <meshPhysicalMaterial
                        color={'white'}
                        metalness={0.6}
                        roughness={0.2}
                    />
                </mesh>
            </group>
            <EffectComposer>
                <Bloom intensity={0.1} />
                <Vignette darkness={0.5}></Vignette>
            </EffectComposer>
        </>
    )
}

const shadowCameraBounds = 0.5

export const TaskMakeItInteractive = () => {
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
                    shadow-bias={-0.0005}
                    shadow-mapSize-height={2048}
                    shadow-mapSize-width={2048}
                    shadow-camera-left={-shadowCameraBounds}
                    shadow-camera-right={shadowCameraBounds}
                    shadow-camera-bottom={shadowCameraBounds}
                    shadow-camera-top={-shadowCameraBounds}
                />

                <CardModel />
                <Environment
                    background={false} // can be true, false or "only" (which only sets the background) (default: false)
                    blur={0.5} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
                    preset={'sunset'}
                />
            </Suspense>
        </Canvas>
    )
}
