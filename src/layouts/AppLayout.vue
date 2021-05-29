<template>
  <app-sidebar>
    <div class="left">
      <server-guild-button img="https://discord4j.com/logo.svg" href="/" />

      <server-guild-button
        img="https://assets.rocketstock.com/uploads/2016/05/dribbble-shot-bolt.gif"
        href="/"
      />

      <server-guild-button
        img="https://assets.rocketstock.com/uploads/2016/05/dribbble-shot-bolt.gif"
        href="/"
      />
    </div>

    <div class="right">
      <app-sidebar-banner
        src="https://cdn.wallpapersafari.com/89/10/Cldnux.jpg"
      />

      <div class="header">
        <i class="fal fa-check-square"></i><span>AETHER</span>
      </div>

      <app-sidebar-channel href="/app">WELCOME</app-sidebar-channel>
    </div>
  </app-sidebar>

  <div class="AppLayout">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AppSidebar from "../components/AppSidebar.vue";
import ServerGuildButton from "../components/ServerGuildButton.vue";
import AppSidebarBanner from "../components/AppSidebarBanner.vue";
import AppSidebarChannel from "../components/AppSidebarChannel.vue";

export default {
  components: {
    AppSidebar,
    ServerGuildButton,
    AppSidebarBanner,
    AppSidebarChannel,
  },
};
</script>

<style lang="less">
@import "/public/StyleConfig";

.AppLayout {
  position: fixed;
  top: 0px;
  left: 310px;
  width: calc(100vw - 310px);
  height: 100vh;
  background: @level1;
}
</style>