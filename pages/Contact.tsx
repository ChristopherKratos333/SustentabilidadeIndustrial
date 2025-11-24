import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="bg-white dark:bg-gray-900 pb-12 pt-12 text-center transition-colors">
         <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Entre em contato</h1>
         <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
           Estamos comprometidos em construir soluções sustentáveis. Fale conosco e vamos transformar o seu projeto juntos.
         </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          
          {/* Left Side Info */}
          <div className="bg-transparent lg:w-1/3 space-y-8 pt-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conecte-se conosco</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm leading-relaxed">
                Tem alguma dúvida sobre nossos serviços ambientais, relatórios ESG ou soluções de monitoramento inteligente? Entre em contato, nossa equipe está pronta para orientar você no que for necessário.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#1e5336] p-2 rounded-full text-white mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">Endereço</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Rua Dr. Olavo Egídio, 58 - Rio de Janeiro, RJ</p>
                </div>
              </div>

               <div className="flex items-center gap-4">
                <div className="bg-[#1e5336] p-2 rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">Número</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">(21) 99999-9999</p>
                </div>
              </div>

               <div className="flex items-center gap-4">
                <div className="bg-[#1e5336] p-2 rounded-full text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">E-mail</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">ecotrace@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#1e5336] dark:hover:text-[#72b63b]">
                <div className="bg-[#1e5336] p-1.5 rounded-full text-white"><Twitter size={14} /></div>
                @ecotrace
              </a>
               <a href="#" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#1e5336] dark:hover:text-[#72b63b]">
                <div className="bg-[#1e5336] p-1.5 rounded-full text-white"><Instagram size={14} /></div>
                @ecotraceambiental
              </a>
               <a href="#" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#1e5336] dark:hover:text-[#72b63b]">
                <div className="bg-[#1e5336] p-1.5 rounded-full text-white"><Youtube size={14} /></div>
                @ecotraceambientalTV
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:w-5/12 border border-gray-100 dark:border-gray-700 w-full transition-colors">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contate-nos</h2>
            <form className="space-y-5">
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-[#1e5336] dark:focus:border-[#72b63b] py-2" 
                  placeholder="Nome"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-300 peer-focus:text-sm"
                >
                  Nome
                </label>
              </div>

               <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-[#1e5336] dark:focus:border-[#72b63b] py-2" 
                  placeholder="E-mail"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-300 peer-focus:text-sm"
                >
                  E-mail
                </label>
              </div>

               <div className="relative">
                <textarea 
                  id="message" 
                  rows={4}
                  className="peer w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-[#1e5336] dark:focus:border-[#72b63b] p-2 mt-4" 
                  placeholder="Mensagem"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-2 top-0 text-gray-600 dark:text-gray-400 text-sm transition-all bg-white dark:bg-gray-800 px-1"
                >
                  Mensagem
                </label>
              </div>

              <button type="button" className="w-full bg-[#1e5336] text-white py-3 rounded-full font-bold hover:bg-[#153d26] transition-colors shadow-lg">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 mt-12 grayscale opacity-80">
        <img 
          src="https://picsum.photos/seed/map/1920/400" 
          alt="Map location" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Contact;