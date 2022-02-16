<template>
  <div class="calendar" @click="openDropDown = false">
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
        v-for="(day, index) in monthDays"
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
            v-for="event in wannaKnowEventsObj[day]"
            :key="event.id"
            :wannaKnowEvent="event"
          ></CalendarEvent>
        </template>
        <template v-else>
          <div
            v-if="wannaKnowEventsObj[day]"
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
        v-for="event in wannaKnowEventsObj[clickDay]"
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
      testWannaKnowList: [
        {
          id: 0,
          title: "有好多好多在這裡之SASS迴圈又來了",
          speaker: "Jim",
          date: "2/4",
        },
        { id: 1, title: "你所不知道的JS", speaker: "Chris", date: "2/4" },
        {
          id: 2,
          title: "與設計師溝通的經驗分享溝通",
          speaker: "Chris",
          date: "2/4",
        },
        {
          id: 3,
          title:
            "Javascript 你是誰我是誰誰是誰(call by value、reference)javascript",
          speaker: "PG",
          date: "2/28",
        },
        {
          id: 4,
          title: "你所不知道的javascript",
          speaker: "PG",
          date: "2/15",
        },
      ],
      windowWidth: window.innerWidth,
      device: window.innerWidth > 576 ? "tablet" : "mobile",
      eventsPerDay: [],
      clickDay: "",
      apiData: [],
      openDropDown: false,
    };
  },
  computed: {
    monthDays() {
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
    wannaKnowEventsObj() {
      return this.testWannaKnowList.reduce((acc, dateObj) => {
        let key = dayjs(dateObj.date).format("D");
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(dateObj);
        return acc;
      }, {});
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
      console.log(time);
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
    getWannaKnowApi(date) {
      api
        .getWannaKnowData(date)
        .then((res) => (this.apiData = res.data.slice(0, 10)));
    },
  },
  created() {
    window.addEventListener("resize", this.checkResize);
    this.getWannaKnowApi();
  },
  unmounted() {
    window.removeEventListener("resize", this.checkResize);
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
