<template>
  <!-- Sherry負責 -->
  <nav>
    <router-link :to="{ name: 'Home' }">
      <img src="@/assets/logo.svg" alt="好想工作室logo" />
    </router-link>
    <router-link :to="{ name: 'WannaKnow' }">
      <img class="nav_icon" src="@/assets/wannaKnow.svg" alt="想知道嗎icon" />
      想知道嗎
    </router-link>
    <router-link :to="{ name: 'Apply' }">
      <font-awesome-icon
        :icon="['far', 'file-alt']"
        size="2x"
      ></font-awesome-icon>
      想知道報名頁面
    </router-link>
    <router-link :to="{ name: 'SideBar' }"> sideBar頁面 </router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.showNav {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transition: all 0.3s ease-in-out;
  @include breakpoint.tablet {
    position: unset;
    grid-area: navBar;
  }
}
nav {
  display: none;
  width: 90px;
  min-height: 100vh;
  background: color.$green-200;

  @include breakpoint.tablet {
    display: flex;
    flex-direction: column;
    grid-area: navBar;
  }
  a {
    width: 100%;
    font-weight: bold;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & + a {
      margin-top: 20px;
    }
    &:hover {
      transform: translate(2px, -5px);
      border: none;
    }
    &.router-link-exact-active {
      border: 1px solid color.$black;
    }
    img {
      width: 100%;
    }
  }
  .nav_icon {
    width: 50px;
    margin-bottom: 5px;
  }
}
</style>
