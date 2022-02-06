<template>
  <div class="card">
    <div class="card_text">
      <h3><i>!</i>鐵人戰情爬蟲API之關關難過、關關不說又關關過</h3>
      <p>
        Firebase節省掉後端複雜的服務器建置，作為NodeJs及MongoDB的另外一種替代品，使我們製作產品的時候更專注於前端開發大部分的功能對於小型個人網站可以免費使用。
      </p>
      <span class="wanna_tag">前端</span>
      <span class="wanna_tag">IOS</span>
      <span class="wanna_tag">UICollectionView</span>
      <span class="wanna_tag">Javascript</span>
      <span class="wanna_tag">Vue composition API</span>
    </div>
    <div class="card_icon">
      <div>
        <div class="card_icon_name">
          <font-awesome-icon :icon="['fas', 'user-circle']" />
          號稱165的大叔
        </div>
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
  text-align: start;
  @extend %sub-title;
  h3 {
    width: 350px;
    @extend %strong-title;
    margin-bottom: 20px;
  }
  p {
    width: 350px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }
  .wanna_tag {
    display: inline-block;
    padding: 4px 12px;
    margin: 4px 12px;
    background-color: color.$green-300;
    color: color.$white;
    text-align: center;
    border-radius: 16px;
    white-space: nowrap;
  }
  .wanna_tag:first-of-type {
    margin-left: 0px;
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
  .card_icon_name {
    svg {
      width: 30px;
      height: 30px;
      vertical-align: middle;
      color: color.$white;
      background-color: color.$green-300;
      border: 2px solid color.$green-300;
      border-radius: 50%;
    }
  }
  .card_icon_social {
    align-self: end;
    @extend %sub-title;
    svg {
      cursor: pointer;
      margin: 0 16px;
      width: 24px;
      height: 24px;
      vertical-align: middle;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
    svg:last-of-type {
      margin-right: 0;
    }
    span {
      vertical-align: middle;
    }
  }
}
</style>
