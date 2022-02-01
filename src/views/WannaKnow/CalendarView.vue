<template>
  <!-- Sherry負責 -->
  <div class="calendar">
    <div>calendar</div>
    <!-- font-aweome icon 可以自由移動位置~ -->
    <router-link :to="{ name: 'ListView' }">
      <font-awesome-icon icon="list-alt" size="lg"></font-awesome-icon>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CalendarView",
};
</script>

<style scoped lang="scss"></style>
