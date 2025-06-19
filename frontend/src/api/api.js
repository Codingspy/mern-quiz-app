import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchQuestions = () => API.get('/questions');
export const addQuestion = (data) => API.post('/questions', data);
