import { useRef } from 'react'
import { Group, Mesh } from 'three'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { CanvasShowCase } from '../components/CanvasShowCase.tsx'

export const ExportingModels = () => {
    return (
        <div className={'prose prose-slate prose-invert'}>
            <h1>Exporting models</h1>
            <p>
                Although it is not the only format supported, it's{' '}
                <a
                    href={
                        'https://threejs.org/docs/index.html#manual/en/introduction/Loading-3D-models'
                    }
                >
                    recommended
                </a>{' '}
                to use the glTF (GL Transmission Format) file format for models
                in ThreeJS. You can use any 3D software that allows exporting to
                this format to create models.
            </p>
            <p>
                For this, we will be using Blender. Creating the model and
                materials will not be covered here, I'll just show how to export
                and import the model
            </p>

            <h2>Positioning in Blender</h2>
            <p>
                To get your model to rotate the way you want, you need to set a
                good origin point for your object. To set it to the middle of
                your object
            </p>
            <img src={'/BlenderPosition.png'} />
            <p>Then set the transform position to 0 for all values</p>
            <img src={'/BlenderTransformValues.png'} />

            <h2>Export settings</h2>
            <p>
                When your model is ready and you want to export these are the
                settings that have worked for me:
            </p>
            <img src={'/ExportSettingsBlender.png'} />
        </div>
    )
}

const Logo = () => {
    const logo = useGLTF('/AT-Logo.gltf')
    return <primitive object={logo.scene}></primitive>
}

const LogoMesh = () => {
    const logo = useGLTF('/AT-Logo.gltf')
    const mesh = logo.scene.children[0] as Mesh

    return (
        <mesh
            rotation={mesh.rotation}
            geometry={mesh.geometry}
            material={mesh.material}
            /* Or just do {...mesh} */
        />
    )
}

export const LoadingModels = () => {
    return (
        <div className={'prose prose-slate prose-invert'}>
            <h1>Loading models</h1>
            <p>
                To load a model you need to use a loader. Lookily React Fiber
                has a hook for this. The recommended file format for models in
                three js is GLTF, so we'll use the hook for that provided by
                Drei: useGLTF
            </p>
            <p>
                If you want to just add your scene from Blender with everything
                configured as it is in Blender, the easiert way is to use the{' '}
                {'<primitive>'} component.
            </p>
            <pre>{`const logo = useGLTF('AT-Logo.gltf')

return (
    <primitive object={logo.scene}></primitive>  
)`}</pre>

            <CanvasShowCase title={''}>
                <Canvas>
                    <Logo></Logo>
                </Canvas>
            </CanvasShowCase>

            <h2>Alternative way</h2>
            <p>
                This way has some drawbacks, though. Namely that shadows are not
                enabled for this, and you can't set castShadow on the primitive.
                This is possible to fix by traversing the model and setting the
                shadow casting properties on each of the children:
            </p>
            <pre>
                {`scene.traverse((child) => {
    if (child.type === 'Mesh') {
        child.castShadow = true
        child.receiveShadow = true
    }
})`}
            </pre>

            <p>
                If you want more control and know the structure of your object,
                you can directly access the materials and geometries from the
                object returned from the hook. Then you can assign these
                directly in a mesh. This way you can choose to use another
                material than the one from Blender.
            </p>

            <pre>
                {`const logo = useGLTF('/AT-Logo.gltf')
const mesh = logo.scene.children[0] as Mesh

return (
    <mesh
        rotation={mesh.rotation}
        geometry={mesh.geometry}
        material={mesh.material}
        /* Or just do {...mesh} */
    />
)`}
            </pre>

            <CanvasShowCase title={''}>
                <Canvas>
                    <LogoMesh></LogoMesh>
                </Canvas>
            </CanvasShowCase>
        </div>
    )
}
