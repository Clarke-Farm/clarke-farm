import ActivityService from '@/services/activity-service';

export const state = {
  activities: [],
};

export const actions = {
  saveActivity(context, payload) {
    ActivityService.postActivity(payload);
  },
  async fetchAllActivities({ commit }) {
    const activities = await ActivityService.getActivities();
    commit('ADD_ALL_ACTIVITIES', activities.data);
  },

};

export const mutations = {
  ADD_ALL_ACTIVITIES(state, activities) {
    state.activities = activities;
  },

};

export const getters = {
  allActivities: (state) => state.activities,
};
