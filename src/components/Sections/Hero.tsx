// Caminho: src/components/Sections/Hero.tsx

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { ContactForm } from '@/components/ContactForm';

const Hero = () => {
  const benefits = [
    "Construção 3x mais rápida que alvenaria",
    "Economia de até 30% em custos totais na obra",
    "Tecnologia sustentável",
    "Garantia de qualidade"
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo da Esquerda */}
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

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-brand-teal" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* BOTÕES DE AÇÃO (CTAs) ATUALIZADOS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    Solicitar Orçamento
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-brand-navy">Solicite seu Orçamento</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <ContactForm />
                  </div>
                </DialogContent>
              </Dialog>

              <Link to="/metodo">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Conheça o Método
                </Button>
              </Link>
            </div>
          </div>

          {/* Imagem da Direita */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-brand">
              <img
                src={heroImage}
                alt="Construção inteligente EcoFit"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;