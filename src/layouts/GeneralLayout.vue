<template>
    <general-navbar logo="AETHER">
        <div class="links">
            <router-link to="/">HOME</router-link>

            <router-link to="/about">ABOUT</router-link>
        </div>

        <div class="buttons">
            <text-button>REGISTER</text-button>

            <primary-button>LOGIN</primary-button>
        </div>
    </general-navbar>

    <div class="body">
        <div class="content">
            <slot></slot>
        </div>

        Footer... Soon
    </div>

    <splash-screen ref="SplashScreen" />
</template>

<script>
    import GeneralNavbar from "../components/GeneralNavbar.vue";
    import TextButton from "../components/TextButton.vue";
    import PrimaryButton from "../components/PrimaryButton.vue";
    import SplashScreen from "../components/SplashScreen.vue";

    export default {
        components: {
            GeneralNavbar,
            TextButton,
            PrimaryButton,
            SplashScreen
        },
        mounted() {
            this.$refs.SplashScreen.show();

            $(document).ready(() => {
                this.$refs.SplashScreen.hide();
            });
        }
    }
</script>

<style lang="less" scoped>
    @import "/public/StyleConfig";

    .body {
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