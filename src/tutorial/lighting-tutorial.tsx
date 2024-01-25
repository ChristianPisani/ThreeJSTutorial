import { CanvasShowCase } from '../components/CanvasShowCase.tsx'
import { Canvas } from '@react-three/fiber'
import { Box, Environment, Html, OrbitControls } from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three'

export const LightingTutorial = () => {
    return (
        <div className={'prose prose-invert'}>
            <h2>Basic lighting</h2>
            <p>
                Lighting is what gives dimension to an object. Without it,
                everything just looks flat.
            </p>
            <h2>Light and shadows</h2>
            <p>
                Something that can be confusing, is that light and shadows are
                two different things within a typical render pipeline. There are
                models where light and shadows will be done in the same pass,
                such as path-tracing, but the default shadows in three are made
                using shadow maps (will be explained).
            </p>
            <p>
                The lighting without shadows is just the shading you get by
                calculating the angle between the surface normals and the light
                source. The more when they point toward each other, the lighting
                will be strongest.
            </p>
            <h2>Smooth shading vs flat shading</h2>
            <p>
                Because objects are made up of points, and are not smooth by
                default, there is smoothing applied between the vertex normals
                to make the lighting look smooth. This is the difference between
                a low-poly look where each vertex is pronounced and a smoother
                look.
            </p>
            <div className={'grid grid-cols-2 gap-4'}>
                <p>
                    No smoothing
                    <img src={'/LightingNoSmoothing.png'} />
                </p>

                <p>
                    With smoothing
                    <img src={'/LightingSmoothing.png'} />
                </p>
            </div>
        </div>
    )
}

export const AmbientLightTutorial = () => {
    return (
        <div className={'prose prose-invert'}>
            <h1>Ambient light</h1>
            <p>
                The ambient light is the is the simplest form of light. It
                simply adds a uniform light across all surfaces. It does not
                have a direction, so all directions will get the same amount of
                light. This can be used as a base light to make sure your scene
                never gets darker than the ambient light. This is to avoid pitch
                black shadows.
            </p>
            <h2>Ambient light example</h2>
            <pre>
                {`<Canvas>
    <Box material={new MeshPhysicalMaterial()} />
    <ambientLight intensity={0.5} color={'lightblue'} />
</Canvas>`}
            </pre>
            <CanvasShowCase title={''}>
                <Canvas>
                    <Box material={new MeshPhysicalMaterial()} />
                    <ambientLight intensity={0.5} color={'lightblue'} />
                    <OrbitControls />
                </Canvas>
            </CanvasShowCase>
        </div>
    )
}

export const PointLightTutorial = () => {
    return (
        <div className={'prose prose-invert'}>
            <h1>Point light</h1>
            <p>
                The point light is a light source that emits light in every
                direction, like a light bulb.
            </p>
            <h2>Point light example</h2>
            <pre>
                {`<Canvas camera={{ position: [0, 1, 2] }}>
    <Box material={new MeshPhysicalMaterial()} />
    <Box
        material={new MeshPhysicalMaterial()}
        position={[0, -1, 0]}
        scale={[10, 1, 10]}
    />
    <Box
        material={new MeshPhysicalMaterial()}
        position={[0, 2, 0]}
        scale={[10, 1, 10]}
    />
    <pointLight
        intensity={0.5}
        position={[0, 1, 0]}
        color={'lightblue'}
    />
</Canvas>`}
            </pre>
            <CanvasShowCase title={''}>
                <Canvas camera={{ position: [0, 1, 2] }}>
                    <Box material={new MeshPhysicalMaterial()} />
                    <Box
                        material={new MeshPhysicalMaterial()}
                        position={[0, -1, 0]}
                        scale={[10, 1, 10]}
                    />
                    <Box
                        material={new MeshPhysicalMaterial()}
                        position={[0, 2, 0]}
                        scale={[10, 1, 10]}
                    />
                    <pointLight
                        intensity={0.5}
                        position={[0, 1, 0]}
                        color={'lightblue'}
                    />
                    <OrbitControls />
                </Canvas>
            </CanvasShowCase>
        </div>
    )
}

