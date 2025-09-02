import { Star, Quote } from 'lucide-react';
import testimonialImage from '@/assets/testimonial-engineer.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Engenheiro Civil",
      company: "Silva Construções",
      rating: 5,
      text: "A EcoFit revolucionou nossos projetos. A economia de tempo e recursos foi impressionante, e a qualidade final superou todas as expectativas.",
      image: testimonialImage
    },
    {
      name: "Maria Santos",
      role: "Arquiteta",
      company: "Santos Arquitetura",
      rating: 5,
      text: "Profissionais extremamente competentes e método inovador. Conseguimos entregar nossa obra 3 meses antes do prazo sem comprometer a qualidade.",
      image: testimonialImage
    },
    {
      name: "João Oliveira",
      role: "Proprietário",
      company: "Residência Familiar",
      rating: 5,
      text: "Minha casa ficou pronta muito mais rápido do que eu imaginava. O atendimento foi excepcional e o resultado final ficou perfeito.",
      image: testimonialImage
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-brand transition-all duration-300 group hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-brand-blue/20">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-brand-teal font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-brand-blue mb-1">98%</div>
              <div className="text-sm text-gray-600">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-teal mb-1">500+</div>
              <div className="text-sm text-gray-600">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-blue mb-1">15+</div>
              <div className="text-sm text-gray-600">Anos no Mercado</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-teal mb-1">100%</div>
              <div className="text-sm text-gray-600">Obras Entregues</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;