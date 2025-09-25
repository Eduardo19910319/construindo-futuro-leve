import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-brand-teal" />,
      title: "Sustentabilidade",
      description: "Compromisso com o meio ambiente, reduzindo resíduos em até 85% e promovendo eficiência energética."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-blue" />,
      title: "Qualidade",
      description: "Acabamento superior e maior durabilidade com manutenção simplificada para toda a vida."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-navy" />,
      title: "Confiança",
      description: "Parceria sólida com famílias que buscam segurança e previsibilidade em seus projetos."
    },
    {
      icon: <Award className="w-8 h-8 text-brand-teal" />,
      title: "Inovação",
      description: "Tecnologia construtiva moderna que transforma a construção em um processo inteligente."
    }
  ];

  const stats = [
    { number: "85%", label: "Menos Resíduos" },
    { number: "3x", label: "Mais Rápido" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-brand text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Quem Somos
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-8">
                A Ecofit é a evolução na construção civil, oferecendo soluções inteligentes e sustentáveis para famílias que sonham com a casa perfeita.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm lg:text-base opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                  Nossa História
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    A Ecofit nasceu da necessidade de revolucionar o setor da construção civil brasileira. 
                    Percebemos que as famílias enfrentavam os mesmos problemas há décadas: obras demoradas, 
                    sujas, com custos imprevisíveis e impacto ambiental significativo.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Desenvolvemos um sistema construtivo inteligente que combina tecnologia moderna, 
                    sustentabilidade e eficiência. Nossa missão é transformar o sonho da casa própria 
                    em uma experiência tranquila e previsível.
                  </p>
                  <p className="text-lg text-gray-700">
                    Hoje, somos referência em construção sustentável e inteligente, 
                    ajudando centenas de famílias a realizarem o sonho da casa perfeita.
                  </p>
                </div>
                <div className="lg:pl-8">
                  <Card className="shadow-brand">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-brand-navy mb-4">Nossa Missão</h3>
                      <p className="text-gray-700 mb-6">
                        Transformar a construção da sua casa em um processo previsível, 
                        limpo e tranquilo, entregando residências de alta qualidade, 
                        sustentáveis e de baixa manutenção.
                      </p>
                      <h3 className="text-2xl font-bold text-brand-navy mb-4">Nossa Visão</h3>
                      <p className="text-gray-700">
                        Ser a principal referência em construção inteligente e sustentável, 
                        mudando a forma como as pessoas constroem suas casas no Brasil.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                  Nossos Valores
                </h2>
                <p className="text-xl text-gray-600">
                  Os princípios que norteiam cada projeto da Ecofit
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-brand transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-brand-navy mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-brand text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Pronto para Construir com a Ecofit?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Faça parte da revolução na construção civil. Solicite seu orçamento personalizado hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Solicitar Orçamento Grátis
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  Ver Projetos Realizados
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default About;