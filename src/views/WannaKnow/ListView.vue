<template>
  <!-- 篩選器 -->
  <ul class="filter">
    <li class="filter_item filter_item-whole">
      <span class="filter_text">全部</span>
    </li>
    <div class="filter_moreBtn" @click="toggleMoreFilter">
      <span>more...</span>
      <font-awesome-icon
        :icon="['fas', 'angle-double-down']"
        class="filter_moreIcon"
      />
    </div>
    <div class="filter_content" :class="{ show: moreFilterOpen }">
      <li
        v-for="category in categoryList"
        :key="category.name"
        class="filter_item"
      >
        <div class="filter_img">
          <img :src="category.img" alt="category.name" />
        </div>
        <span class="filter_text">{{ category.name }}</span>
      </li>
    </div>
  </ul>

  <!-- 最新, 熱門, 收藏tab -->
  <div class="tabs">
    <div
      v-for="filter in filterList"
      :key="filter"
      @click="tabFilter(filter.component)"
      :class="[
        { 'tabs_item-active': currentFilter === filter.component },
        'tabs_item',
      ]"
    >
      {{ filter.title }}
    </div>
  </div>

  <section>
    <component :is="currentFilter"></component>
  </section>
  <Pagination></Pagination>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import Latest from "@/components/tabs/Latest.vue";
import Popular from "@/components/tabs/Popular.vue";
import Favorite from "@/components/tabs/Favorite.vue";
import api from "@/service/api.js";
export default {
  name: "ListView",
  components: {
    Pagination,
    Latest,
    Popular,
    Favorite,
  },
  data() {
    return {
      categoryList: [
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
    };
  },
  computed: {
    cardList() {
      return this.apiData;
    },
  },
  methods: {
    getWannaKnowApi() {
      api
        .getWannaKnowData()
        .then((res) => (this.apiData = res.data.slice(0, 10)));
    },
    tabFilter(page) {
      this.currentFilter = page;
    },
    toggleMoreFilter() {
      this.moreFilterOpen = !this.moreFilterOpen;
    },
  },
  created() {
    this.getWannaKnowApi();
  },
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
  @include flex.flex(start, center, row, wrap);
  width: calc(100% - 80px);
  padding: 15px 10px;
  @include breakpoint.tablet {
    flex-wrap: nowrap;
    margin-bottom: 0;
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
  &:hover {
    .filter_moreIcon {
      transform: translateY(3px);
    }
  }
  > * {
    font-size: 14px;
  }
  span {
    margin-right: 3px;
    vertical-align: bottom;
  }
  .filter_moreIcon {
    vertical-align: top;
    color: #aaa;
  }
  @include breakpoint.tablet {
    display: none;
  }
}

// 更多篩選區塊
.filter_content {
  @include flex.flex(start, center, row, nowrap);
  gap: 15px;
  flex: 0 0 100%;
  max-height: 0;
  margin-top: 15px;
  white-space: nowrap;
  overflow: scroll;
  transition: 0.3s;
  &.show {
    max-height: 50px;
  }
  @include breakpoint.tablet {
    max-height: 50px;
    flex: 1 0 0;
    margin-top: 0;
  }
}

// 篩選tab
.filter_item {
  display: inline-block;
  padding: 0 15px;
  border: 2px dashed color.$gray;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.4s;
  &:hover {
    background-color: #ffc700;
  }
  .filter_img {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    vertical-align: middle;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .filter_text {
    @extend %sub-title;
    vertical-align: middle;
  }
  @include breakpoint.tablet {
    &-whole {
      margin-right: 15px;
    }
  }
}

// .filterTab {
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

//   &-active {
//     background-color: #ffc700;
//     color: color.$white;
//   }
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
</style>
