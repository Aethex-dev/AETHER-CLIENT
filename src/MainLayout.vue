<template>
  <router-view />
  <splash-screen ref="SplashScreen" />
</template>

<script>
import SplashScreen from "./components/SplashScreen.vue";

export default {
  components: {
    SplashScreen,
  },
  mounted() {
    this.$refs.SplashScreen.show();

    $(document).ready(() => {
      this.$refs.SplashScreen.hide();
    });
  },
};
</script>
