import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StrictMode } from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/index.jsx'

function App() {

  return (
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
  )
}

export default App
