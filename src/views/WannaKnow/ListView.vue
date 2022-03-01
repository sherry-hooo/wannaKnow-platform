<template>
  <div class="search" v-if="$store.state.isSearch">
    <div class="search_icon" @click="$store.commit('toggleSearch')">
      <img src="@/assets/magnifer-white.svg" alt="放大鏡icon" />
    </div>
    <div class="search_result">
      <p class="search_result_title">
        <span>{{ this.$store.state.searchWord }}</span
        >相關文章
      </p>
      <p class="search_result_body">
        共有 <span>{{ 0 }}</span> 則文章
      </p>
    </div>
  </div>
  <ul class="filter">
    <span class="filter_currentTab">{{ tabCategory }}</span>
    <!-- <li class="filter_item filter_item-whole">
      <span
        class="filter_text"
        @click="filterCategory('全部')"
        :class="{ 'filterTab-active': tabCategory === '全部' }"
        >全部</span
      >
    </li> -->
    <div class="filter_moreBtn" @click="toggleMoreFilter">
      <span>more...</span>
      <font-awesome-icon
        :icon="['fas', 'angle-double-down']"
        class="filter_moreIcon"
      />
    </div>
    <div
      class="filter_content"
      :class="{ show: moreFilterOpen }"
      ref="scrollFilter"
    >
      <li
        v-for="category in categoryList"
        :key="category.name"
        class="filter_item"
        :class="{ 'filterTab-active': tabCategory === category.name }"
        @click="filterCategory(category.name)"
      >
        <div v-if="category.img" class="filter_img">
          <img :src="category.img" alt="category.name" />
        </div>
        <span class="filter_text">{{ category.name }}</span>
      </li>
    </div>
    <font-awesome-icon
      :icon="['fas', 'chevron-left']"
      class="filter_scrollBtn filter_scrollBtn-prev"
      @click="scrollFilter(-80)"
    />
    <font-awesome-icon
      :icon="['fas', 'chevron-right']"
      class="filter_scrollBtn filter_scrollBtn-next"
      @click="scrollFilter(80)"
    />
  </ul>

  <!-- 最新, 熱門, 收藏tab -->
  <div class="tabs">
    <div
      v-for="filter in filterList"
      :key="filter"
      @click="filterOrder(filter.component)"
      :class="[
        { 'tabs_item-active': currentFilter === filter.component },
        'tabs_item',
      ]"
    >
      {{ filter.title }}
    </div>
  </div>
  <section>
    <component :is="currentFilter" :tabCategory="tabCategory"></component>
  </section>
</template>

<script>
import Latest from "@/components/tabs/Latest.vue";
import Popular from "@/components/tabs/Popular.vue";
import Favorite from "@/components/tabs/Favorite.vue";

