<template>
    <button class="PrimaryButton">
        <slot></slot>
    </button>
</template>

<style lang="less">
    @import "/public/StyleConfig";

    .PrimaryButton {
        border: none;
        color: @level2;
        padding: 5px 10px;
        min-width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: @brandColor;
        border-radius: 4px;
        cursor: pointer;
        transition-duration: 200ms;
        margin: 10px;
        font-size: 12px;

        &:hover {
            opacity: 80%;
        }
    }
</style>