import React, { useState, useMemo, useCallback } from 'react';
import { GRADES } from './constants';
import { Subject, Lesson, Quiz, View, UserProgress, QuizResult, Unit } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SubjectView from './components/SubjectView';
import LessonView from './components/LessonView';
import QuizView from './components/QuizView';
import AIChat from './components/AIChat';
import Header from './components/Header';

const App: React.FC = () => {
  const [view, setView] = useState<View>('dashboard');
  const [selectedGrade, setSelectedGrade] = useState<Subject | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedLessons: new Set(),
    quizResults: [],
  });
  
  const handleSelectGrade = useCallback((grade: Subject) => {
    setSelectedGrade(grade);
    setSelectedLesson(null);
    setSelectedQuiz(null);
    setView('subject');
  }, []);

  const handleSelectLesson = useCallback((lesson: Lesson, grade: Subject) => {
    setSelectedGrade(grade);
    setSelectedLesson(lesson);
    setSelectedQuiz(null);
    setView('lesson');
  }, []);

  const handleStartQuiz = useCallback((quiz: Quiz, lesson: Lesson) => {
    setSelectedQuiz(quiz);
    setSelectedLesson(lesson);
    setView('quiz');
  }, []);

  const handleMarkLessonCompleted = useCallback((lessonId: string) => {
    setUserProgress(prev => ({
      ...prev,
      completedLessons: new Set(prev.completedLessons).add(lessonId),
    }));
  }, []);

  const handleQuizComplete = useCallback((result: QuizResult) => {
    setUserProgress(prev => ({
      ...prev,
      quizResults: [...prev.quizResults, result],
      completedLessons: new Set(prev.completedLessons).add(result.lessonId),
    }));
    setView('lesson');
  }, []);

  const navigateToDashboard = useCallback(() => {
    setSelectedGrade(null);
    setSelectedLesson(null);
    setSelectedQuiz(null);
    setView('dashboard');
  }, []);

  const currentUnit = useMemo(() => {
    if (!selectedGrade || !selectedLesson) return null;
    return selectedGrade.units.find(u => 
      u.modules.some(m => m.lessons.some(l => l.id === selectedLesson.id))
    ) || null;
  }, [selectedGrade, selectedLesson]);

  const aiContext = useMemo(() => {
    if (selectedGrade && currentUnit) {
      return `${selectedGrade.name}, ${currentUnit.name}`;
    }
    if (selectedGrade) {
      return selectedGrade.name;
    }
    return 'general studies';
  }, [selectedGrade, currentUnit]);

  const currentView = useMemo(() => {
    switch (view) {
      case 'subject':
        return <SubjectView subject={selectedGrade!} onSelectLesson={handleSelectLesson} />;
      case 'lesson':
        return <LessonView lesson={selectedLesson!} subject={selectedGrade!} onStartQuiz={handleStartQuiz} progress={userProgress} onMarkCompleted={handleMarkLessonCompleted} />;
      case 'quiz':
        return <QuizView quiz={selectedQuiz!} lesson={selectedLesson!} subject={selectedGrade!} onQuizComplete={handleQuizComplete} />;
      case 'dashboard':
      default:
        return <Dashboard progress={userProgress} onSelectSubject={handleSelectGrade} />;
    }
  }, [view, selectedGrade, selectedLesson, selectedQuiz, userProgress, handleSelectLesson, handleStartQuiz, handleQuizComplete, handleSelectGrade, handleMarkLessonCompleted]);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <Sidebar onSelectSubject={handleSelectGrade} onSelectDashboard={navigateToDashboard} activeSubjectId={selectedGrade?.id}/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          subject={selectedGrade} 
          lesson={selectedLesson} 
          onNavigateToSubject={() => selectedGrade && handleSelectGrade(selectedGrade)} 
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
          {currentView}
        </main>
      </div>
      <AIChat aiContext={aiContext} />
    </div>
  );
};

export default App;