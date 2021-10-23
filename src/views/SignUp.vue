<template>
   <div class="login">
      <h1>This is a Sign Up page</h1>
      <div class="container">
         <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
               <form>
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
                        v-model="password"
                        class="form-control"
                        placeholder="Confirm Password"
                     />
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
               </form>
            </div>
            <div class="col-sm"></div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'SignUp',
   data() {
      return {
         email: '',
         password: '',
         passwordConfirm: '',
      };
   },
};
</script>
