import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ toggleDarkMode, darkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#101922]/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 lg:px-20 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">health_and_safety</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">HealthNet</h2>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-6">
            <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" to="/features">Tính năng</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" to="/doctors">Bác sĩ</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" to="/ai-consult">AI Tư vấn</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" to="/contact">Liên hệ</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <Link to="/login" className="hidden sm:flex h-10 px-5 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-all shadow-sm hover:shadow-md">
            Đăng nhập
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101922] px-6 py-4">
          <nav className="flex flex-col gap-4">
            <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300" to="/features" onClick={() => setMobileMenuOpen(false)}>Tính năng</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300" to="/doctors" onClick={() => setMobileMenuOpen(false)}>Bác sĩ</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300" to="/ai-consult" onClick={() => setMobileMenuOpen(false)}>AI Tư vấn</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300" to="/contact" onClick={() => setMobileMenuOpen(false)}>Liên hệ</Link>
            <Link to="/login" className="sm:hidden h-10 px-5 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold" onClick={() => setMobileMenuOpen(false)}>
              Đăng nhập
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
