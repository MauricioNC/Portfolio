import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Topbar from './components/Topbar'
import './index.css'

function App() {
  return (
    <>
      <div className='w-full col-span-12 2xl:col-start-3 2xl:col-span-8'>
        <Topbar />
        <Hero />
      </div>
      <div className='w-full col-span-12 xl:col-start-3 xl:col-span-8'>
        <main>
          <Experience />
          <Projects />
          <Skills />
          <About />
        </main>
      </div>
    </>
  )
}

export default App
