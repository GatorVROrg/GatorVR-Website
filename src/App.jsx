import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Events from './components/Events'
import Projects from './components/Projects'
import Tutorials from './components/Tutorials'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/tutorials' element={<Tutorials />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
