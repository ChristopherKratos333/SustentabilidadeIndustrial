import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, Twitter, Leaf } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-[#1e5336] font-semibold' : 'text-gray-600 hover:text-[#1e5336]';

  // Logo Component - First version style (Text-based with Leaf inside O)
  const Logo = () => (
    <div className="flex items-center gap-0.5 select-none">
      <span className="text-[#1e5336] font-bold text-3xl tracking-tighter">EC</span>
      <div className="relative flex items-center justify-center">
        <span className="text-[#1e5336] font-bold text-3xl tracking-tighter">O</span>
        <Leaf className="w-4 h-4 text-[#72b63b] fill-[#72b63b] absolute pb-0.5" />
      </div>
      <span className="text-[#72b63b] font-bold text-3xl tracking-tighter">TRACE</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm border-b border-gray-100">
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
              <button className="px-5 py-2 text-sm font-medium text-[#1e5336] border border-[#1e5336] rounded-full hover:bg-[#1e5336] hover:text-white transition-colors">
                Ver demonstração
              </button>
              <Link to="/login" className="px-6 py-2 text-sm font-medium text-white bg-[#1e5336] rounded-full hover:bg-[#153d26] transition-colors shadow-lg shadow-green-900/20">
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#1e5336]" onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
              <Link to="/servicos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#1e5336]" onClick={() => setIsMobileMenuOpen(false)}>Serviços</Link>
              <Link to="/sobre" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#1e5336]" onClick={() => setIsMobileMenuOpen(false)}>Sobre</Link>
              <Link to="/contato" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#1e5336]" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
              <div className="mt-4 flex flex-col space-y-2 w-full px-4">
                <button className="w-full px-5 py-2 text-sm font-medium text-[#1e5336] border border-[#1e5336] rounded-full">
                  Ver demonstração
                </button>
                <Link to="/login" className="w-full text-center px-6 py-2 text-sm font-medium text-white bg-[#1e5336] rounded-full">
                  Login
                </Link>
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
      <footer className="bg-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <Logo />
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-medium text-gray-600">
              <Link to="/" className="hover:text-[#1e5336] transition-colors">Início</Link>
              <Link to="/servicos" className="hover:text-[#1e5336] transition-colors">Serviços</Link>
              <Link to="/sobre" className="hover:text-[#1e5336] transition-colors">Sobre</Link>
              <Link to="/contato" className="hover:text-[#1e5336] transition-colors">Contato</Link>
            </nav>

            <div className="flex space-x-6 mb-8">
              <a href="#" className="bg-[#1e5336] p-2 rounded-full text-white hover:bg-[#153d26] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-[#1e5336] p-2 rounded-full text-white hover:bg-[#153d26] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-[#1e5336] p-2 rounded-full text-white hover:bg-[#153d26] transition-colors">
                <Youtube size={18} />
              </a>
            </div>

            <div className="text-center text-xs text-gray-500">
              <p>Todos os direitos reservados a EcoTrace 2025.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;