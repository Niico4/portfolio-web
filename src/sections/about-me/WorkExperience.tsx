import { workExperience } from '@/data/workExperience';
import { IconBriefcase } from '@tabler/icons-react';

const WorkExperienceSection = () => {
  return (
    <ol className="relative border-s border-gray-700 max-w-[600px] mx-auto mt-10">
      {workExperience.map(({ title, date, description }, index) => (
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
  );
};

export default WorkExperienceSection;
