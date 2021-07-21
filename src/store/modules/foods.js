import FoodService from '@/services/food-service';

export const state = {
  foods: [],
};

export const actions = {
  saveFood(context, payload) {
    FoodService.postFood(payload);
  },
  async fetchAllFoods({ commit }) {
    const food = await FoodService.getFoods();
    commit('ADD_ALL_FOODS', food.data);
  },
};

export const mutations = {
  ADD_ALL_FOODS(state, foods) {
    state.foods = foods;
  },
};

export const getters = {
  allFoods: (state) => state.foods,
};
