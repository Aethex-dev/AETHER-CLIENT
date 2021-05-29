<template>
  <div class="GeneralLayout">
    <div class="content">
      <slot></slot>
    </div>

    <general-footer
      copyright="COPYRIGHT AETHER 2020 - 2021 | Licensed Under the "
    >
      <div>
        <h1>ABOUT US</h1>

        <span
          >Lorem ipsum dolor sit ammet Lorem ipsum dolor sit ammet Lorem ipsum
          dolor sit ammet Lorem ipsum dolor sit ammet Lorem ipsum dolor sit
          ammet Lorem ipsum dolor sit ammet Lorem ipsum dolor sit ammet Lorem
          ipsum dolor sit ammet Lorem ipsum dolor sit ammet
        </span>
      </div>

      <div>
        <h1>QUICK LINKS</h1>

        <div class="links">
          <router-link to="/">HOME</router-link>

          <router-link to="/">HOME</router-link>

          <router-link to="/">HOME</router-link>

          <router-link to="/">HOME</router-link>
        </div>
      </div>

      <div>
        <h1>HELP</h1>

        <div class="links">
          <router-link to="/">TERMS OF SERVICE</router-link>

          <router-link to="/">PRIVACY POLICY</router-link>

          <router-link to="/">HOME</router-link>
        </div>
      </div>
    </general-footer>
  </div>

  <general-navbar logo="AETHER">
    <div class="links">
      <router-link to="/">HOME</router-link>

      <router-link to="/app">APP</router-link>

      <router-link to="/about">ABOUT</router-link>
    </div>

    <div class="buttons">
      <outline-button>REGISTER</outline-button>

      <primary-button>LOGIN</primary-button>
    </div>
  </general-navbar>
</template>

<script>
import GeneralNavbar from "../components/GeneralNavbar.vue";
import OutlineButton from "../components/OutlineButton.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import GeneralFooter from "../components/GeneralFooter.vue";

export default {
  components: {
    GeneralNavbar,
    OutlineButton,
    PrimaryButton,
    GeneralFooter,
  },
};
</script>

<style lang="less" scoped>
@import "/public/StyleConfig";

.GeneralLayout {
  height: calc(100vh - 50px);
  margin-top: 50px;
  width: 100%;
  background: @level1;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: @brandColor;
  }
  &::-webkit-scrollbar-track {
    background: @level0;
  }

  .content {
    min-height: 100vh;
    color: @contrast;
    font-size: 13px;
    font-family: @mainFont;
  }
}
</style>