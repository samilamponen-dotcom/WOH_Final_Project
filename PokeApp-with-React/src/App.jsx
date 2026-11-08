import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Compare from './pages/Compare'
import Navbar from './components/NavBar'
import Footer from './components/Footer'


function App() {
  return (
    <div className = "d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App