export const SpotLightTutorial = () => {
    return (
        <div className={'prose prose-invert'}>
            <h1>Spot light</h1>
            <p>
                The spot light is a light source that emits light like a
                spotlight. It emits light like a cone
            </p>
            <h2>Spot light example</h2>
            <pre>
                {`<Canvas camera={{ position: [0, 1, 2] }}>
    <Box material={new MeshPhysicalMaterial()} />
    <Box
        material={new MeshPhysicalMaterial()}
        position={[0, -1, 0]}
        scale={[10, 1, 10]}
    />
    <spotLight
        intensity={0.5}
        position={[0, 1, 0]}
        color={'lightblue'}
    />
</Canvas>`}
            </pre>
            <CanvasShowCase title={''}>
                <Canvas camera={{ position: [0, 1, 2] }}>
                    <Box material={new MeshPhysicalMaterial()} />
                    <Box
                        material={new MeshPhysicalMaterial()}
                        position={[0, -1, 0]}
                        scale={[10, 1, 10]}
                    />
                    <Box
                        material={new MeshPhysicalMaterial()}
                        position={[0, 2, 0]}
                        scale={[10, 1, 10]}
                    />
                    <spotLight
                        intensity={0.5}
                        position={[0, 1, 0]}
                        color={'lightblue'}
                    />
                    <OrbitControls />
                </Canvas>
            </CanvasShowCase>
        </div>
    )
}

export const ShadowsTutorial = () => {
    return (
        <div className={'prose prose-invert'}>
            <h1>Shadows</h1>
            <p>
                To make the scene look better we need to enable shadows. To do
                this we need add the shadows property to our canvas. There are
                different modes, but I think the soft shadows look best
            </p>
            <pre>{`<Canvas shadows="soft" >...</Canvas>`}</pre>
            <p>
                Then we need to add the castShadow property to any light source
                that will cast shadows
            </p>
            <pre>{`<spotLight castShadow ... />`}</pre>
            <p>
                Then we need to add the castShadow property to any object source
                that will cast shadows, and the receiveShadow to any object that
                will have shadows on them.
            </p>
            <pre>{`<mesh castShadow receiveShadow ... />`}</pre>
            <p>
                If an object does not have receiveShadows, the shadow texture
                will not be drawn on it. Study the example under to understand
                the differences.
            </p>
            <CanvasShowCase title={'Shadows example'}>
                <Canvas shadows={'soft'} camera={{ position: [0, 1, 4] }}>
                    <mesh castShadow receiveShadow>
                        <Html transform sprite position={[0, 1, 0]}>
                            <p className={'text-xs select-none'}>
                                castShadow
                                <br />
                                receiveShadow
                            </p>
                        </Html>
                        <boxGeometry />
                        <meshPhysicalMaterial />
                    </mesh>

                    <mesh
                        receiveShadow
                        position={[0.5, -0.1, 1.5]}
                        scale={[0.8, 0.8, 0.8]}
                    >
                        <Html transform sprite position={[0, 1, 0]}>
                            <p className={'text-xs select-none'}>
                                receiveShadow
                            </p>
                        </Html>
                        <boxGeometry />
                        <meshPhysicalMaterial />
                    </mesh>

                    <mesh
                        castShadow
                        position={[-2, -0.1, 1]}
                        scale={[0.8, 0.8, 0.8]}
                    >
                        <Html transform sprite position={[0, 1, 0]}>
                            <p className={'text-xs select-none'}>castShadow</p>
                        </Html>
                        <boxGeometry />
                        <meshPhysicalMaterial />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        position={[0, -1, 0]}
                        scale={[10, 1, 10]}
                    >
                        <boxGeometry />
                        <meshPhysicalMaterial />
                    </mesh>
                    <spotLight
                        castShadow
                        intensity={10}
                        position={[1, 1, -2]}
                        color={'lightblue'}
                    />
                    <OrbitControls />
                </Canvas>
            </CanvasShowCase>
        </div>
    )
}

