<template>
  <div class="GeneralFooter">
    <div class="blocks">
      <slot></slot>
    </div>

    <div class="copyright">
      <span>{{ copyright }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["copyright"],
};
</script>

<style lang="less">
@import "/public/StyleConfig";

.GeneralFooter {
  width: 100%;
  border-top: 40px solid @level3;
  background: @level2;

  .blocks {
    padding: 0px 10px;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 0;

    & > div {
      display: flex;
      flex-direction: column;
      flex: 1 250px;

      h1 {
        color: @contrast;
        font-family: @mainFont;
        font-size: 15px;
        font-weight: lighter;
        margin: 10px;
      }

      span {
        padding: 10px;
        color: @contrast;
        opacity: 60%;
        font-family: @mainFont;
        font-size: 12px;
      }

      .links {
        display: inline-flex;
        flex-direction: column;
        padding: 10px 0px;
        flex-grow: 0;

        a {
          color: @contrast;
          transition-duration: 200ms;
          text-decoration: none;
          font-size: 12px;
          font-family: @mainFont;
          opacity: 60%;
          padding: 10px 0px;
          border-bottom: 1px solid @level5;
          margin: 0px 10px;

          &:hover {
            opacity: 100%;
          }
        }
      }
    }
  }

  .copyright {
    padding: 15px 0px;
    margin: 10px 20px 0px 20px;
    color: @contrast;
    font-family: @mainFont;
    font-size: 12px;
    border-top: 1px solid @level7;
  }
}
</style>