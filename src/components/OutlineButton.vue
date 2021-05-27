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
        padding: 6px 9px;
        cursor: pointer;
        opacity: 60%;
        transition-duration: 200ms;
        min-width: 80px;
        font-size: 12px;

        &:hover {
            opacity: 100%;
        }
    }
</style>