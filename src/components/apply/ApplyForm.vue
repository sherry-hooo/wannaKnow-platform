<template>
  <!-- 阿傑負責 -->
  <!-- <div class="layer"></div> -->
  <section class="applyForm">
    <!-- close button -->
    <span class="applyForm_closeBtn">
      <font-awesome-icon :icon="['fa', 'times-circle']" />
    </span>
    <!-- title -->
    <h3 class="applyForm_title">報名</h3>
    <!-- 報名資訊 -->
    <div class="applyForm_info">
      <!-- 主要資訊 -->
      <div class="inputArea">
        <div class="inputArea_item inputArea_item-speaker">
          <label for="speaker"> 分享人: </label>
          <input type="text" id="speaker" />
        </div>
        <div class="inputArea_item inputArea_item-date">
          <label for="date"> 日期: </label>
          <input type="date" id="date" />
        </div>
        <div class="inputArea_item inputArea_item-category">
          <label for="category"> 分類: </label>
          <select id="category">
            <option value="">請選擇分類</option>
            <option value="experience">專案經驗(踩雷經驗、溝通之術)</option>
            <option value="thoughts">學習小心得</option>
            <option value="technique">技術剖析</option>
            <option value="interview">職場工作、面試經驗談</option>
            <option value="life">
              生活頻道(各種跟技術無關的,旅遊、吃的、喝的、育兒...)
            </option>
          </select>
        </div>
        <div class="inputArea_item inputArea_item-topic">
          <label for="topic"> 主題: </label>
          <input type="text" class="topic" id="topic" />
        </div>
        <div class="inputArea_item inputArea_item-topic">
          <label>
            <img src="@/assets/attachment.svg" alt="attachment_icon" />
          </label>
          <input type="text" id="attachment" />
        </div>
      </div>

      <!-- 分享方式 -->
      <div class="detail">
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
          <label class="tagGenerator_label" for="tag_input"> 標籤: </label>
          <div class="tagGenerator_tagArea">
            <input
              class="tagGenerator_input"
              type="text"
              id="tag_input"
              placeholder="add tag here"
            />
            <div class="tagGenerator_output">
              <span class="tagGenerator_tag">iOS</span>
              <span class="tagGenerator_tag">前端</span>
              <span class="tagGenerator_tag">JavaScript</span>
              <span class="tagGenerator_tag">Swift</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主題簡介 -->
    <textarea class="introduction" name="" id=""></textarea>
    <!-- 送出鈕 -->
    <button class="applyForm_submit">送出</button>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // toggleApplyForm() {
    //   this.$store.commit("toggleApplyForm", false);
    // },
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
%flexItem-left {
  flex: 0 1 35%;
}
%flexItem-right {
  flex: 0 1 65%;
}

// .layer {
//   @include flex.flex(center, center, row, nowrap);
//   display: none;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: -100;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.6);
// }

// 表單尺寸 & 關閉按鈕
.applyForm {
  @include flex.flex(start, center, column, nowrap);
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  overflow: scroll;
  font-size: 1.25rem;
  background-color: #fff;
  @include breakpoint.tablet {
    top: 60px;
    left: calc(50% + 45px);
    transform: translateX(-50%);
    width: calc(100% - 90px);
    max-width: 700px;
    height: calc(100vh - 70px);
    max-height: 700px;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 40px;
    box-shadow: 0 0 10px #555;
  }
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
  &_title {
    @extend %title;
    margin-bottom: 2rem;
    &::after {
      content: "";
      display: block;
      width: 120px;
      height: 4px;
      margin: 0.5rem auto 0 auto;
      background-color: color.$green-400;
    }
  }
  &_info {
    @include flex.flex(start, stretch, column, nowrap);
    gap: 1rem;
    margin-bottom: 1rem;
    @include breakpoint.tablet {
      @include flex.flex(center, stretch, row, nowrap);
      gap: 1rem;
    }
  }
}

.inputArea {
  @include breakpoint.tablet {
    width: 40%;
  }
  &_item {
    @include flex.flex(start, center, row, nowrap);
    gap: 2rem;
    @include breakpoint.tablet {
      gap: 1rem;
    }
    &:not(last-child) {
      margin-bottom: 0.5rem;
    }
    label {
      @extend %flexItem-left;
      text-align: right;
    }
    input {
      @include input-border(color.$green-400);
      @extend %flexItem-right;
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
      @extend %flexItem-right;
      max-width: 220px;
      padding: 0.5rem;
      background-color: #fff;
      &:focus {
        box-shadow: 0 0 3px color.$green-300;
      }
    }
  }
}

.detail {
  @include flex.flex(start, stretch, column, nowrap);
  margin-bottom: 0.5rem;
  @include breakpoint.tablet {
    width: 60%;
  }
}
.shareWay {
  @include flex.flex(start, start, row, nowrap);
  gap: 1rem;
  margin-bottom: 0.5rem;
  span {
    @extend %flexItem-left;
    text-align: right;
  }
  &_radio {
    @extend %flexItem-right;
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

  gap: 2rem;
  @include breakpoint.tablet {
    gap: 1rem;
  }
  &_label {
    @extend %flexItem-left;
    text-align: right;
  }
  &_tagArea {
    @include flex.flex(start, stretch, column, nowrap);
    @extend %flexItem-right;
    gap: 0.5rem;
  }
  &_input {
    padding: 8px;
    max-width: 220px;
    @include input-border(color.$green-400);
  }
  &_output {
    @include flex.flex(start, center, row, wrap);
    gap: 0.5rem;
  }
  &_tag {
    @extend %remark;
    padding: 3px 8px;
    border-radius: 20px;
    background-color: color.$green-300;
    color: #fff;
  }
}

// 簡介輸入框
.introduction {
  display: block;
  flex: 0 0 200px;
  width: 100%;
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
  flex: 0 0 auto;
}
</style>
