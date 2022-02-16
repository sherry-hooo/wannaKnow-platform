<template>
<<<<<<< HEAD
  <section class="sideBar" :class="{ openSideBar: $store.state.isSideBarOpen }">
    <div @click="toggleSideBar" class="sideBar_toggleBtn">x</div>
=======
  <section class="sideBar" :class="{ closeSideBar: closeSideBar }">
    <div
      @click="closeSideBar = !closeSideBar"
      class="sideBar_toggleBtn"
      :class="{ fade: closeSideBar }"
    >
      <font-awesome-icon class="arrow" icon="arrow-right"></font-awesome-icon>
      <span></span>
      <span></span>
    </div>
>>>>>>> 5372694 (sideBar:fix added close button)
    <div class="overflow_container">
      <div class="sideBar_main">
        <div class="sideBar_main_info">
          <div class="userInfo">
            <img
              class="userInfo_icon"
              src="@/assets/avatar.svg"
              alt="avatar-icon"
            />
            <span class="userInfo_name">號稱165的大叔</span>
            <span class="userInfo_floor">樓主</span>
          </div>
          <div class="title">
            <h4>狼若回頭, 不是報恩就是報仇</h4>
            <div class="timing">
              <span class="timing_date">06-09-2055</span>
              <span class="timing_time">00:00</span>
            </div>
          </div>
        </div>
        <div class="sideBar_main_content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            adipisci, placeat ullam cum vitae dignissimos cumque voluptatem
            nobis sunt modi reiciendis! Laboriosam, aliquam. Voluptas quos quo
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            blanditiis consectetur hic delectus non dolores repellat! Est neque
            animi cumque fuga maxime consequatur temporibus? Minus, modi
            consequatur excepturi recusandae quas nesciunt deserunt quisquam
            tempore beatae ab enim possimus quaerat! Reiciendis vel iure
            consequuntur fuga! Et ex sunt neque distinctio ipsum mollitia
            quibusdam aliquam similique, amet ipsam error incidunt provident,
            veniam est adipisci aspernatur doloribus molestias! Fugit deserunt
            excepturi at ratione quos quas incidunt labore! Temporibus
            exercitationem sit numquam illum praesentium at culpa, hic minima
            eum, natus error blanditiis non perferendis aliquam voluptate
            consequatur, quidem voluptas ad labore quisquam dolores voluptatem.
          </p>
        </div>
        <div class="sideBar_main_others">
          <div class="sideBar_icon">
<<<<<<< HEAD
            <!-- <font-awesome-icon :icon="['fas', 'bookmark']" /> -->
          </div>
          <div class="sideBar_icon">
            <!-- <font-awesome-icon :icon="['fas', 'link']" /> -->
            <span>附件</span>
          </div>
          <div class="sideBar_icon">
            <!-- <font-awesome-icon :icon="['far', 'thumbs-up']" /> -->
            <span>10</span>
          </div>
          <div class="sideBar_icon">
            <!-- <font-awesome-icon :icon="['fas', 'comment-dots']" /> -->
            <span>10</span>
=======
            <img src="@/assets/like.svg" alt="like_icon" />
            <span>10</span>
          </div>
          <div class="sideBar_icon">
            <img src="@/assets/content.svg" alt="content_icon" />
            <span>10</span>
          </div>
          <div class="sideBar_icon">
            <img src="@/assets/bookmark.svg" alt="bookmark_icon" />
          </div>
          <div class="sideBar_icon">
            <img src="@/assets/attachment.svg" alt="attachment_icon" />
            <span>附件</span>
>>>>>>> 5372694 (sideBar:fix added close button)
          </div>
        </div>
      </div>
      <div class="sideBar_comment">
        <div class="userInfo">
          <img
            class="userInfo_icon"
            src="@/assets/avatar.svg"
            alt="avatar-icon"
          />
          <span class="userInfo_name">號稱165的大叔</span>
          <span class="userInfo_floor">一樓</span>
        </div>
        <div class="sideBar_comment_content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            blanditiis officiis eligendi animi voluptatem repellat quidem nulla,
            atque consectetur Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius nesciunt, quos neque maiores totam necessitatibus
            laudantium animi. Et, voluptatem ab. Nam cum ad impedit accusamus
            vitae. Eveniet eos alias et! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolores, labore! Quo obcaecati dolores repudiandae
            similique, consectetur voluptatibus nostrum sequi facilis officia
            incidunt aspernatur molestias perferendis corrupti reiciendis
          </p>
          <div class="sideBar_comment_others">
            <div class="timing">
              <span class="timing_date">06-09-2055</span>
              <span class="timing_time">00:00</span>
            </div>
            <div class="sideBar_icon">
