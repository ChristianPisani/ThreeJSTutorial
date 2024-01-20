import { Html, useProgress } from '@react-three/drei'

export const Loader = () => {
    const { progress } = useProgress()

    return (
        <Html>
            <span className={'canvas-load'}></span>
            <p className={'font-bold'}>{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default Loader
