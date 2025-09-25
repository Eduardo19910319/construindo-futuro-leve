import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em até 24 horas.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-brand-blue" />,
      title: "Telefone",
      info: "(11) 3456-7890",
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
      info: "(11) 98765-4321",
      subtitle: "Atendimento imediato"
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-blue" />,
      title: "Endereço",
      info: "Rua da Inovação, 123",
      subtitle: "São Paulo - SP, 01234-567"
    }
  ];

  const services = [
    "Construção Residencial",
    "Reforma com Sistema Ecofit",
    "Consultoria Técnica",
    "Projeto Arquitetônico",
    "Outro"
  ];

  const budgetRanges = [
    "Até R$ 200.000",
    "R$ 200.000 - R$ 400.000",
    "R$ 400.000 - R$ 600.000",
    "R$ 600.000 - R$ 800.000",
    "Acima de R$ 800.000"
  ];

  const faqs = [
    {
      question: "Qual o prazo para receber um orçamento?",
      answer: "Elaboramos orçamentos detalhados em até 7 dias úteis após a visita técnica."
    },
    {
      question: "Vocês atendem em outras cidades?",
      answer: "Sim, atendemos em toda a região metropolitana de São Paulo e principais cidades do interior."
    },
    {
      question: "É possível visitar uma obra em andamento?",
      answer: "Claro! Agendamos visitas técnicas para que você conheça o método na prática."
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
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
  <MessageCircle className="mr-2 h-5 w-5" />
  WhatsApp
</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
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
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Nome Completo *</Label>
                            <Input
                              id="name"
                              type="text"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              placeholder="Seu nome completo"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">E-mail *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="seu@email.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              placeholder="(11) 99999-9999"
                              required
                            />
                          </div>
                          <div>
                            <Label>Serviço de Interesse</Label>
                            <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione um serviço" />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label>Faixa de Investimento</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione sua faixa de investimento" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="message">Mensagem</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder="Conte-nos mais sobre seu projeto, terreno, prazos, etc."
                            rows={4}
                          />
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Solicitação
                        </Button>

                        <p className="text-sm text-gray-500 text-center">
                          Ao enviar, você concorda com nossa Política de Privacidade
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
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

                  {/* Business Hours */}
                  <Card className="shadow-brand mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center text-brand-navy">
                        <Clock className="mr-2 h-5 w-5" />
                        Horário de Atendimento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Segunda a Sexta</span>
                          <span className="font-medium">8:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sábado</span>
                          <span className="font-medium">8:00 - 12:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Domingo</span>
                          <span className="text-gray-500">Fechado</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Response */}
                  <Card className="bg-gradient-subtle border-0 shadow-brand">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-6 h-6 text-brand-teal mr-2" />
                        <h3 className="font-semibold text-brand-navy">
                          Resposta Garantida
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Comprometemo-nos a responder todas as solicitações em até 4 horas úteis.
                      </p>
                      <Badge variant="secondary">
                        Atendimento Premium
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Não encontrou a resposta que procurava?
                </p>
                <Button variant="outline" size="lg">
                  Ver Todas as Perguntas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-brand text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Pronto para Começar seu Projeto?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Agende uma visita sem compromisso e conheça de perto como funciona o método Ecofit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="group">
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar Visita Grátis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Direto
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

export default Contact;