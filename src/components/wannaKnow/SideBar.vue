<template>
  <section class="sideBar" :class="{ openSideBar: $store.state.isSideBarOpen }">
    <div @click="toggleSideBar" :class="['sideBar_toggleBtn']">
      <font-awesome-icon class="arrow" icon="arrow-right"></font-awesome-icon>
      <span></span>
      <span></span>
    </div>

    <div @click="toggleSideBar" class="sideBar_toggleBtn-mobile">
      <img src="@/assets/close-button.svg" alt="close-button" />
    </div>
    <LoadingComment v-if="isLoading" />
    <template v-else>
      <div class="overflow_container">
        <div class="sideBar_main">
          <div class="sideBar_main_info">
            <div class="userInfo">
              <img
                class="userInfo_icon"
                src="@/assets/avatar.svg"
                alt="avatar-icon"
              />
              <span class="userInfo_name">{{ cardInfo.speaker }}</span>
              <span class="userInfo_floor">樓主</span>
            </div>
            <div class="title">
              <h4>{{ cardInfo.title }}</h4>
              <div class="timing">
                <span class="timing_date">{{ cardInfo.date }}</span>
                <span class="timing_time">00:00</span>
              </div>
            </div>
          </div>
          <div class="sideBar_main_content">
            <p>
              {{ cardInfo.description }}
            </p>
          </div>
          <div class="sideBar_main_others">
            <div class="sideBar_icon">
              <img src="@/assets/like.svg" alt="like_icon" />
              <span>{{ cardInfo.like }}</span>
            </div>
            <div class="sideBar_icon">
              <img src="@/assets/content.svg" alt="content_icon" />
              <span>{{ cardInfo.comment_amount }}</span>
            </div>
            <div class="sideBar_icon">
              <img src="@/assets/bookmark.svg" alt="bookmark_icon" />
            </div>
            <div class="sideBar_icon">
              <img src="@/assets/attachment.svg" alt="attachment_icon" />
            </div>
          </div>
        </div>
        <section>
          <div
            class="sideBar_comment"
            v-for="(comment, index) in commentsList"
            :key="comment.id"
          >
            <div class="userInfo">
              <img
                class="userInfo_icon"
                src="@/assets/avatar.svg"
                alt="avatar-icon"
              />
              <span class="userInfo_name">{{
                comment.messager || "大叔"
              }}</span>
              <span class="userInfo_floor">{{ index + 1 }}樓</span>
              <div class="timing">
                <span class="timing_date">06-09-2055</span>
                <span class="timing_time">00:00</span>
              </div>
            </div>
            <div class="sideBar_comment_content">
              <p>
                {{ comment.content }}
              </p>
              <div class="sideBar_comment_others">
                <div class="sideBar_icon">
                  <img src="@/assets/like.svg" alt="like_icon" />
                  <span>{{ comment.like }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>
    <div class="sideBar_submit">
      <input type="text" />
      <button>送出</button>
    </div>
  </section>
</template>

<script>
import LoadingComment from "@/components/wannaKnow/LoadingComment.vue";
export default {
  components: { LoadingComment },
  data() {
    return {};
  },
  methods: {
    toggleSideBar() {
      this.$store.commit("toggleSideBar", false);
    },
  },
  computed: {
    commentsList() {
      return this.$store.state.commentsData;
    },
    cardInfo() {
      return this.$store.state.cardInfo;
    },
    isLoading() {
      return this.$store.state.isCommentLoading;
    },
  },
};
</script>

<style scoped lang="scss">
@use "src/assets/sass/utils/_flex.scss";

%hover {
  transition: filter 0.25s;
  &:hover {
    filter: brightness(110%) contrast(110%);
  }
}
@mixin submit-button($color) {
  @extend %sub-title;
  @extend %hover;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  background-color: $color;
  color: #fff;
  cursor: pointer;
}
@mixin border-bottom {
  border-bottom: 1px solid #ccc;
}

// sideBar
.sideBar {
  @include flex.flex(between, stretch, column, nowrap);
  width: 100%;
  height: 100vh;
  padding: 50px 1rem 1rem 1rem;
  background: white;
  position: fixed;
  top: 0;
  right: -600px;
  z-index: 800;
  transition: 0.5s ease-in-out;
  @include breakpoint.tablet {
    max-width: 400px;
    padding: 1rem;
    box-shadow: -5px 0 4px -4px #555;
  }
  @include breakpoint.desktop {
    max-width: 500px;
  }
  &.openSideBar {
    right: 0;
    transition: 0.5s ease-in-out;
  }
}
// 中間區塊over-flow
.overflow_container {
  margin-bottom: 0.5rem;
  transition: 0.4s;
  overflow: auto;
}
// 發文區塊
.sideBar_main {
  @include border-bottom;
  @include flex.flex(start, stretch, column, nowrap);
  gap: 1rem;
  padding: 1rem;
}
.sideBar_main_info {
  @include flex.flex(start, stretch, row, nowrap);
  gap: 2rem;
}
.userInfo {
  @extend %body;
  @include flex.flex(start, center, column);
  gap: 1rem;
  flex: 0 1 30%;
  &_icon {
    width: 50px;
    height: 50px;
  }
  &_name {
    @extend %body;
  }
  &_floor {
    @extend %body;
    padding: 1px 10px;
    color: #fff;
    background-color: color.$green-300;
    border-radius: 15px;
  }
}
.title {
  @include flex.flex(between, stretch, column);
  flex: 0 1 70%;
  > h4 {
    @extend %title;
    text-align: left;
  }
}
.timing {
  @extend %body;
  text-align: right;
  &_date {
    margin-right: 1rem;
  }
}
.sideBar_main_content {
  @extend %sub-title;
  text-align: left;
}
.sideBar_main_others {
  @extend %sub-title;
  @include flex.flex(end, center, row, nowrap);
  gap: 1rem;
}
.sideBar_icon {
  cursor: pointer;
  > * {
    display: inline-block;
    vertical-align: middle;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
  }
  span {
    @extend %sub-title;
  }
}

// 留言區塊
.sideBar_comment {
  @include flex.flex(around, stretch, row, nowrap);
  @include border-bottom;
  padding: 1rem;
  gap: 1rem;
  .timing {
    span {
      text-align: left;
      display: block;
    }
    &_date {
      margin: 0;
    }
  }
}
.sideBar_comment_content {
  flex: 0 1 70%;
  > p {
    margin-bottom: 1rem;
    text-align: left;
  }
}
.sideBar_comment_others {
  text-align: right;
  .sideBar_icon {
    display: inline-block;
  }
}

// 送出留言
.sideBar_submit {
  @include flex.flex(between, center, row, nowrap);
  transition: 0.4s;
  > input {
    flex: 1 0 0;
    margin-right: 1rem;
    padding: 6px;
    border: 3px solid color.$green-300;
    border-radius: 15px;
  }
  > button {
    @include submit-button(color.$green-300);
  }
}

// 關閉按鈕
.sideBar_toggleBtn {
  display: none;
  position: absolute;
  top: 50%;
  left: -50px;
  visibility: visible;
  z-index: 20;
  transition: visibility 0s, opacity 0.5s;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  opacity: 0.6;
  @include breakpoint.tablet {
    display: flex;
  }
  &:hover {
    opacity: 0.8;
    ~ div {
      transform: translateX(20px);
      opacity: 0.7;
      filter: grayscale(100%);
    }
    .arrow {
      transform: translateX(8px) scaleX(1.6) scaleY(0.7);
    }
    span:nth-child(2) {
      width: 2px;
      margin-right: 3px;
      transform: translateX(11px) scaleY(1.2);
    }
    span:nth-child(3) {
      width: 2px;
      transform: translateX(10px) scaleY(1.4);
    }
  }
  .arrow {
    margin-right: 8px;
    transition: 0.4s;
    filter: drop-shadow(2px 3px 1px #333) drop-shadow(0 0 2px #333);
  }
  span {
    display: inline-block;
    width: 3px;
    background-color: #fff;
    box-shadow: 2px 3px 1px #333, 0 0 2px #333, 0 0 3px #333, 0 0 4px #333;
    transition: 0.4s;
  }
  span:nth-child(2) {
    margin-right: 5px;
    height: 25px;
  }
  span:nth-child(3) {
    height: 60px;
  }
}

// 關閉按鈕-手機
.sideBar_toggleBtn-mobile {
  position: absolute;
  top: 55px;
  // right: 5px;
  left: 2rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0.8;
  @include breakpoint.tablet {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    @extend %hover;
  }
}
</style>
