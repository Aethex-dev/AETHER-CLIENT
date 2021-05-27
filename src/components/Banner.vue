<template>
    <div class="banner">
        <img v-bind:src="src">
        <div class="cover"></div>

        <div class="text">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["src"],
        mounted() {
            $("div").on("scroll", function () {
                var opacity = 60;

                $(this).find(".banner img").css("margin-top", $(this).scrollTop() / 2);
                if ($(this).scrollTop() > 60) {
                    opacity = $(this).scrollTop();
                } else {
                    opacity = 60;
                }

                $(this).find(".banner .cover").css("opacity", opacity + "%");
            });
        }
    }
</script>

<style lang="less">
    @import "/public/StyleConfig";

    .banner {
        width: 100%;
        height: 300px;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .cover {
            position: absolute;
            background: @level1;
            width: 100%;
            height: 100%;
            opacity: 60%;
        } 

        img {
            width: 100%;
            min-height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            align-items: center;
        }

       .text {
           position: absolute;
           top: 0px;
           left: 0px;
           width: 100%;
           height: 100%;
           display: flex;
           justify-content: center;
           align-items: center;
           flex-direction: column;

           h1 {
               color: @brandColor;
               font-size: 60px;
               font-family: @logoFont;
               letter-spacing: 3px;
               margin: 10px 0px;
               font-weight: lighter;
           }

           span {

           }
       }
    }
</style>