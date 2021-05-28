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

            &::-webkit-scrollbar {
                width: 3px;
                height: 3px;
            }
            &::-webkit-scrollbar-track {
                background: @level0;
            }
            &::-webkit-scrollbar-thumb {
                background: @level0;
            } 

            &:hover {
                &::-webkit-scrollbar-thumb {
                    background: @level11;
                }
            }

            .header {
                color: @contrast;
                width: 100%;
                padding: 12px 20px;
                background: @level3;
                position: sticky;
                top: 0px;
                font-family: @mainFont;
                font-size: 13px;

                i {
                    margin-right: 5px;
                    color: @brandColor;
                }
            }
        }
    }
</style>