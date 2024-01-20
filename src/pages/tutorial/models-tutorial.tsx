export const ExportingModels = () => {
    return (
        <>
            <article className={'prose prose-slate prose-invert'}>
                <h2>Exporting models</h2>
                <p>
                    Although it is not the only format supported, it's{' '}
                    <a
                        href={
                            'https://threejs.org/docs/index.html#manual/en/introduction/Loading-3D-models'
                        }
                    >
                        recommended
                    </a>{' '}
                    to use the glTF (GL Transmission Format) file format for
                    models in ThreeJS. You can use any 3D software that allows
                    exporting to this format to create models.
                </p>
                <p>
                    For this, we will be using Blender. Creating the model and
                    materials will not be covered here, I'll just show how to
                    export and import the model
                </p>

                <p className={'font-bold'}>Positioning in Blender</p>
                <p>
                    To get your model to rotate the way you want, you need to
                    set a good origin point for your object. To set it to the
                    middle of your object
                </p>
                <img src={'/BlenderPosition.png'} />
                <p>Then set the transform position to 0 for all values</p>
                <img src={'/BlenderTransformValues.png'} />

                <p className={'font-bold'}>Export settings</p>
                <p>
                    When your model is ready and you want to export these are
                    the settings that have worked for me:
                </p>
                <img src={'/ExportSettingsBlender.png'} />
            </article>
        </>
    )
}
