<template>
   <div class="container">
      <div class="row">
         <div class="col-2"></div>
         <div class="col-8">
            <h2>Welcome to your dashboard, {{ user.email }}</h2>
            <p>Here you can change your profile information and password</p>

            <div class="form">
               <h3 class="mt-5">Change your password</h3>
               <div class="mb-3">
                  <label class="form-label">New Password</label>
                  <input
                     type="password"
                     class="form-control"
                     placeholder="Password"
                     v-model="password"
                  />
               </div>
               <div class="mb-3">
                  <label class="form-label">Confirm New Password</label>
                  <input
                     type="password"
                     class="form-control"
                     placeholder="Confirm Password"
                     v-model="confirmPassword"
                  />
               </div>
               <button class="btn btn-primary" @click="changePassword">
                  Change
               </button>
            </div>
            <div v-if="success" class="alert alert-success mt-3" role="alert">
               {{ success }}
            </div>
            <div v-if="error" class="alert alert-danger mt-3" role="alert">
               {{ error }}
            </div>
         </div>
         <div class="col-2"></div>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { firebase } from '@/firebase';

export default {
   name: 'Dashboard',
   computed: {
      ...mapGetters(['user']),
   },
   data() {
      return {
         password: '',
         confirmPassword: '',
         success: '',
         error: '',
      };
   },
   methods: {
      clearForm() {
         this.password = '';
         this.confirmPassword = '';
         this.success = '';
         this.error = '';
      },
      async changePassword() {
         try {
            if (this.password.length < 6) {
               this.clearForm();
               this.error = 'Passwords are too short!';
               return;
            }
            if (this.password == this.confirmPassword) {
               await firebase.auth().currentUser.updatePassword(this.password);
               this.clearForm();
               this.success = 'Password successfully changed!';
            } else {
               this.error = 'Passwords do not match';
            }
         } catch (error) {
            this.error = error.message;
         }
      },
   },
};
</script>

<style></style>
