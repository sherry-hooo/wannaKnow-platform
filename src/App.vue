<template>
  <SearchBar />
  <NavBar />
  <div class="view-area">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    SearchBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: color.$black;
  display: grid;
  grid-template-columns: 90px 1fr;
  // 從70px改成50px
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "navBar searchBar"
    "navBar view-area";
  .view-area {
    grid-area: view-area;
  }
}
</style>
