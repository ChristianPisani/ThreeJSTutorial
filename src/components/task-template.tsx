import { styles } from '../styles.ts'
import { FC, ReactNode } from 'react'
import { CanvasShowCase } from './CanvasShowCase.tsx'

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
                    <CanvasShowCase
                        title={canvasTitle}
                        description={canvasDescription}
                    >
                        {taskCanvas}
                    </CanvasShowCase>
                </div>
            </div>
        </div>
    )
}
