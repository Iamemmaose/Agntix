import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Service' 


function App() {

  return (
    <>
    <Routers>
      <Header />
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
      </Routes>
      <Footer />
    </Routers>
    </>
  )
}

export default App



