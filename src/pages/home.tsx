import { paths } from '@/constant/routePath';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <section
      className="flex flex-col items-center mt-5 lg:mt-0 lg:justify-evenly lg:flex-row"
      style={{
        minHeight: window.innerWidth <= 800 ? '100%' : 'calc(100vh - 76px',
      }}
    >
      <figure className="max-w-[460px] md:max-w-[360px]">
        <img
          src="/hero.webp"
          alt="Ilustración"
          className="max-w-full max-h-full"
          style={{ filter: 'drop-shadow(5px 5px 5px #000)' }}
        />
      </figure>
      <Card
        isBlurred
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        className="max-w-[500px] p-2 lg:p-5"
      >
        <CardHeader>
          <h2 className="text-primary-font text-4xl font-medium">
            ¡Hola! Soy <span className="textAnimate">Nicolas</span>
          </h2>
        </CardHeader>
        <CardBody>
          <p className="text-lg text-primary-font font-light">
            Desarrollador Frontend y Freelancer, dedicado a crear aplicaciones
            web funcionales y visualmente atractivas, fusionando creatividad y
            habilidades técnicas.
          </p>
        </CardBody>
        <CardFooter className="gap-5 items-center justify-start">
          <NavLink to={paths.portfolio}>
            <Button
              variant="flat"
              color="primary"
              className="font-semibold tracking-wider"
            >
              Ver Proyectos
            </Button>
          </NavLink>
          <NavLink to={paths.aboutMe}>
            <Button color="primary" className="font-semibold tracking-wider">
              Sobre Mí
            </Button>
          </NavLink>
        </CardFooter>
      </Card>
    </section>
  );
};

export default HomePage;
