import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const createFeedback = async feedbackData => {
  const response = await axios.post(`${API_URL}/feedback`, feedbackData);
  return response.data;
};
