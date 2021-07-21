import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getFoods() {
    return apiClient.get('/api/foods');
  },
  postFood(food) {
    return apiClient.post('/api/foods', food);
  },
};
