import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  get() {
    return apiClient.get('/api/tasks');
  },
  post(data) {
    return apiClient.post('/api/tasks', data);
  },
  delete(id) {
    return apiClient.delete(`/api/tasks/delete/${id}`);
  },
};
