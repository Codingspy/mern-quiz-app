import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mern-quiz-app-um60.onrender.com',
});

export const fetchQuestions = () => API.get('/questions');
export const addQuestion = (data) => API.post('/questions', data);
