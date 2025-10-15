import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './src/router'
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <RouterProvider router={router} />
        </BrowserRouter>
    </React.StrictMode>
)