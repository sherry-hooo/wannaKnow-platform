<template>
  <ol class="calendar_weekDays">
    <li v-for="(weekday, index) in weekdays" :key="index">
      {{ weekday }}
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    };
  },
};
</script>

<style scoped lang="scss">
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
</style>
