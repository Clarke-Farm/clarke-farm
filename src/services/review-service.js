import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getReviews() {
    return apiClient.get('/api/guests');
  },
  postReview(type, review) {
    return apiClient.post(`/api/reviews/${type}`, review);
  },
};
