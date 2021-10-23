import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      searchTerm: '',
      user: null,
   },
   getters: {
      searchTerm(state) {
         return state.searchTerm;
      },
      user(state) {
         return state.user;
      },
   },
   mutations: {
      searchTerm(state, payload) {
         state.searchTerm = payload;
      },
      user(state, payload) {
         state.user = payload;
      },
   },
   actions: {},
   modules: {},
});
