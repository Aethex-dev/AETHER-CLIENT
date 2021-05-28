<template>
    <div class="AppSidebar">
        <slot></slot>
    </div>
</template>

<style lang="less">
    @import "/public/StyleConfig";

    .AppSidebar {
        width: 310px;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;

        .left {
            height: 100vh;
            width: 60px;
            background: @level3;
            position: fixed;
            left: 0px;
            top: 0px;
        }

        .right {
            background: @level2;
            width: 250px;
            height: 100vh;
            position: fixed;
            top: 0px;
            left: 60px;
            overflow-y: auto;

            .header {
                color: @contrast;
                width: 100%;
                padding: 12px 20px;
                background: @level3;
                position: sticky;
                top: 0px;
                font-family: @mainFont;
                font-size: 13px;
            }
        }
    }
</style>