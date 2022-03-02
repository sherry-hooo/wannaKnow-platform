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
import Card from "@/components/wannaKnow/Card.vue";
import LoadingCard from "@/components/wannaKnow/LoadingCard.vue";
import Pagination from "@/components/shared/Pagination.vue";

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
      currentPage: 1,
      totalPage: 0,
      isLoading: true,
      orderBy: "date",
    };
  },
  computed: {
    cardList() {
      return this.$store.state.wannaKnow.filteredWannaKnow;
    },
  },
  methods: {
    async getCardData() {
      this.isLoading = true;
      const queryObj = {
        page: this.currentPage,
        category: this.tabCategory,
      };
      await this.$store.dispatch("wannaKnow/getWannaKnowByCategory", queryObj);
      this.isLoading = false;
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
