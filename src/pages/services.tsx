import { cardServicesData } from '@/data/Services/cardsServices';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import Atropos from 'atropos/react';

const ServicesPage = () => {
  return (
    <section
      className="flex items-center justify-center gap-20"
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

        <CardFooter className="justify-end">
          <Button color="primary">Contacta conmigo</Button>
        </CardFooter>
      </Card>

      <article className="w-1/2 flex justify-center gap-5 flex-wrap">
        {cardServicesData.map(({ title, description }, index) => (
          <Atropos
            className="max-w-[300px] h-[300px]"
            key={index}
            shadow={false}
          >
            <Card
              isBlurred
              className="max-w-[300px] h-[300px] p-3 text-primary-font border border-primary-blue/60"
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
