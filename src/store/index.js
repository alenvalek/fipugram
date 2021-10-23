import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      searchTerm: '',
   },
   getters: {
      searchTerm(state) {
         return state.searchTerm;
      },
   },
   mutations: {
      searchTerm(state, payload) {
         state.searchTerm = payload;
      },
   },
   actions: {},
   modules: {},
});
