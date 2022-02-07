<template>
  <!-- 阿傑負責 -->
  <section class="sideBar">
    <div class="sideBar_main">
      <div class="userInfo">
        <div class="userInfo_icon">
          <img src="@/assets/avatar.svg" alt="avatar-icon" />
        </div>
        <span class="userInfo_name">號稱165的大叔</span>
        <span class="userInfo_floor">樓主</span>
      </div>
      <div class="sideBar_main_title">
        <h4>狼若回頭, 不是報恩就是報仇</h4>
        <span class="date">06-09-2055</span>
        <span class="time">00:00</span>
      </div>
      <div class="sideBar_main_content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad adipisci,
          placeat ullam cum vitae dignissimos cumque voluptatem nobis sunt modi
          reiciendis! Laboriosam, aliquam. Voluptas quos quo natus minima,
          laborum provident.
        </p>
      </div>
      <div class="sideBar_main_others">
        <font-awesome-icon :icon="['fas', 'bookmark']" />
        <font-awesome-icon :icon="['fas', 'link']" />
        <font-awesome-icon :icon="['far', 'thumbs-up']" />
        <font-awesome-icon :icon="['fas', 'comment-dots']" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