export default {
  name: "ListView",
  components: {
    Latest,
    Popular,
    Favorite,
  },
  data() {
    return {
      tabCategory: "全部",
      categoryList: [
        { name: "全部" },
        { img: require("@/assets/projectExperience.svg"), name: "專案經驗" },
        {
          img: require("@/assets/learningExpericence.svg"),
          name: "學習小心得",
        },
        { img: require("@/assets/technicalAnalysis.svg"), name: "技術剖析" },
        { img: require("@/assets/career.svg"), name: "職場工作" },
        { img: require("@/assets/life.svg"), name: "生活頻道" },
      ],
      currentFilter: "Latest",
      apiData: [],
      filterList: [
        { component: "Latest", title: "最新" },
        { component: "Popular", title: "熱門" },
        { component: "Favorite", title: "收藏" },
      ],
      moreFilterOpen: false,
      currentPosition: 0,
    };
  },
  computed: {
    cardList() {
      return this.apiData;
    },
    filterRect() {
      return this.$refs.scrollFilter.getBoundingClientRect();
    },
  },
  methods: {
    filterOrder(orderBy) {
      this.currentFilter = orderBy;
    },
    filterCategory(category) {
      this.tabCategory = category;
    },
    toggleMoreFilter() {
      this.moreFilterOpen = !this.moreFilterOpen;
    },
    scrollFilter(perScroll) {
      let content = this.$refs.scrollFilter;
      let contentWidth = this.filterRect.width;
      let innerWidth = content.scrollWidth;
      let maxWidth = innerWidth - contentWidth;
      this.currentPosition += perScroll;
      if (this.currentPosition >= 0 && this.currentPosition <= maxWidth) {
        content.scroll(this.currentPosition, 0);
        console.log(this.currentPosition);
      }
      if (this.currentPosition < 0) {
        this.currentPosition = 0;
      }
      if (this.currentPosition > maxWidth) {
        this.currentPosition = maxWidth;
      }
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
@use "src/assets/sass/utils/flex";
.calendarView {
  color: color.$green-300;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
}

// 篩選器
.filter {
  @include flex.flex(start, center, row, nowrap);
  position: relative;
  width: 200px;
  margin: 15px 20px 30px 20px;
  @include breakpoint.tablet {
    width: calc(100% - 160px);
    margin: 15px 40px;
  }
  @include breakpoint.desktop {
    width: calc(100% - 50px);
    margin: 5px 0 30px 0;
  }
  .filter_scrollBtn {
    display: none;
    @include breakpoint.tablet {
      display: inline-block;
      position: absolute;
      padding: 10px;
      font-size: 20px;
      cursor: pointer;
      transition: 0.25s;
      &:hover {
        color: #ffc700;
      }
    }
    @include breakpoint.desktop {
      display: none;
    }
    &-prev {
      left: -50px;
      &:hover {
        transform: translateX(-3px);
      }
    }
    &-next {
      right: -50px;
      &:hover {
        transform: translateX(3px);
      }
    }
  }
}

.filter_currentTab {
  font-size: 16px;
  border: 2px dashed color.$gray;
  border-radius: 25px;
  padding: 2px 20px;
  @include breakpoint.tablet {
    font-size: 18px;
    display: none;
  }
}

// 更多篩選按鈕
.filter_moreBtn {
  padding: 5px 5px 0 5px;
  font-size: 25px;
  color: #888;
  cursor: pointer;
  align-self: flex-end;
  transition: transform 0.3s;
  line-height: 16px;
  @include breakpoint.tablet {
    display: none;
  }
  &:hover {
    span {
      color: #ffc700;
    }
    .filter_moreIcon {
      transform: translateY(3px);
      color: #ffc700;
    }
  }
  > * {
    font-size: 14px;
  }
  span {
    margin-right: 3px;
    vertical-align: bottom;
    transition: 0.3s;
  }
  .filter_moreIcon {
    transition: 0.3s;
    vertical-align: top;
    color: #aaa;
  }
}

// 更多篩選區塊
.filter_content {
  @include flex.flex(start, stretch, column, wrap);
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 100;
  width: fit-content;
  max-height: 0;
  text-align: left;
  overflow: hidden;
  scroll-behavior: smooth;
  background-color: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.6);
  transition: max-height 0.5s;
  @include breakpoint.tablet {
    @include flex.flex(start, center, row, nowrap);
    position: static;
    column-gap: 15px;
    width: 100%;
    max-height: none;
    overflow: hidden;
    background-color: transparent;
    box-shadow: none;
  }
  @include breakpoint.desktop {
    overflow: scroll;
  }

  &.show {
    max-height: 300px;
  }
}

// 篩選tab
.filter_item {
  padding: 10px 35px;
  cursor: pointer;
  transition: background-color 0.3s;
  @include breakpoint.tablet {
    flex: 0 0 auto;
    border: 2px dashed color.$gray;
    border-radius: 25px;
    padding: 2px 20px;
  }

  &:hover {
    background-color: #ffc700;
  }
  .filter_img {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align: middle;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .filter_text {
    font-size: 16px;
    vertical-align: middle;
    @include breakpoint.tablet {
      font-size: 18px;
    }
    @include breakpoint.desktop {
      font-size: 20px;
    }
  }
}

.filterTab {
  //   white-space: nowrap;
  //   overflow-x: scroll;
  //   &::-webkit-scrollbar {
  //     display: none;
  //   }
  //   @include breakpoint.tablet {
  //     white-space: normal;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     flex-wrap: wrap;
  //     overflow-x: auto;
  //   }
  //   @extend %title;

  &-active {
    background-color: #ffc700;
    color: color.$white;
  }
}
//   li {
//     // width: auto;
//     display: inline-block;
//     padding: 4px 20px;
//     margin: 12px;
//     @include breakpoint.tablet {
//       // width: 33.333%;
//     }
//     @include breakpoint.desktop {
//       // width: auto;
//       padding: 8px 24px;
//     }
//     border: 2px color.$gray dashed;
//     border-radius: 30px;
//     margin: 16px;
//     span {
//       vertical-align: middle;
//     }
//     img {
//       margin-right: 4px;
//       vertical-align: middle;
//     }
//     transition: background-color 0.3s;
//     &:hover {
//       background-color: #ffc700;
//       color: color.$white;
//       cursor: pointer;
//     }
//   }
// }

.tabs {
  @extend %sub-title;
  font-weight: 400;
  @include flex.flex(start, stretch, row, nowrap);
  color: color.$black;
  border-bottom: 3px solid color.$green-400;
  @include breakpoint.tablet {
    border-bottom: none;
    padding: 10px 0;
    // 裝飾線
    background-image: linear-gradient(
      to right,
      color.$green-300 0%,
      color.$green-300 50%,
      transparent 50%
    );
    background-size: 40px 3px;
    background-repeat: repeat-x;
    background-position: left top 100%;
  }
  &_item {
    flex: 1 0 0;
    padding: 3px 0;
    transition: background-color 0.3s;
    cursor: pointer;
    @include breakpoint.tablet {
      flex: 0 0 auto;
      padding: 3px 20px;
    }
    &:hover,
    &-active {
      background-color: color.$green-300;
      color: color.$white;
      @include breakpoint.tablet {
        background-color: color.$white;
        color: color.$green-300;
      }
    }
  }
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
  &_icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: color.$green-300;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover::before {
      content: "\2715";
      display: block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 10px;
      color: gray;
      border-radius: 50%;
      background: rgba(128, 128, 128, 0.26);
      position: absolute;
      top: 0;
      left: -5px;
    }
  }
  &_result {
    margin-left: 20px;
    &_title {
      @extend %strong-title;
      text-align: start;
      span {
        margin-right: 10px;
        @extend %strong-title;
        color: color.$green-300;
      }
    }
    &_body {
      @extend %body;
      text-align: start;
    }
  }
}
</style>
