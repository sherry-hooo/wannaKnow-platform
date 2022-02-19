<template>
  <!-- 阿傑負責 -->
  <div class="layer" :class="{ show: $store.state.isApplyFormOpen }"></div>
  <section class="applyForm" :class="{ show: $store.state.isApplyFormOpen }">
    <!-- close button -->
    <span @click="toggleApplyForm" class="applyForm_closeBtn">
      <font-awesome-icon :icon="['fa', 'times-circle']" />
    </span>
    <!-- title -->
    <h3 class="applyForm_title">報名</h3>
    <!-- 報名資訊 -->
    <div class="applyForm_info">
      <!-- 主要資訊 -->
      <div class="applyForm_info_main">
        <div>
          <label for="speaker"> 分享人: </label>
          <input type="text" id="speaker" />
        </div>
        <div>
          <label for="date"> 日期: </label>
          <input type="date" id="date" />
        </div>
        <div>
          <label for="category"> 分類: </label>
          <select id="category">
            <option value=""></option>
            <option value="experience">專案經驗(踩雷經驗、溝通之術)</option>
            <option value="thoughts">學習小心得</option>
            <option value="technique">技術剖析</option>
            <option value="interview">職場工作、面試經驗談</option>
            <option value="life">
              生活頻道(各種跟技術無關的,旅遊、吃的、喝的、育兒...)
            </option>
          </select>
        </div>
        <div>
          <label for="topic"> 主題: </label>
          <input type="text" class="topic" id="topic" />
        </div>
        <div>
          <label>
            <!-- <font-awesome-icon :icon="['fas', 'link']" /> -->
          </label>
          <input type="text" id="attachment" />
        </div>
      </div>
      <!-- 其他資訊 -->
      <div class="applyForm_info_other">
        <div class="shareWay">
          <span>分享方式:</span>
          <div class="shareWay_radio">
            <input type="radio" name="shareWay" id="onsite" value="onsite" />
            <label for="onsite"> 現場 </label>
            <input type="radio" name="shareWay" id="remote" value="remote" />
            <label for="remote"> 遠端 </label>
          </div>
        </div>
        <div class="tagGenerator">
          <label for="tag_input"> 標籤: </label>
          <div class="tag_area">
            <input type="text" id="tag_input" placeholder="add tag here" />
            <div class="tag_area">tag tag tag</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主題簡介 -->
    <textarea class="topic_intro" name="" id=""></textarea>
    <!-- 送出鈕 -->
    <button class="applyForm_submit">送出</button>
    <!-- <font-awesome-icon :icon="['fas', 'times-circle']" class="close_btn" /> -->
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleApplyForm() {
      this.$store.commit("toggleApplyForm", false);
    },
  },
};
</script>

<style scoped lang="scss">
// 引入flex小工具
@use "src/assets/sass/utils/_flex.scss";

%hover {
  transition: filter 0.25s;
  &:hover {
    filter: brightness(110%) contrast(110%);
  }
}
// 輸入框樣式
@mixin input-border($color) {
  min-width: 100px;
  height: 2rem;
  border: 1px solid $color;
  border-radius: 0.5rem;
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
@mixin flex-size($basis: 30%) {
  @extend %sub-title;
  flex: 0 1 $basis;
}

.layer {
  @include flex.flex(center, center, row, nowrap);
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -100;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  &.show {
    display: block;
  }
}

// 表單尺寸 & 關閉按鈕
.applyForm {
  display: none;
  box-shadow: 0 0 10px #555;
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 750px;
  max-height: 800px;
  margin: 2rem auto 0 auto;
  padding: 0.5rem;
  border-radius: 40px;
  background-color: #fff;

  &_closeBtn {
    @extend %hover;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: color.$green-300;
    cursor: pointer;
    font: {
      size: 1.5rem;
      weight: 100;
    }
  }
  &.show {
    display: block;
  }
}
@include breakpoint.tablet {
  .applyForm {
    padding: 2rem;
  }
}
// 表單title
.applyForm_title {
  @extend %title;
  margin-bottom: 3rem;
  &::after {
    content: "";
    display: block;
    width: 120px;
    height: 4px;
    margin: 0.5rem auto 0 auto;
    background-color: color.$green-400;
  }
}

// 表單info
.applyForm_info {
  margin-bottom: 1rem;
}

@include breakpoint.tablet {
  .applyForm_info {
    @include flex.flex(center, stretch, row, nowrap);
    gap: 1rem;
    &_main {
      flex: 0 1 50%;
    }
    &_other {
      flex: 0 0 50%;
    }
  }
}

.applyForm_info_main {
  > div {
    @include flex.flex(start, center, row, nowrap);
    gap: 1rem;
    &:not(last-child) {
      margin-bottom: 0.5rem;
    }
    label {
      @extend %sub-title;
      flex: 0 1 25%;
      text-align: right;
    }
    input {
      @include input-border(color.$green-400);
      flex: 0 1 75%;
      max-width: 220px;
      padding: 0.5rem;
      &[type="date"] {
        background-color: #fff;
      }
      &:focus {
        box-shadow: 0 0 3px color.$green-300;
      }
    }
    select {
      @include input-border(color.$green-400);
      flex: 0 1 75%;
      max-width: 220px;
      padding: 0.5rem;
      background-color: #fff;
      &:focus {
        box-shadow: 0 0 3px color.$green-300;
      }
    }
  }
}

// 分享方式
.shareWay {
  @include flex.flex(start, start, row, nowrap);
  @extend %sub-title;
  gap: 1rem;
  margin-bottom: 0.5rem;
  span {
    flex: 0 1 35%;
    text-align: right;
  }
  &_radio {
    flex: 0 1 65%;
    text-align: left;
  }
  input[type="radio"] {
    appearance: none;
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
    vertical-align: middle;
    border: 1px solid color.$green-300;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.4s;
    &:checked {
      background-color: color.$green-300;
    }
  }
  label {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
}

// 標籤產生器
.tagGenerator {
  @include flex.flex(start, start, row, nowrap);
  @extend %sub-title;
  gap: 1rem;
  label {
    flex: 0 1 35%;
    text-align: right;
  }
  input {
    &::placeholder {
      color: #ccc;
    }
  }
  .tag_area {
    flex: 0 1 65%;
    text-align: left;
  }
}

// 簡介輸入框
.topic_intro {
  display: block;
  width: 100%;
  height: 250px;
  margin: 0 auto 2rem auto;
  padding: 1rem;
  border: 2px solid color.$green-300;
  border-radius: 25px;
  resize: none;
  &:focus {
    box-shadow: 0 0 3px color.$green-300;
  }
}
.applyForm_submit {
  @include submit-button(color.$green-300);
}
</style>
