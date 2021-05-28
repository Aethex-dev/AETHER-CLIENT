<template>
    <div class="FormInput">
        <label v-if="type == 'text'" class="type-text">
            <span class="label">
                <span class="title">{{ label }}</span>
            </span>

            <input v-bind:name="name" v-bind:placeholder="placeholder" />
        </label>

        <label v-if="type == 'password'" class="type-text">
            <span class="label">
                <span class="title">{{ label }}</span>
            </span>

            <input type="password" v-bind:name="name" v-bind:placeholder="placeholder" />
        </label>
    </div>
</template>

<script>
    export default {
        props: ["type", "placeholder", "label", "name"]
    }
</script>

<style lang="less">
    @import "/public/StyleConfig";

    .FormInput {
        display: flex;
        margin: 10px 0px;
        .type-text {
            width: 100%;
            display: flex;
            flex-direction: column;

            .label {
                margin-bottom: 5px;
                width: 100%;

                span {
                    font-size: 11px;
                }
            }

            input {
                background: @level3;
                transition-duration: 200ms;
                padding: 6px 20px;
                color: @contrast;
                border-radius: 4px;
                border: 1px solid @level3;
                width: calc(100vw - 80px);
                max-width: 430px;
                display: flex;

                &:hover {
                    background: @level4;
                }

                &:focus {
                    background: @level0;
                    border-color: @level7;
                }
            }
        }
    }
</style>