// Caminho: src/components/WhatsappButton.tsx

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsappButton = () => {
  // Removendo o 9 inicial e caracteres especiais para o link da API
  const phoneNumber = "551935049400"; 
  const message = "Olá! Gostaria de saber mais sobre os serviços da EcoFit.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      variant="whatsapp"
      size="icon"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 animate-float shadow-xl hover:shadow-2xl"
      onClick={handleWhatsAppClick}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsappButton;