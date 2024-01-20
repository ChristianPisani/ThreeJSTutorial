﻿import { styles } from '../styles.ts'
import { FC, ReactNode, useState } from 'react'
import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

type TaskTemplateType = {
    title: string
    subTitle: string
    description: ReactNode
    canvasTitle: string
    canvasDescription: string
    tips: ReactNode[]
    taskCanvas: ReactNode
}

export const TaskTemplate: FC<TaskTemplateType> = ({
    title,
    subTitle,
    description,
    canvasDescription,
    canvasTitle,
    tips,
    taskCanvas,
}) => {
    const [index, setIndex] = useState(0)

    return (
        <div className={'flex flex-col gap-12'}>
            <div className={`grid grid-cols-[20rem,1fr] gap-12`}>
                <div className={'col-span-2 flex flex-col gap-8'}>
                    <h1
                        className={`${styles.heroHeadText} text-white font-bold`}
                    >
                        <span className={'text-[#915eff]'}>{subTitle}</span>
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
                    <div className={'flex gap-8 items-center justify-between'}>
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
                        key={index}
                        className={
                            'border-fuchsia-200 border-2 bg-opacity-30 bg-indigo-950 rounded-2xl h-96'
                        }
                    >
                        {taskCanvas}
                    </div>
                </div>
            </div>
        </div>
    )
}
