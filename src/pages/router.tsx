import { paths } from '@/constant/routePath';
import NavBar from '@/layouts/NavBar';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import AboutMePage from './about-me';
import HomePage from './home';
import PortfolioPage from './portfolio';
import DockComponent from '@/layouts/Dock';
import ServicesPage from './services';

export default function AppRouter() {
  return (
    <Router>
      <NavBar />

      <main className="max-w-[80%] mx-auto relative">
        <Routes>
          <Route index element={<Navigate to={paths.home} />} />
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.portfolio} element={<PortfolioPage />} />
          <Route path={paths.aboutMe} element={<AboutMePage />} />
          <Route path={paths.services} element={<ServicesPage />} />
        </Routes>

        <DockComponent />
      </main>
    </Router>
  );
}
