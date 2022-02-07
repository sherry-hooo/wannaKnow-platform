<template>
  <!-- Sherry負責 -->
  <div class="calendar">
    <router-link :to="{ name: 'ListView' }" class="calendar_icon">
      <font-awesome-icon icon="list-alt" size="lg"></font-awesome-icon>
    </router-link>
    <CalendarSelector
      :calendarDay="calendarDay"
      @previousMonth="previousMonth"
      @nextMonth="nextMonth"
    />
    <CalendarWeekDays />
    <div class="calendar_body">
      <ul
        class="calendar_body_day"
        v-for="(day, index) in monthDays"
        :key="index"
        :class="[
          { today: calendarDay + '-' + day === today },
          { datesCols: day > 0 },
        ]"
      >
        <span>
          {{ day }}
        </span>
        <CalendarEvent
          v-for="event in wannaKnowEventsObj[day]"
          :key="event.id"
          :wannaKnowEvent="event"
        ></CalendarEvent>
      </ul>
    </div>
  </div>
</template>

<script>
import CalendarWeekDays from "@/components/calendar/CalendarWeekDays";
import CalendarSelector from "@/components/calendar/CalendarSelector";
import CalendarEvent from "@/components/calendar/CalendarEvent";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);

export default {
  name: "CalendarView",
  components: { CalendarSelector, CalendarWeekDays, CalendarEvent },
  data() {
    return {
      calendarDay: dayjs().format("YYYY-MM"),
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
          title:
            "Javascript 你是誰我是誰誰是誰(call by value、reference)javascript",
          speaker: "PG",
          date: "2/15",
        },
      ],
    };
  },
  computed: {
    monthDays() {
      const firstWeekDayOfMonth = dayjs(this.calendarDay).weekday();
      const emptyBeginCols =
        firstWeekDayOfMonth === 0
          ? []
          : Array(firstWeekDayOfMonth - 1).fill("");
      const totalDaysInMonth = dayjs(this.calendarDay).daysInMonth();
      const totalDaysInMonthArr = Array(totalDaysInMonth)
        .fill("")
        .map((day, index) => index + 1);
      return [...emptyBeginCols, ...totalDaysInMonthArr];
    },
    eventDays() {
      return this.testWannaKnowList.map(
        (event) => +dayjs(event.date).format("D")
      );
    },
    wannaKnowEventsObj() {
      return this.testWannaKnowList.reduce((acc, dateObj) => {
        let key = dayjs(dateObj.date).format("D");
        console.log(key);
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(dateObj);
        return acc;
      }, {});
    },
  },
  methods: {
    previousMonth() {
      this.calendarDay = dayjs(this.calendarDay)
        .subtract(1, "month")
        .format("YYYY-MM");
    },
    nextMonth() {
      this.calendarDay = dayjs(this.calendarDay)
        .add(1, "month")
        .format("YYYY-MM");
    },
    wannaKnowEvents(date) {
      return this.testWannaKnowList.filter(
        (event) => +dayjs(event.date).format("D") === date
      );
    },
    hasEvent(date) {
      return this.eventDays.includes(date);
    },
  },
};
</script>

<style scoped lang="scss">
.calendar {
  padding: 30px;
  position: relative;
  &_icon {
    position: absolute;
    top: 30px;
    right: 30px;
  }
}

.calendar_body {
  // display: grid;
  // grid-template-columns: repeat(7, 1fr);
  // gap: 1px;

  display: flex;
  flex-wrap: wrap;
  &_day {
    width: calc(100% / 7);
    min-height: 120px;
    max-height: 180px;
    overflow: scroll;
    background: color.$white;
    padding: 5px 5px 10px;
    border-bottom: 1px solid gray;
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
  }
}
</style>
