import { paths } from '@/constant/routePath';
import { Button } from '@nextui-org/react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileCv,
  IconMail,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="max-w-[50%] flex items-center justify-between mx-auto py-5">
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
            href="https://www.linkedin.com/in/nicolasgarzon131/"
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
        <li>
          <Button color="primary" variant="flat" size="sm" isIconOnly>
            <IconFileCv stroke={1.75} />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
