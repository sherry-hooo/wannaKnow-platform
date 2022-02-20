<template>
  <div class="cards_wrapper">
    <Card
      v-for="card in cardList"
      :key="card.wanna_know_id"
      :card="card"
    ></Card>
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

import api from "@/service/api.js";

export default {
  components: { Card, Pagination },
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
      currentPage: 1,
      totalPage: 0,
    };
  },
  methods: {
    getCardApi(page) {
      api.getWannaKnowData(page).then((res) => {
        this.cardList = res.data.data;
        this.totalPage = +res.data.total_page;
      });
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
