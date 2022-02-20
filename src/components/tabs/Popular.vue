<template>
  <div class="cards_wrapper">
    <!-- <Card
      v-for="card in cardList"
      :key="card.wanna_know_id"
      :card="card"
    ></Card> -->
    <LoadingCard v-for="card in 5" :key="card"></LoadingCard>
  </div>
</template>

<script>
// import Card from "@/components/Card.vue";
import LoadingCard from "@/components/LoadingCard.vue";
import api from "@/service/api.js";

export default {
  components: { LoadingCard },
  data() {
    return {
      cardList: [],
    };
  },
  methods: {
    getCardApi() {
      api.getWannaKnowData().then((res) => (this.cardList = res.data.data));
    },
  },
  created() {
    this.getCardApi();
  },
};
</script>
