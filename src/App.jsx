import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProjects from './components/FeaturedProjects'
import DesignApproach from './components/DesignApproach'
import Skills from './components/Skills'
import Services from './components/Services'
import SelectedWork from './components/SelectedWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <DesignApproach />
        <Skills />
        <Services />
        <SelectedWork />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
