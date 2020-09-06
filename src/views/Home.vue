<template>
  <div class="home">
    <div class="side">
      <ul>
        <li><router-link :to='{name:"index"}'>首页</router-link></li>
        <li><router-link :to='{name:"sun"}'>日出日落</router-link></li>
        <li><router-link :to='{name:"line"}'>折线图</router-link></li>
        <li><router-link :to='{name:"pie"}'>饼状图</router-link></li>
        <li><router-link :to='{name:"RichText"}'>富文本</router-link></li>
        <li><router-link :to='{name:"Sunburst"}'>旭日图</router-link></li>
        <li><router-link :to='{name:"PictorialBar"}'>象形柱图</router-link></li>
        <li><router-link :to='{name:"Gauge"}'>仪表盘</router-link></li>
        <li><router-link :to='{name:"city3d"}'>3D城市</router-link></li>
        <li><router-link :to='{name:"Globe3d"}'>3D地球</router-link></li>
        <li><router-link :to='{name:"Music"}'>跳动音频</router-link></li>
      </ul>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">
  .home{
    display: flex;
    height: 100%;
  }
  .side{
    width: 240px;
    height: 700px;
    background: #2d2d36;
    li{
      padding-left: 50px;
      line-height: 60px;
      a.router-link-active {
        color: orangered;
      }
      a:hover{
        color: #00ff00;
      }
    }

  }
  .content{
    width: calc(100vw - 200px);
    height: 700px;
    background-color: skyblue;
    & > div{
      width: 100%;
      height: 100%;
    }
  }
</style>

<script>


export default {
  name: "Home",
  components: {

  }
};
</script>
