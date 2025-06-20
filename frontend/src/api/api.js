import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mern-quiz-app-um60.onrender.com/api/questions',
});

export const fetchQuestions = () => API.get('/');
export const addQuestion = (data) => API.post('/', data);
