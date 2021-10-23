import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      searchTerm: '',
      user: null,
      posts: [],
   },
   getters: {
      searchTerm(state) {
         return state.searchTerm;
      },
      user(state) {
         return state.user;
      },
      posts(state) {
         return state.posts;
      },
   },
   mutations: {
      searchTerm(state, payload) {
         state.searchTerm = payload;
      },
      user(state, payload) {
         state.user = payload;
      },
      posts(state, payload) {
         state.posts = payload;
      },
   },
   actions: {
      async posts(context) {
         let posts = [];
         db.collection('posts')
            .orderBy('posted_at')
            .get()
            .then((query) => {
               query.forEach((doc) => {
                  posts.push(doc.data());
               });
            });
         context.commit('posts', posts);
      },
   },
   modules: {},
});
