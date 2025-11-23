import React from 'react';
import { Shield, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
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
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Conheça <span className="text-[#1e5336]">o futuro do <br /> rastreamento <br /> sustentável.</span>
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-gray-600 leading-relaxed">
              A Ecotrace é uma plataforma inovadora focada em transformar cadeias produtivas por meio de tecnologia, transparência e responsabilidade ambiental.
            </p>
          </div>
          <div className="lg:w-1/3">
            <p className="text-gray-600 leading-relaxed">
              Combinando análise inteligente de dados, relatórios ESG integrados e sistemas de rastreabilidade avançados, ajudamos empresas a tomar decisões mais sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Pills */}
      <section className="pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start space-x-4 border border-gray-100">
            <div className="bg-[#1e5336] p-3 rounded-full flex-shrink-0">
              <Shield className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Transparência Garantida</h3>
              <p className="text-xs text-gray-500">Rastreabilidade completa e confiável em todas as etapas da cadeia produtiva.</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start space-x-4 border border-gray-100">
            <div className="bg-[#1e5336] p-3 rounded-full flex-shrink-0">
              <Lightbulb className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Insights Sustentáveis</h3>
              <p className="text-xs text-gray-500">Relatórios ESG e indicadores claros para apoiar decisões estratégicas.</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start space-x-4 border border-gray-100">
            <div className="bg-[#1e5336] p-3 rounded-full flex-shrink-0">
              <Users className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Equipe Especializada</h3>
              <p className="text-xs text-gray-500">Profissionais experientes em tecnologia, auditoria e gestão ambiental.</p>
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
             <div className="rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                 <img src="https://picsum.photos/seed/officepeople3/400/600" className="w-full h-full object-cover" alt="Strategy" />
             </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e5336]">
              Membros <span className="text-white drop-shadow-md font-sans">do time</span>
            </h2>
            {/* The PDF has "Membros do time" with 'do time' in white. That's unusual on a light background. 
                Looking at the image, the background is light gray, "Membros" is dark green, "do time" is white...
                Wait, in the screenshot "Membros" is Green, "do time" is White. The background is a very light gray.
                White text on light gray is unreadable. Let's look closer.
                Ah, the screenshot has "Membros" in Green, "do time" in White with a subtle shadow maybe? 
                Or maybe the background is actually darker gray in that section?
                Wait, looking at Page 1 screenshot bottom, the background is light gray. "Membros" is Dark Green. "do time" is White.
                This implies a text shadow or outline is essential, or my interpretation of the background color is off.
                Let's stick to Dark Green for both or use a readable contrast. I'll make "do time" white with a strong shadow for effect, or just a lighter green.
                Actually, let's just make it standard readable colors.
            */}
             <h2 className="text-4xl font-bold">
              <span className="text-[#1e5336]">Membros</span> <span className="text-gray-400">do time</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Lara Diniz", role: "CEO & Cofundadora", img: "https://picsum.photos/seed/lara/300/400" },
              { name: "Rafael Monteiro", role: "Diretor de Tecnologia", img: "https://picsum.photos/seed/rafael/300/400" },
              { name: "Camila Torres", role: "Gerente de ESG e Compliance", img: "https://picsum.photos/seed/camila/300/400" },
              { name: "Diego Carvalho", role: "Analista de Sustentabilidade", img: "https://picsum.photos/seed/diego/300/400" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg group relative">
                <img src={member.img} alt={member.name} className="w-full h-80 object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#1e5336] rounded-xl p-3 text-center shadow-lg transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-green-200 text-xs">{member.role}</p>
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