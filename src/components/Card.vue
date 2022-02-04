<template>
  <div class="card">
    <div class="card_text">
      <h3><i>驚</i>狼若回頭</h3>
      <p>
        我就是內文我就是內文我就是內文我就是內文我就是內文我就是內文我就是內文我就是內文我就是內文
      </p>
      <div class="wanna_tag">前端</div>
    </div>
    <div class="card_icon">
      <div>
        <div class="card_icon_name">號稱165的大叔</div>
        <div class="card_icon_date">06-09-2055</div>
      </div>

      <div class="card_icon_social">
        <font-awesome-icon :icon="['far', 'thumbs-up']" /><span>10</span
        ><font-awesome-icon :icon="['fas', 'comment-dots']" /> <span>10</span>
        <font-awesome-icon :icon="['fas', 'bookmark']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 20px 10px;
  border-bottom: 5px color.$green-400 solid;
}
.card_text {
  width: 350px;
  text-align: start;
  @extend %sub-title;
  h3 {
    @extend %strong-title;
    margin-bottom: 20px;
  }
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }
  .wanna_tag {
    height: 24px;
    width: 56px;
    background-color: color.$green-300;
    color: color.$white;
    text-align: center;
    border-radius: 16px;
  }
}
.card_icon {
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
  }
  .card_icon_social {
    @extend %sub-title;
    line-height: 24px;
    svg {
      margin: 0 16px;
      width: 24px;
      height: 24px;
    }
  }
}
</style>
