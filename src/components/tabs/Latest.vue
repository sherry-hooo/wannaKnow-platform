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
  props: {
    tabCategory: {
      type: String,
      default: "全部",
    },
  },
  data() {
    return {
      cardList: [],
      currentPage: 1,
      totalPage: 0,
      isLoading: true,
      orderBy: "date",
    };
  },
  methods: {
    getCardData() {
      this.isLoading = true;
      const queryObj = {
        page: this.currentPage,
        category: this.tabCategory,
      };
      api
        .getWannaKnowByCategory(queryObj)
        .then((res) => {
          this.cardList = res.data.data;
          this.totalPage = +res.data.total_page;
        })
        .then(() => (this.isLoading = false));
    },
    changePage(page) {
      this.currentPage = page;
      this.getCardData();
    },
  },
  created() {
    this.getCardData();
  },
  watch: {
    tabCategory() {
      // 重新篩選類別後從第一頁開始渲染
      this.currentPage = 1;
      this.getCardData();
    },
  },
};
</script>
