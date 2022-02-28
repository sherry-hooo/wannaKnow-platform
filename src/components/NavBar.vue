<template>
  <nav>
    <router-link :to="{ name: 'Home' }" class="nav_homePage">
      <img src="@/assets/logo.svg" alt="好想工作室logo" />
    </router-link>
    <router-link :to="{ name: 'WannaKnow' }">
      <img class="nav_icon" src="@/assets/wannaKnow.svg" alt="想知道嗎icon" />
      想知道嗎
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.showNav {
  position: absolute;
  z-index: 10;
  left: 0;
  width: 50vw;
  transition: 0.7s ease-in-out;

  @include breakpoint.tablet {
    position: unset;
    width: 90px;
    grid-area: navBar;
  }
}
nav {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: 0;
  left: -100vw;
  width: 90px;
  min-height: 100vh;
  background: color.$green-200;
  transition: 0.7s ease-in-out;

  @include breakpoint.tablet {
    position: unset;
    z-index: 0;
    display: flex;
    flex-direction: column;
    grid-area: navBar;
  }

  a {
    &.router-link-active {
      background: color.$green-300;
    }
    &.nav_homePage {
      height: 100px;
      padding: 10px 5px;

      @include breakpoint.tablet {
        height: initial;
      }
      img {
        height: 100%;
        @include breakpoint.tablet {
          height: initial;
          width: 100%;
        }
      }
    }
    &:not(:first-child) {
      height: calc(100% / 3);
      font-weight: bold;
      padding: 10px 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      @include breakpoint.tablet {
        height: initial;
      }
    }
  }
  .nav_icon {
    width: 50px;
    margin-bottom: 5px;
  }
}

// 滑出動畫
@keyframes slide-out {
  from {
    transform: translateX(-90px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
