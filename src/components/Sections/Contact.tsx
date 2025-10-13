// Caminho: src/components/Sections/Contact.tsx

import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { ContactForm } from '@/components/ContactForm';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <div className="inline-block bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
              📞 Entre em Contato
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Vamos Construir Juntos o <span className="text-transparent bg-clip-text bg-gradient-brand">Seu Projeto</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Solicite um orçamento sem compromisso e descubra como podemos 
              transformar sua construção com nosso método inovador.
            </p>
        </div>
        
        <div className="max-w-md mx-auto">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="hero" size="lg" className="w-full text-lg group">
                        Solicitar Orçamento Grátis
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
        </div>
      </div>
    </section>
  );
};

export default Contact;