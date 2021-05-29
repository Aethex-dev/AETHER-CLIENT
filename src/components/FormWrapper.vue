<template>
  <form class="FormWrapper">
    <slot></slot>
  </form>
</template>

<style lang="less">
@import "/public/StyleConfig";

.FormWrapper {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  padding: 10px 20px;
  width: 100%;
  max-width: 470px;
}
</style>