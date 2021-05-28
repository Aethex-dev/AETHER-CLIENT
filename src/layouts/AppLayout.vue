<template>
    <app-sidebar>
        <div class="left">
            <server-guild-button img="https://discord4j.com/logo.svg" href="/"/>

            <server-guild-button img="https://assets.rocketstock.com/uploads/2016/05/dribbble-shot-bolt.gif" href="/"/>

            <server-guild-button img="https://assets.rocketstock.com/uploads/2016/05/dribbble-shot-bolt.gif" href="/"/>
        </div>

        <div class="right">
            <app-sidebar-banner src="https://cdn.wallpapersafari.com/89/10/Cldnux.jpg"/>

            <div class="header">
                <span>Test Server</span>
            </div>

            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br>
        </div>
    </app-sidebar>

    <div class="AppLayout">
        <div class="content"></div>
    </div>
</template>

<script>
    import AppSidebar from "../components/AppSidebar.vue";
    import ServerGuildButton from "../components/ServerGuildButton.vue";
    import AppSidebarBanner from "../components/AppSidebarBanner.vue";

    export default {
        components: {
            AppSidebar,
            ServerGuildButton,
            AppSidebarBanner
        }
    }
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