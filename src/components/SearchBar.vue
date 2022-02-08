<template>
  <!-- Sherry負責 -->
  <div class="searchBar">
    <div class="navBar_icon" @click="toggleNav">
      <font-awesome-icon icon="bars"></font-awesome-icon>
    </div>
    <div class="search_icon-bg">
      <font-awesome-icon icon="search"></font-awesome-icon>
    </div>
    <form class="search">
      <div class="search_icon">
        <font-awesome-icon icon="search"></font-awesome-icon>
      </div>
      <label class="search_text"
        ><input type="text" placeholder="請輸入關鍵字" maxlength="20"
      /></label>
      <input type="submit" value="送出" class="search_submit" />
    </form>
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

.search_icon {
  &-bg {
    display: none;
    @include breakpoint.tablet {
    }
  }
}
.searchBar {
  // position: relative;
  // z-index: 10;
  @include breakpoint.tablet {
    position: unset;
  }
  .search {
    // position: absolute;
    // top: 100%;
    // width: 100%;
    // z-index: 10;
    // background: rgba(150, 94, 94, 0.151);
    input {
      background: none;
    }
    // @include breakpoint.tablet {
    position: unset;
    display: flex;
    align-items: center;
    margin-left: 20px;

    &_text {
      padding: 5px;
      border-bottom: 1px solid black;
      margin: 0 10px;
      text-align: start;
      input[type="text"] {
        width: 100%;
        &::placeholder {
          color: black;
        }
      }
    }
    &_submit {
      border: 1px solid black;
      border-radius: 5px;
      padding: 2px 10px;
      box-shadow: 0px 1px 1px black;
      cursor: pointer;
    }
  }
  // }
}
</style>
