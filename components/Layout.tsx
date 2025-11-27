import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Leaf, Moon, Sun, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path 
    ? 'text-[#1e5336] dark:text-[#72b63b] font-semibold' 
    : 'text-gray-600 dark:text-gray-300 hover:text-[#1e5336] dark:hover:text-[#72b63b]';

  // Check for saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // Changed logic: Defaults to Light mode. Only activates dark mode if explicitly saved as 'dark'.
    // Removed the "prefers-color-scheme" check to satisfy user request for Light Mode default.
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      // Ensure 'light' is set if nothing was there, or keep it consistent
      if (!savedTheme) localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  // Logo Component - Adapted for Dark Mode
  const Logo = () => (
    <div className="flex items-center gap-0.5 select-none">
      <span className="text-[#1e5336] dark:text-white font-bold text-3xl tracking-tighter transition-colors">EC</span>
      <div className="relative flex items-center justify-center">
        <span className="text-[#1e5336] dark:text-white font-bold text-3xl tracking-tighter transition-colors">O</span>
        <Leaf className="w-4 h-4 text-[#72b63b] fill-[#72b63b] absolute pb-0.5" />
      </div>
      <span className="text-[#72b63b] font-bold text-3xl tracking-tighter">TRACE</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md fixed w-full z-50 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={isActive('/')}>Início</Link>
              <Link to="/servicos" className={isActive('/servicos')}>Serviços</Link>
              <Link to="/sobre" className={isActive('/sobre')}>Sobre</Link>
              <Link to="/contato" className={isActive('/contato')}>Contato</Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-[#1e5336] dark:text-[#72b63b] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button className="px-5 py-2 text-sm font-medium text-[#1e5336] border border-[#1e5336] dark:text-[#72b63b] dark:border-[#72b63b] rounded-full hover:bg-[#1e5336] hover:text-white dark:hover:bg-[#72b63b] dark:hover:text-white transition-colors">
                Ver demonstração
              </button>
              
              {currentUser ? (
                <div className="flex items-center gap-2">
                   <div className="text-sm font-medium text-[#1e5336] dark:text-[#72b63b] mr-2">
                      {currentUser.email?.split('@')[0]}
                   </div>
                   <button 
                     onClick={handleLogout}
                     className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                     title="Sair"
                   >
                     <LogOut size={18} />
                   </button>
                </div>
              ) : (
                <Link to="/login" className="px-6 py-2 text-sm font-medium text-white bg-[#1e5336] rounded-full hover:bg-[#153d26] transition-colors shadow-lg shadow-green-900/20">
                  Login
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-[#1e5336] dark:text-[#72b63b]"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#1e5336] dark:hover:text-[#72b63b]" onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
              <Link to="/servicos" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#1e5336] dark:hover:text-[#72b63b]" onClick={() => setIsMobileMenuOpen(false)}>Serviços</Link>
              <Link to="/sobre" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#1e5336] dark:hover:text-[#72b63b]" onClick={() => setIsMobileMenuOpen(false)}>Sobre</Link>
              <Link to="/contato" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#1e5336] dark:hover:text-[#72b63b]" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
              
              <div className="mt-4 flex flex-col space-y-2 w-full px-4">
                <button className="w-full px-5 py-2 text-sm font-medium text-[#1e5336] dark:text-[#72b63b] border border-[#1e5336] dark:border-[#72b63b] rounded-full">
                  Ver demonstração
                </button>
                
                {currentUser ? (
                  <button 
                    onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                    className="w-full text-center px-6 py-2 text-sm font-medium text-red-600 border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 rounded-full"
                  >
                    Sair ({currentUser.email?.split('@')[0]})
                  </button>
                ) : (
                  <Link to="/login" className="w-full text-center px-6 py-2 text-sm font-medium text-white bg-[#1e5336] rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-950 pt-16 pb-8 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <Logo />
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-medium text-gray-600 dark:text-gray-400">
              <Link to="/" className="hover:text-[#1e5336] dark:hover:text-[#72b63b] transition-colors">Início</Link>
              <Link to="/servicos" className="hover:text-[#1e5336] dark:hover:text-[#72b63b] transition-colors">Serviços</Link>
              <Link to="/sobre" className="hover:text-[#1e5336] dark:hover:text-[#72b63b] transition-colors">Sobre</Link>
              <Link to="/contato" className="hover:text-[#1e5336] dark:hover:text-[#72b63b] transition-colors">Contato</Link>
            </nav>

            <div className="text-center text-xs text-gray-500 dark:text-gray-500">
              <p>&copy; EcoTrace 2025. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;