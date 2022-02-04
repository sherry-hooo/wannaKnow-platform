<template>
  <!-- Sherry負責 -->
  <router-link :to="{ name: 'ListView' }" class="calendar_icon">
    <font-awesome-icon icon="list-alt" size="lg"></font-awesome-icon>
  </router-link>
  <div class="calendar">
    <div class="calendar_header">
      <div class="calendar_chevron" @click="previousMonth">
        <font-awesome-icon icon="chevron-left"></font-awesome-icon>
      </div>
      <div class="calendar_header_title">
        <p class="calendar_header_title_year">{{ year }}</p>
        <p class="calendar_header_title_month">{{ monthInEng }}</p>
      </div>
      <div class="calendar_chevron" @click="nextMonth">
        <font-awesome-icon icon="chevron-right"></font-awesome-icon>
      </div>
    </div>
    <ol class="calendar_weekDays">
      <li v-for="(weekday, index) in weekdays" :key="index">
        {{ weekday }}
      </li>
    </ol>
    <div class="calendar_body">
      <ul
        class="calendar_body_day"
        v-for="(day, index) in monthDays"
        :key="index"
        :class="[
          { hightLightToday: calendarDay + '-' + day === today },
          { datesCols: day > 0 },
        ]"
      >
        <span>
          {{ day }}
        </span>
        <template v-if="hasEvent(day)">
          <CalendarEvent
            v-for="event in wannaKnowEvents(day)"
            :key="event.id"
            :wannaKnowEvent="event"
          ></CalendarEvent>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import CalendarEvent from "@/components/CalendarEvent";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);

export default {
  name: "CalendarView",
  components: { CalendarEvent },
  data() {
    return {
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
    monthInEng() {
      return dayjs(this.calendarDay).format("MMMM");
    },
    year() {
      return dayjs(this.calendarDay).year();
    },
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
}

.calendar_header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  > * {
    cursor: pointer;
  }
  &_title {
    display: flex;
    justify-content: center;
    width: 170px;
    margin: 0 10px;
    &_year {
      @extend %title;
    }
    &_month {
      @extend %title;
      margin-left: 5px;
    }
  }
  .calendar_chevron {
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

.calendar_weekDays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  padding: 5px 0;
  li {
    height: 30px;
    border-bottom: 1px solid gray;
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

.hightLightToday {
  > span {
    background: orange;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
}
</style>
