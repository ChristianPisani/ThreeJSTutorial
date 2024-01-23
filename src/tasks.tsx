import { TaskTemplate } from './components/task-template.tsx'
import { BasicRender } from './tasks/task-basic-render.tsx'
import { TaskBasicLighting } from './tasks/task-basic-lighting.tsx'
import { TaskPointCloud } from './tasks/task-point-cloud.tsx'
import { TaskInstancingCanvas } from './tasks/task-instancing.tsx'
import { TaskPostProcessing } from './tasks/task-post-processing.tsx'
import { TaskAnimationTransforms } from './tasks/task-animation-transforms.tsx'
import { TaskAddModel } from './tasks/task-add-model.tsx'
import { TaskShadows } from './tasks/task-shadows.tsx'
import { TaskCreateMaterials } from './tasks/task-create-materials.tsx'
import { TaskMakeItInteractive } from './tasks/task-make-it-interactive.tsx'

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
        taskCanvas={<BasicRender />}
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
        taskCanvas={<TaskBasicLighting />}
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
        taskCanvas={<TaskAnimationTransforms />}
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
        taskCanvas={<TaskAddModel />}
    />,
    <TaskTemplate
        title={'Point cloud!'}
        description={
            <>
                <p>
                    Let's do something fun with it. We're gonna make a point
                    cloud!
                </p>
                <p>
                    To do this we need to use the MeshSurfaceSampler class to
                    build a list of positions for the points
                </p>
                <p>
                    Then you need to render something at each point. You are
                    probably going to notice some performance problems if you
                    push the amount of particles too high, but we'll fix those
                    in the next task, so don't worry about that
                </p>
                <p>
                    <strong className={'text-red-600'}>Important:</strong> Do
                    not add too many points, it will run REALLY bad
                </p>
            </>
        }
        canvasDescription={''}
        canvasTitle={'Make me a cloud!'}
        tips={[
            "MeshSurfaceSampler comes from 'three/addons/math/MeshSurfaceSampler.js'",
            'The logo is a group that contains a mesh. The sampler needs a mesh',
            'The samplers sample function write directly to a vector. So assign one beforehand, then pass it to the function',
            'Putting the vector3 in a list only stores the reference, so make a copy and insert it in the list',
        ]}
        taskCanvas={<TaskPointCloud />}
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
                    You can use the {'<instancedMesh>'} tag for this. It works
                    quite differently from the normal mesh.
                </p>
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
        taskCanvas={<TaskInstancingCanvas />}
    />,
    <TaskTemplate
        title={'Post processing!'}
        description={
            <>
                <p>
                    Point clouds are cool, but they're just point! How can we
                    make them cool?
                </p>
                <p>
                    The answer is{' '}
                    <span
                        className={
                            'text-xl font-bold text-purple-400 animate-bounce absolute ml-2'
                        }
                    >
                        POST PROCESSING
                    </span>{' '}
                </p>
                <p>
                    Take a look at the{' '}
                    <a href={'https://github.com/pmndrs/react-postprocessing'}>
                        Three Fiber post processing wrapper
                    </a>{' '}
                    and see if you can add some God Rays to the points!
                </p>
                <p>
                    See if you can add some other cool post processing effect as
                    well. Play around
                </p>
            </>
        }
        canvasDescription={''}
        canvasTitle={'AAAh I look hideous! I need my post processing'}
        tips={[
            'The sun in godrays can be any mesh, including an instancedMesh',
            "Play around with the settings to find something that looks cool, there's a lot to choose from",
        ]}
        taskCanvas={<TaskPostProcessing />}
    />,
    <TaskTemplate
        title={'Add shadows!'}
        description={
            <>
                <p>
                    There is a model and a spotlight in this scene, but the
                    lighting looks pretty flat.
                </p>
                <p>
                    We are missing shadows. To get shadows you need to enable it
                    on the Canvas element, and add castShadow and receiveShadow
                    attributes to every light and object
                </p>
                <p>
                    You can also play around with the bounds and resolution of
                    the shadow map to see how it affects lighting
                </p>
                <p>
                    Another thing that is really important for getting
                    good-looking lighting is an environment map, or HDRI. This
                    is an image texture that is reflected on the surfaces. Try
                    to add an Environment from drei and see how it affects
                    lighting. Try different maps to see how it looks. Enable and
                    disable background to see only the reflections or the map
                    itself.
                </p>
                <p>
                    There is a version of the card with materials already made
                    in the scene, so that you can see how the environment
                    lighting affects it.
                </p>
            </>
        }
        canvasDescription={''}
        canvasTitle={'Throw some shade'}
        tips={[
            'Enable castShadow and receiveShadow on every mesh',
            'Enable castShadow on lights',
            'Enable shadows on the Canvas element',
        ]}
        taskCanvas={<TaskShadows />}
    />,
    <TaskTemplate
        title={'Add materials! Make it yours'}
        description={
            <>
                <p>
                    Now that there is lighting in the scene, you can try to
                    customize the card. Change the materials of the different
                    parts of the card. Try to add some post-processing effects
                    to make it pop! Emission and bloom could be a cool combo if
                    used sparsely.
                </p>
            </>
        }
        canvasDescription={''}
        canvasTitle={'Paint it'}
        tips={[
            'Tweak the color, roughness, metalness and emissive properties to change the look',
            'Try different environments',
            'Add more lights to highlight the card',
        ]}
        taskCanvas={<TaskCreateMaterials />}
    />,
    <TaskTemplate
        title={'Make it interactive!'}
        description={
            <>
                <p>Now we need to make it interactive.</p>
                <p>
                    There are multiple pointer events that can be used in three
                    fiber for adding interactivity. Use the onPointerOver,
                    onPointerOut and onPointerDown events to react to input.
                </p>
                <p>
                    Try to add some functionality to the card. For example try
                    to change the size and material of the button when hovering
                    it. Give it a click effect. Move it, make use of the 3D
                    space!
                </p>
                <p>
                    From here you can pretty much do anything you want! Be
                    creative. Make something cool happen when you press the
                    card. Add different models. Create your own model!{' '}
                    <span
                        className={
                            'animate-ping ml-16 text-xl text-pink-400 absolute'
                        }
                    >
                        GO CRAZY
                    </span>
                </p>
            </>
        }
        canvasDescription={''}
        canvasTitle={'Be creative!'}
        tips={[
            'Use the useFrame hook',
            'Add some lerps for animating smoothly',
            'Take a look at the different pointer events in three fiber',
        ]}
        taskCanvas={<TaskMakeItInteractive />}
    />,
]
