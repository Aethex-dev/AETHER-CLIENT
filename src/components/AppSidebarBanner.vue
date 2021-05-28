<template>
    <div class="AppSidebarBanner">
        <img v-bind:src="src" />
    </div>
</template>

<script>
    export default {
        props: ["src"],
        mounted() {
            $(this.$el).parent().on("scroll", function () {
                $(this).find(".AppSidebarBanner img").css("margin-top", $(this).scrollTop());
                var opacity = 150 - $(this).scrollTop();
                $(this).find(".AppSidebarBanner img").css("opacity", opacity + "%");
            });
        }
    }
</script>

<style lang="less">
    @import "/public/StyleConfig";

    .AppSidebarBanner {
        width: 100%;
        height: 120px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            min-height: 100%;
            min-width: 100%;
        }
    }
</style>