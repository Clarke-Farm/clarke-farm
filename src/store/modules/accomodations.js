import AccomodationService from '@/services/accomodation-service';

export const state = {
  accomodations: [],
};

export const actions = {
  saveAccomodation(context, payload) {
    AccomodationService.postAccomodation(payload);
  },
  async fetchAllAccomodations({ commit }) {
    const accomodation = await AccomodationService.getAccomodations();
    commit('ADD_ALL_ACCOMODATIONS', accomodation.data);
  },
};

export const mutations = {
  ADD_ALL_ACCOMODATIONS(state, accomodations) {
    state.accomodations = accomodations;
  },
};

export const getters = {
  allAccomodations: (state) => state.accomodations,
};
