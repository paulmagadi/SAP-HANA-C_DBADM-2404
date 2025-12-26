import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import StartScreen from './StartScreen';
import Question from './Question';
import ResultsScreen from './ResultsScreen';
import { quizData, quizConfig } from '../data/quizData';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const question = quizData[currentQuestion];

  const handleAnswerSelect = (optionId) => {
    if (showAnswers || quizCompleted) return;

    const currentAnswers = selectedAnswers[currentQuestion] || [];
    
    if (currentAnswers.includes(optionId)) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestion]: currentAnswers.filter(id => id !== optionId)
      });
    } else {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestion]: [...currentAnswers, optionId]
      });
    }
  };

  const checkAnswer = () => {
    setShowAnswers(true);
    const userAnswers = selectedAnswers[currentQuestion] || [];
    const correct = question.correctAnswers.sort().join(',') === userAnswers.sort().join(',');
    if (correct && !selectedAnswers[currentQuestion]?.scored) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswers(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswers(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowAnswers(false);
    setScore(0);
    setQuizStarted(false);
    setQuizCompleted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return <StartScreen onStart={startQuiz} quizConfig={quizConfig} />;
  }

  if (quizCompleted) {
    return (
      <ResultsScreen 
        score={score} 
        totalQuestions={quizData.length}
        onReset={resetQuiz}
        quizData={quizData}
        selectedAnswers={selectedAnswers}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">{quizConfig.title}</h3>
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg transition"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        <Question
          question={question}
          selectedAnswers={selectedAnswers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
          showAnswers={showAnswers}
          currentQuestion={currentQuestion}
          totalQuestions={quizData.length}
        />

        {showAnswers && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm font-semibold text-blue-800">
              Correct Answer{question.correctAnswers.length > 1 ? 's' : ''}: {question.correctAnswers.join(', ')}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {!showAnswers ? (
            <button
              onClick={checkAnswer}
              disabled={(selectedAnswers[currentQuestion] || []).length === 0}
              className="px-6 py-2 cursor-pointer bg-black hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition"
            >
              Check Answer
            </button>
          ) : (
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">
                Score: {score} / {currentQuestion + 1}
              </p>
            </div>
          )}

          <button
            onClick={nextQuestion}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg transition"
          >
            {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;