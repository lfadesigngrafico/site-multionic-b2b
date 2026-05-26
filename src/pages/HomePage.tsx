import HomeHeroVideo from '../components/HomeHeroVideo';
import TrustSection from '../components/TrustSection';
import Challenges from '../components/Challenges';
import Clients from '../components/Clients';
import Solutions from '../components/Solutions';
import Differentials from '../components/Differentials';
import Certifications from '../components/Certifications';
import ContactBlock from '../components/ContactBlock';
import ContactForm from '../components/ContactForm';
import HomeFAQ from '../components/HomeFAQ';

export default function HomePage() {
  return (
    <>
      <HomeHeroVideo />
      <TrustSection />
      <Solutions />
      <Challenges />
      <Clients />
      <Differentials />
      <Certifications />
      <ContactBlock />
      <ContactForm />
      <HomeFAQ />
    </>
  );
}
