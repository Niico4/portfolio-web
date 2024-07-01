import { projects } from '@/data/myProjects';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from '@nextui-org/react';
import { IconBrandGithub, IconLink } from '@tabler/icons-react';

const PortfolioPage = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-5 lg:gap-20"
      style={{
        minHeight: window.innerWidth <= 800 ? '100vh' : 'calc(100vh - 76px',
      }}
    >
      <h2 className="text-white text-3xl text-center mt-5 lg:mt-0">
        Mis últimos <span className="textAnimate">trabajos realizados</span>
      </h2>

      <article className="flex xl:items-center justify-center gap-3 flex-wrap lg:gap-10">
        {projects.map(({ title, img, description, badges }, index) => (
          <Card
            isBlurred
            key={index}
            className="max-w-[350px] p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          >
            <CardHeader>
              <h3 className="w-full text-white text-2xl font-semibold text-center">
                {title}
              </h3>
            </CardHeader>
            <CardBody>
              <figure className="max-w-[400px]">
                <img
                  src={img}
                  alt={`Imagen ${title}`}
                  className="hover:scale-110 transition-all"
                />
              </figure>
              <div
                className={`flex ${
                  badges.length >= 4 ? 'justify-evenly' : 'justify-center gap-5'
                } items-center flex-wrap mb-5`}
              >
                {badges.map(({ label }, index) => (
                  <Chip
                    key={index}
                    size="sm"
                    radius="sm"
                    variant="flat"
                    color="primary"
                  >
                    {label}
                  </Chip>
                ))}
              </div>
              <p className="text-primary-font text-sm">{description}</p>
            </CardBody>
            <CardFooter className="justify-end items-center gap-5">
              <Button
                color="primary"
                variant="flat"
                size="sm"
                startContent={<IconBrandGithub stroke={1.75} size={18} />}
              >
                Repositorio
              </Button>
              <Button
                color="primary"
                size="sm"
                startContent={<IconLink stroke={1.75} size={18} />}
              >
                Sitio Web
              </Button>
            </CardFooter>
          </Card>
        ))}
      </article>
    </section>
  );
};

export default PortfolioPage;
