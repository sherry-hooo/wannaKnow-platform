<template>
  <div class="wannaKnow">
    <router-link
      :to="{ name: $route.name === 'ListView' ? 'CalendarView' : 'ListView' }"
      class="layout_toggle_btn"
    >
      <font-awesome-icon
        :icon="btnIcon"
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
    return {
      btnIcon: "calendar-alt",
    };
  },
  watch: {
    "$route.name": function (page) {
      this.btnIcon = page === "ListView" ? "calendar-alt" : "list-alt";
    },
  },
};
</script>
<style scoped lang="scss">
.wannaKnow {
  padding: 0 50px;
  position: relative;
  .layout_toggle_btn {
    position: absolute;
    top: 10px;
    right: 10px;
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
