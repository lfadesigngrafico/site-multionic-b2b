import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import DesengraxantesPage from './pages/DesengraxantesPage';
import SabonetesPage from './pages/SabonetesPage';
import CozinhaPage from './pages/CozinhaPage';
import LavanderiaPage from './pages/LavanderiaPage';
import LimpezaGeralPage from './pages/LimpezaGeralPage';
import PisosPage from './pages/PisosPage';
import EspecificosPage from './pages/EspecificosPage';
import SegmentsPage from './pages/SegmentsPage';
import ContactPage from './pages/ContactPage';
import SuaMarcaPage from './pages/SuaMarcaPage';
import OutrosPage from './pages/OutrosPage';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<SolutionsPage />} />
            <Route path="/produtos/sabonetes" element={<SabonetesPage />} />
            <Route path="/produtos/desengraxantes" element={<DesengraxantesPage />} />
            <Route path="/produtos/cozinha" element={<CozinhaPage />} />
            <Route path="/produtos/lavanderia" element={<LavanderiaPage />} />
            <Route path="/produtos/limpeza-geral" element={<LimpezaGeralPage />} />
            <Route path="/produtos/pisos" element={<PisosPage />} />
            <Route path="/produtos/especificos" element={<EspecificosPage />} />
            <Route path="/produtos/outros" element={<OutrosPage />} />
            <Route path="/b2b/sua-marca-nossa-producao" element={<SuaMarcaPage />} />
            <Route path="/segmentos" element={<SegmentsPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/sobre-a-multionic" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
