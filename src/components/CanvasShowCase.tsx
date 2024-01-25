import { Stats } from '@react-three/drei'
import { ReactNode, useRef, useState } from 'react'

export const CanvasShowCase = (props: {
    children: ReactNode
    title?: string
    description?: string
}) => {
    const canvasContainer = useRef<HTMLDivElement>(null!)
    const [index, setIndex] = useState(0)

    return (
        <>
            <div
                className={
                    'grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-between'
                }
            >
                <div className={'col-span-2'}>
                    <p className={'font-bold text-2xl'}>{props.title}</p>
                    <p>{props.description}</p>
                </div>
                <button
                    className={
                        'bg-indigo-600 px-5 py-3 rounded text-indigo-100'
                    }
                    onClick={() => setIndex(index + 1)}
                >
                    Reset view
                </button>
            </div>
            <div
                key={`${props.title}${index}`}
                ref={canvasContainer}
                className={
                    'border-fuchsia-200 border-2 bg-opacity-30 bg-indigo-950 h-96 relative'
                }
            >
                <Stats
                    parent={canvasContainer}
                    className={'absoluteImportant ml-2 mt-3'}
                />
                {props.children}
            </div>
        </>
    )
}
