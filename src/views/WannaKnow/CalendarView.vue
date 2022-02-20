<template>
  <div class="calendar" @click.self="openDropDown = false">
    <CalendarSelector
      :calendarDay="calendarDay"
      :openDropDown="openDropDown"
      @clickPrevious="clickPrevious"
      @clickNext="clickNext"
      @selectMonth="selectMonth"
    >
      <div
        class="calendar_header_title"
        @click.stop="openDropDown = !openDropDown"
      >
        <p class="calendar_header_title">{{ calendarDay }}</p>
      </div>
    </CalendarSelector>
    <CalendarWeekDays />
    <div class="calendar_body">
      <ul
        v-for="(day, index) in daysInMonth"
        :key="index"
        :class="[
          { 'calendar_body_day-active': calendarDay + '-' + day === today },
          'calendar_body_day',
        ]"
      >
        <span>
          {{ day }}
        </span>
        <template v-if="device !== 'mobile'">
          <CalendarEvent
            v-for="event in thisMonthWannaKnowEventsObj[day]"
            :key="event.id"
            :wannaKnowEvent="event"
          ></CalendarEvent>
        </template>
        <template v-else>
          <div
            v-if="thisMonthWannaKnowEventsObj[day]"
            class="event_mark"
            @click="showEvents(day)"
          ></div>
        </template>
      </ul>
    </div>
  </div>
  <div class="calendar_events_detail" v-if="device === 'mobile'">
    <ul>
      <CalendarEvent
        v-for="event in thisMonthWannaKnowEventsObj[clickDay]"
        :key="event.id"
        :wannaKnowEvent="event"
      ></CalendarEvent>
    </ul>
  </div>
</template>

<script>
import CalendarWeekDays from "@/components/calendar/CalendarWeekDays";
import CalendarSelector from "@/components/calendar/CalendarSelector";
import CalendarEvent from "@/components/calendar/CalendarEvent";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);
import api from "@/service/api.js";

export default {
  name: "CalendarView",
  components: {
    CalendarSelector,
    CalendarWeekDays,
    CalendarEvent,
  },
  data() {
    return {
      calendarDay: dayjs().format("YYYY MMMM"),
      today: dayjs().format("YYYY-MM-D"),
      wannaKnowApiData: [],
      windowWidth: window.innerWidth,
      device: window.innerWidth > 576 ? "tablet" : "mobile",
      clickDay: "",
      openDropDown: false,
      test: 1,
    };
  },
  computed: {
    selectedYear() {
      return dayjs(this.calendarDay).format("YYYY");
    },
    daysInMonth() {
      const firstWeekDayOfMonth = dayjs(this.calendarDay).weekday();
      const emptyBeginCols =
        firstWeekDayOfMonth === 0
          ? Array(6).fill("")
          : Array(firstWeekDayOfMonth - 1).fill("");
      const totalDaysInMonth = dayjs(this.calendarDay).daysInMonth();
      const totalDaysInMonthArr = Array(totalDaysInMonth)
        .fill("")
        .map((day, index) => index + 1);
      return [...emptyBeginCols, ...totalDaysInMonthArr];
    },
    thisMonthWannaKnowList() {
      return this.wannaKnowApiData
        .map((wannaKnow) => {
          wannaKnow["month"] = dayjs(wannaKnow.date).format("MMMM");
          return wannaKnow;
        })
        .filter(
          (wannaKnow) =>
            wannaKnow.month === dayjs(this.calendarDay).format("MMMM")
        );
    },
    thisMonthWannaKnowEventsObj() {
      return (
        this.thisMonthWannaKnowList
          // .map((wannaKnow) => {
          //   wannaKnow["month"] = dayjs(wannaKnow.date).format("MMMM");
          //   return wannaKnow;
          // })
          // .filter(
          //   (wannaKnow) =>
          //     wannaKnow.month === dayjs(this.calendarDay).format("MMMM")
          // )
          .reduce((acc, dateObj) => {
            let key = dayjs(dateObj.date).format("D");
            if (!acc[key]) {
              acc[key] = [];
            }
            acc[key].push(dateObj);
            return acc;
          }, {})
      );
    },
  },
  methods: {
    clickPrevious(time) {
      this.calendarDay = dayjs(this.calendarDay)
        .subtract(1, time)
        .format("YYYY MMMM");
    },
    clickNext(time) {
      this.calendarDay = dayjs(this.calendarDay)
        .add(1, time)
        .format("YYYY MMMM");
    },
    selectMonth(time) {
      this.calendarDay = dayjs(time).format("YYYY MMMM");
    },
    showEvents(day) {
      this.clickDay = day;
    },
    checkResize(e) {
      const currentWidth = e.target.innerWidth;
      if (currentWidth < 576) {
        this.device = "mobile";
      } else if (576 <= currentWidth < 992) {
        this.device = "tablet";
      } else {
        this.device = "desktop";
      }
      this.windowWidth = currentWidth;
    },
    getWannaKnowDataByYear(year) {
      api
        .getWannaKnowDataByYear(year)
        .then((res) => (this.wannaKnowApiData = res.data));
    },
  },
  async created() {
    window.addEventListener("resize", this.checkResize);
    const thisYear = dayjs().format("YYYY");
    console.log(thisYear);
    this.getWannaKnowDataByYear(thisYear);
  },
  unmounted() {
    window.removeEventListener("resize", this.checkResize);
  },
  watch: {
    selectedYear() {
      console.log("改變年份");
      this.getWannaKnowDataByYear(this.selectedYear);
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
    overflow: auto;
    background: color.$white;
    border-bottom: 1px solid color.$green-300;
    @include breakpoint.tablet {
      min-height: 120px;
      max-height: 180px;
      padding: 5px 5px 10px;
    }
    span {
      display: block;
      margin: 0 auto 5px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  li + li {
    margin-top: 5px;
  }
}

.calendar_body_day-active {
  > span {
    background: color.$green-300;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 3px;
    display: flex;
  }
}
.event_mark {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: color.$green-200;
  margin: 0 auto;
  cursor: pointer;
}

.calendar_events_detail {
  min-height: 300px;
  padding: 20px 10px;
  ul {
    li + li {
      margin-top: 5px;
    }
  }
}
</style>
