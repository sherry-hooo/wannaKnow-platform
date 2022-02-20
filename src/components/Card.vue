<template>
  <div class="card" v-if="card">
    <div class="card_titleNameDate">
      <h3 class="ellipsis" @click="toggleSideBar">
        <img src="@/assets/projectExperience.svg" alt="專案經驗icon" />
        {{ card.title }}
      </h3>
      <div class="card_wrapNameDate">
        <div class="card_wrapNameDate_name nowrap">
          <img src="@/assets/avatar.svg" alt="" />
          {{ card.speaker }}
        </div>
        <div class="card_wrapNameDate_date nowrap">
          {{ wannaKnowDate }}
        </div>
      </div>
    </div>
    <!-- 待改為 card.description -->
    <p class="ellipsis" @click="toggleSideBar">
      Firebase節省掉後端複雜的服務器建置，作為NodeJs及MongoDB的另外一種替代品，使我們製作產品的時候更專注於前端開發大部分的功能對於小型個人網站可以免費使用。
    </p>
    <div class="card_wrapTagSocialMedia">
      <!-- 待改為 card.tags -->
      <div class="wannaTag">
        <div>前端</div>
        <div>IOS</div>
        <div>UICollectionView</div>
        <div>Javascript</div>
        <div>Vue composition API</div>
      </div>
      <div class="card_icon_social nowrap">
        <span>
          <img
            v-if="isLike"
            src="@/assets/like-fill.svg"
            alt="按讚圖示"
            @click="clickLike"
          />
          <img
            v-else
            src="@/assets/like.svg"
            alt="按讚圖示"
            @click="clickLike"
          />
          {{ likeCount }}</span
        >
        <span>
          <img
            v-if="$store.state.isSideBarOpen"
            src="@/assets/content.svg"
            alt="留言圖示"
            @click="toggleSideBar"
          />
          <img
            v-else
            src="@/assets/content.svg"
            alt="留言圖示"
            @click="toggleSideBar"
          />
          {{ commentCount }}</span
        >
        <img
          v-if="!isFavorite"
          @click="setFavorite(true)"
          src="@/assets/bookmark.svg"
          alt="未收藏圖示"
        />
        <img
          v-else
          @click="setFavorite(false)"
          src="@/assets/bookmark-fill.svg"
          alt="已收藏圖示"
        />
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      likeCount: this.card.like,
      isLike: false,
      commentCount: 10,
      isFavorite: false,
      wannaKnowDate: dayjs(this.card.date).format("YYYY/ MM/ DD"),
    };
  },
  computed: {
    favoriteList() {
      return this.getLocalStorage();
    },
  },
  methods: {
    clickLike() {
      this.isLike = !this.isLike;
      if (this.isLike) {
        this.likeCount++;
      } else {
        this.likeCount--;
      }
    },
    setFavorite(isFavorite) {
      this.isFavorite = isFavorite;
      const favoriteList = this.getLocalStorage();
      if (isFavorite) {
        favoriteList.push(this.card);
      } else {
        const deletedID = favoriteList.findIndex(
          (article) => article.title === this.card.title
        );
        favoriteList.splice(deletedID, 1);
      }
      this.setLocalStorage(favoriteList);
      this.$emit("setFavoriteList", favoriteList);
    },
    toggleSideBar() {
      this.$store.commit("toggleSideBar", true);
    },
    setLocalStorage(storageList) {
      localStorage.setItem("favoriteList", JSON.stringify(storageList));
    },
    getLocalStorage() {
      return JSON.parse(localStorage.getItem("favoriteList")) || [];
    },
    checkInFavoriteList() {
      const favoriteList = this.getLocalStorage();
      if (favoriteList.length == 0) {
        return;
      } else {
        // 待改為 favorite.ID
        this.isFavorite = favoriteList
          .map((favorite) => favorite.title)
          .includes(this.card.title);
        // console.log(this.isFavorite, this.card.title);
      }
    },
  },
  created() {
    this.checkInFavoriteList();
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
    cursor: pointer;
    &:hover {
      color: color.$green-300;
    }
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
  @extend %body;
  display: flex;
  flex-wrap: wrap;
  & > div {
    padding: 2px 10px;
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
