import { tasks } from '../tasks.tsx'

export const navLinks = [
    {
        href: '',
        title: 'Tutorial',
    },
    ...tasks.map((_, index) => ({
        href: `task${index + 1}`,
        title: `Task ${index + 1}`,
    })),
]
