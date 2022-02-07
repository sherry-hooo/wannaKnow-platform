<template>
  <ul class="newsBoard">
    <li v-for="news in newsList" :key="news.id" class="newsBoard_list">
      {{ news.message }}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      displayAmount: 5,
      newsList: [
        { id: 1, date: "2022/2/28", message: "228連假～" },
        { id: 2, date: "2022/03/01", message: "想知道網站即將上線!" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.newsBoard {
  &_list {
    padding: 5px;
    border-bottom: 1px dashed color.$green-200;
    text-align: start;
  }
}
</style>
