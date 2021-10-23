<template>
   <div class="login">
      <h1>This is an login page</h1>
      <div class="container">
         <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
               <form @submit.prevent="signIn">
                  <div class="form-group">
                     <label for="exampleInputEmail1">Email address</label>
                     <input
                        v-model="email"
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                     />
                     <small id="emailHelp" class="form-text text-muted"
                        >We'll never share your email with anyone else.</small
                     >
                  </div>
                  <div class="form-group">
                     <label for="exampleInputPassword1">Password</label>
                     <input
                        type="password"
                        v-model="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                     />
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
               </form>
               <div v-if="error" class="alert alert-danger mt-3" role="alert">
                  {{ error }}
               </div>
            </div>
            <div class="col-sm"></div>
         </div>
      </div>
   </div>
</template>

<script>
import { firebase } from '@/firebase';

export default {
   name: 'Login',
   data() {
      return {
         email: '',
         password: '',
         error: '',
      };
   },
   methods: {
      async signIn() {
         try {
            const cred = await firebase
               .auth()
               .signInWithEmailAndPassword(this.email, this.password);
            console.log(cred);
            this.$router.replace({ name: 'Home' });
         } catch (err) {
            this.error = err.message;
         }
      },
   },
};
</script>
