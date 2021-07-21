import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getActivities() {
    return apiClient.get('/api/activities');
  },
  postActivity(activity) {
    return apiClient.post('/api/activities', activity);
  },

  // getActivitiesByID() {
  //   return apiClient.get('/api/activities/:id');
  // },

  // deleteActivitiesByID() {
  //   return apiClient.delete('/api/activities/:id');
  // },
};
