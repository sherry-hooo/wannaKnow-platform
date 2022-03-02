<template>
  <div class="loadingSideBar_main">
    <div class="loadingSideBar_main_info">
      <div class="userInfo">
        <img
          class="userInfo_icon"
          src="@/assets/avatar.svg"
          alt="avatar-icon"
        />
        <span class="userInfo_name loading_container"></span>
        <span class="userInfo_floor">樓主</span>
      </div>
      <div class="title">
        <h4 class="loading_container"></h4>
        <div class="timing loading_container"></div>
      </div>
    </div>
    <div class="loadingSideBar_main_content loading_container"></div>
    <div class="loadingSideBar_main_others">
      <div class="sideBar_icon">
        <img src="@/assets/like.svg" alt="like_icon" />
      </div>
      <div class="sideBar_icon">
        <img src="@/assets/content.svg" alt="content_icon" />
      </div>
      <div class="sideBar_icon">
        <img src="@/assets/bookmark.svg" alt="bookmark_icon" />
      </div>
      <div class="sideBar_icon">
        <img src="@/assets/attachment.svg" alt="attachment_icon" />
      </div>
    </div>
  </div>
  <section class="w-100 loading_container"></section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
%loading-effect {
  animation: wave 2s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
}
.loading_container {
  @extend %loading-effect;
}
.w-100 {
  width: 100%;
}

h4 {
  width: 100%;
  height: 40px;
}

.timing {
  width: 100%;
  height: 30px;
}

.userInfo_name {
  width: 100%;
  height: 20px;
}

section {
  height: 100%;
}

.loadingSideBar_main {
  padding: 1rem;
  &_info {
    display: flex;
    margin-bottom: 20px;
    .userInfo {
      display: flex;
      flex-direction: column;
      &_floor {
        padding: 1px 10px;
        color: #fff;
        background-color: #79bc89;
        border-radius: 15px;
      }
      > * + * {
        margin-top: 10px;
      }
    }
    .title {
      flex: 1;
      margin-left: 20px;
    }
  }
  &_content {
    width: 100%;
    height: 50px;
  }
  &_others {
    margin-top: 20px;
    display: flex;
    justify-content: end;
    > * + * {
      margin-left: 10px;
    }
  }
}
</style>
