import { styles } from '../styles.ts'
import { FC, ReactNode, useRef, useState } from 'react'
import { Stats } from '@react-three/drei'

type TaskTemplateType = {
    title: string
    description: ReactNode
    canvasTitle: string
    canvasDescription: string
    tips: ReactNode[]
    taskCanvas: ReactNode
}

export const TaskTemplate: FC<TaskTemplateType> = ({
    title,
    description,
    canvasDescription,
    canvasTitle,
    tips,
    taskCanvas,
}) => {
    const [index, setIndex] = useState(0)
    const canvasContainer = useRef<HTMLDivElement>(null!)

    return (
        <div className={'flex flex-col gap-12'}>
            <div
                className={`flex flex-col sm:grid sm:grid-cols-[20rem,1fr] gap-12`}
            >
                <div className={'col-span-2 flex flex-col gap-8'}>
                    <h1
                        className={`${styles.heroHeadText} text-white font-bold`}
                    >
                        <span className={'text-[#915eff]'}>{title}</span>
                    </h1>

                    <div className={'prose prose-invert'}>{description}</div>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <h2 className={'font-bold text-2xl'}>Tips</h2>
                    <ul className={'ml-6 list-disc flex flex-col gap-2'}>
                        {tips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                </div>
                <div className={'col-span-1 flex flex-col gap-4'}>
                    <div
                        className={
                            'flex flex-col sm:flex-row gap-8 items-center justify-between'
                        }
                    >
                        <p className={'font-bold text-2xl'}>{canvasTitle}</p>{' '}
                        <button
                            className={
                                'bg-indigo-600 px-5 py-3 rounded text-indigo-100'
                            }
                            onClick={() => setIndex(index + 1)}
                        >
                            Reset view
                        </button>
                    </div>
                    <p>{canvasDescription}</p>
                    <div
                        ref={canvasContainer}
                        key={index}
                        className={
                            'border-fuchsia-200 border-2 bg-opacity-30 bg-indigo-950 h-96 relative'
                        }
                    >
                        <Stats
                            parent={canvasContainer}
                            className={'absoluteImportant ml-2 mt-3'}
                        />
                        {taskCanvas}
                    </div>
                </div>
            </div>
        </div>
    )
}
