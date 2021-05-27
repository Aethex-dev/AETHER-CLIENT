<template>
    <div class="sidebar">
       <slot></slot>
    </div>
</template>

<style lang="less" scoped>
    @import "/public/StyleConfig";

    .sidebar {
        .left {
            width: 50px;
            height: calc(100vh - 50px);
            background: @level3;
            position: fixed;
            top: 50px;
            left: 0px;

            .server-guild-button {
                margin-top: 10px;
            }
        }
    }
</style>