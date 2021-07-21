import * as SortOrders from '@/plugins/sort-orders';
import CoffeeOrderService from '@/services/coffee-order-service';

export const state = {
  orders: [],
};

export const actions = {
  saveCoffeeOrder(context, payload) {
    CoffeeOrderService.postCoffeeOrder(payload);
  },
  fetchAllCoffeeOrders({ commit }) {
    CoffeeOrderService.getCoffeeOrders()
      .then((response) => {
        commit('ADD_ALL_ORDERS', response.data);
      })
      .catch((error) => console.log(error));
  },
  FulFillOrder({ commit }, order) {
    commit('FULFILL_ORDER', order);
  },
};

export const mutations = {
  ADD_ALL_ORDERS(state, orders) {
    state.orders = orders;
  },
  FULFILL_ORDER(state, order) {
    state.orders.find((x) => x.order === order).delivered = true;
  },
};

export const getters = {
  sortIncomingOrders(state) {
    return SortOrders.incoming(state.orders);
  },
  sortDeliveredOrders(state) {
    return SortOrders.delivered(state.orders).deliveredArr;
  },
  sortPendingOrders(state) {
    return SortOrders.delivered(state.orders).pendingDeliveryArr;
  },
  sortCurrentWeekOrders(state) {
    const orders = SortOrders.currentWeekOrders(state.orders);
    return SortOrders.orderTotalByDay(orders);
  },
  sortCurrentMonthOrders(state) {
    return SortOrders.currentMonthOrders(state.orders);
  },
  paperBags(state) {
    const filtered = state.orders.filter((el) => el.package === 'Paper bag');
    return filtered;
  },
  sacks(state) {
    const filtered = state.orders.filter((el) => el.package === 'Sack');
    return filtered;
  },
};
