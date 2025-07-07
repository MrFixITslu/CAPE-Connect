import React, { useMemo } from 'react';
import { UserProgress, Subject } from '../types';
import { GRADES } from '../constants';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, CartesianGrid } from 'recharts';
import { ChartBarIcon, BookOpenIcon, GlobeAltIcon } from './Icons';

interface DashboardProps {
  progress: UserProgress;
  onSelectSubject: (subject: Subject) => void;
}

const ProgressChart: React.FC<{ data: any[] }> = ({ data }) => (
    <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" />
            <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
            <YAxis tick={{ fill: '#9ca3af' }} />
            <Tooltip
                contentStyle={{
                    backgroundColor: '#374151',
                    border: 'none',
                    borderRadius: '0.5rem',
                }}
                labelStyle={{ color: '#e5e7eb' }}
            />
            <Bar dataKey="score" fill="#4fd1c5" barSize={30} radius={[4, 4, 0, 0]} />
        </BarChart>
    </ResponsiveContainer>
);

const Dashboard: React.FC<DashboardProps> = ({ progress, onSelectSubject }) => {
    const totalLessons = useMemo(() => GRADES.reduce((acc, s) => acc + s.units.reduce((uAcc, u) => uAcc + u.modules.reduce((mAcc, m) => mAcc + m.lessons.length, 0), 0), 0), []);
    const completedLessonsCount = progress.completedLessons.size;

    const chartData = useMemo(() => {
        const subjectScores: Record<string, { totalScore: number, count: number }> = {};
        
        progress.quizResults.forEach(result => {
            if (!subjectScores[result.subjectId]) {
                subjectScores[result.subjectId] = { totalScore: 0, count: 0 };
            }
            subjectScores[result.subjectId].totalScore += (result.score / result.total) * 100;
            subjectScores[result.subjectId].count++;
        });

        return GRADES.map(subject => {
            const data = subjectScores[subject.id];
            const avgScore = data ? Math.round(data.totalScore / data.count) : 0;
            return {
                name: subject.name.replace(' ', ''),
                score: avgScore
            };
        });
    }, [progress.quizResults]);

    const colorClasses: Record<string, { border: string; text: string; bg: string; progressBg: string; }> = {
        teal: { border: 'border-teal-500', text: 'text-teal-500', bg: 'bg-teal-50', progressBg: 'bg-teal-500' },
        indigo: { border: 'border-indigo-500', text: 'text-indigo-500', bg: 'bg-indigo-50', progressBg: 'bg-indigo-500' },
        orange: { border: 'border-orange-500', text: 'text-orange-500', bg: 'bg-orange-50', progressBg: 'bg-orange-500' },
        rose: { border: 'border-rose-500', text: 'text-rose-500', bg: 'bg-rose-50', progressBg: 'bg-rose-500' },
    };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-poppins text-gray-800 dark:text-white">Welcome Back!</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Let's continue your learning journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center space-x-4">
            <div className="bg-teal-100 dark:bg-teal-800 p-3 rounded-full">
                <BookOpenIcon className="w-6 h-6 text-teal-500" />
            </div>
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lessons Completed</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{completedLessonsCount} / {totalLessons}</p>
            </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center space-x-4">
            <div className="bg-indigo-100 dark:bg-indigo-800 p-3 rounded-full">
                <ChartBarIcon className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Quizzes Taken</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{progress.quizResults.length}</p>
            </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center space-x-4">
            <div className="bg-orange-100 dark:bg-orange-800 p-3 rounded-full">
                <GlobeAltIcon className="w-6 h-6 text-orange-500" />
            </div>
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Grades Started</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{new Set(progress.quizResults.map(q => q.subjectId)).size} / {GRADES.length}</p>
            </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Average Quiz Performance</h2>
        <ProgressChart data={chartData} />
      </div>

      <div>
        <h2 className="text-2xl font-bold font-poppins text-gray-800 dark:text-white mb-4">Choose a Grade</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GRADES.map(subject => {
            const colors = colorClasses[subject.color] || colorClasses.teal;
            const lessonsInSubject = subject.units.reduce((uAcc, u) => uAcc + u.modules.reduce((mAcc, m) => mAcc + m.lessons.length, 0), 0);
            const completedInSubject = [...progress.completedLessons].filter(lessonId => {
                return subject.units.some(u => u.modules.some(m => m.lessons.some(l => l.id === lessonId)));
            }).length;
            const percentage = lessonsInSubject > 0 ? Math.round((completedInSubject / lessonsInSubject) * 100) : 0;

            return (
              <div
                key={subject.id}
                onClick={() => onSelectSubject(subject)}
                className={`p-6 rounded-xl border-2 ${colors.border} ${colors.bg} dark:bg-gray-800/50 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-center justify-between">
                  <span className={`p-2 rounded-lg ${colors.bg} dark:bg-gray-700`}>{subject.icon({ className: `w-8 h-8 ${colors.text}` })}</span>
                  <span className={`text-xs font-bold ${colors.text}`}>{percentage}%</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-800 dark:text-white">{subject.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex-grow">{completedInSubject} / {lessonsInSubject} lessons</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-4">
                    <div className={`${colors.progressBg} h-1.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;