import { CanvasShowCase } from '../components/CanvasShowCase.tsx'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, OrbitControls } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export const MaterialsTutorial = () => {
    return (
        <div className={'prose-invert prose sm:prose-xl'}>
            <h2>Material</h2>
            <p>
                The material defines the look of the surfaces in an object.
                There exists different types of materials, but we'll focus on
                the PhysicalMaterial, which aims to emulate a realistic look of
                surfaces.
            </p>
            <p>
                With a physical material, you'll generally configure these
                parameters to change the look of a surface
            </p>
            <ul>
                <li>
                    <strong>Color</strong>
                </li>
                <li>
                    <p>
                        <strong>Roughness</strong>
                    </p>
                    <p>
                        Defines how much light is reflected of an object. A
                        lower roughness will make the object shinier, and more
                        reflective, while a higher value will make it more dull.
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Metalness (or metallic)</strong>
                    </p>
                    <p>Makes the object more metal looking</p>
                </li>
                <li>
                    <p>
                        <strong>Transmission</strong>
                    </p>
                    <p>
                        How much light is let through the object. In other words
                        how much can you see though the object. Glass will be
                        fully transmissive. This is different from just changing
                        the alpha, which will also make something see-through,
                        as with transmission you still get reflections, and both
                        the reflections and what you see through the object is
                        affected by the roughness
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Emission</strong>
                    </p>
                    <p>
                        How much light does the material let out. Essentially
                        makes the object into a light source. With no light, you
                        will still be able to see the emission from a material.
                    </p>
                </li>
            </ul>
            <p>
                There are other properties, but these are the most important
                ones. To make interesting looking materials you will need to use
                textures to control these values in different parts of the
                surface, but this is outside the scope of this tutorial.
            </p>
            <div className={'h-fit'}>
                <CanvasShowCase
                    title={'Showcase material properties'}
                    description={'Click and drag to look around the scene'}
                >
                    <Canvas shadows={'soft'} camera={{ position: [0, 0, 5] }}>
                        <OrbitControls />
                        <Environment
                            background={false}
                            blur={0.25}
                            preset={'forest'}
                        />

                        <group position={[0, 2, 0]}>
                            <group position={[-3, 0, 0]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    scale={[0.5, 0.5, 0.5]}
                                >
                                    <Html
                                        occlude={'raycast'}
                                        sprite
                                        transform
                                        position={[-1, 2, 0]}
                                    >
                                        <p className={'text-xs select-none'}>
                                            Roughness: 0
                                        </p>
                                    </Html>
                                    <sphereGeometry />
                                    <meshPhysicalMaterial
                                        roughness={0}
                                        metalness={0.5}
                                        color={'pink'}
                                    ></meshPhysicalMaterial>
                                </mesh>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    position={[3, 0, 0]}
                                    scale={[0.5, 0.5, 0.5]}
                                >
                                    <Html
                                        occlude={'raycast'}
                                        sprite
                                        transform
                                        position={[-1, 2, 0]}
                                    >
                                        <p className={'text-xs select-none'}>
                                            Roughness: 0.5
                                        </p>
                                    </Html>
                                    <sphereGeometry />
                                    <meshPhysicalMaterial
                                        metalness={0.5}
                                        roughness={0.5}
                                        color={'pink'}
                                    ></meshPhysicalMaterial>
                                </mesh>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    position={[6, 0, 0]}
                                    scale={[0.5, 0.5, 0.5]}
                                >
                                    <Html
                                        occlude={'raycast'}
                                        sprite
                                        transform
                                        position={[-1, 2, 0]}
                                    >
                                        <p className={'text-xs select-none'}>
                                            Roughness: 1
                                        </p>
                                    </Html>
                                    <sphereGeometry />
                                    <meshPhysicalMaterial
                                        roughness={0.5}
                                        metalness={0.5}
                                        color={'pink'}
                                    ></meshPhysicalMaterial>
                                </mesh>
                            </group>
                            <group position={[-3, -2, 0]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    scale={[0.5, 0.5, 0.5]}
                                >
                                    <Html
                                        occlude={'raycast'}
                                        sprite
                                        transform
                                        position={[-1, 2, 0]}
                                    >
                                        <p className={'text-xs select-none'}>
                                            Metalness: 0
                                        </p>
                                    </Html>
                                    <sphereGeometry />
                                    <meshPhysicalMaterial
                                        metalness={0}
                                        roughness={0.1}
                                        color={'pink'}
                                    ></meshPhysicalMaterial>
                                </mesh>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    position={[3, 0, 0]}
                                    scale={[0.5, 0.5, 0.5]}
                                >
                                    <Html
                                        occlude={'raycast'}
                                        sprite
                                        transform
                                        position={[-1, 2, 0]}
                                    >
                                        <p className={'text-xs select-none'}>
                                            Metalness: 0.5
                                        </p>
                                    </Html>
                                    <sphereGeometry />
                                    <meshPhysicalMaterial
                                        metalness={0.5}
                                        roughness={0.1}
                                        color={'pink'}
                                    ></meshPhysicalMaterial>
                                </mesh>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    position={[6, 0, 0]}
                                    scale={[0.5, 0.5, 0.5]}
                                >
                                    <Html
                                        occlude={'raycast'}
                                        sprite
                                        transform
                                        position={[-1, 2, 0]}
                                    >
                                        <p className={'text-xs select-none'}>
                                            Metalness: 1
                                        </p>
                                    </Html>
                                    <sphereGeometry />
                                    <meshPhysicalMaterial
                                        metalness={0.5}
                                        roughness={0.1}
                                        color={'pink'}
                                    ></meshPhysicalMaterial>
                                </mesh>
                            </group>
                            <group position={[-3, -4, 0]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    scale={[0.5, 0.5, 0.5]}
                                >
                                    <Html
                                        occlude={'raycast'}
                                        sprite
                                        transform
                                        position={[-1, 2, 0]}
                                    >
                                        <p className={'text-xs select-none'}>
                                            EmissiveIntensity: 1
                                        </p>
                                    </Html>
                                    <sphereGeometry />
                                    <meshPhysicalMaterial
                                        metalness={0}
                                        roughness={0.1}
                                        emissive={'yellow'}
                                        emissiveIntensity={1}
                                        color={'pink'}
                                    ></meshPhysicalMaterial>
                                </mesh>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    position={[3, 0, 0]}
                                    scale={[0.5, 0.5, 0.5]}
                                >
                                    <Html
                                        occlude={'raycast'}
                                        sprite
                                        transform
                                        position={[-1, 2, 0]}
                                    >
                                        <p className={'text-xs select-none'}>
                                            EmissiveIntensity: 10
                                        </p>
                                    </Html>
                                    <sphereGeometry />
                                    <meshPhysicalMaterial
                                        metalness={0.5}
                                        roughness={0.1}
                                        color={'pink'}
                                        emissive={'yellow'}
                                        emissiveIntensity={10}
                                    ></meshPhysicalMaterial>
                                </mesh>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    position={[6, 0, 0]}
                                    scale={[0.5, 0.5, 0.5]}
                                >
                                    <Html
                                        occlude={'raycast'}
                                        sprite
                                        transform
                                        position={[-1, 2, 0]}
                                    >
                                        <p className={'text-xs select-none'}>
                                            EmissiveInternsity: 100
                                        </p>
                                    </Html>
                                    <sphereGeometry />
                                    <meshPhysicalMaterial
                                        metalness={0.5}
                                        roughness={0.1}
                                        color={'pink'}
                                        emissive={'yellow'}
                                        emissiveIntensity={100}
                                    ></meshPhysicalMaterial>
                                </mesh>
                            </group>
                            <group position={[-3, -6, 0]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    position={[6, 0, 0]}
                                    scale={[0.5, 0.5, 0.5]}
                                >
                                    <Html
                                        occlude={'raycast'}
                                        sprite
                                        transform
                                        position={[-1, 2, 0]}
                                    >
                                        <p className={'text-xs select-none'}>
                                            Transmission: 1
                                        </p>
                                    </Html>
                                    <sphereGeometry />
                                    <meshPhysicalMaterial
                                        metalness={0}
                                        roughness={0.5}
                                        color={'pink'}
                                        transmission={1}
                                    ></meshPhysicalMaterial>
                                </mesh>
                            </group>
                        </group>

                        <directionalLight
                            castShadow
                            position={[5, 5, 3]}
                            intensity={1}
                            shadow-mapSize-height={2048}
                            shadow-mapSize-width={2048}
                        />
                        <EffectComposer>
                            <Bloom intensity={0.2}></Bloom>
                        </EffectComposer>
                    </Canvas>
                </CanvasShowCase>
            </div>
        </div>
    )
}
