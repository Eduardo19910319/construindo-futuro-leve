import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-8 bg-gradient-brand rounded-sm flex items-center justify-center">
                <div className="w-6 h-5 bg-white rounded-sm relative">
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-teal rounded-full opacity-80"></div>
                </div>
              </div>
              <span className="text-xl font-bold">ecofit</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Construções inteligentes com foco em sustentabilidade e inovação. 
              Transformamos ideias em realidade com métodos construtivos modernos.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-brand-teal" />
                <span className="text-sm text-gray-300">
                  1234 Elm Street, City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-teal" />
                <span className="text-sm text-gray-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-teal" />
                <span className="text-sm text-gray-300">contato@ecofit.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/metodo" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Método
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidade" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 EcoFit Construções Inteligentes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;