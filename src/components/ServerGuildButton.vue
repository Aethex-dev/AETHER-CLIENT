<template>
  <div class="ServerGuildButton">
    <router-link v-bind:to="href">
      <img v-bind:src="img" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["img", "href"],
};
</script>

<style lang="less">
@import "/public/StyleConfig";

.ServerGuildButton {
  width: 40px;
  height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition-duration: 200ms;

  &:hover {
    img {
      transform: scale(0.8);
    }
  }

  &:active {
    img {
      transform: scale(0.9);
    }
  }

  a {
    height: 40px;
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 4px;

    img {
      height: 40px;
      border-radius: 4px;
      width: 40px;
      transition-duration: 200ms;
    }
  }
}
</style>