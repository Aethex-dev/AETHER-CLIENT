<template>
  <div class="GeneralNavbar">
    <div class="logo">
      <router-link to="/">{{ logo }}</router-link>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["logo"],
};
</script>

<style lang="less">
@import "/public/StyleConfig";

.GeneralNavbar {
  width: 100%;
  height: 50px;
  background: @level2;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  box-shadow: 0px -1px 5px #000;
  justify-content: flex-end;

  .logo {
    margin-right: auto;
    margin-left: 20px;

    a {
      color: @brandColor;
      text-decoration: none;
      font-family: @logoFont;
      letter-spacing: 3px;
      transition-duration: 200ms;

      &:hover {
        opacity: 70%;
      }
    }
  }

  .links {
    display: flex;
    flex-direction: row;

    a {
      color: @contrast;
      text-decoration: none;
      font-family: @mainFont;
      opacity: 60%;
      margin-top: 1px;
      font-size: 13px;
      transition-duration: 200ms;
      padding: 11px 10px 10px 10px;
      height: 49px;
      align-items: center;
      justify-content: center;
      display: flex;
      border-bottom: 1px solid @level0;

      &:hover {
        opacity: 100%;
      }

      &.router-link-active {
        color: @brandColor;
        pointer-events: none;
        opacity: 100%;
        border-bottom: 1px solid @brandColor;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
  }
}
</style>