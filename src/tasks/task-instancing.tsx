import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import { Group, Mesh, Vector3 } from 'three'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js'

const LogoModel = () => {
    const ref = useRef<Group>(null!)
    const logo = useGLTF('/AT-Logo.gltf')

    const sampler = new MeshSurfaceSampler(
        logo.scene.children[0] as Mesh
    ).build()

    const positions: Vector3[] = []

    // Make this less slow!
    // It should be able to run with MUCH more than 10 000 particles
    const numberOfParticles = 10000

    const position = new Vector3(0, 0, 0)
    for (let i = 0; i < numberOfParticles; i++) {
        sampler.sample(position)
        positions.push(new Vector3(position.x, position.y, position.z))
    }

    return (
        <group ref={ref} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            {positions.map((position) => (
                <group scale={[0.01, 0.01, 0.01]} position={position}>
                    <mesh>
                        <boxGeometry />
                        <meshPhysicalMaterial />
                    </mesh>
                </group>
            ))}
        </group>
    )
}

export const TaskInstancingCanvas = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0, 3],
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
