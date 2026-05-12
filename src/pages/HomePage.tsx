import HomeHeroVideo from '../components/HomeHeroVideo';
import TrustSection from '../components/TrustSection';
import CategoryCarousel from '../components/CategoryCarousel';
import Clients from '../components/Clients';
import Solutions from '../components/Solutions';
import Segments from '../components/Segments';
import Differentials from '../components/Differentials';
import Certifications from '../components/Certifications';
import ContactBlock from '../components/ContactBlock';
import ContactForm from '../components/ContactForm';
import HelpCards from '../components/HelpCards';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HomeHeroVideo />
      <TrustSection />
      <CategoryCarousel />
      <Clients />
      <Solutions />
      <Segments />
      <Differentials />
      <Certifications />
      <ContactBlock />
      <ContactForm />
      <HelpCards />
      <FinalCTA />
    </>
  );
}
