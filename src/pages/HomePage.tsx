import BannerCarousel from '../components/BannerCarousel';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Solutions from '../components/Solutions';
import Segments from '../components/Segments';
import Differentials from '../components/Differentials';
import Certifications from '../components/Certifications';
import ContactBlock from '../components/ContactBlock';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <BannerCarousel />
      <Hero />
      <Clients />
      <Solutions />
      <Segments />
      <Differentials />
      <Certifications />
      <ContactBlock />
      <ContactForm />
      <FAQ />
      <FinalCTA />
    </>
  );
}
