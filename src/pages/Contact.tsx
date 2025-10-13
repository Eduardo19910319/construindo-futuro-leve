// Caminho: src/pages/Contact.tsx

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from '@/components/ContactForm';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  // Array de informações de contato AGORA CORRIGIDO
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-brand-blue" />,
      title: "Telefone",
      info: "(19) 3504-9400",
      subtitle: "Segunda a Sexta, 8h às 18h"
    },
    {
      icon: <Mail className="w-6 h-6 text-brand-teal" />,
      title: "E-mail",
      info: "contato@ecofit.com.br",
      subtitle: "Resposta em até 4 horas"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-brand-navy" />,
      title: "WhatsApp",
      info: "(19) 3504-9400",
      subtitle: "Atendimento imediato"
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-blue" />,
      title: "Endereço",
      info: "R. 7 de Setembro, 826 - Pq. Ortolândia, Hortolândia - SP",
      subtitle: "CEP: 13184-000"
    }
  ];

  const faqs = [
    // Seção de FAQ fica vazia por enquanto
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Seção Hero */}
        <section className="bg-gradient-brand text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                Fale Conosco
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Vamos Construir Juntos
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-8">
                Entre em contato e descubra como transformar o sonho da sua casa em realidade 
                com o método mais inteligente de construção
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </Button>
                <Button variant="outline-inverse" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário de Contato & Informações */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Formulário de Contato */}
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">
                      Solicite seu Orçamento
                    </h2>
                    <p className="text-gray-600">
                      Preencha o formulário e receba uma proposta personalizada em até 24 horas
                    </p>
                  </div>

                  <Card className="shadow-brand">
                    <CardContent className="p-8">
                      <ContactForm />
                    </CardContent>
                  </Card>
                </div>

                {/* Informações de Contato */}
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">
                      Fale Diretamente Conosco
                    </h2>
                    <p className="text-gray-600">
                      Escolha a forma mais conveniente para entrar em contato
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item, index) => (
                      <Card key={index} className="shadow-soft hover:shadow-brand transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              {item.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-brand-navy mb-1">
                                {item.title}
                              </h3>
                              <p className="text-lg font-medium text-gray-900 mb-1">
                                {item.info}
                              </p>
                              <p className="text-sm text-gray-600">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção FAQ (vazia por enquanto) */}
        {faqs.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                    Perguntas Frequentes
                  </h2>
                  <p className="text-xl text-gray-600">
                    Tire suas principais dúvidas sobre nossos serviços
                  </p>
                </div>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="shadow-soft">
                      <CardContent className="p-8">
                        <h3 className="text-lg font-semibold text-brand-navy mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Contact;