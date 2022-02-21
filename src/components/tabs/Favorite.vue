<template>
  <div class="cards_wrapper">
    <template v-if="isLoading">
      <LoadingCard v-for="card in loadingCardCout" :key="card"></LoadingCard>
    </template>
    <template v-else>
      <Card
        v-for="card in favoriteList"
        :key="card.wanna_know_id"
        :card="card"
        @setFavoriteList="setFavoriteList"
      ></Card>
    </template>
  </div>
  <Pagination @changePage="changePage"></Pagination>
</template>

<script>
import Card from "@/components/Card.vue";
import LoadingCard from "@/components/LoadingCard.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: { Card, Pagination, LoadingCard },
  data() {
    return {
      favoriteList: [],
      currentPage: 1,
      isLoading: true,
      loadingCardCout: JSON.parse(localStorage.getItem("favoriteList")).length,
    };
  },
  methods: {
    getLocalStorage() {
      this.isLoading = true;
      this.favoriteList =
        JSON.parse(localStorage.getItem("favoriteList")) || [];
    },
    setFavoriteList(favoriteList) {
      this.favoriteList = favoriteList;
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
  async created() {
    await this.getLocalStorage();
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  },
};
</script>
