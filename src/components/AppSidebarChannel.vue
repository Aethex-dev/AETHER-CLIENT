<template>
  <div class="AppSidebarChannel">
    <router-link v-bind:to="href">
      <i class="fal fa-hashtag"></i>

      <span>
        <slot></slot>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["href"],
};
</script>

<style lang="less">
@import "/public/StyleConfig";

.AppSidebarChannel {
  a {
    color: @contrast;
    text-decoration: none;
    font-family: @mainFont;
    font-size: 12px;
    display: flex;
    padding: 10px 20px 10px 19px;
    width: 100%;
    transition-duration: 200ms;
    align-items: center;
    opacity: 60%;
    border-left: 1px solid @level0;

    &:hover {
      opacity: 100%;
    }

    &.router-link-exact-active {
      border-color: @brandColor;
      color: @brandColor;
      opacity: 100%;
      pointer-events: none;
    }

    i {
      margin-right: 5px;
      padding-right: 5px;
      border-right: 1px solid @level13;
    }
  }
}
</style>