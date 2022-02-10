<template>
  <div class="wannaKnow">
    <router-link
      v-if="$route.name === 'ListView'"
      :to="{ name: 'CalendarView' }"
      class="layout_toggle_btn"
    >
      <font-awesome-icon
        icon="calendar-alt"
        size="lg"
        color="#79BC89"
      ></font-awesome-icon>
    </router-link>
    <router-link v-else :to="{ name: 'ListView' }" class="layout_toggle_btn">
      <font-awesome-icon
        icon="list-alt"
        size="lg"
        color="#79BC89"
      ></font-awesome-icon>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.wannaKnow {
  padding: 20px 50px 0;
  position: relative;
  z-index: 0;
  .layout_toggle_btn {
    position: absolute;
    z-index: 10;
    top: 10px;
    right: 10px;
    padding: 10px;
    &:hover {
      transform: scale(1.1);
    }
    @include breakpoint.tablet {
      top: 15px;
      right: 15px;
    }
    @include breakpoint.tablet {
      top: 20px;
      right: 20px;
    }
  }
}
</style>
