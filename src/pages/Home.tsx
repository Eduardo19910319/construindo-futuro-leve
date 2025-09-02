import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import Hero from '@/components/Sections/Hero';
import Benefits from '@/components/Sections/Benefits';
import Materials from '@/components/Sections/Materials';
import Testimonials from '@/components/Sections/Testimonials';
import Contact from '@/components/Sections/Contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Materials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Home;