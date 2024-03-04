import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Topbar from './components/Topbar'
import './index.css'

function App() {
  return (
    <>
      <div className='w-full'>
        <Topbar />
        <Hero />
      </div>
      <div className='w-full col-span-12 xl:col-start-3 xl:col-span-8'>
        <main>
          <Experience />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
