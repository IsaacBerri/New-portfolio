import Header from './components/Header'
import Navbar from './components/Navbar'
import 'animate.css'
import './styles/App.css'
import About from './components/About'
import Skills from './components/Skills';
import Project from './components/Project'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Project/>
      <Skills/>
    </>
  )
}

export default App
