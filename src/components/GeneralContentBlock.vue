<template>
  <div class="GeneralContentBlock">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "/public/StyleConfig";

.GeneralContentBlock {
  background: @level2;
  margin: 20px;
  border-radius: 4px;
  padding: 10px;

  p {
    padding: 10px;
    margin: 0px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    margin: 10px 10px;
  }

  div.center {
    justify-content: center;
    align-items: center;
  }
  div.row {
    display: flex;
    flex-wrap: wrap;
  }

  flex {
    flex: 1 200px;
  }
}
</style>