<template>
  <section class="sideBar" :class="{ openSideBar: sideBarOpen }">
    <div @click="sideBarOpen = !sideBarOpen" class="sideBar_toggleBtn">x</div>
    <div class="overflow_container">
      <div class="sideBar_main">
        <div class="sideBar_main_info">
          <div class="userInfo">
            <div class="userInfo_icon">
              <img src="@/assets/avatar.svg" alt="avatar-icon" />
            </div>
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
            natus minima, laborum provident. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolor voluptatem beatae vero placeat
            voluptatum! Deleniti ipsam expedita, dolorum laboriosam iste sed
            illum voluptate accusantium magni veritatis enim totam natus
            necessitatibus culpa earum quibusdam, illo ratione cupiditate nobis
            dolore aperiam animi, vel incidunt? Explicabo nemo tempore eos, odio
            officia assumenda voluptatum, consequatur aliquam architecto
            similique quas aspernatur esse repudiandae placeat. Ipsam porro
            optio consequuntur voluptatem qui laudantium libero! Doloribus
            maxime quam optio aperiam labore, dolore vel totam cupiditate saepe
            amet sed non debitis, exercitationem distinctio facere! Minima
            maiores hic, at vel suscipit reiciendis. Quos doloremque architecto
            vitae cum deserunt amet vero perferendis, impedit fugit ducimus
            cupiditate eius iure aspernatur modi nostrum corrupti repudiandae
            ipsam eveniet tenetur repellendus! Recusandae deserunt harum rerum
            fugit sit. Quaerat, sint. Suscipit consequuntur delectus sapiente
            doloremque non iusto ullam at explicabo eaque, voluptates natus,
            corrupti ducimus eos tempora, reprehenderit molestias error soluta
            aut quasi commodi aperiam possimus. Voluptatum recusandae ipsam
            magni voluptatibus obcaecati quam inventore omnis officia sapiente.
            Asperiores facere inventore nesciunt iste tenetur commodi autem
            dignissimos rerum qui odit reiciendis beatae repudiandae fugit iure
            illum molestiae cupiditate excepturi, voluptates quas quidem totam
            atque pariatur. Rerum molestias ab, vel iusto animi dolor illum
            dicta ullam, nihil facilis placeat laborum voluptas maxime libero
            accusantium ad nostrum perspiciatis atque. Perferendis amet error
            atque debitis modi aperiam, nam dignissimos sunt illum similique
            laboriosam dolorum quia praesentium magnam ratione quis in
            voluptatibus explicabo minus, ex facilis fuga repudiandae aut odio.
            Blanditiis nam molestiae neque, accusamus atque explicabo culpa
            eveniet, molestias doloribus temporibus quae nihil architecto
            inventore, voluptate quo consequuntur. Sapiente ipsum sunt inventore
            tempore qui maxime nulla laudantium. Ipsam provident libero
            repellendus magnam aspernatur hic rerum impedit, dolorum,
            necessitatibus excepturi quia sunt eos maxime facere porro quae?
            Inventore eveniet quia quibusdam, architecto blanditiis incidunt
            voluptas aspernatur veritatis sint et facere rerum!
          </p>
        </div>
        <div class="sideBar_main_others">
          <div class="sideBar_icon">
            <font-awesome-icon :icon="['fas', 'bookmark']" />
          </div>
          <div class="sideBar_icon">
            <font-awesome-icon :icon="['fas', 'link']" />
            <span>附件</span>
          </div>
          <div class="sideBar_icon">
            <font-awesome-icon :icon="['far', 'thumbs-up']" />
            <span>10</span>
          </div>
          <div class="sideBar_icon">
            <font-awesome-icon :icon="['fas', 'comment-dots']" />
            <span>10</span>
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
            atque consectetur Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius nesciunt, quos neque maiores totam necessitatibus
            laudantium animi. Et, voluptatem ab. Nam cum ad impedit accusamus
            vitae. Eveniet eos alias et!
          </p>
          <div class="sideBar_comment_others">
            <div class="timing">
              <span class="timing_date">06-09-2055</span>
              <span class="timing_time">00:00</span>
            </div>
            <div class="sideBar_icon">
              <font-awesome-icon :icon="['far', 'thumbs-up']" />
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
              <font-awesome-icon :icon="['far', 'thumbs-up']" />
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
              <font-awesome-icon :icon="['far', 'thumbs-up']" />
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
              <font-awesome-icon :icon="['far', 'thumbs-up']" />
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
              <font-awesome-icon :icon="['far', 'thumbs-up']" />
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
    return {
      sideBarOpen: false,
    };
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

.sideBar {
  min-width: 375px;
  max-width: 450px;
  margin-left: auto;
  padding: 0.5rem;
  position: absolute;
  z-index: 20;
  right: 0;
  top: 0;
  background: white;
}
@include breakpoint.tablet {
  .sideBar {
    padding: 1rem;
    box-shadow: -11px 0 10px -10px #888;
  }
}
.overflow_container {
  height: 80vh;
  margin-bottom: 1rem;
  overflow: auto;
}
.sideBar_main {
  @include border-bottom;
}
.sideBar_main_info {
  @include flex.flex(start, stretch, row, nowrap);
  gap: 2rem;
}
.userInfo {
  @extend %body;
  @include flex.flex(start, center, column);
  flex: 0 0 30%;
  span {
    margin-top: 0.5rem;
  }
  &_floor {
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
  padding: 1rem;
  text-align: left;
}
.sideBar_main_others {
  @extend %sub-title;
  @include flex.flex(end, center, row, nowrap);
  .sideBar_icon {
    display: inline-block;
    &:nth-child(1) {
      margin-right: auto;
    }
    &:nth-child(2) {
      margin-right: 1rem;
      > span {
        margin-left: 0.25rem;
      }
    }
    &:nth-child(3) {
      margin-right: 1rem;
    }
  }
}

.sideBar_comment {
  @include flex.flex(around, stretch, row, nowrap);
  @include border-bottom;
  padding: 1rem 0;
}
.sideBar_comment_content {
  > p {
    margin-bottom: 1rem;
    text-align: left;
  }
}
.sideBar_comment_others {
  @include flex.flex(between, center, row, nowrap);
}

.sideBar_submit {
  @include flex.flex(between, center, row, nowrap);
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

.openSideBar {
  right: -100%;
}

.sideBar_toggleBtn {
  cursor: pointer;
}
</style>
