import React from 'react';
import { Eye, EyeOff, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

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
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Gradient Side (Green) */}
      <div className="md:w-1/2 bg-gradient-to-br from-[#72b63b] to-[#1e5336] relative flex items-center justify-center p-12 overflow-hidden">
        {/* Abstract blur shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#72b63b] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1e5336] rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10 text-left w-full max-w-md">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            EcoTrace te <br />
            antecipa.
          </h1>
        </div>
      </div>

      {/* Right Form Side (White) */}
      <div className="md:w-1/2 bg-white flex items-center justify-center p-8 relative">
        {/* Logo Positioned Top Right on White Side */}
        <div className="absolute top-8 right-8 hidden md:block">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-between items-center md:hidden mb-8">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-8">Entrar</h2>
          
          <form className="space-y-6">
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                className="peer w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#1e5336] focus:ring-1 focus:ring-[#1e5336]" 
                placeholder="E-mail"
              />
              <label 
                htmlFor="email" 
                className="absolute left-3 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                E-mail
              </label>
            </div>

            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                id="password" 
                className="peer w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#1e5336] focus:ring-1 focus:ring-[#1e5336]" 
                placeholder="Senha"
              />
              <label 
                htmlFor="password" 
                className="absolute left-3 -top-2.5 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Senha
              </label>
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button type="button" className="w-full bg-[#1e5336] text-white py-3 rounded-lg font-bold hover:bg-[#153d26] transition-colors shadow-md">
              Entrar
            </button>

            <div className="relative flex items-center justify-center my-6">
               <div className="border-t border-gray-300 w-full absolute"></div>
               <span className="bg-white px-3 text-gray-500 relative z-10 text-sm">ou</span>
            </div>

            <button type="button" className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <span className="text-xl font-bold text-blue-500">G</span>
              Faça login com o Google
            </button>

            <div className="flex items-center justify-between mt-4 text-sm">
               <label className="flex items-center text-gray-600 cursor-pointer">
                  <input type="checkbox" className="mr-2 rounded text-[#1e5336] focus:ring-[#1e5336]" />
                  Lembrar-me
               </label>
               <a href="#" className="text-blue-400 hover:underline">Esqueceu a senha?</a>
            </div>

            <div className="text-center mt-8 text-sm text-gray-600">
               Ainda não tem uma conta? <Link to="/cadastro" className="text-blue-400 hover:underline font-medium">Cadastre-se</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;