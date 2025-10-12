import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SingUp } from './pages/SingUp'
import { Header } from './components/Header'

function App() {
  const [value, setValue] = useState(0)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SingUp />} />
      </Routes>
    </div>
  )
}

export default App
