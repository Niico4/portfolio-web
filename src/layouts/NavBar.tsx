import { paths } from '@/constant/routePath';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="max-w-[80%] flex flex-col items-center justify-between gap-3 mx-auto py-5 lg:max-w-[50%] lg:flex-row">
      <NavLink to={paths.home}>
        <h1 className="text-3xl font-semibold text-white">
          Nicolas <span className="textAnimate">Garzón</span>
        </h1>
      </NavLink>

      <ul className="flex items-center gap-4 text-white">
        <li className="hover:text-primary-blue hover:scale-110 transition-all">
          <a
            href="https://x.com/Niico4_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandX stroke={1.75} />
          </a>
        </li>
        <li className="hover:text-primary-blue hover:scale-110 transition-all">
          <a
            href="https://www.linkedin.com/in/nicolasgarzon131/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin stroke={1.75} />
          </a>
        </li>
        <li className="hover:text-primary-blue hover:scale-110 transition-all">
          <a
            href="mailto:nicogarzon131@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconMail stroke={1.75} />
          </a>
        </li>
        <li className="hover:text-primary-blue hover:scale-110 transition-all">
          <a
            href="https://github.com/Niico4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub stroke={1.75} />
          </a>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
