import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type NavItemProps = { title: string; href: string; onClick: void }

type NavListProps = {
    title: string
    items: NavItemProps[]
}

const NavItem: FC<NavItemProps> = ({ title, href, onClick }) => {
    const [active, setActive] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setActive(location?.pathname?.endsWith(href) ?? false)
    }, [href, location])

    return (
        <li
            key={`${href}${active}`}
            className={`${
                active ? 'text-white' : 'text-secondary'
            } hover:text-white text-[18px] font-medium cursor-pointer`}
        >
            <Link to={`${href}`} onClick={onClick}>
                {title}
            </Link>
        </li>
    )
}

export const NavList: FC<NavListProps> = ({ items, title }) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className={'hover:underline z-20'}
            >
                {title}
            </button>
            {open && (
                <>
                    <ul
                        className={
                            'flex flex-col gap-4 w-auto absolute z-50 bg-primary px-10 py-8'
                        }
                    >
                        {items.map((item, index) => (
                            <NavItem
                                onClick={() => setOpen(false)}
                                key={index}
                                {...item}
                            />
                        ))}
                    </ul>
                    <div
                        className={'w-full h-full fixed inset-0 z-10'}
                        onClick={() => setOpen(false)}
                    ></div>
                </>
            )}
        </div>
    )
}
