<template>
  <div class="pagination">
    <button
      @click="changePage(currentPage - 1)"
      :class="[
        { 'pagination_btn-disable': currentPage === 1 },
        'pagination_btn',
      ]"
    >
      <font-awesome-icon icon="chevron-left"></font-awesome-icon>
    </button>
    <ul class="pagination_pages">
      <li
        v-for="(page, index) in displayPages"
        :key="index"
        @click="changePage(page)"
        :class="[
          { 'pagination_pages_page-active': currentPage === page },
          'pagination_pages_page',
        ]"
      >
        {{ page }}
      </li>
    </ul>
    <button
      @click="changePage(currentPage + 1)"
      :class="[
        { 'pagination_btn-disable': currentPage === totalPage },
        'pagination_btn',
      ]"
    >
      <font-awesome-icon icon="chevron-right"></font-awesome-icon>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: Number,
    currentPage: {
      type: Number,
    },
  },
  data() {
    return {
      pageBtnCount: 5,
    };
  },
  computed: {
    displayPages() {
      const timesPercent = Math.floor(
        (this.currentPage - 1) / this.pageBtnCount
      );
      return Array(this.totalPage)
        .fill(1)
        .map((initialValue, index) => initialValue + index)
        .slice(
          this.pageBtnCount * timesPercent,
          this.pageBtnCount * (timesPercent + 1)
        );
    },
  },
  methods: {
    changePage(page) {
      if (page === 0) {
        return;
      } else {
        this.$emit("changePage", page);
      }
    },
  },
  watch: {},
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  &_btn {
    min-width: 24px;
    color: color.$green-300;
    background: none;
    cursor: pointer;
    &-disable {
      color: gray;
      cursor: not-allowed;
    }
  }
  &_pages {
    @extend %body;
    color: color.$green-300;
    display: flex;
    margin: 0 10px;
    &_page {
      min-width: 24px;
      line-height: 24px;
      min-height: 24px;
      font-weight: 500;
      padding: 2px;
      box-sizing: content-box;
    }
  }
}

%hightLight-page {
  background: color.$green-300;
  color: color.$white;
  border-radius: 50%;
  cursor: pointer;
}

// page 樣式
.pagination {
  &_pages_page {
    &-active,
    &:hover {
      @extend %hightLight-page;
    }
    & + & {
      margin-left: 5px;
    }
  }
}

// .pagination {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: color.$green-300;
//   margin: 30px 0;
//   li {
//     cursor: pointer;
//   }
//   @extend %body;
//   li:first-of-type,
//   li:last-of-type {
//     @extend %sub-title;
//     font-weight: 900;
//     padding: 4px 8px;
//   }
//   .pagination_pages_page {
//     background-color: color.$white;
//     border-radius: 50%;
//     border: 1px solid color.$green-300;
//     padding: 4px 8px;
//     margin: 0 10px;
//     &:hover {
//       color: color.$white;
//       background-color: color.$green-300;
//     }
//     &-active {
//       @extend .pagination_pages_page;
//       color: color.$white;
//       background-color: color.$green-300;
//     }
//     &-twoDigits {
//       border-radius: 16px;
//     }
//   }
// }
</style>
