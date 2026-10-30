import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Compare from './pages/Compare'
import Navbar from './components/NavBar'


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </>
  );
}

export default App
