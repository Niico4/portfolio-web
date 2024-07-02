import { certifications } from '@/data/education';
import Atropos from 'atropos/react';

const CertificationsPage = () => {
  return (
    <section
      className="flex flex-col items-center  gap-5"
      style={{ minHeight: 'calc(100vh - 76px' }}
    >
      <h2 className="text-3xl mt-10 mb-5">
        Mi <span className="textAnimate">certificados</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {certifications.map(({ image, url }, index) => (
          <Atropos key={index} className="max-w-[400px]">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <figure className="max-w-[400px]">
                <img
                  src={image}
                  alt={`certificado ${image}`}
                  className="w-full h-full object-cover rounded-xl max-w-full max-h-full"
                />
              </figure>
            </a>
          </Atropos>
        ))}
      </div>
    </section>
  );
};

export default CertificationsPage;
