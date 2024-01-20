import { TaskTemplate } from '../../components/task-template.tsx'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from '../../components/Loader.tsx'
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

const Task3Canvas = () => {
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

export const Task3 = () => {
    return (
        <TaskTemplate
            title={'Animate it!'}
            description={
                <>
                    <p>
                        Ok, the box is looking better. Now lets it do something!
                        Make the box spin.
                    </p>
                    <p>
                        <i className={'text-amber-400 font-bold'}>
                            Additional challenge:
                        </i>{' '}
                        Make the cube spin around another origin point (F.ex
                        spin around the world origin instead of it's own axis)
                    </p>
                    <p>
                        <i className={'text-amber-300 font-bold'}>
                            Additional challenge 2:
                        </i>{' '}
                        Chain rotations to make another object rotate around the
                        first cube while it's circling the origin.
                    </p>
                </>
            }
            canvasDescription={''}
            canvasTitle={'Spin the cube!'}
            tips={[
                'Use the useFrame hook to do something every frame',
                'Add a ref to the box to make it possible to manipulate it',
                <span>
                    You can use the{' '}
                    <span className={'text-pink-500'}>{'<group>'}</span> tag to
                    group together related items. You can apply transforms to
                    this
                </span>,
            ]}
            taskCanvas={<Task3Canvas />}
        />
    )
}
