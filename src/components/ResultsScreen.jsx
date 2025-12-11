import React from 'react';

const ResultsScreen = ({ score, totalQuestions, onReset, quizData, selectedAnswers }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= 70;

  const calculateCategoryScores = () => {
    const categories = {};
    quizData.forEach((q, index) => {
      if (!categories[q.category]) {
        categories[q.category] = { correct: 0, total: 0 };
      }
      categories[q.category].total++;
      const userAnswers = selectedAnswers[index] || [];
      if (q.correctAnswers.sort().join(',') === userAnswers.sort().join(',')) {
        categories[q.category].correct++;
      }
    });
    return categories;
  };

  const categoryScores = calculateCategoryScores();

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
        <div className={`text-6xl font-bold mb-4 ${passed ? 'text-green-600' : 'text-red-600'}`}>
          {percentage}%
        </div>
        <p className="text-xl text-gray-600 mb-2">
          Score: {score} out of {totalQuestions}
        </p>
        <p className={`text-lg font-semibold ${passed ? 'text-green-600' : 'text-red-600'}`}>
          {passed ? 'Congratulations! You passed!' : 'Keep studying and try again!'}
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance by Category</h3>
        <div className="space-y-4">
          {Object.entries(categoryScores).map(([category, stats]) => {
            const categoryPercentage = Math.round((stats.correct / stats.total) * 100);
            return (
              <div key={category} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">{category}</span>
                  <span className="text-sm text-gray-600">
                    {stats.correct}/{stats.total} ({categoryPercentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${categoryPercentage >= 70 ? 'bg-green-600' : 'bg-yellow-500'}`}
                    style={{ width: `${categoryPercentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center">
        <button 
          onClick={onReset}
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-lg font-semibold"
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;