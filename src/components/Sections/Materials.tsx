import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import materialsImage from '@/assets/materials-showcase.jpg';

const Materials = () => {
  const materials = [
    {
      name: "Concreto Inteligente",
      description: "Concreto de alta performance com aditivos especiais para maior resistência e durabilidade.",
      features: ["Alta resistência", "Cura acelerada", "Sustentável"]
    },
    {
      name: "Estruturas Pré-fabricadas",
      description: "Elementos estruturais produzidos em fábrica com controle rigoroso de qualidade.",
      features: ["Precisão dimensional", "Montagem rápida", "Economia de tempo"]
    },
    {
      name: "Isolamento Térmico Avançado",
      description: "Materiais isolantes de última geração para eficiência energética superior.",
      features: ["Economia energética", "Conforto térmico", "Eco-friendly"]
    },
    {
      name: "Zero Quebra-Quebra",
      description: "Fim do quebra-quebra: Nossas paredes já vêm prontas para receber as instalações elétricas e hidráulicas. Zero poeira, zero entulho e semanas de avanço no seu cronograma.",
      features: ["Instalação em 2h vs 2 dias", "Zero poeira e entulho", "Cronograma acelerado"]
    }
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              🔧 Materiais Premium
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Materiais de <span className="text-transparent bg-clip-text bg-gradient-brand">Última Geração</span>
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              Utilizamos apenas materiais de alta qualidade e tecnologia avançada, 
              garantindo construções mais eficientes, duráveis e sustentáveis.
            </p>

            <div className="space-y-6">
              {materials.map((material, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    {material.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {material.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {material.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-1 bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-sm">
                        <CheckCircle className="h-3 w-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="cta" size="lg">
                Saiba Mais Sobre Nossos Materiais
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-brand">
              <img
                src={materialsImage}
                alt="Materiais de construção premium da EcoFit"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Quality Badge */}
            <div className="absolute top-6 left-6 bg-white rounded-xl p-4 shadow-soft">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-brand-navy">
                  Qualidade Garantida
                </span>
              </div>
            </div>

            {/* Innovation Badge */}
            <div className="absolute bottom-6 right-6 bg-gradient-brand text-white rounded-xl p-4">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-90">Inovação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;