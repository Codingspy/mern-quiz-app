import React, { useEffect, useState } from 'react';
import { fetchQuestions } from '../api/api';
import QuestionCard from './QuestionCard';
import QuestionForm from './QuestionForm';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  const loadQuestions = async () => {
    const res = await fetchQuestions();
    setQuestions(res.data);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Quiz App</h1>
      <QuestionForm onAdd={loadQuestions} />
      {questions.map((q) => (
        <QuestionCard key={q._id} question={q} />
      ))}
    </div>
  );
};

export default Quiz;
