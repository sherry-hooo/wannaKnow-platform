<template>
  <div class="calendar_header">
    <div class="calendar_header_chevron" @click="previousMonth">
      <font-awesome-icon icon="chevron-left"></font-awesome-icon>
    </div>
    <div class="calendar_header_title">
      <p>{{ displayDate }}</p>
    </div>
    <div class="calendar_header_chevron" @click="nextMonth">
      <font-awesome-icon icon="chevron-right"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: ["calendarDay"],
  data() {
    return {};
  },
  computed: {
    displayDate() {
      return dayjs(this.calendarDay).format("YYYY MMMM");
    },
  },
  methods: {
    previousMonth() {
      this.$emit("previousMonth");
    },
    nextMonth() {
      this.$emit("nextMonth");
    },
  },
};
</script>

<style scoped lang="scss">
.calendar_header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0 30px;
  &_title {
    display: flex;
    justify-content: center;
    width: 170px;
    margin: 0 10px;
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
      background: rgba(211, 211, 211, 0.5);
      border-radius: 50%;
    }
  }
}
</style>
