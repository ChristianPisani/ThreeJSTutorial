import { styles } from '../../styles.ts'
import { ExportingModels } from './models-tutorial.tsx'

export const Tutorial = () => {
    return (
        <div className={'flex flex-col gap-12'}>
            <div className={`grid grid-cols-[20rem,1fr] gap-12`}>
                <div className={'col-span-2 flex flex-col gap-2'}>
                    <h1
                        className={`${styles.heroHeadText} text-white font-bold`}
                    >
                        <span className={'text-[#915eff]'}>Tutorial</span>
                    </h1>
                </div>
            </div>

            <ExportingModels />
        </div>
    )
}
