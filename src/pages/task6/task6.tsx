import { TaskTemplate } from '../../components/task-template.tsx'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from '../../components/Loader.tsx'
import {
    Color,
    Group,
    Material,
    Mesh,
    MeshPhysicalMaterial,
    Vector2,
    Vector3,
} from 'three'
import { Environment, OrbitControls, Sky, useGLTF } from '@react-three/drei'
import {
    Bloom,
    EffectComposer,
    GodRays,
    Vignette,
} from '@react-three/postprocessing'
import { BlendFunction, KernelSize, Resolution } from 'postprocessing'

const LogoModel = () => {
    const ref = useRef<Group>(null!)
    const buyButtonMaterialRef = useRef<MeshPhysicalMaterial>(null!)
    const buyButtonRef = useRef<Mesh>(null!)
    const buyTextRef = useRef<Mesh>(null!)
    const buttonHovered = useRef<boolean>(false)

    const { scene } = useGLTF('/Card.gltf')

    const body = scene.children.find((c) => c.name === 'Body')
    const button = scene.children.find((c) => c.name === 'Button')
    const buyText = scene.children.find((c) => c.name === 'Buy')
    const image = scene.children.find((c) => c.name === 'CardImage')
    const description = scene.children.find((c) => c.name === 'Description')
    const arrow = scene.children.find((c) => c.name === 'Arrrowq')
    const price = scene.children.find((c) => c.name === 'Price')
    const title = scene.children.find((c) => c.name === 'Title')
    const difficulty = scene.children.find((c) => c.name === 'Difficulty')
    const priceBody = scene.children.find((c) => c.name === 'PriceBody')

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

    console.log({ scene, body, description, arrow, price, title, difficulty })

    return (
        <>
            <group
                ref={ref}
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <mesh
                    geometry={body.children[0].geometry}
                    castShadow
                    receiveShadow
                >
                    {/* Image texture, don't change this */}
                    <meshPhysicalMaterial {...body.children[0].material} />
                </mesh>

                {/* Card body */}
                <mesh
                    geometry={body.children[1].geometry}
                    castShadow
                    receiveShadow
                >
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
                        geometry={buyText?.geometry}
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

const Task6Canvas = () => {
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

                <LogoModel />
                <Environment
                    background={false} // can be true, false or "only" (which only sets the background) (default: false)
                    blur={0.5} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
                    preset={'sunset'}
                />
            </Suspense>
        </Canvas>
    )
}

export const Task6 = () => {
    return (
        <TaskTemplate
            title={'Make it interactive!'}
            description={
                <>
                    <p>Now we need to make it interactive.</p>
                    <p>
                        Try to make the logo change color and size when hovered.
                    </p>
                    <p>
                        You're going to need to dig a bit in the gltf object for
                        this one
                    </p>
                </>
            }
            canvasDescription={''}
            canvasTitle={'Do something to me!'}
            tips={[
                'Look into the scene object in the gltf',
                'You can store a reference to a material',
                'Take a look at pointer events in three fiber',
                'Store the original color of the object material',
            ]}
            taskCanvas={<Task6Canvas />}
        />
    )
}
