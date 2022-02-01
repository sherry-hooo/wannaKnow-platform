<template>
  <section></section>
  想知道論壇首頁
  <Banner></Banner>
  <Board></Board>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Board from "@/components/Board.vue";

export default {
  components: {
    Banner,
    Board,
  },
};
</script>

<style scoped lang="scss">
div {
  width: 80%;
  border: 1px solid black;
  margin: 0 auto;
}

.banner {
  height: 300px;
}

.board {
  height: 500px;
}
</style>
