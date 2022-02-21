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
import Card from "@/components/Card.vue";
import LoadingCard from "@/components/LoadingCard.vue";
import api from "@/service/api.js";

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
      cardList: [],
      isLoading: true,
    };
  },
  methods: {
    getCardApi() {
      this.isLoading = true;
      const params = { orderby: "hot", category: this.tabCategory };
      api
        .getWannaKnowByCategory(params)
        .then((res) => (this.cardList = res.data.data))
        .then(() => (this.isLoading = false));
    },
  },
  created() {
    this.getCardApi();
  },
  watch: {
    tabCategory() {
      this.getCardApi();
    },
  },
};
</script>
