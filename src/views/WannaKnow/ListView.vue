<template>
  <ul class="wannaKnowCatalogs">
    <li class="wannaKnowCatalogs-active">
      <span> 全部</span>
    </li>
    <li>
      <img src="@/assets/projectExperience.svg" alt="" />

      <span> 專案經驗</span>
    </li>
    <li>
      <img src="@/assets/learningExpericence.svg" alt="" />

      <span> 學習小心得</span>
    </li>
    <li>
      <img src="@/assets/technicalAnalysis.svg" alt="" />

      <span> 技術剖析 </span>
    </li>
    <li>
      <img src="@/assets/career.svg" alt="" />

      <span> 職場工作</span>
    </li>
    <li>
      <img src="@/assets/life.svg" alt="" />

      <span> 生活頻道 </span>
    </li>
  </ul>

  <div class="wrapTab">
    <span class="wrapTab-active">最新</span>
    <span>熱門</span>
    <span>追蹤</span>
    <div class="wrapTab_dashed"></div>
  </div>

  <section>
    <Card v-for="(card, index) in 10" :key="index"></Card>
  </section>
  <Pagination></Pagination>
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "ListView",
  components: {
    Card,
    Pagination,
  },
  data() {
    return {
      
    }
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
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @include breakpoint.tablet {
    white-space: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: auto;
  }
  @extend %title;

  &-active {
    background-color: #ffc700;
    color: color.$white;
  }
  li {
    // width: auto;
    display: inline-block;
    padding: 4px 20px;
    margin: 12px;
    @include breakpoint.tablet {
      // width: 33.333%;
    }
    @include breakpoint.desktop {
      // width: auto;
      padding: 8px 24px;
    }
    border: 2px color.$gray dashed;
    border-radius: 30px;
    margin: 16px;
    span {
      vertical-align: middle;
    }
    img {
      margin-right: 4px;
      vertical-align: middle;
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
  display: flex;
  color: color.$black;
  span {
    width: 100%;
    padding: 4px 16px;
    transition: background-color 0.3s;
    &:hover {
      background-color: color.$green-300;
      cursor: pointer;
    }
  }
  border-bottom: 4px solid color.$green-300;
  &-active {
    background-color: color.$green-300;
  }
  @include breakpoint.tablet {
    display: block;
    text-align: start;
    background-color: color.$white;
    border-bottom: 0;
    span {
      &:hover {
        background-color: color.$white;
        color: color.$green-300;
        cursor: pointer;
      }
    }
    &-active {
      background-color: color.$white;
      color: color.$green-300;
    }
  }
}

.wrapTab_dashed {
  display: none;
  @include breakpoint.tablet {
    display: block;
  }
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
</style>
