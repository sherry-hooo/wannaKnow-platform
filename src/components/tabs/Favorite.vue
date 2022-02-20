<template>
  <div class="cards_wrapper">
    <Card
      v-for="card in favoriteList"
      :key="card.wanna_know_id"
      :card="card"
      @setFavoriteList="setFavoriteList"
    ></Card>
  </div>
  <Pagination @changePage="changePage"></Pagination>
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: { Card, Pagination },
  data() {
    return {
      favoriteList: [],
      currentPage: 1,
    };
  },
  methods: {
    getLocalStorage() {
      return JSON.parse(localStorage.getItem("favoriteList")) || [];
    },
    setFavoriteList(favoriteList) {
      this.favoriteList = favoriteList;
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
  created() {
    this.favoriteList = this.getLocalStorage();
  },
};
</script>
