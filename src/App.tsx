import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import FormKopi from './pages/FormKopi';
import Login from './pages/Login';
import Footer from './components/Footer';
function App() {
  return (
  <>
 <Router basename="/website-kopi">      
 <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/tambah-kopi" element={<FormKopi />} 
        />
        <Route path="/login" element={<Login />} 
        />
      </Routes>
      <Footer></Footer>
    </Router>
  </>
  )
}

export default App
