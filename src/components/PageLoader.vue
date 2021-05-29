<template>
  <div class="page-loader">
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      $(".page-loader").addClass("visible");
    },
    hide() {
      $(".page-loader").removeClass("visible");
    },
  },
};
</script>

<style lang="less" scoped>
@import "/public/StyleConfig";

.page-loader {
  width: 100vw;
  height: 2px;
  position: fixed;
  top: 0px;
  left: 0px;
  opacity: 0%;
  pointer-events: none;

  &.visible {
    opacity: 100%;
    pointer-events: initial;
  }

  div {
    width: 45%;
    height: 2px;
    background: @brandColor;
    transform: translate(-100%, 0%);
    animation-name: animate;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    @keyframes animate {
      from {
        width: 64%;
      }

      to {
        margin-left: 164%;
      }
    }
  }
}
</style>