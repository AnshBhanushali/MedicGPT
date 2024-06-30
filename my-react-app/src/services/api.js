import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const sendMessageToChatbot = (user_input) => {
  return api.post('/chatbot', { user_input });
};
