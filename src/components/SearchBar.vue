<template>
  <div class="searchBar">
    <div class="navBar_icon" @click="toggleNav">
      <font-awesome-icon icon="bars"></font-awesome-icon>
    </div>
    <div class="search_icon-toggle" @click="openSearch = !openSearch">
      <font-awesome-icon icon="search"></font-awesome-icon>
    </div>
    <form :class="[{ 'search-open': openSearch }, 'search']">
      <label class="search_text"
        ><input type="text" placeholder="關鍵字..." maxlength="20"
      /></label>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openSearch: false,
    };
  },
  methods: {
    toggleNav() {
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
  background: color.$gray;
  display: flex;
  align-items: stretch;

  @include breakpoint.tablet {
    align-items: center;
  }
  .navBar_icon {
    width: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    @include breakpoint.tablet {
      display: none;
    }
  }
  .search_icon {
    &-toggle {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0 20px;
      @include breakpoint.tablet {
        display: none;
      }
    }
  }
}

// search bar 位置
.searchBar {
  position: relative;
  z-index: 9;
  @include breakpoint.tablet {
    position: unset;
    z-index: 0;
  }
  > .search {
    opacity: 0;
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(54, 54, 54, 0.8);
    transition: padding 0.5s ease-in-out;
    pointer-events: none;

    @include breakpoint.tablet {
      opacity: 1;
      position: unset;
      z-index: 0;
      height: initial;
      background: initial;
      pointer-events: initial;
    }
  }
  form.search-open {
    opacity: 1;
    top: 100%;
    position: absolute;
    z-index: 9;
    padding: 20px 0;
    transition: padding 0.5s ease-in-out;
    pointer-events: initial;

    @include breakpoint.tablet {
      position: unset;
      z-index: 0;
      height: initial;
      padding: 0;
      background: initial;
    }
  }
}

// search bar 樣式
.search {
  &_text {
    display: block;
    width: 70%;
    padding: 5px 0px 5px 50px;
    border: 3px solid #c4c4c4;
    border-radius: 26px;
    margin: 0 auto;
    background: #ffffff;
    // text-align: center;
    background-image: url(~@/assets/magnifer.svg);
    background-repeat: no-repeat;
    background-size: 15px;
    background-position: top 50% left 20px;
    overflow: hidden;
    @include breakpoint.tablet {
      width: 300px;
    }
    > input {
      width: 100%;
    }
  }
}
</style>
