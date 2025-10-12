// Caminho do arquivo: src/components/Layout/Header.tsx

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ecofitLogo from '@/assets/logo_site_01.svg';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { ContactForm } from '@/components/ContactForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Quem Somos', href: '/sobre' },
    { name: 'Método', href: '/metodo' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <img src={ecofitLogo} alt="EcoFit Logo" className="h-10" />
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  isActive(item.href) ? 'text-brand-blue' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* INÍCIO DA MÁGICA DO MODAL */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="cta" size="sm">
                  Orçamento Grátis
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
            {/* FIM DA MÁGICA DO MODAL */}

          </nav>

          {/* Botão do Menu Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                    isActive(item.href) ? 'text-brand-blue' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Dialog onOpenChange={(open) => !open && setIsMenuOpen(false)}>
                <DialogTrigger asChild>
                  <Button variant="cta" size="sm" className="w-fit">
                    Orçamento Grátis
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;