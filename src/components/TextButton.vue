<template>
    <button class="TextButton">
        <slot></slot>
    </button>
</template>

<style lang="less">
    @import "/public/StyleConfig";

    .TextButton {
        border: none;
        padding: 10px;
        background: @level0;
        color: @contrast;
        font-family: @mainFont;
        font-size: 13px;
        transition-duration: 200ms;
        opacity: 60%;
        cursor: pointer;

        &:hover {
            opacity: 100%;
        }
    }
</style>