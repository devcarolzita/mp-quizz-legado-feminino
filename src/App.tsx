import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PageCard from './pages/PageCard'
import Result from './pages/Result'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/quiz" element={ <PageCard />} />
      <Route path="/result" element={ <Result />} />
    </Routes>
     
    </>
  )
}

export default App
