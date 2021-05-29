<template>
  <div class="splash-screen">
    <h1>AE</h1>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      $(".splash-screen").addClass("visible");
    },
    hide() {
      $(".splash-screen").removeClass("visible");
    },
  },
};
</script>

<style lang="less" scoped>
@import "/public/StyleConfig";

.splash-screen {
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  background: @level1;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0%;
  transition-duration: 200ms;
  width: 100vw;
  height: 100vh;

  &.visible {
    opacity: 100%;
    pointer-events: initial;
  }

  h1 {
    font-family: @logoFont;
    font-weight: 300;
    color: @brandColor;
    width: 100%;
    left: 50vw;
    display: flex;
    justify-content: center;
    position: fixed;
    letter-spacing: 3px;
    padding: 0px;
    top: 50vh;
    font-size: 100px;
    transform: translate(-50%, -50%);
    margin: 0px;
  }
}
</style>