<template>
    <div class="Modal">
        <div class="backdrop"></div>

        <div class="window">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            close() {
                console.log("uwu");
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

        .backdrop {
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 30%;
        }

        .window {
            background: @level2;
            position: fixed;
            top: 50vh;
            left: 50vw;
            transform: translate(-50%, -50%);
            min-width: 230px;
            max-width: 450px;
            border-radius: 4px;
            width: 100vw;

            @media (max-width: 470px) {
                width: calc(100vw - 40px);
            }

            .header {
                padding: 12px 20px;
                color: @contrast;
                font-family: @mainFont;
                font-size: 13px;
                width: 100%;
            }

            .body {
                padding: 10px 20px;
                color: @contrast;
                width: 100%;
                font-size: 13px;
                font-family: @mainFont;
            }

            .footer {
                display: flex;
                justify-content: flex-end;
                width: 100%;
            }
        }
    }
</style>