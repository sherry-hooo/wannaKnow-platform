<template>
  <div class="card">
    <div class="card_titleNameDate">
      <h3 class="ellipsis">
        <i>!</i
        >鐵人戰情爬蟲API之關關難過、關關不說又關關過鐵人戰情爬蟲API之關關難過、關關不說又關關過
      </h3>
      <div class="card_wrapNameDate">
        <div class="card_wrapNameDate_name nowrap">
          <font-awesome-icon :icon="['fas', 'user-circle']" />
          號稱165的大叔
        </div>
        <div class="card_wrapNameDate_date nowrap">06-09-2055</div>
      </div>
    </div>
    <p class="ellipsis">
      Firebase節省掉後端複雜的服務器建置，作為NodeJs及MongoDB的另外一種替代品，使我們製作產品的時候更專注於前端開發大部分的功能對於小型個人網站可以免費使用。
    </p>
    <div class="card_wrapTagSocialMedia">
      <div class="wannaTag">
        <div>前端</div>
        <div>IOS</div>
        <div>UICollectionView</div>
        <div>Javascript</div>
        <div>Vue composition API</div>
      </div>

      <div class="card_icon_social nowrap">
        <span><font-awesome-icon :icon="['far', 'thumbs-up']" /> 10</span>
        <span><font-awesome-icon :icon="['fas', 'comment-dots']" /> 10</span>
        <font-awesome-icon :icon="['fas', 'bookmark']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.nowrap {
  white-space: nowrap;
}
.ellipsis {
  // max-width: 750px;
  // overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;
}
.card {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 10px;
  border-bottom: 5px color.$green-400 solid;
}
.card_titleNameDate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  @extend %sub-title;
  h3 {
    @extend %strong-title;
  }
  .card_wrapNameDate {
    display: flex;
    justify-content: center;
    .card_wrapNameDate_name {
    }
  }
}

.card_wrapTagSocialMedia {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wannaTag {
  display: flex;
  flex-wrap: wrap;
  & > div {
    line-height: 24px;
    padding: 4px 12px;
    margin: 8px 12px;
    background-color: color.$green-300;
    color: color.$white;
    text-align: center;
    border-radius: 16px;
    &:first-of-type {
      margin-left: 0px;
    }
  }
}
.card_icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    span {
      margin-right: 20px;
    }
    @extend %sub-title;
    svg {
      cursor: pointer;
      margin: 0 6px;
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
  }
}
</style>
