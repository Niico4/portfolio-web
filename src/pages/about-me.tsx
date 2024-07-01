import { countExperience } from '@/data/workExperience';
import EducationSection from '@/sections/about-me/Education';
import WorkExperienceSection from '@/sections/about-me/WorkExperience';
import { Divider } from '@nextui-org/react';
import CountUp from 'react-countup';
import { Fragment } from 'react/jsx-runtime';

import SkillsSection from '../sections/about-me/Skills';

const AboutMePage = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-5"
      style={{ minHeight: 'calc(100vh - 76px' }}
    >
      <h2 className="text-3xl mb-10 text-center">
        Mi <span className="textAnimate">trayectoria profesional</span>
      </h2>

      <article className="flex items-center justify-center gap-5">
        {countExperience.map(({ count, label }, index) => (
          <Fragment key={index}>
            <div className={`flex flex-col items-center`}>
              <p className="text-primary-blue font-bold text-3xl">
                + <CountUp end={count} start={0} duration={5} />
              </p>
              <p className="font-light text-sm text-center">{label}</p>
            </div>

            {index < countExperience.length - 1 && (
              <Divider
                orientation="vertical"
                style={{ background: '#9ca3af', height: '56px' }}
              />
            )}
          </Fragment>
        ))}
      </article>

      <div className="w-full flex flex-col items-center justify-evenly lg:gap-10 lg:items-start lg:flex-row">
        <article>
          <WorkExperienceSection />
        </article>

        <article>
          <EducationSection />
        </article>
      </div>
      <article className="w-full xl:w-1/3 overflow-hidden xl:mb-10">
        <SkillsSection />
      </article>
    </section>
  );
};

export default AboutMePage;
