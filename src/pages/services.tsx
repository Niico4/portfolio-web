import { services } from '@/locales/data-es.json';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Atropos from 'atropos/react';

const ServicesPage = () => {
  const { myServices } = services;
  return (
    <section
      className="flex flex-col items-center justify-center gap-5 lg:gap-20 xl:flex-row"
      style={{ minHeight: 'calc(100vh - 76px' }}
    >
      <Card
        isBlurred
        className="max-w-[350px] p-5"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      >
        <CardHeader>
          <h2 className="text-white text-3xl text-center w-full">
            Mis <span className="textAnimate">servicios</span>
          </h2>
        </CardHeader>
        <p className="text-primary-font text-sm">
          Mi misión es ayudarte a crear aplicaciones web y landing pages que no
          solo cumplan con tus expectativas, sino que las superen. Con
          habilidades en ReactJS, NextJS, Astro y Vite, y un enfoque en diseño
          UI/UX, estoy listo para llevar tus proyectos al siguiente nivel.
          Explora mis servicios a continuación.
        </p>
      </Card>

      <article className="w-full 2xl:w-1/2 flex justify-center gap-5 flex-wrap">
        {myServices.map(({ title, description }, index) => (
          <Atropos
            className="max-w-[300px] h-[350px] lg:h-[300px]"
            key={index}
            shadow={false}
          >
            <Card
              isBlurred
              className="max-w-[300px] h-[350px] p-3 text-primary-font border border-primary-blue/60 lg:h-[300px]"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            >
              <CardHeader>
                <h3 className="text-white text-lg text-center w-full">
                  {title}
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm">{description}</p>
              </CardBody>
            </Card>
          </Atropos>
        ))}
      </article>
    </section>
  );
};

export default ServicesPage;
