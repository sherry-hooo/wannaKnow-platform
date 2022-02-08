<template>
  <!-- 可以刪掉的component -->
  <div class="calendar_body">
    <ul
      v-for="(day, index) in monthDays"
      :key="index"
      :class="[
        { today: calendarDay + '-' + day === today },
        'calendar_body_day',
      ]"
    >
      <span>
        {{ day }}
      </span>
      <slot name="tablet" :day="day"></slot>
      <template>
        <div
          v-if="device === 'mobile'"
          class="eventMark"
          @click="showEvents(day)"
        ></div>
      </template>
    </ul>
  </div>
  <div class="calendar_events_detail">
    <ul>
      <slot name="mobile" :day="clickDay"></slot>
    </ul>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    monthDays: {
      type: Object,
      required: true,
    },
    calendarDay: {
      type: String,
    },
    windowWidth: {
      type: Number,
    },
  },
  data() {
    return {
      today: dayjs().format("YYYY-MM-D"),
      device: this.windowWidth > 768 ? "tablet" : "mobile",
      clickDay: dayjs().format("DD"),
    };
  },
  methods: {
    showEvents(day) {
      this.clickDay = day;
    },
  },
};
</script>

<style scoped lang="scss">
.calendar_body {
  // display: grid;
  // grid-template-columns: repeat(7, 1fr);
  // gap: 1px;

  display: flex;
  flex-wrap: wrap;
  &_day {
    width: calc(100% / 7);
    height: 50px;
    padding: 2px 5px;
    overflow: scroll;
    background: color.$white;
    border-bottom: 1px solid gray;
    cursor: pointer;
    @include breakpoint.tablet {
      min-height: 120px;
      max-height: 180px;
      padding: 5px 5px 10px;
      cursor: default;
    }
    span {
      display: block;
      margin: 0 auto 5px;
    }
    li + li {
      margin-top: 5px;
    }
  }
}

.today {
  > span {
    background: orange;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 2px;
    @include breakpoint.tablet {
      width: 20px;
      height: 20px;
    }
  }
}
.eventMark {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: color.$green-200;
  margin: 0 auto;
}
.calendar_events_detail {
  padding: 20px;
}
</style>
