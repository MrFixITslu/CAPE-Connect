
import React, { useState } from 'react';
import { Quiz, Lesson, QuizResult, Subject } from '../types';
import { CheckCircleIcon, XCircleIcon } from './Icons';

interface QuizViewProps {
  quiz: Quiz;
  lesson: Lesson;
  subject: Subject;
  onQuizComplete: (result: QuizResult) => void;
}

const QuizView: React.FC<QuizViewProps> = ({ quiz, lesson, subject, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(quiz.questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (optionIndex: number) => {
    if (showResults) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handleFinishAndReturn = () => {
      const score = selectedAnswers.reduce((acc, answer, index) => {
          return answer === quiz.questions[index].correctAnswerIndex ? acc + 1 : acc;
      }, 0);
      
      onQuizComplete({
          quizId: quiz.id,
          lessonId: lesson.id,
          subjectId: subject.id,
          score: score,
          total: quiz.questions.length,
          timestamp: Date.now()
      });
  }

  if (showResults) {
    const score = selectedAnswers.reduce((acc, answer, index) => 
        answer === quiz.questions[index].correctAnswerIndex ? acc + 1 : acc
    , 0);

    return (
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center font-poppins text-gray-900 dark:text-white">Quiz Results</h1>
        <div className="my-8 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300">You scored</p>
            <p className="text-6xl font-bold text-teal-500 my-2">{score} / {quiz.questions.length}</p>
        </div>
        <div className="space-y-6">
          {quiz.questions.map((q, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === q.correctAnswerIndex;
            return (
              <div key={q.id} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-900/50' : 'bg-red-50 dark:bg-red-900/50'}`}>
                <div className="flex items-start">
                    {isCorrect ? <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /> : <XCircleIcon className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />}
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">{q.question}</p>
                        <p className={`mt-1 text-sm ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                           Your answer: {userAnswer !== null ? q.options[userAnswer] : 'Not answered'}
                        </p>
                        {!isCorrect && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Correct answer: {q.options[q.correctAnswerIndex]}</p>}
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 italic">{q.explanation}</p>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
            <button
                onClick={handleFinishAndReturn}
                className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
                Back to Lesson
            </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold font-poppins text-gray-900 dark:text-white">{lesson.title} Quiz</h1>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-8">
        <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}></div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{currentQuestion.question}</h2>
        
        <fieldset className="mt-6">
            <legend className="sr-only">Choose an answer</legend>
            <div className="space-y-4">
            {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === index;
                return (
                <div key={index}>
                    <input
                        type="radio"
                        id={`option-${index}`}
                        name={`question-${currentQuestionIndex}`}
                        value={index}
                        checked={isSelected}
                        onChange={() => handleSelectAnswer(index)}
                        className="sr-only"
                    />
                    <label
                        htmlFor={`option-${index}`}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center cursor-pointer ${
                            isSelected 
                            ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/50 ring-2 ring-teal-500' 
                            : 'border-gray-200 dark:border-gray-600 hover:border-teal-400 dark:hover:border-teal-500 bg-transparent'
                        }`}
                    >
                        <span className={`font-medium ${isSelected ? 'text-teal-800 dark:text-teal-200' : 'text-gray-700 dark:text-gray-300'}`}>{option}</span>
                    </label>
                </div>
                );
            })}
            </div>
        </fieldset>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestionIndex] === null}
          className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Finish Quiz'}
        </button>
      </div>
    </div>
  );
};

export default QuizView;