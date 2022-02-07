<template>
  <div class="board">
    <ul class="board_tabs">
      <li
        v-for="(component, index) in componentsList"
        :key="index"
        @click="tabComponent = component"
        :class="{ 'board_tab-active': tabComponent === component }"
      >
        {{ component }}
      </li>
    </ul>
    <component :is="tabComponent"></component>
  </div>
</template>
<script>
import News from "@/components/board/News.vue";
import ComingEvent from "@/components/board/ComingEvent.vue";
import WishBoard from "@/components/board/WishBoard.vue";
export default {
  components: { News, ComingEvent, WishBoard },
  data() {
    return {
      tabComponent: "News",
      componentsList: ["News", "ComingEvent", "WishBoard"],
    };
  },
};
</script>
<style scoped lang="scss">
.board {
  margin: 10px 10px 0;
  @include breakpoint.tablet {
    margin: 20px 0 0;
  }

  &_tabs {
    display: flex;
    border-bottom: 2px solid color.$green-200;
    li {
      flex: 1;
      padding: 2px 5px;
      @extend %sub-title;
    }
  }
  &_tab-active {
    background: color.$green-200;
  }
}
</style>
