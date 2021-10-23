<template>
   <div class="row">
      <div class="col-4">Ovdje ne znam sta je</div>
      <div class="col-4">
         <add-post />
         <fipugram-card
            v-for="card in filteredCards"
            :key="card.id"
            :title="card.desc"
            :url="card.url"
            :time="card.posted_at"
            :author="card.author"
         />
      </div>
      <div class="col-4">Sidebar brr {{ searchTerm }}</div>
   </div>
</template>

<script>
import FipugramCard from '@/components/FipugramCard.vue';
import AddPost from '@/components/AddPost.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
   name: 'Home',
   async mounted() {
      await this.fetchPosts();
   },
   computed: {
      ...mapGetters(['searchTerm', 'posts']),
      filteredCards() {
         return this.posts.filter(
            (card) =>
               card.desc.includes(this.searchTerm) ||
               card.author.includes(this.searchTerm)
         );
      },
   },
   methods: {
      ...mapActions({ fetchPosts: 'posts' }),
   },
   components: {
      FipugramCard,
      AddPost,
   },
};
</script>
