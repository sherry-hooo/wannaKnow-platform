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
      cardList: [
        {
          id: 1,
          attachment: "",
          category: "技術剖析",
          date: "2017-04-10T16:00:00.000Z",
          isFavorite: true,
          like: 0,
          speaker: "Chris",
          tags: "",
          title: "Flex 補完計劃1",
          update_time: "2017-04-10T16:00:00.000Z",
          wanna_know_id: "",
          year: 2017,
        },
        {
          id: 2,
          attachment: "",
          category: "技術剖析",
          date: "2017-04-10T16:00:00.000Z",
          isFavorite: true,
          like: 0,
          speaker: "Chris",
          tags: "",
          title: "Flex 補完計劃2",
          update_time: "2017-04-10T16:00:00.000Z",
          wanna_know_id: "",
          year: 2017,
        },
        {
          id: 3,
          attachment: "",
          category: "技術剖析",
          date: "2017-04-10T16:00:00.000Z",
          isFavorite: true,
          like: 0,
          speaker: "Chris",
          tags: "",
          title: "Flex 補完計劃3",
          update_time: "2017-04-10T16:00:00.000Z",
          wanna_know_id: "",
          year: 2017,
        },
        {
          id: 4,
          attachment: "",
          category: "技術剖析",
          date: "2017-04-10T16:00:00.000Z",
          isFavorite: true,
          like: 0,
          speaker: "Chris",
          tags: "",
          title: "Flex 補完計劃4",
          update_time: "2017-04-10T16:00:00.000Z",
          wanna_know_id: "",
          year: 2017,
        },
      ],
    };
  },
  methods: {
    getCardApi() {
      api
        .getWannaKnowData()
        .then((res) => (this.cardList = res.data.slice(0, 10)));
    },
  },
  created() {
    this.getCardApi();
  },
};
</script>
