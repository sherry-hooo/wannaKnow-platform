<template>
  <div class="cards_wrapper">
    <template v-if="isLoading">
      <LoadingCard v-for="card in 5" :key="card"></LoadingCard>
    </template>
    <template v-else>
      <Card
        v-for="card in cardList"
        :key="card.wanna_know_id"
        :card="card"
      ></Card>
    </template>
  </div>
  <Pagination
    v-if="totalPage != 0"
    @changePage="changePage"
    :totalPage="totalPage"
    :currentPage="currentPage"
  ></Pagination>
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
import LoadingCard from "@/components/LoadingCard.vue";

import api from "@/service/api.js";

export default {
  components: { Card, Pagination, LoadingCard },
  data() {
    return {
      cardList: [],
      currentPage: 1,
      totalPage: 0,
      isLoading: true,
    };
  },
  methods: {
    getCardApi(page) {
      this.isLoading = true;
      api
        .getWannaKnowData(page)
        .then((res) => {
          this.cardList = res.data.data;
          this.totalPage = +res.data.total_page;
        })
        .then(() => (this.isLoading = false));
    },
    changePage(page) {
      this.currentPage = page;
      this.getCardApi(page);
    },
  },
  created() {
    this.getCardApi(this.currentPage);
  },
};
</script>
