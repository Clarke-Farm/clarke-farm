import * as SortGuests from '@/plugins/sort-guests';
import GuestService from '@/services/guest-service';

export const state = {
  bookings: [],
};

export const actions = {
  saveGuest(context, payload) {
    GuestService.postGuest(payload);
  },
  fetchAllGuests({ commit }) {
    GuestService.getGuests()
      .then((response) => {
        commit('ADD_ALL_GUESTS', response.data);
      })
      .catch((error) => console.log(error));
  },
};

export const mutations = {
  ADD_ALL_GUESTS(state, bookings) {
    state.bookings = bookings;
  },
};

export const getters = {
  sortIncomingGuests(state) {
    return SortGuests.incoming(state.bookings);
  },
  sortCheckOutGuests(state) {
    return SortGuests.checkout(state.bookings);
  },
  sortCurrentWeekGuests(state) {
    const weeklyGuests = SortGuests.currentWeekGuests(state.bookings);
    return SortGuests.guestTotalByDay(weeklyGuests);
  },
};
