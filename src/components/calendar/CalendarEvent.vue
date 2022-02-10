<template>
  <li class="wannaKnowEvent">
    <p class="wannaKnowEvent_header">{{ wannaKnowEvent.title }}</p>
    <p>{{ wannaKnowEvent.speaker }}</p>
  </li>
</template>

<script>
export default {
  props: {
    wannaKnowEvent: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.wannaKnowEvent {
  display: flex;
  max-height: 60px;
  padding: 3px;
  background: color.$green-100;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 5px;
  > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: start;
  }
  &_header {
    @extend %sub-title;
    font-weight: 500;
  }
}
</style>
