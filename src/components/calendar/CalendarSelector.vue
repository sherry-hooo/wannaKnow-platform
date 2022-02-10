<template>
  <div class="calendar_header">
    <div class="calendar_header_chevron" @click="clickPrevious('month')">
      <font-awesome-icon icon="chevron-left"></font-awesome-icon>
    </div>
    <div class="calendar_header_title" @click="openDropDown = !openDropDown">
      <p>{{ displayDate }}</p>
    </div>
    <div class="calendar_header_chevron" @click="clickNext('month')">
      <font-awesome-icon icon="chevron-right"></font-awesome-icon>
    </div>
    <div
      class="calendar_header_dropDown"
      :class="{ 'calendar_header_dropDown-active': openDropDown }"
    >
      <div class="dropDown_year">
        <font-awesome-icon
          icon="chevron-left"
          size="xs"
          @click="clickPrevious('year')"
          class="dropDown_chevron"
        ></font-awesome-icon>
        <p>{{ displayYear }}</p>
        <font-awesome-icon
          icon="chevron-right"
          size="xs"
          @click="clickNext('year')"
          class="dropDown_chevron"
        ></font-awesome-icon>
      </div>
      <ul class="dropDown_months">
        <li
          v-for="month in monthsList"
          :key="month"
          :class="[
            { 'dropDown_months_item-active': displayMonth === month },
            'dropDown_months_item',
          ]"
          @click="selectMonth(displayYear, month)"
        >
          {{ month }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: ["calendarDay"],
  data() {
    return {
      monthsList: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      openDropDown: false,
      selectedMonth: "",
    };
  },
  computed: {
    displayDate() {
      return dayjs(this.calendarDay).format("YYYY MMMM");
    },
    displayYear() {
      return dayjs(this.calendarDay).format("YYYY");
    },
    displayMonth() {
      return dayjs(this.calendarDay).format("MMM");
    },
  },
  methods: {
    clickPrevious(time) {
      this.$emit("clickPrevious", time);
    },
    clickNext(time) {
      this.$emit("clickNext", time);
    },
    selectMonth(year, month) {
      this.selectedMonth = month;
      this.$emit("selectMonth", year + month);
    },
  },
};
</script>

<style scoped lang="scss">
.calendar_header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0px 0 10px;
  margin: 0 auto 20px;

  &_title {
    display: flex;
    justify-content: center;
    width: 170px;
    margin: 0 10px;
    @extend %strong-title;
    &:hover {
      color: color.$green-300;
    }
    > p {
      @extend %title;
      cursor: pointer;
    }
  }
  &_chevron {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    &:hover {
      color: color.$green-300;
      cursor: pointer;
    }
  }
}

// 日期選擇視窗
.calendar_header {
  position: relative;
  &_dropDown {
    display: none;
    position: absolute;
    z-index: 2;
    top: 100%;
    width: 100%;

    &-active {
      display: block;
      background-color: color.$white;
      border-radius: 15px;
      box-shadow: 0 1px 10px 0 rgb(0 0 0 / 25%);
    }
  }

  // dropDown 月份樣式
  .dropDown {
    &_year {
      padding: 10px 20px;
      border-bottom: 3px solid color.$green-300;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: color.$green-300;
      font-weight: 500;
      @extend %sub-title;
    }
    &_months {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 10px 5px;
      color: color.$green-300;
      font-weight: 500;

      @extend %sub-title;
      &_item {
        width: 24%;
        padding: 0 5px;
        margin: 5px 0;
        &:hover {
          background: color.$green-300;
          color: color.$white;
          border-radius: 50px;
          cursor: pointer;
        }
        &-active {
          background: color.$green-300;
          color: color.$white;
          border-radius: 50px;
          font-weight: 700;
        }
      }
    }
    &_chevron {
      cursor: pointer;
    }
  }
}
</style>
