import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const Hero = () => {
  const benefits = [
    "Construção 40% mais rápida",
    "Economia de até 30% em custos",
    "Tecnologia sustentável",
    "Garantia de qualidade"
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏗️ Construções Inteligentes
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-6">
              Construa o <span className="text-transparent bg-clip-text bg-gradient-brand">Futuro</span> com a EcoFit
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Revolucione sua construção com nosso método inteligente. 
              Mais rapidez, economia e sustentabilidade em cada projeto.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-brand-teal" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Solicitar Orçamento
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Conheça o Método
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-brand">
              <img
                src={heroImage}
                alt="Construção inteligente EcoFit"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-brand">
              <div className="text-3xl font-bold text-brand-blue">500+</div>
              <div className="text-sm text-gray-600">Obras Concluídas</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-brand">
              <div className="text-3xl font-bold text-brand-teal">15+</div>
              <div className="text-sm text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-brand-blue/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-brand-teal/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;