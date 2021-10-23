<template>
   <div class="row">
      <div class="col-1">Ovdje ne znam sta je</div>
      <div class="col-7">
         <FipugramCard
            v-for="card in filteredCards"
            :key="card.title"
            :title="card.title"
            :url="card.url"
            :time="card.time"
            :author="card.author"
         />
      </div>
      <div class="col-3">Sidebar brr {{ searchTerm }}</div>
   </div>
</template>

<script>
import FipugramCard from '@/components/FipugramCard.vue';
import { mapGetters } from 'vuex';

export default {
   name: 'Home',
   data() {
      return {
         cards: [
            {
               author: 'alenvalek',
               title: 'jedan',
               time: 'an hours ago',
               url: 'https://picsum.photos/800',
            },
            {
               author: 'druzic',
               title: 'dva',
               time: '10 minutes ago',
               url: 'https://picsum.photos/800',
            },
            {
               author: 'majavrh',
               title: 'tri',
               time: '2 days agi',
               url: 'https://picsum.photos/800',
            },
         ],
      };
   },
   computed: {
      ...mapGetters(['searchTerm']),
      filteredCards() {
         return this.cards.filter(
            (card) =>
               card.title.includes(this.searchTerm) ||
               card.author.includes(this.searchTerm)
         );
      },
   },
   components: {
      FipugramCard,
   },
};
</script>
