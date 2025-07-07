
import React, { useState, useEffect } from 'react';
import { Lesson, UserProgress, Subject } from '../types';
import { QUIZZES } from '../constants';
import { BeakerIcon, CheckCircleIcon, SparklesIcon } from './Icons';
import { generateLessonContent } from '../services/geminiService';

interface LessonViewProps {
  lesson: Lesson;
  progress: UserProgress;
  subject: Subject;
  onStartQuiz: (quiz: typeof QUIZZES[string], lesson: Lesson) => void;
  onMarkCompleted: (lessonId: string) => void;
}

const InteractiveElement: React.FC<{ lesson: Lesson }> = ({ lesson }) => {
    let icon;
    let text;
    switch(lesson.interactiveElement.type){
        case 'drag-drop':
            icon = '🤝';
            text = 'Drag & Drop Activity';
            break;
        case 'hotspot':
            icon = '👆';
            text = 'Interactive Hotspot';
            break;
        case 'simulation':
            icon = <BeakerIcon className="w-5 h-5 inline-block mr-2 text-indigo-500" />;
            text = 'Experiment Simulation';
            break;
    }
    return (
        <div className="mt-8 p-6 bg-teal-50 dark:bg-teal-900/50 border-l-4 border-teal-400 rounded-r-lg">
            <h3 className="font-bold text-lg text-teal-800 dark:text-teal-200 flex items-center">
                {icon} {text}
            </h3>
            <p className="mt-2 text-teal-700 dark:text-teal-300">{lesson.interactiveElement.description}</p>
        </div>
    )
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, progress, subject, onStartQuiz, onMarkCompleted }) => {
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const quiz = QUIZZES[lesson.quizId];
  const isLessonCompleted = progress.completedLessons.has(lesson.id);
  const isQuizTaken = progress.quizResults.some(r => r.lessonId === lesson.id);

  useEffect(() => {
    setIsLoading(true);
    setGeneratedContent(null);

    const fetchLesson = async () => {
      try {
        const content = await generateLessonContent(lesson.title, subject.name, lesson.content);
        setGeneratedContent(content);
      } catch (error) {
        console.error("Failed to generate lesson content", error);
        setGeneratedContent("<p>There was an error loading your lesson. Please try again later.</p>");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLesson();
  }, [lesson.id, lesson.title, subject.name, lesson.content]);

  const canTakeQuiz = isLessonCompleted && !!quiz;

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h1 className="text-4xl font-bold font-poppins text-gray-900 dark:text-white">{lesson.title}</h1>
      
      {isLoading ? (
        <div className="mt-8 text-center min-h-[200px] flex flex-col justify-center items-center">
            <SparklesIcon className="w-12 h-12 text-teal-500 mx-auto animate-pulse" />
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Preparing your personalized lesson...</p>
        </div>
      ) : (
        <>
            <div 
                className="mt-6 prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: generatedContent || '' }}
            />

            {!isLessonCompleted && (
                 <div className="mt-8 text-center">
                    <button
                        onClick={() => onMarkCompleted(lesson.id)}
                        className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    >
                        I've Finished This Lesson
                    </button>
                </div>
            )}
        </>
      )}
      
      <InteractiveElement lesson={lesson} />

      <div className="mt-10 text-center">
        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Test Your Knowledge</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {!quiz
              ? "A quiz for this lesson is not available at this moment."
              : isQuizTaken 
              ? "You've already completed this quiz, but feel free to retake it!" 
              : !isLessonCompleted
              ? "Please finish reading the lesson above before starting the quiz." 
              : "You are ready to take the quiz!"
            }
          </p>
          {isQuizTaken && (
             <div className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 dark:bg-green-800 dark:text-green-200">
                <CheckCircleIcon className="w-5 h-5 mr-2"/>
                Quiz Completed!
            </div>
          )}
          <button
            onClick={() => quiz && onStartQuiz(quiz, lesson)}
            disabled={!canTakeQuiz}
            className="mt-4 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-transform transform hover:scale-105 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isQuizTaken ? 'Retake Quiz' : 'Start Quiz'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonView;