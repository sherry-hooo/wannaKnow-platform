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
</template>

<script>
import Card from "@/components/wannaKnow/Card.vue";
import LoadingCard from "@/components/wannaKnow/LoadingCard.vue";

export default {
  components: { LoadingCard, Card },
  props: {
    tabCategory: {
      type: String,
      default: "全部",
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    cardList() {
      return this.$store.state.wannaKnow.filteredWannaKnow;
    },
  },
  methods: {
    getCardData() {
      this.isLoading = true;
      const queryObj = {
        page: this.currentPage,
        category: this.tabCategory,
        orderby: "like",
      };
      this.$store.dispatch("wannaKnow/getWannaKnowByCategory", queryObj);
      setTimeout(() => {
        this.isLoading = false;
      }, 300);
    },
  },
  created() {
    this.getCardData();
  },
  watch: {
    tabCategory() {
      this.getCardData();
    },
  },
};
</script>
