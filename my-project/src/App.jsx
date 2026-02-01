import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import {
  HomePage,
  FeaturesPage,
  DoctorsPage,
  AIConsultPage,
  ContactPage,
  LoginPage,
  RegisterPage
} from './pages'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <Router>
      <div className={`bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-50 font-display transition-colors duration-200`}>
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/ai-consult" element={<AIConsultPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
