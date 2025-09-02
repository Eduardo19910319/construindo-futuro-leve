import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-brand-navy">404 - Página não encontrada</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! A página que você procura não existe.</p>
        <a href="/" className="text-brand-blue hover:text-brand-teal underline font-medium">
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
