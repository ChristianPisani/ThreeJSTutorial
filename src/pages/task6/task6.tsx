import { TaskTemplate } from '../../components/task-template.tsx'
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../../components/Loader.tsx'
import { Color, Group, MeshPhysicalMaterial } from 'three'
import { OrbitControls, Sky, useGLTF } from '@react-three/drei'

const LogoModel = () => {
    const ref = useRef<Group>(null!)
    const { scene } = useGLTF('/Card.gltf')

    const body = scene.children.find((c) => c.name === 'Body')
    const description = scene.children.find((c) => c.name === 'Description')
    const arrow = scene.children.find((c) => c.name === 'Arrrowq')
    const price = scene.children.find((c) => c.name === 'Price')
    const title = scene.children.find((c) => c.name === 'Title')
    const difficulty = scene.children.find((c) => c.name === 'Difficulty')
    const priceBody = scene.children.find((c) => c.name === 'PriceBody')

    console.log({ scene, body, description, arrow, price, title, difficulty })

    return (
        <group ref={ref} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            {body.children.map((child) => (
                <mesh geometry={child.geometry} castShadow receiveShadow>
                    <meshPhysicalMaterial {...child.material} />
                </mesh>
            ))}
            <mesh geometry={description.geometry} castShadow receiveShadow>
                <meshPhysicalMaterial />
            </mesh>
            <mesh geometry={priceBody.geometry} castShadow receiveShadow>
                <meshPhysicalMaterial {...priceBody.material} />
            </mesh>
            <mesh geometry={arrow.geometry} castShadow receiveShadow>
                <meshPhysicalMaterial />
            </mesh>
            <mesh geometry={price.geometry} castShadow receiveShadow>
                <meshPhysicalMaterial />
            </mesh>
            <mesh geometry={title.geometry} castShadow receiveShadow>
                <meshPhysicalMaterial color={'black'} />
            </mesh>
            <mesh geometry={difficulty.geometry} castShadow receiveShadow>
                <meshPhysicalMaterial />
            </mesh>
        </group>
    )
}

const shadowCameraBounds = 100

const Task6Canvas = () => {
    return (
        <Canvas
            shadows={'soft'}
            camera={{
                position: [0, 0, 3],
            }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls />
                <ambientLight intensity={1} />
                <directionalLight
                    intensity={1}
                    position={[0, 5, 10]}
                    castShadow
                    shadow-bias={-0.00005}
                    shadow-mapSize-height={1024}
                    shadow-mapSize-width={1024}
                />
                <LogoModel />
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
