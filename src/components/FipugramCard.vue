<template>
   <div class="card text-center mb-5">
      <div class="card-header text-left">
         {{ title }}
      </div>
      <div class="card-body p-0">
         <img class="card-img-top" :src="url" alt="neka slika..." />
      </div>
      <div
         class="card-footer d-flex justify-content-between align-items-center"
      >
         <h5>{{ postedFromNow }}</h5>
         <div>
            <h5>{{ author }}</h5>
            <img class="rounded" src="https://picsum.photos/100" />
         </div>
      </div>
   </div>
</template>

<script>
import moment from 'moment';
export default {
   props: ['title', 'time', 'url', 'author'],
   name: 'FipugramCard',
   computed: {
      postedFromNow() {
         return moment(this.time).fromNow();
      },
   },
};
</script>

<style></style>
