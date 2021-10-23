<template>
   <div id="app" v-if="loaded">
      <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand" href="#">
            <img
               src="@/assets/fipu_logo.png"
               height="40"
               class="d-inline-block align-top"
               alt="logo"
               loading="lazy"
            />
         </a>
         <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <span class="navbar-toggler-icon"></span>
         </button>
         <div
            v-if="!currentUser"
            class="collapse navbar-collapse"
            id="navbarNav"
         >
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
               <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
               </li>
               <li class="nav-item">
                  <router-link to="/login" class="nav-link">Login</router-link>
               </li>
               <li class="nav-item">
                  <router-link to="/register" class="nav-link"
                     >Register</router-link
                  >
               </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
               <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  v-model="searchTermP"
                  @input="handleChange"
               />
            </form>
         </div>
         <div v-else class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
               <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
               </li>
               <li class="nav-item">
                  <router-link to="/dashboard" class="nav-link"
                     >Dashboard</router-link
                  >
               </li>
               <li class="nav-item">
                  <a
                     href="javascript:void(0)"
                     @click="logoutUser"
                     class="btn btn-primary text-light"
                     >Logout</a
                  >
               </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
               <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  v-model="searchTermP"
                  @input="handleChange"
               />
            </form>
         </div>
      </nav>
      <router-view />
   </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import firebase from '@/firebase';

export default {
   name: 'App',
   data() {
      return {
         searchTermP: '',
         loaded: false,
      };
   },
   created() {
      firebase.auth().onAuthStateChanged((user) => {
         this.loaded = true;
         const curRoute = this.$router.currentRoute;
         if (user) {
            this.user(user);
            if (!curRoute.meta.needsUser) {
               this.$router.replace({ name: 'Home' });
            }
         } else {
            this.user(null);
         }
      });
   },
   computed: {
      ...mapGetters({ currentUser: 'user' }),
   },
   methods: {
      ...mapMutations(['searchTerm', 'user']),
      handleChange() {
         this.searchTerm(this.searchTermP);
      },
      async logoutUser() {
         try {
            const auth = firebase.auth();
            await firebase.auth().signOut(auth);
            this.user(null);
            this.$router.replace('/login');
         } catch (error) {
            console.log(error);
         }
      },
   },
};
</script>

<style lang="scss">
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
}

#nav {
   padding: 30px;
   background: white !important;

   a {
      font-weight: bold;
      color: #2c3e50;
      margin-right: 1rem;

      &.router-link-exact-active {
         color: #42b983;
      }
   }
}
</style>
