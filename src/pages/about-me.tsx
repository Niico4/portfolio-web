import { IconBriefcase } from '@tabler/icons-react';
import {
  experiencesData,
  workExperienceData,
} from '@/data/AboutMe/workExperience';
import CountUp from 'react-countup';
import { Divider } from '@nextui-org/react';

const AboutMePage = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-5"
      style={{ minHeight: 'calc(100vh - 76px' }}
    >
      <h2 className="text-3xl mb-10">
        Mi <span className="textAnimate">trayectoria profesional</span>
      </h2>

      <article className="flex items-center justify-center gap-5">
        {experiencesData.map(({ count, label }, index) => (
          <>
            <div className={`flex flex-col items-center`} key={index}>
              <p className="text-primary-blue font-bold text-3xl">
                + <CountUp end={count} start={0} duration={5} />
              </p>
              <p className="font-light text-sm">{label}</p>
            </div>

            {index < experiencesData.length - 1 && (
              <Divider
                orientation="vertical"
                style={{ background: '#9ca3af', height: '56px' }}
              />
            )}
          </>
        ))}
      </article>

      <article>
        <ol className="relative border-s border-gray-700 max-w-[40%] mx-auto mt-10">
          {workExperienceData.map(({ title, date, description }, index) => (
            <li className="mb-10 ms-6" key={index}>
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                <IconBriefcase size={14} color="#c2c2c2" />
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-white">
                {title}
              </h3>
              <time className="block mb-2 text-xs leading-none text-blue-300">
                {date}
              </time>
              <p className="mb-4 text-sm text-primary-font font-light">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
};

export default AboutMePage;
