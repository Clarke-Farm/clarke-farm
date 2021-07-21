import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getGuests() {
    return apiClient.get('/api/guests');
  },
  postGuest(guest) {
    return apiClient.post('/api/guests', guest);
  },
};
