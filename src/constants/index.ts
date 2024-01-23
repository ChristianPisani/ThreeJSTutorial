import { tasks } from '../tasks.tsx'

export const navLinks = [
    ...tasks.map((task, index) => ({
        href: `task${index + 1}`,
        title: `Task ${index + 1} - ${task.props.title}`,
    })),
]
