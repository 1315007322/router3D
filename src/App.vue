<template>
  <div id="app">
    <div class="header">
      <ul>
        <li><a href="javascript:;">HOME</a></li>
        <li><a href="javascript:;">登录</a></li>
        <li><a href="javascript:;">注册</a></li>
        <li><a href="javascript:;">用户</a></li>
      </ul>
    </div>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">

  .header{
    height: 60px;
    background-color: #151c31;
    box-shadow: 0 1px 2px #999;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ul{
      display: flex;
      color: #57697e;
      li{
        width: 60px;
        height: 26px;
        line-height: 26px;
        font-size: 13px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.3);
        margin-right: 16px;
      }
    }
  }

</style>

<script>
  import "./assets/resrt.css"

  export default {
    name: 'App'
  }
</script>