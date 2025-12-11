import React from 'react';

const StartScreen = ({ onStart, quizConfig }) => {
  return (
    <div className="text-center bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{quizConfig.title}</h1>
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-lg font-semibold text-blue-800 mb-2">Quiz Information</p>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <span className="font-semibold">Total Questions:</span> {quizConfig.totalQuestions}
          </div>
          <div>
            <span className="font-semibold">Passing Score:</span> {quizConfig.passingScore}%
          </div>
          <div>
            <span className="font-semibold">Question Types:</span> Multiple Choice
          </div>
          <div>
            <span className="font-semibold">Time:</span> 2 Hours
          </div>
        </div>
      </div>

      <button
      onClick={onStart}
      className="px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 font-semibold">
        Start Quiz
      </button>



    </div>
  );
};

export default StartScreen;