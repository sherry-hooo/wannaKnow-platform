<template>
  <div>
    <Card v-for="(card, index) in cardList" :key="index" :card="card"></Card>
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
