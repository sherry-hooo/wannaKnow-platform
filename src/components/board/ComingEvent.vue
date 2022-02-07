<template>
  <ul class="comingEventBoard">
    <li
      v-for="wannaKnow in wannaKnowList"
      :key="wannaKnow.id"
      class="comingEventBoard_list"
    >
      {{ wannaKnow.message }}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      displayAmount: 5,
      wannaKnowList: [
        { id: 1, date: "2022/2/28", message: "職場經驗分享" },
        { id: 2, date: "2022/03/01", message: "你所不知道的JS!" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.comingEventBoard {
  &_list {
    padding: 5px;
    border-bottom: 1px dashed color.$green-200;
    text-align: start;
  }
}
</style>
