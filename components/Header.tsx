
import React from 'react';
import { Subject, Lesson } from '../types';
import { ChevronRightIcon } from './Icons';

interface HeaderProps {
    subject: Subject | null;
    lesson: Lesson | null;
    onNavigateToSubject: () => void;
}

const Header: React.FC<HeaderProps> = ({ subject, lesson, onNavigateToSubject }) => {
    return (
        <header className="h-16 flex-shrink-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center px-6">
            <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                <span className="text-gray-700 dark:text-gray-200">Dashboard</span>
                {subject && (
                    <>
                        <ChevronRightIcon className="mx-2 w-4 h-4" />
                        <button 
                            onClick={onNavigateToSubject} 
                            className={`hover:text-teal-500 transition-colors ${!lesson ? 'text-gray-700 dark:text-gray-200' : ''}`}
                        >
                            {subject.name}
                        </button>
                    </>
                )}
                {lesson && (
                     <>
                        <ChevronRightIcon className="mx-2 w-4 h-4" />
                        <span className="text-gray-700 dark:text-gray-200">{lesson.title}</span>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
