<template>
   <div class="login">
      <h1>This is a Sign Up page</h1>
      <div class="container">
         <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
               <form @submit.prevent="signUp">
                  <div class="form-group">
                     <label for="exampleInputEmail1">Email address</label>
                     <input
                        v-model="email"
                        type="email"
                        class="form-control"
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
                        placeholder="Password"
                     />
                  </div>
                  <div class="form-group">
                     <label for="exampleInputPassword1">Password</label>
                     <input
                        type="password"
                        v-model="passwordConfirm"
                        class="form-control"
                        placeholder="Confirm Password"
                     />
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
               </form>
               <div v-if="error" class="alert alert-danger mt-3" role="alert">
                  {{ error }}
               </div>
               <div
                  v-if="success"
                  class="alert alert-success mt-3"
                  role="alert"
               >
                  Korisnički račun uspješno kreiran.
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
   name: 'SignUp',
   data() {
      return {
         email: '',
         password: '',
         passwordConfirm: '',
         error: null,
         success: false,
      };
   },
   methods: {
      clearForm() {
         this.email = '';
         this.password = '';
         this.passwordConfirm = '';
         this.error = null;
         this.success = false;
      },
      async signUp() {
         try {
            if (this.password == this.passwordConfirm) {
               await firebase
                  .auth()
                  .createUserWithEmailAndPassword(this.email, this.password);
               this.clearForm();
               this.success = true;
            } else {
               this.error = 'Error: Vaše lozinke se ne podudaraju';
            }
         } catch (err) {
            this.clearForm();
            this.error = err.message;
         }
      },
   },
};
</script>
