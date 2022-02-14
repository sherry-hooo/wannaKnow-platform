<template>
  <div>
    <ul class="pagination">
      <li>＜</li>
      <li class="pagination_number pagination_number-active">1</li>
      <li class="pagination_number">2</li>
      <li class="pagination_number">3</li>
      <li class="pagination_number">4</li>
      <li class="pagination_number">5</li>
      <li>...</li>
      <li class="pagination_number pagination_number-twoDigits">100</li>
      <li>＞</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  color: color.$green-300;
  margin: 30px 0;
  li {
    cursor: pointer;
  }
  @extend %body;
  li:first-of-type,
  li:last-of-type {
    @extend %sub-title;
    font-weight: 900;
    padding: 4px 8px;
  }
  .pagination_number {
    background-color: color.$white;
    border-radius: 50%;
    border: 1px solid color.$green-300;
    padding: 4px 8px;
    margin: 0 10px;
    &:hover {
      color: color.$white;
      background-color: color.$green-300;
    }
    &-active {
      @extend .pagination_number;
      color: color.$white;
      background-color: color.$green-300;
    }
    &-twoDigits {
      border-radius: 16px;
    }
  }
}
</style>
