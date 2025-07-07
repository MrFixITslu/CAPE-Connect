
import React, { useState } from 'react';
import { Subject, Lesson } from '../types';
import { ChevronRightIcon, BookOpenIcon } from './Icons';

interface SubjectViewProps {
  subject: Subject;
  onSelectLesson: (lesson: Lesson, subject: Subject) => void;
}

const colorClasses: Record<string, { bg: string, text: string }> = {
  teal: { bg: 'bg-teal-100 dark:bg-teal-800/50', text: 'text-teal-500' },
  indigo: { bg: 'bg-indigo-100 dark:bg-indigo-800/50', text: 'text-indigo-500' },
  orange: { bg: 'bg-orange-100 dark:bg-orange-800/50', text: 'text-orange-500' },
  rose: { bg: 'bg-rose-100 dark:bg-rose-800/50', text: 'text-rose-500' },
};

const SubjectView: React.FC<SubjectViewProps> = ({ subject, onSelectLesson }) => {
  const [openModule, setOpenModule] = useState<string | null>(subject.units[0]?.modules[0]?.id || null);

  const toggleModule = (moduleId: string) => {
    setOpenModule(openModule === moduleId ? null : moduleId);
  };
  
  const colors = colorClasses[subject.color] || colorClasses.teal;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
         <span className={`p-4 rounded-xl ${colors.bg}`}>
          {subject.icon({ className: `w-10 h-10 ${colors.text}` })}
         </span>
        <div>
          <h1 className="text-4xl font-bold font-poppins text-gray-800 dark:text-white">{subject.name}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Select a lesson to begin your studies.</p>
        </div>
      </div>

      {subject.units.map(unit => (
        <div key={unit.id} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-4">{unit.name}</h2>
          <div className="space-y-3">
            {unit.modules.map(module => (
              <div key={module.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex justify-between items-center p-4 text-left"
                  aria-expanded={openModule === module.id}
                  aria-controls={`module-content-${module.id}`}
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{module.name}</h3>
                  <ChevronRightIcon className={`w-5 h-5 text-gray-500 transform transition-transform ${openModule === module.id ? 'rotate-90' : ''}`} />
                </button>
                {openModule === module.id && (
                  <ul id={`module-content-${module.id}`} className="px-4 pb-4 space-y-2">
                    {module.lessons.map(lesson => (
                      <li key={lesson.id}>
                        <button
                          onClick={() => onSelectLesson(lesson, subject)}
                          className="w-full text-left flex items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <BookOpenIcon className={`w-5 h-5 mr-3 flex-shrink-0 ${colors.text}`} />
                          <span className="text-gray-700 dark:text-gray-300">{lesson.title}</span>
                          <ChevronRightIcon className="w-5 h-5 ml-auto text-gray-400" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectView;
