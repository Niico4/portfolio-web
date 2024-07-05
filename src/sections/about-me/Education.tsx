import { IconLink } from '@tabler/icons-react';
import { studies } from '@/locales/data-es.json';

const EducationSection = () => {
  const { myStudies } = studies;
  return (
    <ol className="relative border-s border-gray-700 max-w-[300px] mx-auto mt-10">
      {myStudies.map(({ title, date, url, studyCareer, icon }, index) => (
        <li className="mb-10 ms-6" key={index}>
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-4 ring-black/70">
            <img
              src={icon}
              alt={`logo ${title}`}
              className="max-w-full max-h-full object-cover rounded-full"
            />
          </span>
          <div className="flex justify-between items-center">
            <h3 className="flex items-center mb-1 text-xl font-semibold text-white">
              {title}
            </h3>
            <a href={url}>
              <IconLink
                size={18}
                color="#c2c2c2"
                className="hover:stroke-primary-blue"
              />
            </a>
          </div>
          <time className="block mb-2 text-xs leading-none text-blue-300">
            {date}
          </time>
          <div className="bg-slate-700 py-2 px-6 flex items-center justify-center rounded-md mt-2 hover:bg-slate-600">
            <p className="text-sm text-primary-font font-light">
              {studyCareer}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default EducationSection;
