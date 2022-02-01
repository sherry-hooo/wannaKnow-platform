<template>
  <!-- Danny負責 -->
  <div class="tag">tags 區</div>
  <!-- font-aweome icon 可以自由移動位置~ -->
  <router-link :to="{ name: 'CalendarView' }">
    <font-awesome-icon icon="calendar-alt" size="lg"></font-awesome-icon>
  </router-link>
  <section>
    <Card v-for="(card, index) in 10" :key="index"></Card>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "ListView",
  components: {
    Card,
  },
};
</script>

<style scoped lang="scss"></style>
