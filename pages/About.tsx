import React from 'react';
import { Shield, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero */}
      <div className="relative h-[400px]">
        <img 
          src="https://picsum.photos/seed/teamwork/1600/600" 
          alt="Team meeting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Sobre nós</h1>
        </div>
      </div>

      {/* Intro Text */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              Conheça <span className="text-[#1e5336] dark:text-[#72b63b]">o futuro do <br /> rastreamento <br /> sustentável.</span>
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              A Ecotrace é uma plataforma inovadora focada em transformar cadeias produtivas por meio de tecnologia, transparência e responsabilidade ambiental.
            </p>
          </div>
          <div className="lg:w-1/3">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Combinando análise inteligente de dados, relatórios ESG integrados e sistemas de rastreabilidade avançados, ajudamos empresas a tomar decisões mais sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Pills */}
      <section className="pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-start space-x-4 border border-gray-100 dark:border-gray-700 transition-colors">
            <div className="bg-[#1e5336] p-3 rounded-full flex-shrink-0">
              <Shield className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Transparência Garantida</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Rastreabilidade completa e confiável em todas as etapas da cadeia produtiva.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-start space-x-4 border border-gray-100 dark:border-gray-700 transition-colors">
            <div className="bg-[#1e5336] p-3 rounded-full flex-shrink-0">
              <Lightbulb className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Insights Sustentáveis</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Relatórios ESG e indicadores claros para apoiar decisões estratégicas.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-start space-x-4 border border-gray-100 dark:border-gray-700 transition-colors">
            <div className="bg-[#1e5336] p-3 rounded-full flex-shrink-0">
              <Users className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Equipe Especializada</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Profissionais experientes em tecnologia, auditoria e gestão ambiental.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 md:h-96 rounded-2xl overflow-hidden">
            <img src="https://picsum.photos/seed/officepeople1/800/600" className="w-full h-full object-cover" alt="Office Work" />
          </div>
          <div className="grid grid-cols-2 gap-4 h-64 md:h-96">
             <div className="rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/officepeople2/400/600" className="w-full h-full object-cover" alt="Discussion" />
             </div>
             <div className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                 <img src="https://picsum.photos/seed/officepeople3/400/600" className="w-full h-full object-cover" alt="Strategy" />
             </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              <span className="text-[#1e5336] dark:text-[#72b63b]">Membros</span> <span className="text-gray-400 dark:text-gray-500">do time</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Gabriela Sena", 
                role: "Programação de Jogos Digitais",
                description: "Interatividade",
                img: "/imagens/gabriela-sena.jpg"
              },
              { 
                name: "Christopher Alves", 
                role: "Informática",
                description: "Codificação do site",
                img: "/imagens/christopher-alves.jpg"
              },
              { 
                name: "Lucas Gomes", 
                role: "Multimídia",
                description: "Infraestrutura dos acessos digitais",
                img: "/imagens/lucas-gomes.jpg"
              },
              { 
                name: "Lucas Gustavo", 
                role: "Design Gráfico",
                description: "Estilo do site e do projeto",
                img: "/imagens/lucas-gustavo.jpg"
              }
            ].map((member) => (
              <div key={member.name} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group relative transition-colors h-96">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#1e5336] rounded-xl p-4 text-center shadow-lg transform transition-all duration-300 translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-green-200 text-xs mb-0 group-hover:mb-2 transition-all duration-300">{member.role}</p>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-300">
                    <p className="text-white text-sm border-t border-white/20 pt-2 leading-tight">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;