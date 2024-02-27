import 'animate.css'
import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx';
import Project from './components/Project.jsx'

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
