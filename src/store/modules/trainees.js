import TraineeService from '@/services/trainees-service';

export const state = {
  trainees: [],
};
export const actions = {
  saveTrainee(context, payload) {
    TraineeService.postTrainee(payload);
  },
  fetchAllTrainees({ commit }) {
    TraineeService.getTrainees().then((response) => {
      commit('ADD_ALL_TRAINEES', response.data);
    })
      .catch((error) => console.log(error));
  },
};
export const mutations = {
  ADD_ALL_TRAINEES(state, trainees) {
    state.trainees = trainees;
  },
};
