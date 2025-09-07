import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Leaf, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Home,
  Wrench,
  Users,
  FileCheck
} from 'lucide-react';

const Method = () => {
  const advantages = [
    {
      icon: <Clock className="w-8 h-8 text-brand-blue" />,
      title: "3x Mais Rápido",
      description: "Construção até 3 vezes mais rápida que métodos tradicionais",
      detail: "Em média 4-6 meses vs 12-18 meses da alvenaria"
    },
    {
      icon: <Leaf className="w-8 h-8 text-brand-teal" />,
      title: "85% Menos Resíduos",
      description: "Drasticamente sustentável e limpo",
      detail: "Praticamente zero entulho e desperdício de materiais"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-navy" />,
      title: "Maior Durabilidade",
      description: "Estrutura mais resistente e duradoura",
      detail: "Resistente a intempéries, pragas e desgaste temporal"
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-blue" />,
      title: "Eficiência Energética",
      description: "Menor consumo de energia e maior conforto",
      detail: "Isolamento térmico e acústico superior"
    }
  ];

  const processSteps = [
    {
      number: "01",
      icon: <FileCheck className="w-10 h-10 text-brand-blue" />,
      title: "Planejamento Detalhado",
      description: "Projeto personalizado com definição completa de materiais, prazos e custos fixos.",
      duration: "2-3 semanas"
    },
    {
      number: "02",
      icon: <Wrench className="w-10 h-10 text-brand-teal" />,
      title: "Preparação do Terreno",
      description: "Fundação otimizada e preparação da base com tecnologia de precisão.",
      duration: "1-2 semanas"
    },
    {
      number: "03",
      icon: <Home className="w-10 h-10 text-brand-navy" />,
      title: "Montagem da Estrutura",
      description: "Sistema construtivo modular com encaixes precisos e instalação rápida.",
      duration: "3-4 semanas"
    },
    {
      number: "04",
      icon: <Users className="w-10 h-10 text-brand-blue" />,
      title: "Acabamentos Finais",
      description: "Instalações, revestimentos e detalhes finais com qualidade superior.",
      duration: "2-3 semanas"
    }
  ];

  const features = [
    "Estrutura em Steel Frame ou Wood Frame",
    "Isolamento térmico e acústico avançado",
    "Instalações integradas na estrutura",
    "Revestimentos de alta qualidade",
    "Sistema de ventilação eficiente",
    "Cobertura com isolamento térmico",
    "Janelas com eficiência energética",
    "Acabamentos personalizáveis"
  ];

  const comparisons = [
    {
      aspect: "Tempo de Construção",
      traditional: "12-18 meses",
      ecofit: "4-6 meses",
      advantage: "3x mais rápido"
    },
    {
      aspect: "Geração de Resíduos",
      traditional: "Alto volume",
      ecofit: "85% menos",
      advantage: "Sustentável"
    },
    {
      aspect: "Previsibilidade de Custo",
      traditional: "Variável",
      ecofit: "Fixo",
      advantage: "Sem surpresas"
    },
    {
      aspect: "Qualidade do Acabamento",
      traditional: "Padrão",
      ecofit: "Superior",
      advantage: "Alta qualidade"
    },
    {
      aspect: "Manutenção",
      traditional: "Frequente",
      ecofit: "Mínima",
      advantage: "Baixo custo"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-brand text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                Tecnologia Construtiva
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                O Método Ecofit
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-8">
                Conheça o sistema construtivo inteligente que está revolucionando 
                a forma de construir no Brasil
              </p>
              <Button variant="secondary" size="lg">
                Solicitar Apresentação Técnica
              </Button>
            </div>
          </div>
        </section>

        {/* Main Advantages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                  Por Que Escolher o Método Ecofit?
                </h2>
                <p className="text-xl text-gray-600">
                  Vantagens comprovadas que fazem a diferença
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-brand transition-all duration-300 hover-scale">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        {advantage.icon}
                      </div>
                      <h3 className="text-xl font-bold text-brand-navy mb-4">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {advantage.description}
                      </p>
                      <p className="text-sm text-brand-blue font-medium">
                        {advantage.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                  Como Funciona o Processo
                </h2>
                <p className="text-xl text-gray-600">
                  4 etapas simples para a casa dos seus sonhos
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {processSteps.map((step, index) => (
                  <Card key={index} className="shadow-soft animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                            {step.number}
                          </div>
                          <div className="flex justify-center">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-brand-navy">
                              {step.title}
                            </h3>
                            <Badge variant="outline">
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                  Características Técnicas
                </h2>
                <p className="text-xl text-gray-600">
                  Tecnologia de ponta em cada detalhe
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <CheckCircle className="w-6 h-6 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                  Ecofit vs. Construção Tradicional
                </h2>
                <p className="text-xl text-gray-600">
                  Compare e veja a diferença
                </p>
              </div>
              
              <Card className="shadow-brand overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-brand text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold">Aspecto</th>
                          <th className="px-6 py-4 text-center font-semibold">Tradicional</th>
                          <th className="px-6 py-4 text-center font-semibold">Ecofit</th>
                          <th className="px-6 py-4 text-center font-semibold">Vantagem</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisons.map((comparison, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-6 py-4 font-medium text-brand-navy">
                              {comparison.aspect}
                            </td>
                            <td className="px-6 py-4 text-center text-gray-600">
                              {comparison.traditional}
                            </td>
                            <td className="px-6 py-4 text-center font-semibold text-brand-blue">
                              {comparison.ecofit}
                            </td>
                            <td className="px-6 py-4 text-center">
                              <Badge variant="secondary">
                                {comparison.advantage}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-brand text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Pronto para Conhecer o Método na Prática?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Agende uma visita técnica e veja como funciona o sistema construtivo 
                que está transformando o futuro da construção civil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="group">
                  Agendar Visita Técnica
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  Baixar Material Técnico
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

export default Method;