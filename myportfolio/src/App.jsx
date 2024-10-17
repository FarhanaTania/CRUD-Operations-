/*File Name: scripts.js
 Student Name: Farhana Tania
 Student ID: [301107041]
 Date: [September 29,2024]*/
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'

function App() {

  return (
    <div>
        <Navbar />
        <Home />
        <About /> 
        <Service />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App