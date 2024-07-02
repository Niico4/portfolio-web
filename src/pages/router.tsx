import SEOComponent from '@/components/SEO';
import { paths } from '@/constant/routePath';
import DockComponent from '@/layouts/Dock';
import NavBar from '@/layouts/NavBar';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import AboutMePage from './about-me';
import CertificationsPage from './certifications';
import HomePage from './home';
import PortfolioPage from './portfolio';
import ServicesPage from './services';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function AppRouter() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <NavBar />

        <main className="max-w-[80%] mx-auto relative py-5 xl:py-0">
          <Routes>
            <Route index element={<Navigate to={paths.home} />} />
            <Route
              path={paths.home}
              element={
                <>
                  <SEOComponent
                    title="Nicolas Garzón"
                    description="Bienvenido al portafolio de Nicolás Garzón, un desarrollador frontend con pasión por crear experiencias web únicas y de alta calidad. Explora sus proyectos destacados, servicios ofrecidos y conoce más sobre su trayectoria profesional y habilidades técnicas."
                  />
                  <HomePage />
                </>
              }
            />
            <Route
              path={paths.portfolio}
              element={
                <>
                  <SEOComponent
                    title="Mis Proyectos"
                    description="Descubre los proyectos destacados de Nicolás Garzón, un apasionado Desarrollador Frontend y Freelancer. Explora su portafolio de aplicaciones web, donde la creatividad y la funcionalidad se unen para ofrecer experiencias digitales excepcionales."
                  />
                  <PortfolioPage />
                </>
              }
            />
            <Route
              path={paths.aboutMe}
              element={
                <>
                  <SEOComponent
                    title="Sobre Mi"
                    description="Conoce a Nicolás, un apasionado desarrollador frontend con la capacidad de crear aplicaciones web distintivas y de alta calidad. Descubre su trayectoria, habilidades y proyectos destacados."
                  />
                  <AboutMePage />
                </>
              }
            />
            <Route
              path={paths.services}
              element={
                <>
                  <SEOComponent
                    title="Mis Servicios"
                    description="Descubre los servicios que Nicolás ofrece como desarrollador frontend. Especializado en el desarrollo de aplicaciones web con tecnologías modernas, garantizando soluciones personalizadas y de alta calidad para tus necesidades digitales."
                  />
                  <ServicesPage />
                </>
              }
            />

            <Route
              path={paths.certifications}
              element={
                <>
                  <SEOComponent
                    title="Mis Certificados"
                    description="Explora los certificados de Nicolás, un estudiante de Ingeniería de Software apasionado por el aprendizaje continuo. Descubre sus logros académicos y certificaciones que respaldan su experiencia y habilidades en el desarrollo web."
                  />
                  <CertificationsPage />
                </>
              }
            />
          </Routes>

          <DockComponent />
        </main>
      </Router>
    </HelmetProvider>
  );
}
