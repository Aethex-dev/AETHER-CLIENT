<template>
    <div class="Modal">
        <div @click="close();" class="backdrop"></div>

        <div class="window">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            close() {
                $(this.$el).removeClass("visible");
            },
            show() {
                $(this.$el).addClass("visible");
            }
        }
    }
</script>

<style lang="less">
    @import "/public/StyleConfig";

    .Modal {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: 0%;
        transition-duration: 200ms;
        pointer-events: none;

        &.visible {
            opacity: 100%;
            pointer-events: initial;
        }

        .backdrop {
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 30%;
        }

        .window {
            background: @level2;
            position: fixed;
            top: 40vh;
            transition-duration: 200ms;
            left: 50vw;
            transform: translate(-50%, -50%);
            min-width: 230px;
            max-width: 470px;
            width: fix-content;
            border-radius: 4px;
            width: calc(100vw - 40px);

            .header {
                padding: 12px 20px;
                color: @contrast;
                font-family: @mainFont;
                font-size: 13px;
                width: 100%;
            }

            .body {
                color: @contrast;
                width: fit-content;
                font-size: 13px;
                font-family: @mainFont;
            }

            .footer {
                display: flex;
                justify-content: flex-end;
                width: 100%;
            }
        }

        &.visible {
            .window {
                top: 50vh;
            }
        }
    }
</style>