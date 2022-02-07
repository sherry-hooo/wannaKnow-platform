<template>
  <ul class="wishBoard">
    <li
      v-for="wannaKnow in wishBoardList"
      :key="wannaKnow.id"
      class="wishBoard_list"
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
      wishBoardList: [
        { id: 1, date: "2022/2/28", message: "想聽Chris分享新書" },
        { id: 2, date: "2022/03/01", message: "DB欄位怎麼分比較好呢" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.wishBoard {
  &_list {
    padding: 5px;
    border-bottom: 1px dashed color.$green-200;
    text-align: start;
  }
}
</style>
