<template>
  <div class="applyButton" @click="toggleApplyForm">
    <img src="@/assets/floatingButton.svg" alt="apply-floating-button" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleApplyForm() {
      this.$store.commit("toggleApplyForm", true);
    },
  },
};
</script>
<style scoped lang="scss">
.applyButton {
  position: fixed;
  z-index: 20;
  bottom: 20px;
  left: 100px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    filter: brightness(110%) contrast(120%);
    transform: translate(-1px, -2px);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
