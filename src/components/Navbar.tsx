import { navLinks } from '../constants'
import { NavList } from './NavList.tsx'
import { solutions } from '../solutions.tsx'

const Navbar = () => {
    return (
        <nav className={`flex items-center py-5 bg-primary`}>
            <div
                className={
                    'px-16 w-full flex gap-16 items-center mx-auto max-w-screen-xl'
                }
            >
                <NavList title={'Tasks'} items={navLinks} />
                <NavList
                    title={'Solutions'}
                    items={solutions.map((solution, index) => ({
                        href: `/solution${index + 1}`,
                        title: `Solution ${index + 1} - ${solution.title}`,
                    }))}
                />
            </div>
        </nav>
    )
}

export default Navbar
