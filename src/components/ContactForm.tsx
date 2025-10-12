// Caminho do arquivo: src/components/ContactForm.tsx

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';

export const ContactForm = () => {
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
    console.log('Formulário enviado com os dados:', formData);
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em até 24 horas.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
          <Input id="name" type="text" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Seu nome completo" required />
        </div>
        <div>
          <Label htmlFor="email">E-mail *</Label>
          <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="seu@email.com" required />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Telefone/WhatsApp *</Label>
          <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="(11) 99999-9999" required />
        </div>
        <div>
          <Label>Serviço de Interesse</Label>
          <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
            <SelectTrigger><SelectValue placeholder="Selecione um serviço" /></SelectTrigger>
            <SelectContent>
              {services.map((service) => <SelectItem key={service} value={service}>{service}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label>Faixa de Investimento</Label>
        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
          <SelectTrigger><SelectValue placeholder="Selecione sua faixa de investimento" /></SelectTrigger>
          <SelectContent>
            {budgetRanges.map((range) => <SelectItem key={range} value={range}>{range}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder="Conte-nos mais sobre seu projeto, terreno, prazos, etc." rows={4} />
      </div>
      <Button type="submit" className="w-full" size="lg">
        <Send className="mr-2 h-5 w-5" />
        Enviar Solicitação
      </Button>
      <p className="text-sm text-gray-500 text-center">
        Ao enviar, você concorda com nossa Política de Privacidade
      </p>
    </form>
  );
};