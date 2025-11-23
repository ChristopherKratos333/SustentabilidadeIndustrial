import React from 'react';
import { Leaf, ShieldCheck, Zap, Activity, BarChart3, PieChart, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Conectando <br />
            sustentabilidade e <br />
            inteligência de <br />
            dados.
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Monitore resíduos, energias e metas ESG com tecnologia de ponta.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Ver demonstração
            </button>
            <button className="px-6 py-3 bg-[#1e5336] text-white rounded-full font-medium hover:bg-[#153d26] transition-colors shadow-lg shadow-green-900/20">
              Saiba mais
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4 rounded-3xl overflow-hidden p-2">
            <img 
              src="https://picsum.photos/seed/hands1/600/800" 
              alt="Hands holding plant" 
              className="w-full h-64 md:h-80 object-cover rounded-tl-[80px] rounded-br-2xl" 
            />
             <img 
              src="https://picsum.photos/seed/leaf1/600/800" 
              alt="Green leaf detail" 
              className="w-full h-64 md:h-80 object-cover rounded-tr-[80px] rounded-bl-2xl mt-12" 
            />
          </div>
          {/* Decorative green blur */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-green-200/50 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Welcome Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo ao EcoTrace</h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Transformando dados em sustentabilidade, transparência e impacto real.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-green-50 rounded-full group-hover:bg-[#1e5336] transition-colors duration-300">
                <TrendingUp className="w-10 h-10 text-[#1e5336] group-hover:text-white" />
              </div>
              <h3 className="font-bold bg-[#72b63b] text-white py-1 px-4 rounded-full text-sm mb-4 w-full">Rastreamento de resíduos</h3>
              <p className="text-sm text-gray-600">Gerando, transportando e destinando com eficiência.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col items-center text-center">
               <div className="mb-6 p-4 bg-green-50 rounded-full group-hover:bg-[#1e5336] transition-colors duration-300">
                <Zap className="w-10 h-10 text-[#1e5336] group-hover:text-white" />
              </div>
              <h3 className="font-bold bg-[#72b63b] text-white py-1 px-4 rounded-full text-sm mb-4 w-full">Monitoramento energético</h3>
              <p className="text-sm text-gray-600">Controlando o consumo para reduzir custos e impactos.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col items-center text-center">
               <div className="mb-6 p-4 bg-green-50 rounded-full group-hover:bg-[#1e5336] transition-colors duration-300">
                <PieChart className="w-10 h-10 text-[#1e5336] group-hover:text-white" />
              </div>
              <h3 className="font-bold bg-[#72b63b] text-white py-1 px-4 rounded-full text-sm mb-4 w-full">Relatórios ESG</h3>
              <p className="text-sm text-gray-600">Transformando dados em ações sustentáveis.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col items-center text-center">
               <div className="mb-6 p-4 bg-green-50 rounded-full group-hover:bg-[#1e5336] transition-colors duration-300">
                <ShieldCheck className="w-10 h-10 text-[#1e5336] group-hover:text-white" />
              </div>
              <h3 className="font-bold bg-[#72b63b] text-white py-1 px-4 rounded-full text-sm mb-4 w-full">Compliance ambiental</h3>
              <p className="text-sm text-gray-600">Garantindo conformidade e transparência em cada etapa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EcoTrace Predict Section */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                EcoTrace Predict - Sustentabilidade que se antecipa
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Antecipe riscos ambientais, otimize recursos e acelere suas metas ESG com inteligência preditiva de dados.
                </h3>
                <p className="text-gray-600">
                  O EcoTrace Predict analisa padrões operacionais e indicadores ambientais para evitar desperdícios e orientar decisões sustentáveis.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Previsão de desvios ambientais",
                  "Otimização automatizada",
                  "Simulação de cenários ESG",
                  "Alertas inteligentes em tempo real"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#72b63b] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="px-8 py-3 bg-[#1e5336] text-white rounded-full font-medium hover:bg-[#153d26] transition-colors shadow-lg shadow-green-900/20">
                Fale com o nosso time
              </button>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                  src="https://picsum.photos/seed/cyber1/800/600" 
                  alt="Predict Dashboard" 
                  className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a1b] to-transparent mix-blend-multiply pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <div className="flex gap-4">
                     <div className="bg-black/70 backdrop-blur-sm p-3 rounded-lg border border-green-500/30 text-xs text-green-400 font-mono">
                        System: Normal
                     </div>
                     <div className="bg-black/70 backdrop-blur-sm p-3 rounded-lg border border-green-500/30 text-xs text-green-400 font-mono">
                        Optimization: 98%
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Os resultados falam por si, <br />
              <span className="italic font-serif text-gray-500">assim como nossos clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Testimonial 1 - Text Heavy */}
            <div className="col-span-1 md:col-span-2 bg-[#72b63b] p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center">
              <p className="text-[#1a3e2a] font-medium text-lg mb-6 relative z-10">
                "O EcoTrace Predict trouxe previsibilidade para nossa gestão ambiental, reduzindo desperdícios e fortalecendo nossa governança ESG. A tomada de decisão se tornou mais precisa e estratégica."
              </p>
              <div className="flex items-center gap-3">
                 <div className="text-sm font-bold text-[#1a3e2a]">
                    Ricardo da Silva <br/>
                    <span className="font-normal text-xs opacity-80">CEO do Itaú</span>
                 </div>
              </div>
            </div>

            {/* Testimonial 2 - Logo/Image */}
            <div className="bg-black rounded-2xl flex items-center justify-center p-8 aspect-square relative overflow-hidden group">
               <img src="https://picsum.photos/seed/toyota/400/400" className="absolute inset-0 opacity-40 group-hover:scale-110 transition-transform" />
               <span className="text-white font-bold text-xl relative z-10 tracking-widest">TOYOTA</span>
            </div>

             {/* Testimonial 3 - Person */}
             <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-square relative group">
               <img src="https://picsum.photos/seed/person1/400/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>

            {/* Row 2 */}
            <div className="bg-black rounded-2xl flex items-center justify-center p-8 aspect-square relative group">
               <span className="text-white font-bold text-xl tracking-widest">Nestlé</span>
            </div>

             <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-square relative">
               <img src="https://picsum.photos/seed/person2/400/400" className="w-full h-full object-cover" />
            </div>

             <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-square relative">
               <img src="https://picsum.photos/seed/person3/400/400" className="w-full h-full object-cover" />
            </div>
             
             <div className="bg-black rounded-2xl flex items-center justify-center p-8 aspect-square">
               <span className="text-white font-bold text-xl italic font-serif">sabesp</span>
            </div>
            
            {/* Testimonial Large - Text */}
             <div className="col-span-1 md:col-span-2 bg-[#72b63b] p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center">
              <p className="text-[#0e2a18] font-medium text-lg mb-6 relative z-10">
                "Com o EcoTrace Predict conseguimos antecipar riscos operacionais e otimizar o consumo energético nas linhas de produção. É uma ferramenta essencial para uma indústria realmente sustentável."
              </p>
              <div className="flex items-center gap-3">
                 <div className="text-sm font-bold text-[#0e2a18]">
                    Roberto Oliveira <br/>
                    <span className="font-normal text-xs opacity-80">Engenheiro ambiental da Toyota</span>
                 </div>
              </div>
            </div>

            <div className="bg-black rounded-2xl flex items-center justify-center p-8 aspect-square relative overflow-hidden">
               <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Itaú</span>
               </div>
            </div>

            <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-square relative">
               <img src="https://picsum.photos/seed/person4/400/400" className="w-full h-full object-cover" />
            </div>

          </div>
        </div>
      </section>

      {/* Leader Stats Section */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Somos <span className="italic font-serif text-gray-500">líderes</span> em <br />
              todas as categorias
            </h2>
            <p className="text-gray-600">
              Nas mais recente avaliações de satisfação, a EcoTrace tem a classificação mais alta em todos os aspectos. Com base em mais de 20.000 avaliações de clientes reais.
            </p>
          </div>
          
          <div className="lg:w-2/3 w-full space-y-4">
            {/* Bar 1 */}
            <div className="w-full h-12 bg-gray-100 rounded-lg overflow-hidden flex">
              <div className="h-full bg-[#72b63b] w-[82%] flex items-center px-4">
                <span className="text-white font-bold text-sm">EcoTrace</span>
              </div>
              <div className="h-full flex-grow flex items-center justify-end px-4">
                <span className="text-gray-500 text-xs font-bold">82%</span>
              </div>
            </div>

            {/* Bar 2 */}
            <div className="w-full h-12 bg-gray-100 rounded-lg overflow-hidden flex">
               <div className="h-full bg-gray-400 w-[74%] flex items-center px-4">
                <span className="text-white font-bold text-sm">EcoNova</span>
              </div>
              <div className="h-full flex-grow flex items-center justify-end px-4 bg-gray-600">
                <span className="text-white text-xs font-bold">74%</span>
              </div>
            </div>

             {/* Bar 3 */}
            <div className="w-full h-12 bg-gray-100 rounded-lg overflow-hidden flex">
               <div className="h-full bg-gray-400 w-[67%] flex items-center px-4">
                <span className="text-white font-bold text-sm">BlueEarth</span>
              </div>
              <div className="h-full flex-grow flex items-center justify-end px-4 bg-gray-600">
                <span className="text-white text-xs font-bold">67%</span>
              </div>
            </div>

             {/* Bar 4 */}
            <div className="w-full h-12 bg-gray-100 rounded-lg overflow-hidden flex">
               <div className="h-full bg-gray-400 w-[49%] flex items-center px-4">
                <span className="text-white font-bold text-sm">BioTrack</span>
              </div>
              <div className="h-full flex-grow flex items-center justify-end px-4 bg-gray-600">
                <span className="text-white text-xs font-bold">49%</span>
              </div>
            </div>

             {/* Bar 5 */}
            <div className="w-full h-12 bg-gray-100 rounded-lg overflow-hidden flex">
               <div className="h-full bg-gray-400 w-[41%] flex items-center px-4">
                <span className="text-white font-bold text-sm">TerraLogic</span>
              </div>
              <div className="h-full flex-grow flex items-center justify-end px-4 bg-gray-600">
                <span className="text-white text-xs font-bold">41%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;