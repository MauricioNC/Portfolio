import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Topbar from './components/Topbar'
import './index.css'

function App() {
  return (
    <main className='w-full col-span-12 xl:col-start-2 xl:col-span-10'>
      <Topbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />
    </main>
  )
}

export default App
