import { Clock, DollarSign, Leaf, Shield, Zap, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Construção Acelerada",
      description: "Métodos otimizados que reduzem o tempo de obra em até 3x, entregando seu projeto mais rapidamente.",
      color: "text-brand-blue"
    },
    {
      icon: DollarSign,
      title: "Economia Garantida",
      description: "Redução de custos de até 30% através de processos eficientes e materiais inteligentes.",
      color: "text-brand-teal"
    },
    {
      icon: Leaf,
      title: "Eficiência Energética",
      description: "Sua casa mais fresca no verão e aconchegante no inverno, refletindo em uma conta de luz mais baixa o ano todo.",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Qualidade Superior",
      description: "Controle rigoroso de qualidade em todas as etapas, garantindo durabilidade e segurança.",
      color: "text-brand-blue"
    },
    {
      icon: Zap,
      title: "Tecnologia Avançada",
      description: "Uso de tecnologias modernas para otimizar processos e melhorar resultados.",
      color: "text-brand-teal"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados e experientes em construções inteligentes.",
      color: "text-brand-navy"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ Nossos Diferenciais
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Por que Escolher a EcoFit?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções inovadoras que transformam a construção civil, 
            combinando eficiência, economia e sustentabilidade.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-brand transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl ${benefit.color} bg-current/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-brand-navy mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-brand rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Obras Concluídas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">8+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">3x</div>
              <div className="text-white/80">Mais Rápido</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">85%</div>
              <div className="text-white/80">Menos Resíduos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;