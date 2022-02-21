<template>
  <div class="applyButton" @click="toggleApplyForm">
    <img src="@/assets/floatingButton.svg" alt="apply-floating-button" />
  </div>
  <p class="test" v-if="isApplyFormOpen">123</p>
  <!-- <ApplyForm></ApplyForm> -->
</template>
<script>
// import ApplyForm from "@/components/ApplyForm.vue";
export default {
  components: {},
  data() {
    return {
      isApplyFormOpen: false,
    };
  },
  methods: {
    toggleApplyForm() {
      this.isApplyFormOpen = !this.isApplyFormOpen;
      // this.$store.commit("toggleApplyForm", true);
    },
  },
};
</script>
<style scoped lang="scss">
.test {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 19;
  background: rgba(128, 128, 128, 0.37);
}
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
