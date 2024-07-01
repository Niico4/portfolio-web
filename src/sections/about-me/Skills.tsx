import { skills } from '@/data/mySkills';
import { Chip } from '@nextui-org/react';
import { Fragment } from 'react/jsx-runtime';

const SkillsSection = () => {
  return (
    <div className="loopAnimationSkills">
      {skills.map(({ languages }, index) => (
        <Fragment key={index}>
          {languages.map(({ skill }, index) => (
            <Chip key={index} variant="flat" color="default" radius="sm">
              <span className="text-white/90 font-light">{skill}</span>
            </Chip>
          ))}
        </Fragment>
      ))}

      {skills.map(({ languages }, index) => (
        <Fragment key={index}>
          {languages.map(({ skill }, index) => (
            <Chip key={index} variant="flat" color="default" radius="sm">
              <span className="text-white/90 font-light">{skill}</span>
            </Chip>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default SkillsSection;
