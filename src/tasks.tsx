import { TaskTemplate } from './components/task-template.tsx'
import { Task1Canvas } from './pages/task1.tsx'
import { Task2Canvas } from './pages/task2.tsx'
import { Task3Canvas } from './pages/task3.tsx'
import { Task6Canvas } from './pages/task6.tsx'
import { Task7Canvas } from './pages/task7.tsx'
import { Task5Canvas } from './pages/task5.tsx'
import { Task4Canvas } from './pages/task4.tsx'

export const tasks = [
    <TaskTemplate
        title={'Rendering a cube'}
        description={
            <>
                <p>
                    In this task you will first setup the basic components for
                    rendering <i>anything</i> to the screen with three js fiber.
                </p>
                <p>This means we need to add a canvas, and a camera.</p>
                <p>
                    After that you must try to get a basic cube rendering, so
                    that you know the canvas is working.
                </p>
            </>
        }
        canvasDescription={
            'Play around with the rotation and scale parameters to get a better feel of the shape. Rotations are in radians, so use divisions of PI (PI = 180 degrees). F.ex: To rotate 45 degrees, use Math.PI / 4.'
        }
        canvasTitle={'Render a shape here'}
        tips={[
            'A camera can either be added directly to the canvas as a prop, or added as a child in combination with the "makeDefault" prop',
            <p>
                Drei shapes documentation{' '}
                <a
                    className={'text-blue-600'}
                    href={
                        'https://github.com/pmndrs/drei?tab=readme-ov-file#shapes'
                    }
                    target={'_blank'}
                >
                    (link)
                </a>
            </p>,
            'Try different shapes, not just the Box',
        ]}
        taskCanvas={<Task1Canvas />}
    />,
    <TaskTemplate
        title={'Lighting'}
        description={
            <>
                <p>
                    The box is lacking a bit of dimension, so we need to light
                    it!
                </p>
                <p>To do this, there are two things that needs to be done:</p>
                <ul>
                    <li>Add a light to the scene</li>
                    <li>Add a material to the box</li>
                </ul>
                <p>
                    Add at least a directional light to the scene. The
                    directional light will be rotated towards the [0,0,0]
                    coordinate by default. You can either rotate it by changing
                    the lookAt coordinate, or by changing the position of the
                    light. The rotation parameter will not change the direction
                    of this light.
                </p>
            </>
        }
        canvasDescription={''}
        canvasTitle={'Light the cube!'}
        tips={[
            'The meshPhongMaterial and the meshPhysicalMaterial work with lights',
        ]}
        taskCanvas={<Task2Canvas />}
    />,
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
                    Make the cube spin around another origin point (F.ex spin
                    around the world origin instead of it's own axis)
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
                group together related items. You can apply transforms to this
            </span>,
        ]}
        taskCanvas={<Task3Canvas />}
    />,
    <TaskTemplate
        title={'Add a model!'}
        description={
            <>
                <p>
                    The box was fun, but it might get a bit boring with only
                    that. We need something else. Let's import a 3D model into
                    our scene.
                </p>
                <p>
                    You can either try to create your own model in Blender and
                    import it, or use the model "
                    <span className={'text-pink-400'}>
                        /public/AT-Logo.gltf
                    </span>
                    "
                </p>
                <p>Try to incorporate some movement into this as well.</p>
            </>
        }
        canvasDescription={''}
        canvasTitle={'Add a model!'}
        tips={[
            'Use the useGLTF hook to load the model',
            <p>
                Use <span className={'text-pink-400'}>{'<primitive>'}</span> to
                use your model in the scene
            </p>,
            <p>
                If you want to look around your scene, add{' '}
                <span className={'text-pink-400'}>{'<OrbitControls>'}</span>{' '}
                into your canvas
            </p>,
        ]}
        taskCanvas={<Task4Canvas />}
    />,
    <TaskTemplate
        title={'Make it interactive!'}
        description={
            <>
                <p>Now we need to make it interactive.</p>
                <p>Try to make the logo change color and size when hovered.</p>
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
        taskCanvas={<Task5Canvas />}
    />,
    <TaskTemplate
        title={'Make it interactive!'}
        description={
            <>
                <p>Now we need to make it interactive.</p>
                <p>Try to make the logo change color and size when hovered.</p>
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
    />,
    <TaskTemplate
        title={'Better performance with instances!'}
        description={
            <>
                <p>
                    Rendering a lot of objects can get expensive fast. The FPS
                    is not very high, so we need to make it faster.
                </p>
                <p>We can do this by leveraging instanced rendering!</p>
                <p>
                    Try to render the logo with as many points as possible
                    without the FPS dropping below 30. It should render well
                    with at least 10 000 particles (depending on your computer)
                </p>
                <p>
                    <i className={'text-amber-400 font-bold'}>
                        Additional challenge:
                    </i>{' '}
                    Animate the particles spawning in. Tip: Use the Vector3.lerp
                    function from three
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
    />,
]
