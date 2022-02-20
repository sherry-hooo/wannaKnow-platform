<template>
  <div class="cards_wrapper">
    <Card
      v-for="card in cardList"
      :key="card.wanna_know_id"
      :card="card"
    ></Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import api from "@/service/api.js";

export default {
  components: { Card },
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
