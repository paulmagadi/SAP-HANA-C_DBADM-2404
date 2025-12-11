import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const Question = ({ 
  question, 
  selectedAnswers, 
  onAnswerSelect, 
  showAnswers,
  currentQuestion,
  totalQuestions 
}) => {
  const getOptionColor = (optionId) => {
    if (!showAnswers) {
      return (selectedAnswers || []).includes(optionId)
        ? 'bg-blue-100 border-blue-500'
        : 'bg-white border-gray-300';
    }

    const isCorrect = question.correctAnswers.includes(optionId);
    const isSelected = (selectedAnswers || []).includes(optionId);

    if (isCorrect) {
      return 'bg-green-100 border-green-500';
    } else if (isSelected && !isCorrect) {
      return 'bg-red-100 border-red-500';
    }
    return 'bg-white border-gray-300';
  };

  const getOptionIcon = (optionId) => {
    if (!showAnswers) return null;

    const isCorrect = question.correctAnswers.includes(optionId);
    const isSelected = (selectedAnswers || []).includes(optionId);

    if (isCorrect) {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    } else if (isSelected && !isCorrect) {
      return <XCircle className="w-5 h-5 text-red-600" />;
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-indigo-600">{question.category}</span>
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">{question.question}</h2>
        
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => onAnswerSelect(option.id)}
              disabled={showAnswers}
              className={`w-full p-4 border-2 rounded-lg text-left transition-all ${getOptionColor(option.id)} ${
                showAnswers ? 'cursor-not-allowed' : 'hover:border-blue-400 cursor-pointer'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-700">{option.id}.</span>
                  <span className="text-gray-800">{option.text}</span>
                </div>
                {getOptionIcon(option.id)}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;