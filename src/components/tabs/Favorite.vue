<template>
  <div class="cards_wrapper">
    <template v-if="isLoading">
      <LoadingCard v-for="card in loadingCardCount" :key="card"></LoadingCard>
    </template>
    <template v-else>
      <Card
        v-for="card in renderList"
        :key="card.wanna_know_id"
        :card="card"
        @setFavoriteList="setFavoriteList"
      ></Card>
    </template>
  </div>
  <Pagination
    v-if="favoriteList.length > 10"
    @changePage="changePage"
    :totalPage="totalPage"
    :currentPage="currentPage"
  ></Pagination>
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
      loadingCardCount: JSON.parse(localStorage.getItem("favoriteList"))
        ? JSON.parse(localStorage.getItem("favoriteList")).length
        : 0,
      perPageCount: 10,
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.favoriteList.length / this.perPageCount);
    },
    renderList() {
      return this.favoriteList.slice(
        this.perPageCount * (this.currentPage - 1),
        this.perPageCount * this.currentPage
      );
    },
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
