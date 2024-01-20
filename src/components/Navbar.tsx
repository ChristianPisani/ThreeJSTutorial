import { useState } from 'react'
import { menu, close } from '../assets'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

    return (
        <nav className={`flex items-center py-5 bg-primary`}>
            <div
                className={
                    'px-16 w-full flex justify-between items-center mx-auto max-w-screen-xl'
                }
            >
                <ul className={'list-none hidden sm:flex flex-row gap-10'}>
                    {navLinks.map((link) => (
                        <li
                            key={link.href}
                            className={`${
                                active === link.title
                                    ? 'text-white'
                                    : 'text-secondary'
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <Link to={`${link.href}`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>

                <div
                    className={'sm:hidden flex flex-1 justify-end items-center'}
                >
                    <img
                        src={toggle ? close : menu}
                        alt={'menu'}
                        className={
                            'w-[28px] h-[28px] object-contain cursor-pointer'
                        }
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? 'hidden' : 'flex'
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul
                            className={
                                'list-none flex justify-end items-start flex-col gap-4'
                            }
                        >
                            {navLinks.map((link) => (
                                <li
                                    key={link.href}
                                    className={`${
                                        active === link.title
                                            ? 'text-white'
                                            : 'text-secondary'
                                    } font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle)
                                        setActive(link.title)
                                    }}
                                >
                                    <Link to={`#${link.href}`}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
