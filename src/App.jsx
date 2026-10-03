import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Hours from './components/Hours'
import MenuSection from './components/MenuSection'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <a
        href="#main"
        className="sr-only rounded-full bg-bark-900 px-4 py-2 text-sm font-semibold text-sand-50 focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        <Hero />
        <MenuSection />
        <About />
        <Hours />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}