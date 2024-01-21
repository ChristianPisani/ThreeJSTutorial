import { TaskTemplate } from '../../components/task-template.tsx'
import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from '../../components/Loader.tsx'
import {
    Color,
    Group,
    InstancedMesh,
    MeshPhysicalMaterial,
    Object3D,
    SphereGeometry,
    Vector3,
} from 'three'
import { OrbitControls, Sky, Stats, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js'
import { useBeforeUnload } from 'react-router-dom'

const LogoModelSimpleApproach = () => {
    const ref = useRef<Group>(null!)
    const logo = useGLTF('/AT-Logo.gltf')
    console.log(logo)

    const sampler = new MeshSurfaceSampler(logo.scene.children[0]).build()
    const position = new THREE.Vector3()

    const particles = []
    for (let i = 0; i < 10000; i++) {
        sampler.sample(position)

        particles.push(
            <mesh
                position={[position.x, position.y, position.z]}
                scale={[0.01, 0.01, 0.01]}
            >
                <sphereGeometry />
                <meshPhysicalMaterial color={'red'} roughness={0.1} />
            </mesh>
        )
    }

    console.log({ particles })

    return (
        <group ref={ref} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            {particles}
        </group>
    )
}

const LogoModel = () => {
    const ref = useRef<Group>(null!)
    const instanceRef = useRef<InstancedMesh>(null!)

    const numberOfParticles = 100000

    const logo = useGLTF('/AT-Logo.gltf')
    console.log(logo)

    const sampler = new MeshSurfaceSampler(logo.scene.children[0]).build()
    const position = new THREE.Vector3()

    const geometry = new SphereGeometry()
    geometry.scale(0.005, 0.005, 0.005)
    const material = new MeshPhysicalMaterial()
    material.roughness = 0.1
    material.color = new Color('blue')
    material.metalness = 1
    const tempObject = new Object3D()

    const particles = []
    for (let i = 0; i < numberOfParticles; i++) {
        sampler.sample(position)

        const distance = 20

        const generatePointAtDistance = () =>
            Math.random() * distance - distance / 2

        const start = new Vector3(
            generatePointAtDistance(),
            generatePointAtDistance(),
            generatePointAtDistance()
        )
        const end = { ...position }

        particles.push({ start, current: start, end })
    }

    useFrame(() => {
        particles.forEach((particle, index) => {
            particle.current = particle.current.lerp(particle.end, 0.05)

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
        <group ref={ref} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <instancedMesh
                ref={instanceRef}
                args={[geometry, material, numberOfParticles]}
            ></instancedMesh>
        </group>
    )
}

const Task7Canvas = () => {
    return (
        <>
            <Canvas
                camera={{
                    position: [0, 0, 3],
                }}
            >
                <Suspense fallback={<Loader />}>
                    <OrbitControls />
                    <Sky />
                    <ambientLight intensity={4} />
                    <directionalLight intensity={1} position={[0, 0, 10]} />
                    <LogoModel />
                </Suspense>
            </Canvas>
        </>
    )
}

export const Task7 = () => {
    return (
        <TaskTemplate
            title={'Better performance with instances!'}
            description={
                <>
                    <p>
                        Rendering a lot of objects can get expensive fast. The
                        FPS is not very high, so we need to make it faster.
                    </p>
                    <p>We can do this by leveraging instanced rendering!</p>
                    <p>
                        Try to render the logo with as many points as possible
                        without the FPS dropping below 30. It should render well
                        with at least 10 000 particles (depending on your
                        computer)
                    </p>
                    <p>
                        <i className={'text-amber-400 font-bold'}>
                            Additional challenge:
                        </i>{' '}
                        Animate the particles spawning in. Tip: Use the
                        Vector3.lerp function from three
                    </p>
                </>
            }
            canvasDescription={''}
            canvasTitle={"I'm so sloooow! Satisfy my need for speed!"}
            tips={[
                'Instanced objects render quite differently from normal',
                'You need to allocate the number of objects for a single instancedMesh',
                'Instead of rendering multiple instancedMeshes, you are simply changing the matrices at indexes in the instancedMesh',
                'Take a look at the setMatrixAt function',
            ]}
            taskCanvas={<Task7Canvas />}
        />
    )
}