import React, { useState } from 'react';
import { addQuestion } from '../api/api';

const QuestionForm = ({ onAdd }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addQuestion({ question, options, correctAnswer });
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
    onAdd(); // trigger reload
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        className="border p-2 w-full"
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      {options.map((opt, idx) => (
        <input
          key={idx}
          className="border p-2 w-full"
          type="text"
          placeholder={`Option ${idx + 1}`}
          value={opt}
          onChange={(e) => {
            const newOpts = [...options];
            newOpts[idx] = e.target.value;
            setOptions(newOpts);
          }}
          required
        />
      ))}
      <input
        className="border p-2 w-full"
        type="text"
        placeholder="Correct Answer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Add Question
      </button>
    </form>
  );
};

export default QuestionForm;
