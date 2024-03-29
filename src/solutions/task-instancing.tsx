import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from '../components/Loader.tsx'
import {
    BoxGeometry,
    Color,
    Group,
    InstancedMesh,
    Mesh,
    MeshPhysicalMaterial,
    Object3D,
    Vector3,
} from 'three'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js'

const LogoModel = () => {
    const ref = useRef<Group>(null!)
    const instanceRef = useRef<InstancedMesh>(null!)

    const numberOfParticles = 20000

    const logo = useGLTF('/AT-Logo.gltf')

    const sampler = new MeshSurfaceSampler(
        logo.scene.children[0] as Mesh
    ).build()
    const position = new THREE.Vector3()

    const geometry = new BoxGeometry()
    geometry.scale(0.02, 0.02, 0.02)
    const material = new MeshPhysicalMaterial()
    material.roughness = 0.2
    material.color = new Color('blue')
    material.metalness = 0
    material.emissive = new Color('lightblue')
    const tempObject = new Object3D()

    const particles: { start: Vector3; current: Vector3; end: Vector3 }[] = []
    for (let i = 0; i < numberOfParticles; i++) {
        sampler.sample(position)

        const distance = 100

        const generatePointAtDistance = () =>
            Math.random() * distance - distance / 2

        const start = new Vector3(
            generatePointAtDistance(),
            generatePointAtDistance(),
            generatePointAtDistance()
        )
        const end = new Vector3(position.x, position.y, position.z)

        particles.push({ start, current: start, end })
    }

    useFrame(() => {
        particles.forEach((particle, index) => {
            const end = new Vector3(
                particle.end.x,
                particle.end.y,
                particle.end.z
            )

            particle.current = particle.current.lerp(end, 0.04)

            tempObject.position.set(
                particle.current.x,
                particle.current.y,
                particle.current.z
            )
            tempObject.updateMatrix()
            instanceRef.current?.setMatrixAt(index, tempObject.matrix)
            instanceRef.current.instanceMatrix.needsUpdate = true
        })
    })

    return (
        <>
            <group
                ref={ref}
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <instancedMesh
                    ref={instanceRef}
                    args={[geometry, material, numberOfParticles]}
                ></instancedMesh>
            </group>
        </>
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
