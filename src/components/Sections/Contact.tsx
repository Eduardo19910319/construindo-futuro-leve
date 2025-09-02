import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
              📞 Entre em Contato
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Vamos Construir Juntos o <span className="text-transparent bg-clip-text bg-gradient-brand">Seu Projeto</span>
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              Solicite um orçamento sem compromisso e descubra como podemos 
              transformar sua construção com nosso método inovador.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">Endereço</div>
                  <div className="text-gray-600">1234 Elm Street, City, State 12345</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">Telefone</div>
                  <div className="text-gray-600">(123) 456-7890</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">E-mail</div>
                  <div className="text-gray-600">contato@ecofit.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">Horário</div>
                  <div className="text-gray-600">Seg - Sex: 8h às 18h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-brand">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">
              Solicite seu Orçamento
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="project">Tipo de Projeto</Label>
                <Input
                  id="project"
                  type="text"
                  placeholder="Ex: Casa, Prédio, Galpão..."
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos mais sobre seu projeto..."
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Enviar Solicitação
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Responderemos em até 24 horas úteis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;