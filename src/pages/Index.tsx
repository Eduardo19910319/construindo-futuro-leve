import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

const Index = () => {
  const benefits = [
    "Construção 40% mais rápida",
    "Economia de até 30% em custos",  
    "Tecnologia sustentável",
    "Garantia de qualidade"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with CTA */}
      <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in">
              🏗️ Construções Inteligentes EcoFit
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-navy leading-tight mb-6 animate-slide-up">
              Construa o <span className="text-transparent bg-clip-text bg-gradient-brand">Futuro</span> com a EcoFit
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up">
              Revolucione sua construção com nosso método inteligente. 
              Mais rapidez, economia e sustentabilidade em cada projeto.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-center animate-fade-in">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="text-lg px-12 py-6 bg-gradient-brand hover:shadow-brand transform hover:scale-105 transition-all duration-300 font-semibold group"
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento Grátis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-12 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Conheça o Método
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Obras Concluídas</div>
              </div>
              <div className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/5 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      </section>
    </div>
  );
};

export default Index;
