import React from 'react';
import { Leaf, ArrowRight, ShieldCheck, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  // Logo Component
  const Logo = () => (
    <div className="flex items-center gap-0.5 select-none">
      <span className="text-[#1e5336] font-bold text-4xl tracking-tighter">EC</span>
      <div className="relative flex items-center justify-center">
        <span className="text-[#1e5336] font-bold text-4xl tracking-tighter">O</span>
        <Leaf className="w-5 h-5 text-[#72b63b] fill-[#72b63b] absolute pb-0.5" />
      </div>
      <span className="text-[#72b63b] font-bold text-4xl tracking-tighter">TRACE</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header / Nav */}
      <nav className="w-full py-6 px-4 sm:px-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="scale-75 origin-left sm:scale-100">
            <Logo />
        </div>
        <div className="flex gap-4">
          <Link 
            to="/login" 
            className="px-6 py-2.5 rounded-full text-[#1e5336] font-medium hover:bg-green-50 transition-colors"
          >
            Entrar
          </Link>
          <Link 
            to="/cadastro" 
            className="px-6 py-2.5 rounded-full bg-[#1e5336] text-white font-medium hover:bg-[#153d26] transition-colors shadow-lg shadow-green-900/10"
          >
            Começar Agora
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center container mx-auto px-4 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Copy */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-[#1e5336] font-medium text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Plataforma Líder em ESG
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
              O futuro da <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5336] to-[#72b63b]">
                sustentabilidade
              </span> <br />
              é digital.
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Monitore, gerencie e comprove o impacto ambiental da sua empresa com a plataforma de rastreabilidade mais completa do mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/cadastro" 
                className="px-8 py-4 bg-[#1e5336] text-white rounded-full font-bold text-lg hover:bg-[#153d26] transition-all transform hover:scale-105 shadow-xl shadow-green-900/20 flex items-center justify-center gap-2"
              >
                Criar conta gratuita
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/login" 
                className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                Fazer Login
              </Link>
            </div>

            {/* Features Mini Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 mt-8">
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="p-3 bg-green-50 rounded-xl text-[#1e5336]">
                        <ShieldCheck size={24} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Dados Seguros</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="p-3 bg-green-50 rounded-xl text-[#1e5336]">
                        <BarChart3 size={24} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Analytics Real-time</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="p-3 bg-green-50 rounded-xl text-[#1e5336]">
                        <Globe size={24} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Escopo Global</span>
                </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block h-[600px] w-full">
             {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#1e5336]/10 to-[#72b63b]/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Main Image Container */}
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                    alt="Corporate Sustainability" 
                    className="w-full h-full object-cover"
                />
                
                {/* Floating Cards */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-xs">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[#72b63b] flex items-center justify-center text-white">
                            <Leaf size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm">Meta de Carbono</p>
                            <p className="text-xs text-green-600 font-bold">Atingida 98%</p>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#72b63b] w-[98%] h-full"></div>
                    </div>
                </div>

                <div className="absolute top-12 right-8 bg-[#1e5336] text-white p-4 rounded-xl shadow-lg border border-white/20">
                     <p className="text-xs opacity-80 mb-1">Economia Gerada</p>
                     <p className="text-2xl font-bold">R$ 1.2M</p>
                </div>
            </div>
          </div>

        </div>
      </main>
        
      {/* Footer Simple */}
      <footer className="py-6 text-center text-gray-400 text-sm">
        &copy; EcoTrace 2025. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Landing;