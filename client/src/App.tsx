import react from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import ResponsiveAppBar from './components/Header'

function App() {

  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create-post" element={<Post/>} />
        </Routes>
      
      </Router>
    </div>
  )
}

export default App
