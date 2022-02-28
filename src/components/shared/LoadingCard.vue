<template>
  <div class="card">
    <div class="card_mainInfo">
      <p class="loading_container card_mainInfo_title"></p>
      <div class="card_info">
        <div class="card_info_speaker">
          <div class="card_info_speaker_icon loading_container"></div>
          <p class="loading_container"></p>
        </div>
        <p class="card_info_date loading_container"></p>
      </div>
    </div>
    <p class="loading_container card_description"></p>
    <div class="card_subInfo">
      <div class="loading_container card_subInfo_tags"></div>
      <p class="loading_container card_subInfo_icons"></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
%loading-effect {
  animation: wave 2s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
}

.loading_container {
  @extend %loading-effect;
}
.card {
  min-height: 240px;
  padding: 20px 40px;
  border-bottom: 5px #eeeeee solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include breakpoint.desktop {
    padding: 20px 10px;
    min-height: fit-content;
  }
}

// 第一部分
.card {
  &_mainInfo {
    @include breakpoint.desktop {
      display: flex;
      justify-content: space-between;
    }
    &_title {
      width: 100%;
      height: 40px;
      @include breakpoint.desktop {
        width: 60%;
      }
    }
    .card_info {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      @include breakpoint.desktop {
        width: 30%;
        margin-top: 0;
      }
      &_speaker {
        display: flex;
        flex: 1;
        margin-right: 20px;
        > * {
          height: 30px;
          @extend %loading-effect;
        }
        &_icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 10px;
        }
        p {
          flex: 1;
        }
      }
      &_date {
        width: 100px;
        height: 30px;
        @extend %loading-effect;
      }
    }
  }
}

.card_description {
  margin-top: 10px;
  height: 20px;
}

.card {
  &_subInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    &_tags {
      width: 45%;
      height: 80px;
      @include breakpoint.desktop {
        height: 40px;
      }
    }
    &_icons {
      width: 45%;
      height: 40px;
    }
  }
}

@keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
