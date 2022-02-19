<template>
  <ul class="filterTab">
    <li class="filterTab_item">
      <span class="filterTab_text">全部</span>
    </li>
    <div class="filterTab_content">
      <li
        v-for="category in categoryList"
        :key="category.name"
        class="filterTab_item"
      >
        <div class="filterTab_img">
          <img :src="category.img" alt="category.name" />
        </div>
        <span class="filterTab_text">{{ category.name }}</span>
      </li>
    </div>
  </ul>

  <div class="tabWrapper">
    <div
      v-for="filter in filterList"
      :key="filter"
      @click="tabFilter(filter.component)"
      :class="[
        { 'tabWrapper_item-active': currentFilter === filter.component },
        'tabWrapper_item',
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
// 分類篩選tab
.filterTab {
  // border: 1px solid #000;
  margin: 20px 0;
  &_content {
    @include flex.flex(start, center, row, nowrap);
    display: none;
    white-space: nowrap;
    overflow: scroll;
  }
}
@include breakpoint.tablet {
  .filterTab {
    width: 95%;
  }
}
.filterTab_item {
  display: inline-block;
  padding: 2px 20px;
  border: 2px dashed color.$gray;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.4s;
  &:hover {
    background-color: #ffc700;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
  .filterTab_img {
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
  .filterTab_text {
    @extend %title;
    vertical-align: middle;
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

.tabWrapper {
  @extend %sub-title;
  font-weight: 500;
  display: flex;
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
    flex: 1;
    padding: 3px 0;
    transition: background-color 0.3s;
    cursor: pointer;
    @include breakpoint.tablet {
      flex: none;
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
