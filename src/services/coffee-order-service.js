import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getCoffeeOrders() {
    return apiClient.get('/api/coffee-orders');
  },
  postCoffeeOrder(order) {
    return apiClient.post('/api/coffee-orders', order);
  },
};
