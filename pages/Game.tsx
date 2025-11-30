import React from 'react';
import { Gamepad2, Recycle, MousePointerClick } from 'lucide-react';

const Game: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 text-[#1e5336] dark:text-[#72b63b] rounded-full mb-6">
            <Gamepad2 size={32} />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e5336] dark:text-[#72b63b] mb-6 leading-tight">
            Jogue limpo com EcoTrace!
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Aprender sobre sustentabilidade nunca foi tão divertido. Neste desafio interativo, 
            sua missão é rápida e precisa: <strong>agarre os resíduos</strong> que aparecem na tela e 
            <strong> jogue-os na lixeira correta</strong> antes que o tempo acabe.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <MousePointerClick size={18} />
              <span>Arraste e Solte</span>
            </div>
            <div className="flex items-center gap-2">
              <Recycle size={18} />
              <span>Aprenda Reciclagem</span>
            </div>
          </div>
        </div>

        {/* Central Image */}
        <div className="flex flex-col justify-center items-center w-full mb-12 gap-8">
          <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1e5336]/10 dark:border-[#72b63b]/20 group">
            {/* Using a placeholder that represents a game/digital environment */}
            <img 
              src="https://picsum.photos/seed/ecogame/1200/675" 
              alt="Prévia do Jogo EcoTrace" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay Play Button (Linked to Itch.io) */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <a 
                href="https://bagigabi.itch.io/ecotrace"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#72b63b] hover:bg-[#1e5336] text-white p-6 rounded-full shadow-lg transform transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
                title="Jogar Agora"
              >
                <Gamepad2 size={48} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Itch.io Embed Widget */}
          <div className="w-full flex justify-center">
            <iframe 
              frameBorder="0" 
              src="https://itch.io/embed/4082288" 
              width="552" 
              height="167"
              title="EcoTrace Itch.io Widget"
              className="max-w-full"
            >
              <a href="https://bagigabi.itch.io/ecotrace">ECOTRACE by Bagigabi</a>
            </iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Game;