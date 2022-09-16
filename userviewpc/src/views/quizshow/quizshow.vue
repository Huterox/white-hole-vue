<template>
<div style="height: 960px;width: 80%;margin: 0 auto">
    <br><br><br>
    <div>
      <div class="show">
  <!--      user-->
        <div style="height:100px">
          <div  style="width:16%;height: 100%;border-radius: 100px;display:inline-block;">
            <img
              style="width:100%;height: 100%;border-radius: 100px"
              src="/static/temporary/headpic.jpg"
              class="image"
            >
          </div>

          <div style="display: inline-block;width: 80%;">
            <div style="height: 50%;width: 100%;display: inline-block">
              <p style="font-family: Microsoft YaHei">Huterox</p>

              <p class="message">简介: 这个人很懒什么也没说...</p>

            </div>
          </div>
        </div>

        <div >
          <br><br>
          <h5>目标检测是如何确定目标框的产生的</h5>
          <h6>详情：</h6>
          <p style="font-family: cursive">将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点
            将一张图片先人为的认为划分N个区域，将其认为是可能出现的目标中心点

            限制一下，500字

          </p>
        </div>
      </div>

      <br><br>
      <div >
        阅读:
        <i class="el-icon-view"></i>
        {{Messages.number}}
        &nbsp;&nbsp;
        收藏:
        <i class="el-icon-star-off"></i>
        {{Messages.collect}}
        &nbsp;
        点赞:
        <i class="el-icon-check"></i>
        {{Messages.favorite}}


          <el-button type="primary" round style="width: 20%;margin-left: 50px;display: inline-block">
            回答<i class="el-icon-edit-outline"></i>
          </el-button>
          <br><br>


      </div>


      <router-link to="/quiz/quizshow"></router-link>

      <router-view></router-view>


    </div>

</div>
</template>

<script>

export default {
  name: "show",
  data(){
    return{

      Messages:
        {"info":"Spring 是一个轻量级的开发框架",
          "name":"Spring 5 核心原理解析",
          "number": 999,"data":"2022-3-27","favorite": 999,
          "collect":100,
        },

    }
  }
}
</script>

<style scoped>
.message{
  width: 25em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}


.show{
  margin: 20px auto;
  width: 100%;

  border: 2px solid #81badc;
  transition: all 0.9s;
  border-radius: 10px;

}
.show:hover{
  box-shadow: 0px 5px 15px rgba(83, 194, 199, 0.4);

}
</style>
