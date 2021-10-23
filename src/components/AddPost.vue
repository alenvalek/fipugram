<template>
   <div class="row">
      <div class="col-8 mx-auto">
         <!-- nova forma za post -->
         <div v-if="isSuccess" class="alert alert-success" role="alert">
            Successfully added a new post!
         </div>
         <form @submit.prevent="postNewImage" class="form-inline mb-5">
            <div class="form-group mr-3">
               <croppa
                  :width="400"
                  :height="400"
                  placeholder="Upload your image"
                  v-model="imgRef"
               />
            </div>
            <div class="form-group">
               <label for="imageDescription">Description</label>
               <input
                  v-model="newImageDescription"
                  type="text"
                  class="form-control ml-2"
                  placeholder="Enter the image description"
                  id="imageDescription"
               />
            </div>
            <button type="submit" class="btn btn-primary mx-auto mt-3">
               Post image
            </button>
         </form>
      </div>
   </div>
</template>

<script>
import { db, storage } from '@/firebase';
import { mapActions, mapGetters } from 'vuex';

export default {
   name: 'AddPost',
   data() {
      return {
         newImageDescription: '',
         newImageUrl: '',
         imgRef: null,
         isSuccess: false,
      };
   },
   computed: {
      ...mapGetters(['user']),
   },
   methods: {
      ...mapActions(['posts']),
      clearForm() {
         (this.newImageDescription = ''), this.imgRef.remove();
      },
      async postNewImage() {
         try {
            await this.imgRef.generateBlob((blobData) => {
               let imgName =
                  'posts' +
                  '/' +
                  this.user.email +
                  '/' +
                  Date.now() +
                  '_' +
                  '.png';

               storage
                  .ref(imgName)
                  .put(blobData)
                  .then((res) => {
                     res.ref.getDownloadURL().then(async (url) => {
                        try {
                           const newPost = {
                              url,
                              desc: this.newImageDescription,
                              author: this.user.email,
                              posted_at: Date.now(),
                           };
                           console.log(this.newImageUrl);
                           await db.collection('posts').add(newPost);
                           this.posts();
                           this.clearForm();
                           this.isSuccess = true;
                           setTimeout(() => {
                              this.isSuccess = false;
                           }, 5000);
                        } catch (error) {
                           console.log(error);
                        }
                     });
                  })
                  .catch((e) => {
                     console.log(e);
                  });
            });
         } catch (error) {
            console.log(error);
         }
      },
   },
};
</script>

<style></style>
