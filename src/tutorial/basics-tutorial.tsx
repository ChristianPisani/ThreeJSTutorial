import { Canvas } from '@react-three/fiber'
import { CanvasShowCase } from '../components/CanvasShowCase.tsx'
import {
    Box,
    Environment,
    Html,
    OrbitControls,
    Sparkles,
    Sphere,
} from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three'

export const ThreeJsAndFiber = () => {
    return (
        <div className={'prose-invert prose sm:prose-xl'}>
            <h1>Basics of three and three fiber</h1>
            <h2>What is Three JS</h2>
            <p>
                Three JS is a library that aims to make it easy to draw 3D
                content in the browser. It (mostly) uses WebGL to draw 3D
                content, but does all the groundwork needed to make a good 3D
                app.
            </p>
            <p>
                This means things like lights, shadows, materials, textures
                comes working out of the box.
            </p>
            <h2>What is Three Fiber</h2>
            <p>
                Three Fiber is simply a react wrapper for three js. It allows
                you to create three scenes with React syntax.
            </p>
            <p>
                The components get rendered outside of the React Context, and
                you can use all ThreeJS features with Three Fiber without
                waiting for Fiber to be updated. It simply makes it easier to
                write with React syntax.
            </p>
            <p>
                This does not mean that you can think of it completely like a
                React App though. Especially mixing react state with a three
                fiber scene works poorly, as anytime the state updates it
                re-renders the whole canvas.
            </p>
        </div>
    )
}

export const BasicBox = () => {
    return (
        <div className={'prose-invert prose sm:prose-xl'}>
            <h1>Most basic render</h1>
            <p>
                The most basic render we can do is probably a simple box. What
                do we actually need to accomplish this?
            </p>
            <p>The most basic setup in three requires these components:</p>
            <ul>
                <li className={'list-item'}>A renderer</li>
                <li className={'list-item'}>A camera</li>
                <li>
                    A scene, containing:
                    <li className={'list-inside'}>
                        A mesh with:
                        <li className={'list-inside ml-8'}>Geometry</li>
                        <li className={'list-inside ml-8'}>Material</li>
                    </li>
                </li>
            </ul>
            <p>
                React Fiber makes this really simple to setup, so all you really
                need is a {'<Canvas>'} component, containing your scene.
            </p>
            <p>Here is a quick explanation of the different components</p>
            <h2>Canvas / Renderer</h2>
            <p>
                For three js to work it needs a html canvas to draw on. The
                actual three js logic for how to draw objects to the screen is
                in its renderer class. To draw anything you need a canvas and to
                create a renderer object.
            </p>
            <p>
                With Three Fiber it is even easier, as it has it's own canvas
                component that comes with a default setup for rendering, so all
                you need is to add a {'<Canvas>'} and add your scene objects
                within it. The standard renderer is the{' '}
                <a
                    href={
                        'https://threejs.org/docs/#api/en/renderers/WebGLRenderer'
                    }
                >
                    WebGL renderer
                </a>
                .
            </p>
            <p>
                The renderer comes with a lot of different props to customize,
                but we'll just be using the standard renderer. The only settings
                we'll be using are the camera and shadows on the Fiber Canvas
                component.
            </p>
            <h2>Camera</h2>
            <p>
                The camera defines from where and how the scene will be
                rendered. Anything outside the camera bounds will not be drawn.
                You can change the FOV (Field of view), aspect ratio, and
                clipping planes of the camera to get different results. The
                clipping planes, near and far, define how far or near an object
                can be until it is not drawn anymore.
            </p>
            <p>
                The aspect ratio defines the size and shape of the camera view.
                This is handled by Fiber so that it will match the html
                container you put it in.
            </p>
            <p>
                You can use either an orthographic camera or a perspective
                camera. The orthographic camera does not have any perspective.
                This can be used for artistic effect, or 2D content. We'll stick
                to the perspective camera, though.
            </p>
            <h2>Geometry</h2>
            <p>
                Any 3D object needs a shape. In three js this is called a
                geometry, and it is the vertices, or points, that make up the
                shape of an object.
            </p>
            <p>
                Example of a box geometry:
                <img src={'/BoxGeometry.png'} />
            </p>
            <h2>Materials</h2>
            <p>
                Materials change the look of the surface of an object. You'll
                generally adjust properties like roughness, metallic, emission
                and color to create the look you need. More about materials in
                own chapter.
            </p>
        </div>
    )
}

export const BasicScene = () => {
    return (
        <div className={'prose-invert prose sm:prose-xl'}>
            <h2>Basic scene</h2>
            <p>
                We're going to create a basic scene and expand upon it as we go.
            </p>
            <p>
                The most basic scene we can create where anything is actually
                shown is a canvas with a box in it. We're going to use the Box
                component from drei to make it as simple as possible.
            </p>

            <pre>
                {`<Canvas>
    <Box material={new MeshPhysicalMaterial()} />
</Canvas>`}
            </pre>

            <CanvasShowCase title={'Hello cube!'}>
                <Canvas>
                    <Box material={new MeshPhysicalMaterial()} />
                </Canvas>
            </CanvasShowCase>
        </div>
    )
}

export const DreiTutorial = () => {
    return (
        <div className={'prose prose-invert'}>
            <h1>Three Fiber Drei</h1>
            <a href={'https://github.com/pmndrs/drei'}>Link</a>
            <p>
                Drei is a helper library for react fiber that includes a lot of
                useful tools that you can use in your scenes.
            </p>
            <p>
                It is very well documented, but I'll showcase a few ones that
                are used in this project.
            </p>
            <CanvasShowCase
                title={'Orbit controls (and sparkles!)'}
                description={
                    'Orbit controls lets you move around the scene using the mouse'
                }
            >
                <Canvas>
                    <Box></Box>
                    <Sphere position={[3, 0, 0]} />
                    <Sparkles />
                    <OrbitControls />
                </Canvas>
            </CanvasShowCase>
            <CanvasShowCase
                title={'Environment'}
                description={
                    'Adds an environment skybox. Can be used to only affect lighting, or be projected as part of the scene.'
                }
            >
                <Canvas>
                    <Environment
                        preset={'forest'}
                        background={true}
                    ></Environment>
                    <OrbitControls />
                </Canvas>
            </CanvasShowCase>
            <CanvasShowCase
                title={'Html'}
                description={'View HTML inside your canvas'}
            >
                <Canvas>
                    <Html transform occlude>
                        <h1 className={'text-2xl text-pink-400'}>
                            Hello world!
                        </h1>
                        <p>
                            I am HTML inside of a canvas, rendered with three js
                            with the drei library!
                        </p>
                    </Html>
                    <Html transform occlude sprite position={[0, 2, 0]}>
                        <h1 className={'text-2xl text-pink-400'}>
                            I can also be rendered as a sprite that always faces
                            the camera!
                        </h1>
                    </Html>
                    <OrbitControls />
                </Canvas>
            </CanvasShowCase>
        </div>
    )
}
