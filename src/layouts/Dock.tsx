import { Dock, DockIcon } from '@/components/magicui/dock';
import { paths } from '@/constant/routePath';
import {
  IconDeviceLaptop,
  IconFileDescription,
  IconHome,
  IconUser,
} from '@tabler/icons-react';
import { MotionValue, useMotionValue } from 'framer-motion';
import { ReactElement } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const items = [
  {
    path: paths.home,
    icon: <IconHome stroke={1.75} />,
  },
  {
    path: paths.portfolio,
    icon: <IconDeviceLaptop stroke={1.75} />,
  },
  {
    path: paths.aboutMe,
    icon: <IconUser stroke={1.75} />,
  },
  {
    path: paths.services,
    icon: <IconFileDescription stroke={1.75} />,
  },
];

const DockIconComponent = ({
  path,
  icon,
  mouseX,
}: {
  path: string;
  icon: ReactElement;
  mouseX: MotionValue<number>;
}) => {
  return (
    <DockIcon
      className="hover:bg-primary-blue/50 transition-background"
      mouseX={mouseX}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${
            isActive ? 'isActive' : 'text-custom-secondary'
          } w-full h-full flex items-center justify-center rounded-full`
        }
      >
        {icon}
      </NavLink>
    </DockIcon>
  );
};

const DockComponent = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <Dock
      className="absolute bottom-5 flex justify-center w-full"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {items.map(({ path, icon }, index) => (
        <React.Fragment key={index}>
          <DockIconComponent path={path} icon={icon} mouseX={mouseX} />
        </React.Fragment>
      ))}
    </Dock>
  );
};

export default DockComponent;
