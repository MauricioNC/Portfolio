import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './index.css'

function App() {
  return (
    <main className='w-full col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8'>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />
    </main>
  )
}

export default App
