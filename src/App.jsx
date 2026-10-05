import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Hours from './components/Hours'
import Login from './components/Login'
import MenuSection from './components/MenuSection'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import { Router, useRouter } from './lib/router'

function Landing() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-4 py-2 text-sm font-semibold text-page focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60]"
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

function Pages() {
  const { path } = useRouter()
  const route = path.replace(/\/+$/, '') || '/'

  switch (route) {
    case '/login':
      return <Login />
    case '/signup':
      return <SignUp />
    default:
      return <Landing />
  }
}

export default function App() {
  return (
    <Router>
      <Pages />
    </Router>
  )
}