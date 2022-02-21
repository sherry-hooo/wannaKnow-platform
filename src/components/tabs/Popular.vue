<template>
  <div class="cards_wrapper">
    <Card
      v-for="card in cardList"
      :key="card.wanna_know_id"
      :card="card"
    ></Card>
    <LoadingCard v-for="card in 5" :key="card"></LoadingCard>
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
    };
  },
  methods: {
    getCardApi(orderBy, category) {
      api
        .getWannaKnowData(orderBy, category)
        .then((res) => (this.cardList = res.data.data));
    },
  },
  created() {
    this.getCardApi("hot");
  },
};
</script>
