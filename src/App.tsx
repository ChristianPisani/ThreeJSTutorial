import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Navbar } from './components'
import { Task1 } from './pages/task1/task1.tsx'
import { Tutorial } from './pages/tutorial/tutorial.tsx'
import { Task2 } from './pages/task2/task2.tsx'
import { Task3 } from './pages/task3/task3.tsx'
import { Task4 } from './pages/task4/task4.tsx'
import { Task5 } from './pages/task5/task5.tsx'
import { Task6 } from './pages/task6/task6.tsx'
import { Task7 } from './pages/task7/task7.tsx'

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
                {
                    path: 'task1',
                    element: <Task1 />,
                },
                {
                    path: 'task2',
                    element: <Task2 />,
                },
                {
                    path: 'task3',
                    element: <Task3 />,
                },
                {
                    path: 'task4',
                    element: <Task4 />,
                },
                {
                    path: 'task5',
                    element: <Task5 />,
                },
                {
                    path: 'task6',
                    element: <Task6 />,
                },
                {
                    path: 'task7',
                    element: <Task7 />,
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default App
