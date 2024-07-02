import { paths } from '@/constant/routePath';
import DockComponent from '@/layouts/Dock';
import NavBar from '@/layouts/NavBar';
import { useEffect } from 'react';
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
    <Router>
      <ScrollToTop/>
      <NavBar />

      <main className="max-w-[80%] mx-auto relative">
        <Routes>
          <Route index element={<Navigate to={paths.home} />} />
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.portfolio} element={<PortfolioPage />} />
          <Route path={paths.aboutMe} element={<AboutMePage />} />
          <Route path={paths.services} element={<ServicesPage />} />

          <Route path={paths.certifications} element={<CertificationsPage />} />
        </Routes>

        <DockComponent />
      </main>
    </Router>
  );
}
