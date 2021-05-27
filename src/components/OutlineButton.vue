<template>
    <button class="OutlineButton">
        <slot></slot>
    </button>
</template>

<style lang="less">
    @import "/public/StyleConfig";

    .OutlineButton {
        border-radius: 4px;
        background: @level0;
        color: @contrast;
        font-family: @mainFont;
        font-size: 13px;
        border: 1px solid @level9;
        padding: 3.5px 8px;
        cursor: pointer;
        margin: 10px;
        opacity: 60%;
        transition-duration: 200ms;
        min-width: 80px;
        font-size: 12px;

        &.large {
            padding: 10.5px 20px;
            min-width: 120px;
        }

        &.ex-large {
            padding: 13.5px 30px;
            min-width: 200px;
            font-size: 14px;
        }

        &:hover {
            opacity: 100%;
        }

        &:active {
            background: fade(@contrast, 2%);
            opacity: 100%;
        }
    }
</style>