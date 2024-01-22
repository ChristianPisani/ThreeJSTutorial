import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Navbar } from './components'
import { Tutorial } from './pages/tutorial/tutorial.tsx'
import { tasks } from './tasks.tsx'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div
                    className={`min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-fixed bg-center relative z-0 bg-primary`}
                >
                    <Navbar />
                    <div
                        className={
                            'grid px-16 py-8 gap-2 max-w-screen-xl m-auto backdrop-blur-xl'
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
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default App
