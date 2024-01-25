import { styles } from '../styles.ts'
import { TutorialPage, tutorialPages } from '../tutorial-pages.tsx'
import { Link } from 'react-router-dom'
import { FC } from 'react'

export const Tutorial: FC<{ page: TutorialPage }> = ({ page }) => {
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

            <div className={'grid grid-cols-[2fr,5fr] gap-16 relative'}>
                <div
                    className={
                        'flex flex-col gap-4 sticky top-16 h-fit prose prose-invert'
                    }
                >
                    <div className={'list-none grid gap-8'}>
                        {tutorialPages.map((tutorialPage) => (
                            <details
                                open={
                                    !!tutorialPage.children?.find(
                                        (x) => x.element === page.element
                                    ) ?? false
                                }
                            >
                                <summary className={'font-bold text-xl'}>
                                    {tutorialPage.title}
                                </summary>
                                <ul className={'grid gap-2 list-none'}>
                                    {tutorialPage.children?.map((child) => (
                                        <li className={'list-inside'}>
                                            <Link
                                                to={`/tutorial/${child.title}`}
                                                className={
                                                    child.element ===
                                                    page.element
                                                        ? 'text-pink-400 font-bold'
                                                        : 'no-underline'
                                                }
                                            >
                                                {child.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ))}
                    </div>
                </div>

                <div>{page.element}</div>
            </div>
        </div>
    )
}
