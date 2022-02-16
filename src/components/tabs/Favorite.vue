<template>
  <div>
    <!-- 待改為 :key="card.id" -->
    <Card
      v-for="card in favoriteList"
      :key="card.title"
      :card="card"
      @setFavoriteList="setFavoriteList"
    ></Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      favoriteList: [],
    };
  },
  methods: {
    getLocalStorage() {
      return JSON.parse(localStorage.getItem("favoriteList")) || [];
    },
    setFavoriteList(favoriteList) {
      this.favoriteList = favoriteList;
    },
  },
  created() {
    this.favoriteList = this.getLocalStorage();
  },
};
</script>
