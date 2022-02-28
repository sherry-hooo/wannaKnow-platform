<template>
  <div class="wannaKnow">
    <router-link
      v-if="$route.name === 'ListView'"
      :to="{ name: 'CalendarView' }"
      class="layout_toggle_btn"
    >
      <img src="@/assets/calendar.svg" alt="日曆icon" />
    </router-link>
    <router-link v-else :to="{ name: 'ListView' }" class="layout_toggle_btn">
      <font-awesome-icon
        icon="list-alt"
        size="lg"
        color="#79BC89"
      ></font-awesome-icon>
    </router-link>
    <SideBar></SideBar>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "@/components/wannaKnow/SideBar.vue";
export default {
  components: { SideBar },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.wannaKnow {
  padding: 10px 0;
  @include breakpoint.tablet {
    padding: 20px 30px 0;
  }
  @include breakpoint.desktop {
    padding: 30px 80px 0;
  }
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
