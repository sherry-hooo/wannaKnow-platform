<template>
  <div class="card">
    <div class="card_titleNameDate">
      <h3 class="ellipsis">
        <img src="@/assets/projectExperience.svg" alt="專案經驗icon" />
        鐵人戰情爬蟲API之關關難過、關關不說又關關過鐵人戰情爬蟲API之關關難過、關關不說又關關過
        鐵人戰情爬蟲API之關關難過、關關不說又關關過鐵人戰情爬蟲API之關關難過、關關不說又關關過
      </h3>
      <div class="card_wrapNameDate">
        <div class="card_wrapNameDate_name nowrap">
          <img src="@/assets/avatar.svg" alt="" />
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
        <span>
          <img @click="clickLike" src="@/assets/like.svg" alt="按讚圖示" />
          {{ likeCount }}</span
        >
        <span>
          <img src="@/assets/content.svg" alt="留言圖示" />
          {{ commentCount }}</span
        >
        <img @click="clickArchive" src="@/assets/bookmark.svg" alt="收藏圖示" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likeImgURL: "",
      likeCount: 10,
      likeCard: false,
      collectImgURL: "",
      commentCount: 10,
    };
  },
  methods: {
    clickLike() {
      this.likeCard = !this.likeCard;
      if (this.likeCard) {
        console.log("按讚");
        this.likeCount++;
      } else {
        console.log("取消按讚");
        this.likeCount--;
      }
    },
    clickArchive() {
      console.log("收藏");
    },
  },
};
</script>

<style scoped lang="scss">
.nowrap {
  white-space: nowrap;
}
.card {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 40px;
  border-bottom: 5px color.$green-400 solid;
  @include breakpoint.desktop {
    padding: 20px 10px;
  }
  p {
    margin-bottom: 10px;
    max-width: 300px;
    @include breakpoint.tablet {
      max-width: 750px;
    }
    @include breakpoint.desktop {
      max-width: 750px;
    }
  }
  .ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
.card_titleNameDate {
  display: flex;
  text-align: start;
  flex-direction: column;
  @extend %sub-title;
  h3 {
    @extend %strong-title;
    margin-bottom: 8px;
    img {
      width: 24px;
      height: 24px;
    }
    @include breakpoint.desktop {
      max-width: 750px;
    }
  }
  .card_wrapNameDate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    @include breakpoint.desktop {
      margin-left: 50px;
    }
  }
  @include breakpoint.tablet {
    .ellipsis {
      -webkit-line-clamp: 2;
    }
  }
  @include breakpoint.desktop {
    h3 {
      max-width: 750px;
    }

    .ellipsis {
      -webkit-line-clamp: 1;
    }
    flex-direction: row;
    justify-content: space-between;
  }
}
.card_wrapTagSocialMedia {
  @include breakpoint.tablet {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  flex-direction: column;
}

.wannaTag {
  display: flex;
  flex-wrap: wrap;
  & > div {
    line-height: 24px;
    padding: 4px 12px;
    margin: 8px 16px 8px 0;
    background-color: color.$green-300;
    color: color.$white;
    text-align: center;
    border-radius: 16px;
  }
  &:hover {
    cursor: pointer;
  }
}

.card_wrapNameDate_name {
  img {
    vertical-align: middle;
  }
}

.card_icon_social {
  @include breakpoint.tablet {
  }
  text-align: start;
  span {
    margin-right: 20px;
    @extend %sub-title;
    line-height: 24px;
  }

  img {
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
}
</style>
