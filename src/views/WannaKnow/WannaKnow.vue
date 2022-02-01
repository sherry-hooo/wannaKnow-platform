<template>
  <!-- Danny負責 -->
  <div class="wannaKnow">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped lang="scss">
section {
  margin: 0 auto;
  background: #000;

  @include breakpoint.tablet {
    background: orange;
  }
  @include breakpoint.desktop {
    background: green;
  }
}
.tag {
  color: color.$green-200;
  @extend %title;
}
</style>