<<<<<<< HEAD
              <!-- <font-awesome-icon :icon="['far', 'thumbs-up']" /> -->
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
      <div class="sideBar_comment">
        <div class="userInfo">
          <div class="userInfo_icon">
            <img src="@/assets/avatar.svg" alt="avatar-icon" />
          </div>
          <span class="userInfo_name">號稱165的大叔</span>
          <span class="userInfo_floor">一樓</span>
        </div>
        <div class="sideBar_comment_content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            blanditiis officiis eligendi animi voluptatem repellat quidem nulla,
            atque consectetur
          </p>
          <div class="sideBar_comment_others">
            <div class="timing">
              <span class="timing_date">06-09-2055</span>
              <span class="timing_time">00:00</span>
            </div>
            <div class="sideBar_icon">
              <!-- <font-awesome-icon :icon="['far', 'thumbs-up']" /> -->
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
      <div class="sideBar_comment">
        <div class="userInfo">
          <div class="userInfo_icon">
            <img src="@/assets/avatar.svg" alt="avatar-icon" />
          </div>
          <span class="userInfo_name">號稱165的大叔</span>
          <span class="userInfo_floor">一樓</span>
        </div>
        <div class="sideBar_comment_content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            blanditiis officiis eligendi animi voluptatem repellat quidem nulla,
            atque consectetur
          </p>
          <div class="sideBar_comment_others">
            <div class="timing">
              <span class="timing_date">06-09-2055</span>
              <span class="timing_time">00:00</span>
            </div>
            <div class="sideBar_icon">
              <!-- <font-awesome-icon :icon="['far', 'thumbs-up']" /> -->
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
      <div class="sideBar_comment">
        <div class="userInfo">
          <div class="userInfo_icon">
            <img src="@/assets/avatar.svg" alt="avatar-icon" />
          </div>
          <span class="userInfo_name">號稱165的大叔</span>
          <span class="userInfo_floor">一樓</span>
        </div>
        <div class="sideBar_comment_content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            blanditiis officiis eligendi animi voluptatem repellat quidem nulla,
            atque consectetur
          </p>
          <div class="sideBar_comment_others">
            <div class="timing">
              <span class="timing_date">06-09-2055</span>
              <span class="timing_time">00:00</span>
            </div>
            <div class="sideBar_icon">
              <!-- <font-awesome-icon :icon="['far', 'thumbs-up']" /> -->
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
      <div class="sideBar_comment">
        <div class="userInfo">
          <div class="userInfo_icon">
            <img src="@/assets/avatar.svg" alt="avatar-icon" />
          </div>
          <span class="userInfo_name">號稱165的大叔</span>
          <span class="userInfo_floor">一樓</span>
        </div>
        <div class="sideBar_comment_content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            blanditiis officiis eligendi animi voluptatem repellat quidem nulla,
            atque consectetur
          </p>
          <div class="sideBar_comment_others">
            <div class="timing">
              <span class="timing_date">06-09-2055</span>
              <span class="timing_time">00:00</span>
            </div>
            <div class="sideBar_icon">
              <!-- <font-awesome-icon :icon="['far', 'thumbs-up']" /> -->
=======
              <img src="@/assets/like.svg" alt="like_icon" />
>>>>>>> 5372694 (sideBar:fix added close button)
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sideBar_submit">
      <input type="text" />
      <button>送出</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
<<<<<<< HEAD
    return {};
  },
  methods: {
    toggleSideBar() {
      this.$store.commit("toggleSideBar", false);
    },
=======
    return {
      closeSideBar: false,
    };
>>>>>>> 5372694 (sideBar:fix added close button)
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
  min-width: 375px;
<<<<<<< HEAD
  max-width: 450px;
  margin-left: auto;
  padding: 0.5rem;
  position: fixed;
  z-index: 20;
  right: -100%;
  top: 0;
  background: white;
  transition: 0.5s ease-in-out;

  &.openSideBar {
    right: 0;
    transition: 0.5s ease-in-out;
  }
=======
  max-width: 500px;
  height: 100vh;
  padding: 2rem;
  background: white;
  position: fixed;
  z-index: 100;
  right: 0;
  top: 0;
  transition: 0.5s;
>>>>>>> 5372694 (sideBar:fix added close button)
}
@include breakpoint.tablet {
  .sideBar {
    padding: 1.5rem;
    box-shadow: -5px 0 4px -4px #555;
  }
}
// 中間區塊over-flow
.overflow_container {
  overflow: auto;
  margin-bottom: 0.5rem;
  transition: 0.4s;
}
// 發文區塊
.sideBar_main {
  @include border-bottom;
  @include flex.flex(start, stretch, column, nowrap);
  gap: 1rem;
  padding: 1rem 0;
}
.sideBar_main_info {
  @include flex.flex(start, stretch, row, nowrap);
  gap: 2rem;
}
.userInfo {
  @extend %body;
  @include flex.flex(start, center, column);
  flex: 1 0 0;
  gap: 1rem;
  &_icon {
    width: 50px;
    height: 50px;
  }
  &_name {
    @extend %body;
  }
  &_floor {
    @extend %body;
    padding: 1px 6px;
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
  padding: 1rem 0;
  gap: 1rem;
}
.sideBar_comment_content {
  flex: 0 1 70%;
  > p {
    margin-bottom: 1rem;
    text-align: left;
  }
}
.sideBar_comment_others {
  @include flex.flex(between, center, row, nowrap);
}

// 送出留言
.sideBar_submit {
  @include flex.flex(between, center, row, nowrap);
  transition: 0.4s;
  > input {
    flex: 1 0 0;
    margin-right: 1rem;
    padding: 6px;
    border: 2px solid color.$green-300;
    border-radius: 15px;
  }
  > button {
    @include submit-button(color.$green-300);
  }
}

<<<<<<< HEAD
=======
.closeSideBar {
  right: -600px;
}

>>>>>>> 5372694 (sideBar:fix added close button)
.sideBar_toggleBtn {
  visibility: visible;
  transition: visibility 0s, opacity 0.5s;
  &.fade {
    visibility: hidden;
    opacity: 0;
  }
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -50px;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
    opacity: 0.5;
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
</style>
