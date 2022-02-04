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
  flex-direction: column;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 5px;
  background: color.$green-200;
  padding: 3px;
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
