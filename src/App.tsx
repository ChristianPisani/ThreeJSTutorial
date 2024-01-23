import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Navbar } from './components'
import { Tutorial } from './tutorial/tutorial.tsx'
import { tasks } from './tasks.tsx'
import { solutions } from './solutions.tsx'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div
                    className={`min-h-screen bg-hero-pattern bg-cover bg-repeat-y bg-fixed bg-center relative z-0 bg-primary h-svh flex flex-col`}
                >
                    <Navbar />
                    <div
                        className={
                            'grid px-16 py-8 gap-2 max-w-screen-xl m-auto backdrop-blur-md flex-grow w-full'
                        }
                    >
                        <Outlet />
                    </div>
                </div>
            ),
            children: [
                {
                    path: '',
                    element: <Tutorial />,
                },
                ...tasks.map((task, index) => ({
                    path: `task${index + 1}`,
                    element: task,
                })),

                ...solutions.map((solution, index) => ({
                    path: `solution${index + 1}`,
                    element: (
                        <>
                            <h1>Solution {index + 1}</h1>
                            <div className={'h-96'}>{solution.element}</div>
                        </>
                    ),
                })),
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default App
