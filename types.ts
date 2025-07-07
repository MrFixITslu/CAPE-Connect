import React from 'react';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  questions: QuizQuestion[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  interactiveElement: {
    type: 'drag-drop' | 'hotspot' | 'simulation';
    description: string;
  };
  quizId: string;
}

export interface Module {
  id: string;
  name: string;
  lessons: Lesson[];
}

export interface Unit {
  id: string;
  name: string;
  modules: Module[];
}

export interface Subject {
  id: string;
  name: string;
  icon: (props: { className?: string }) => React.ReactNode;
  color: string;
  units: Unit[];
}

export type View = 'dashboard' | 'subject' | 'lesson' | 'quiz';

export interface QuizResult {
  quizId: string;
  lessonId: string;
  subjectId: string;
  score: number;
  total: number;
  timestamp: number;
}

export interface UserProgress {
  completedLessons: Set<string>;
  quizResults: QuizResult[];
}

export interface Message {
  id:string;
  text: string;
  sender: 'user' | 'ai';
}