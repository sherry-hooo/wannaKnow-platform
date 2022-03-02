<template>
  <div class="card" v-if="card">
    <div class="card_titleArea">
      <div
        class="card_title"
        @click="toggleSideBar(), getCardComments(), updateCardInfo()"
      >
        <div class="card_titleIcon">
          <img src="@/assets/projectExperience.svg" alt="專案經驗icon" />
        </div>
        <h3>{{ card.title }}</h3>
      </div>
      <div class="card_info">
        <div class="card_speaker">
          <div class="card_speakerIcon">
            <img src="@/assets/avatar.svg" alt="使用者頭像" />
          </div>
          <span>{{ card.speaker }}</span>
        </div>
        <span class="card_date">
          {{ wannaKnowDate }}
        </span>
      </div>
    </div>
    <p class="card_description" @click="toggleSideBar">
      {{ card.description }}
    </p>
    <div class="card_others">
      <div class="card_tags">
        <span
          v-for="(tag, index) in card.tags"
          :key="index"
          class="card_tagsItem"
          @click.self="getWannaKnowByTag(tag)"
          >{{ tag }}</span
        >
      </div>
      <div class="card_social">
        <div class="card_socialItem card_socialItem-like" @click="clickLike">
          <div class="card_socialIcon">
            <img v-if="isLike" src="@/assets/like-fill.svg" alt="按讚圖示" />
            <img v-else src="@/assets/like.svg" alt="按讚圖示" />
          </div>
          <span>{{ likeCount }}</span>
        </div>
        <div
          class="card_socialItem card_socialItem-comment"
          @click="toggleSideBar(), getCardComments()"
        >
          <div class="card_socialIcon">
            <img
              v-if="$store.state.wannaKnow.isSideBarOpen"
              src="@/assets/content.svg"
              alt="留言圖示"
            />
            <img v-else src="@/assets/content.svg" alt="留言圖示" />
          </div>
          <span>{{ commentCount }}</span>
        </div>
        <div class="card_socialItem card_socialItem-favorite">
          <div class="card_socialIcon">
            <img
              v-if="!isFavorite"
              src="@/assets/bookmark.svg"
              alt="未收藏圖示"
              @click="setFavorite(true)"
            />
            <img
              v-else
              src="@/assets/bookmark-fill.svg"
              alt="已收藏圖示"
              @click="setFavorite(false)"
            />
          </div>
        </div>

        <!-- <div class="card_socialItem card_socialItem-attachment"></div> -->
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
      console.log("toggle");
      this.$store.commit("wannaKnow/toggleSideBar", true);
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
    getCardComments() {
      this.$store.dispatch(
        "wannaKnow/getWannaKnowComments",
        this.card.wanna_know_id
      );
    },
    updateCardInfo() {
      let _card = this.card;
      _card["date"] = this.wannaKnowDate;
      this.$store.commit("wannaKnow/targetCardInfo", _card);
    },
    getWannaKnowByTag(tagName) {
      this.$store.dispatch("wannaKnow/getWannaKnowByTag", {
        tags: tagName,
      });
    },
  },
  created() {
    this.checkInFavoriteList();
  },
};
</script>

<style scoped lang="scss">
@use "src/assets/sass/utils/flex";
@mixin ellipsis($clamp) {
  display: -webkit-box;
  -webkit-line-clamp: $clamp;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
// card
.card {
  @include flex.flex(start, stretch, column, nowrap);
  gap: 1rem;
  padding: 20px;
  border-bottom: 3px color.$green-400 solid;
  @include breakpoint.desktop {
    padding: 20px 10px;
  }
}

// 上半部title 區域
.card_titleArea {
  @include flex.flex(between, center, row, wrap);
  // title
  .card_title {
    flex: 0 0 100%;
    text-align: left;
    cursor: pointer;
    @include breakpoint.tablet {
      flex: 0 1 75%;
    }
    > * {
      display: inline-block;
      vertical-align: middle;
    }
    .card_titleIcon {
      width: 36px;
      height: 36px;
      margin-right: 0.5rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    h3 {
      @extend %strong-title;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 70%;
      max-width: 250px;
      transition: 0.3s;
      font-size: 22px;
      font-weight: 500;
      @include breakpoint.tablet {
        max-width: 500px;
      }
      @include breakpoint.desktop {
        max-width: 800px;
      }
    }
    &:hover {
      h3 {
        color: color.$green-400;
        filter: contrast(200%) brightness(50%);
      }
    }
  }
  // 作者跟時間
  .card_info {
    @include flex.flex(between, center, row, nowrap);
    flex: 0 1 100%;
    margin-top: 15px;
    color: #666;
    @include breakpoint.tablet {
      @include flex.flex(start, end, column, nowrap);
      gap: 10px;
      flex: 0 0 25%;
      margin-top: 0;
    }
    @include breakpoint.desktop {
      @include flex.flex(between, center, row, nowrap);
      gap: 0;
    }

    .card_speaker {
      > * {
        display: inline-block;
        vertical-align: middle;
      }
      .card_speakerIcon {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}

// 簡介
.card_description {
  @include ellipsis(2);
  @extend %sub-title;
  text-align: left;
  width: 80%;
  transition: color 0.3s;
  cursor: pointer;
  @include breakpoint.tablet {
    width: 65%;
  }
  &:hover {
    color: color.$green-400;
    filter: contrast(200%) brightness(50%);
  }
}

// tag跟讚數留言
.card_others {
  @include flex.flex(start, end, row, wrap);
}
.card_tags {
  @extend %remark;
  @include flex.flex(start, center, row, wrap);
  flex: 0 0 100%;
  gap: 0.5rem;
  @include breakpoint.tablet {
    flex: 0 1 65%;
  }
  .card_tagsItem {
    display: inline-block;
    padding: 2px 10px;
    background-color: color.$green-300;
    color: color.$white;
    text-align: center;
    border-radius: 16px;
    cursor: pointer;
    transition: filter 0.3s;
    &:hover {
      filter: contrast(130%);
    }
  }
}
.card_social {
  @include flex.flex(end, center, row, nowrap);
  flex: 0 0 100%;
  gap: 1rem;
  margin-top: 1rem;
  @include breakpoint.tablet {
    flex: 0 0 35%;
    margin-top: 0;
  }
  .card_socialItem {
    cursor: pointer;
    padding: 5px;
    > * {
      vertical-align: middle;
    }
    .card_socialIcon {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 5px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
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
