import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-8 bg-gradient-brand rounded-sm flex items-center justify-center">
              <div className="w-6 h-5 bg-white rounded-sm relative">
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-teal rounded-full opacity-80"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-brand-navy">ecofit</span>
          </Link>

          {/* Desktop Navigation */}
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
            <Button variant="cta" size="sm">
              Orçamento Grátis
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
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
              <Button variant="cta" size="sm" className="w-fit">
                Orçamento Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;