export const ShadowsAdvancedTutorial = () => {
    return (
        <div className={'prose prose-invert'}>
            <h1>Shadows advanced</h1>
            <h2>How are shadows generated?</h2>
            <p>
                The basic way that shadows are generated is by rendering the
                scene from point of view of the light source, and then comparing
                this with the scene cameras depth map with the lights depth map.
                The differences are stored in a shadow map, which is then
                projected onto the environment.
            </p>
            <h2>Shadow maps</h2>
            <p>
                Shadows are generated as a texture, which is then projected onto
                the environment. This means that they have a finite resolution,
                so we need to think about the scale of our scene.
            </p>
            <p>
                Not all lights are able to cast shadows, but there are some
                properties that can affect the shadow maps based on the scale of
                the scene, but on the ones that can, you can change the texture
                resolution and shadow camera properties to optimize your scene.
            </p>
            <h2>Shadow map size</h2>
            <p>
                This is the resolution of the shadow map. The higher the
                resolution, the more details you're going to get, but it's also
                going to be more costly.
            </p>
            <h2>Shadow camera</h2>
            <p>
                You can alter the properties of the shadow camera, to change
                where shadows appear. Some properties include:
                <ul>
                    <li>shadow-camera-near</li>
                    <li>shadow-camera-far</li>
                    <li>shadow-camera-top</li>
                    <li>shadow-camera-bottom</li>
                    <li>shadow-camera-left</li>
                    <li>shadow-camera-right</li>
                </ul>
            </p>

            <p>
                Below is an example where the shadow camera far plane is not far
                enough back, so the shadows get clipped at the edge.
            </p>

            <CanvasShowCase>
                <Canvas shadows={'soft'} camera={{ position: [150, 120, 120] }}>
                    <OrbitControls />

                    <mesh castShadow receiveShadow scale={[70, 70, 70]}>
                        <sphereGeometry></sphereGeometry>
                        <meshPhysicalMaterial></meshPhysicalMaterial>
                    </mesh>
                    <mesh
                        receiveShadow
                        scale={[300, 1, 300]}
                        position={[0, -50, 0]}
                    >
                        <boxGeometry></boxGeometry>
                        <meshPhysicalMaterial></meshPhysicalMaterial>
                    </mesh>
                    <spotLight
                        intensity={10000}
                        castShadow
                        position={[0, 150, 150]}
                        shadow-camera-far={320}
                    />
                </Canvas>
            </CanvasShowCase>
        </div>
    )
}

export const EnvironmentMapsTutorial = () => {
    return (
        <div className={'prose prose-invert'}>
            <h1>Environment maps</h1>
            <p>
                If you don't have an exceptionally detailed scene, the lighting
                in your scenes will benefit greatly from using an environment
                map.
            </p>
            <p>
                This is a texture that is projected around your scene, and that
                gets reflected by your materials. This makes the lighting feel
                much more natural. The environment map is a much better way to
                add ambient lighting, than the ambient light source. Just make
                sure to match your shadows to the direction of the light in your
                environment, or else it'll look unnatural.
            </p>
            <CanvasShowCase
                title={'No environment map'}
                description={
                    'Without the environment map the lighting looks flat and boring'
                }
            >
                <Canvas>
                    <mesh>
                        <sphereGeometry></sphereGeometry>
                        <meshPhysicalMaterial metalness={1} roughness={0.3} />
                    </mesh>
                    <directionalLight intensity={2} />
                    <OrbitControls />
                </Canvas>
            </CanvasShowCase>
            <CanvasShowCase
                title={'With environment map'}
                description={'With the environment map it looks much better'}
            >
                <Canvas>
                    <mesh>
                        <sphereGeometry></sphereGeometry>
                        <meshPhysicalMaterial metalness={1} roughness={0.2} />
                    </mesh>
                    <directionalLight intensity={2} />
                    <OrbitControls />
                    <Environment
                        background={true}
                        blur={0.5}
                        preset={'sunset'}
                    />
                </Canvas>
            </CanvasShowCase>
        </div>
    )
}
