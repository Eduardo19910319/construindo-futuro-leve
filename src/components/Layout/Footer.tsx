// Caminho: src/components/Layout/Footer.tsx

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import ecofitFooterLogo from '@/assets/logo_ecofit_footer.svg'; 

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Link to="/">
                <img src={ecofitFooterLogo} alt="EcoFit Logo" className="h-16" />
              </Link>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Construções inteligentes com foco em sustentabilidade e inovação. 
              Transformamos ideias em realidade com métodos construtivos modernos.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-brand-teal" />
                <span className="text-sm text-gray-300">
                  R. 7 de Setembro, 826 - Pq. Ortolândia, Hortolândia - SP
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-teal" />
                <span className="text-sm text-gray-300">(19) 3504-9400</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-teal" />
                <span className="text-sm text-gray-300">contato@ecofit.com.br</span>
              </div>
            </div>
          </div>

          {/* Links de Navegação (continua igual) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-brand-teal transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-brand-teal transition-colors">Quem Somos</Link></li>
              <li><Link to="/metodo" className="text-gray-300 hover:text-brand-teal transition-colors">Método</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-brand-teal transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Legal (continua igual) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacidade" className="text-gray-300 hover:text-brand-teal transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="text-gray-300 hover:text-brand-teal transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 EcoFit Construções Inteligentes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;