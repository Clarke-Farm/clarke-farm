import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getTrainingBookings() {
    return apiClient.get('/api/trainings');
  },
  postTrainingRequest(booking) {
    return apiClient.post('/api/trainings', booking);
  },
};