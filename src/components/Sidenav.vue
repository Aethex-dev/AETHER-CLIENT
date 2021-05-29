<template>
  <div class="sidenav">
    <router-link to="/">
      <i class="fal fa-home"></i>
    </router-link>

    <router-link to="/about">
      <i class="fal fa-file"></i>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
@import "/public/StyleConfig";

.sidenav {
  width: 50px;
  height: 100vh;
  background: @level3;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: @contrast;
    opacity: 60%;
    transition-duration: 200ms;
    width: 50px;
    height: 50px;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-left: 1px solid @level0;

    i {
      margin-right: 1px;
    }

    &:hover {
      opacity: 100%;
    }

    &.router-link-active {
      color: @brandColor;
      opacity: 100%;
      border-color: @brandColor;
      background: @level4;
      pointer-events: none;
    }
  }
}
</style>