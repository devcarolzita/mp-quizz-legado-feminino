import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PageCard from './pages/PageCard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/quiz" element={ <PageCard />} />

    </Routes>
     
    </>
  )
}

export default App
