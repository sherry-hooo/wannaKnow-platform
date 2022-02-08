<template>
  <!-- Danny負責 -->
  <!-- font-aweome icon 可以自由移動位置~ -->
  <ul class="wannaKnowCatalogs">
    <li>全部</li>
    <li>專案經驗</li>
    <li>學習小心得</li>
    <li>技術剖析</li>
    <li>職場工作</li>
    <li>生活頻道</li>
  </ul>

  <div class="wrapTab">
    <span>最新</span>
    <span>熱門</span>
    <span>追蹤</span>
    <div class="wrapTab_dashed"></div>
  </div>

  <section>
    <Card v-for="(card, index) in 10" :key="index"></Card>
  </section>
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
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "ListView",
  components: {
    Card,
  },
};
</script>

<style scoped lang="scss">
.calendarView {
  color: color.$green-300;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
}

.wannaKnowCatalogs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @extend %title;
  li:first-of-type {
    background-color: #ffc700;
    color: color.$white;
  }
  li {
    padding: 8px 24px;
    border: 2px color.$gray dashed;
    border-radius: 30px;
    margin: 16px;
    @include breakpoint.tablet {
      padding: 4px 20px;
      margin: 12px;
    }
    svg {
      margin-right: 4px;
      color: color.$green-300;
    }
    transition: background-color 0.3s;
    &:hover {
      background-color: #ffc700;
      color: color.$white;
      cursor: pointer;
    }
  }
}
.wrapTab {
  @extend %strong-title;
  margin: 0 auto;
  text-align: start;
  // width: 90%;
  span {
    margin: 0 16px;
    &:hover {
      color: color.$green-300;
      cursor: pointer;
    }
  }
  span:first-of-type {
    color: color.$green-300;
  }
}
.wrapTab_dashed {
  width: 100%;
  height: 3px;
  margin: 12px 0;
  background-image: linear-gradient(
    to right,
    color.$green-300 0%,
    color.$green-300 50%,
    transparent 50%
  );
  background-size: 50px 3px;
  background-repeat: repeat-x;
}
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
  }
  .pagination_number-active {
    color: color.$white;
    background-color: color.$green-300;
  }
  .pagination_number-twoDigits {
    border-radius: 16px;
  }
}
</style>
