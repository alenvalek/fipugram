<template>
   <div id="app">
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
         <div class="collapse navbar-collapse" id="navbarNav">
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
               />
            </form>
         </div>
      </nav>
      <router-view />
   </div>
</template>

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
