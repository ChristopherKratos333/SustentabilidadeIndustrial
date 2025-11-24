import React from 'react';
import { Cloud, Users, Headset, BarChart2, Shield, FileCheck, Globe, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero */}
      <div className="relative bg-gray-900 h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/office2/1600/900" 
            alt="Office background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rastreabilidade e <br/>
              Sustentabilidade para <br/>
              Cadeia Produtiva
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              A Ecotrace oferece soluções avançadas de rastreabilidade, tecnologia blockchain e monitoramento ambiental para garantir transparência, eficiência e responsabilidade em toda a cadeia de valor.
            </p>
            <Link to="/contato" className="px-8 py-3 bg-[#1e5336] hover:bg-[#153d26] text-white rounded-full font-medium transition-colors inline-block">
              Fale conosco
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards Offset */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-center border-t-4 border-[#1e5336] transition-colors">
            <div className="flex justify-center mb-4">
              <Cloud className="w-12 h-12 text-[#1e5336] dark:text-[#72b63b]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Soluções Inovadoras</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Desenvolvemos tecnologias inteligentes que tornam a cadeia produtiva mais confiável, transparente e sustentável, conectando todos os elos do processo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-center border-t-4 border-[#1e5336] transition-colors">
             <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-[#1e5336] dark:text-[#72b63b]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Equipe Especializada</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Nosso time reúne especialistas em tecnologia, sustentabilidade e processos industriais para entregar soluções robustas e adaptadas ao seu negócio.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-center border-t-4 border-[#1e5336] transition-colors">
             <div className="flex justify-center mb-4">
              <Headset className="w-12 h-12 text-[#1e5336] dark:text-[#72b63b]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Suporte 24/7</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Oferecemos acompanhamento contínuo e suporte técnico em tempo real para garantir estabilidade e performance em todas as etapas.
            </p>
          </div>
        </div>
      </div>

      {/* About Section Split */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950 mt-12 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <div className="grid grid-cols-2 gap-4 rounded-2xl overflow-hidden">
                 <img src="https://picsum.photos/seed/meeting/500/600" className="w-full h-full object-cover col-span-2 rounded-2xl" alt="Meeting" />
               </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-sm font-bold tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-2 block">Sobre nós</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Descubra o universo</h2>
              <h2 className="text-4xl font-bold text-[#1e5336] dark:text-[#72b63b] mb-6">Ecotrace.</h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                A Ecotrace combina inovação tecnológica com responsabilidade socioambiental para transformar cadeias produtivas. Nossas soluções são aplicadas em empresas que buscam transparência, segurança de dados e impacto positivo.
              </p>

              <div className="flex gap-12 mb-8">
                <div>
                   <div className="flex items-center gap-2 mb-1">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                         <div className="w-6 h-6 flex items-center justify-center text-[#1e5336] dark:text-[#72b63b] font-bold">★</div>
                      </div>
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">25</span>
                   </div>
                   <span className="text-sm text-gray-500 dark:text-gray-400">Anos de experiência</span>
                </div>
                 <div>
                   <div className="flex items-center gap-2 mb-1">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                         <div className="w-6 h-6 flex items-center justify-center text-[#1e5336] dark:text-[#72b63b] font-bold">➤</div>
                      </div>
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">400</span>
                   </div>
                   <span className="text-sm text-gray-500 dark:text-gray-400">Projetos implementados</span>
                </div>
              </div>

              <Link to="/sobre" className="px-8 py-3 bg-[#1e5336] hover:bg-[#153d26] text-white rounded-full font-medium transition-colors">
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Grid */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-bold tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-2 block">Nossos serviços</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">O que nós <br />oferecemos</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Criamos soluções digitais sustentáveis que ajudam empresas a monitorar, rastrear e comprovar cada etapa da produção com precisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#1e5336] dark:group-hover:text-[#72b63b] transition-colors">Rastreamento Inteligente</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Acompanhamento completo da cadeia produtiva com dados em tempo real, garantindo conformidade e autenticidade.
            </p>
          </div>
          
           {/* Item 2 */}
           <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#1e5336] dark:group-hover:text-[#72b63b] transition-colors">Conformidade ESG</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Sistemas integrados que facilitam auditorias, certificações e relatórios ESG com dados confiáveis e automatizados.
            </p>
          </div>

           {/* Item 3 */}
           <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#1e5336] dark:group-hover:text-[#72b63b] transition-colors">Relatórios Sustentáveis</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Painéis completos que apresentam métricas ambientais, sociais e de governança, auxiliando na tomada de decisões.
            </p>
          </div>

           {/* Item 4 */}
           <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#1e5336] dark:group-hover:text-[#72b63b] transition-colors">Plano de Sustentabilidade</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Estratégias personalizadas para fortalecer a governança ambiental e otimizar processos de forma responsável.
            </p>
          </div>

           {/* Item 5 */}
           <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#1e5336] dark:group-hover:text-[#72b63b] transition-colors">Gestão de Emissões</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Ferramentas para mensurar, reduzir e monitorar a pegada de carbono em diferentes etapas da produção.
            </p>
          </div>

           {/* Item 6 Placeholder */}
           <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center text-center border border-dashed border-gray-300 dark:border-gray-600">
             <div>
               <p className="font-medium text-gray-500 dark:text-gray-400 mb-4">Tem um desafio específico?</p>
               <Link to="/contato" className="text-[#1e5336] dark:text-[#72b63b] font-bold hover:underline">Entre em contato →</Link>
             </div>
           </div>

        </div>
      </section>
    </div>
  );
};

export default Services;