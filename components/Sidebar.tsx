import React from 'react';
import { GRADES } from '../constants';
import { Subject } from '../types';
import { HomeIcon, SparklesIcon } from './Icons';

interface SidebarProps {
  onSelectSubject: (subject: Subject) => void;
  onSelectDashboard: () => void;
  activeSubjectId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectSubject, onSelectDashboard, activeSubjectId }) => {
  const colorClasses: Record<string, { bg: string, text: string, hoverBg: string }> = {
    teal: { bg: 'bg-teal-100 dark:bg-teal-800', text: 'text-teal-600 dark:text-teal-200', hoverBg: 'hover:bg-teal-200 dark:hover:bg-teal-700' },
    indigo: { bg: 'bg-indigo-100 dark:bg-indigo-800', text: 'text-indigo-600 dark:text-indigo-200', hoverBg: 'hover:bg-indigo-200 dark:hover:bg-indigo-700' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-800', text: 'text-orange-600 dark:text-orange-200', hoverBg: 'hover:bg-orange-200 dark:hover:bg-orange-700' },
    rose: { bg: 'bg-rose-100 dark:bg-rose-800', text: 'text-rose-600 dark:text-rose-200', hoverBg: 'hover:bg-rose-200 dark:hover:bg-rose-700' },
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700 px-4">
        <SparklesIcon className="w-6 h-6 text-teal-500" />
        <h1 className="ml-2 text-xl font-bold font-poppins text-gray-800 dark:text-white">CAPE Connect</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <button
          onClick={onSelectDashboard}
          className={`w-full flex items-center px-4 py-2 text-left text-base font-medium rounded-lg transition-colors duration-150 ${
            !activeSubjectId 
              ? 'bg-teal-500 text-white' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <HomeIcon className="w-5 h-5 mr-3" />
          Dashboard
        </button>
        <div className="pt-4">
          <h2 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Grades</h2>
          <div className="mt-2 space-y-1">
            {GRADES.map(subject => {
              const isActive = subject.id === activeSubjectId;
              const colors = colorClasses[subject.color] || colorClasses.teal;
              return (
                <button
                  key={subject.id}
                  onClick={() => onSelectSubject(subject)}
                  className={`w-full flex items-center px-4 py-2.5 text-left text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? `${colors.bg} ${colors.text}`
                      : `text-gray-600 dark:text-gray-300 ${colors.hoverBg}`
                  }`}
                >
                  <span className={`w-7 h-7 flex items-center justify-center rounded-lg ${isActive ? '' : colors.bg}`}>
                     {subject.icon({ className: `w-5 h-5 ${colors.text}` })}
                  </span>
                  <span className="ml-3">{subject.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-center text-gray-500">© 2024 CAPE Connect. All rights reserved.</p>
      </div>
    </aside>
  );
};

export default Sidebar;