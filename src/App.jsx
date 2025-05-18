// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import RegisterPage from './pages/register/register';
import LoginPage from './pages/login/login';
import HomePage from './pages/home/home';
import TermsPolicy from './pages/terms-policy/terms-policy';
import About from './pages/about/about';
import Animals from './pages/animals/animals';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/terms-policy' element={<TermsPolicy />} />
        <Route path='/animals' element={<Animals />} />
        <Route path='/about-us' element={<About />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
