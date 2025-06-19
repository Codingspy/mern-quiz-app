import React from 'react';

const QuestionCard = ({ question }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="font-semibold">{question.question}</h3>
      <ul className="list-disc ml-5 mt-2">
        {question.options.map((opt, idx) => (
          <li key={idx}>{opt}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
