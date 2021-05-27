<template>
    <router-link class="server-guild-button" v-bind:to="href">
        <img v-bind:width="width" v-bind:height="height" v-bind:src="iconsrc" />
    </router-link>
</template>

<script>
    export default {
        props: ["width", "height", "iconsrc", "href"]
    }
</script>

<style lang="less" scoped>
    @import "/public/StyleConfig";

    .server-guild-button {
        display: flex;
        transition-duration: 200ms;
        overflow: hidden;
        border-left: 2px solid @level0;
        align-items: center;
        justify-content: center;
        padding: 0px;
        margin: 0px;

        img {
            border: 1px solid @level0;
            transition-duration: 200ms;
            margin-right: 2px;
            border-radius: 4px;
        }

        &:hover {
            border-left: 2px solid @contrast;
        }
    }
</style>
 
