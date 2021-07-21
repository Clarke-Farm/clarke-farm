import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getAccomodations() {
    return apiClient.get('/api/accomodations');
  },
  postAccomodation(accomodation) {
    return apiClient.post('/api/accomodations', accomodation);
  },
};
