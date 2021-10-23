<template>
   <div class="row">
      <div class="col-1">Ovdje ne znam sta je</div>
      <div class="col-7"><FipugramCard /></div>
      <div class="col-3">Sidebar brr</div>
   </div>
</template>

<script>
import FipugramCard from '@/components/FipugramCard.vue';
export default {
   name: 'Home',
   components: {
      FipugramCard,
   },
};
</script>
