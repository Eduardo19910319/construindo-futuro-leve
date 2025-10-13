// Caminho: src/components/ContactForm.tsx

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  // AQUI É A CONEXÃO COM O FORMSPREE. COLE SEU ID ABAIXO.
  const [state, handleSubmit] = useForm("mzzjkdyj"); 

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-bold text-brand-navy">Obrigado!</h3>
        <p className="mt-2 text-gray-600">Sua mensagem foi enviada. Entraremos em contato em breve.</p>
      </div>
    );
  }

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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Nome Completo *</Label>
          <Input id="name" type="text" name="name" placeholder="Seu nome completo" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-destructive text-sm mt-1" />
        </div>
        <div>
          <Label htmlFor="email">E-mail *</Label>
          <Input id="email" type="email" name="email" placeholder="seu@email.com" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm mt-1" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Telefone/WhatsApp *</Label>
          <Input id="phone" type="tel" name="phone" placeholder="(11) 99999-9999" required />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-destructive text-sm mt-1" />
        </div>
        <div>
          <Label>Serviço de Interesse</Label>
          {/* Note: O Formspree não lida bem com a captura de dados de componentes Select complexos como o do shadcn.
              Vamos deixar como um campo de texto por enquanto para garantir o envio. */}
          <Input id="service" type="text" name="service" placeholder="Ex: Construção Residencial" />
        </div>
      </div>
      <div>
        <Label>Faixa de Investimento</Label>
        <Input id="budget" type="text" name="budget" placeholder="Ex: Até R$ 200.000" />
      </div>
      <div>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" name="message" placeholder="Conte-nos mais sobre seu projeto, terreno, prazos, etc." rows={4} />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive text-sm mt-1" />
      </div>
      <Button type="submit" className="w-full" size="lg" disabled={state.submitting}>
        <Send className="mr-2 h-5 w-5" />
        {state.submitting ? 'Enviando...' : 'Enviar Solicitação'}
      </Button>
    </form>
  );
};