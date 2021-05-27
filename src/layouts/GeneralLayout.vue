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

        <general-footer copyright="COPYRIGHT AETHER 2020 - 2021 | ALL RIGHTS RESERVED">
            <div>
                <h1>ABOUT US</h1>

                <span>Lorem ipsum dolor sit ammet Lorem ipsum dolor sit ammet Lorem ipsum dolor sit ammet Lorem ipsum dolor sit ammet Lorem ipsum dolor sit ammet Lorem ipsum dolor sit ammet Lorem ipsum dolor sit ammet Lorem ipsum dolor sit ammet Lorem ipsum dolor sit ammet </span>
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
</template>

<script>
    import GeneralNavbar from "../components/GeneralNavbar.vue";
    import TextButton from "../components/TextButton.vue";
    import PrimaryButton from "../components/PrimaryButton.vue";
    import GeneralFooter from "../components/GeneralFooter.vue";

    export default {
        components: {
            GeneralNavbar,
            TextButton,
            PrimaryButton,
            GeneralFooter
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