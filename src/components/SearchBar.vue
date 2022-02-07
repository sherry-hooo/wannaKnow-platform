<template>
  <!-- Sherry負責 -->
  <div class="searchBar">
    <div class="navBar_icon" @click="toggleNav">
      <font-awesome-icon icon="bars"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleNav() {
      console.log("toggle");
      this.$emit("toggleNav");
    },
  },
};
</script>

<style scoped lang="scss">
.searchBar {
  grid-area: searchBar;
  width: 100%;
  height: 50px;
  background: color.$brown;
  display: flex;
}

.navBar_icon {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @include breakpoint.tablet {
    display: none;
  }
}
</style>
