<template>
  <div class="home">
    <Banner></Banner>
    <Board></Board>
    <section></section>
  </div>
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
.home {
  @include breakpoint.tablet {
    padding: 10px 30px;
  }
}
.board {
  height: 500px;
}
</style>
