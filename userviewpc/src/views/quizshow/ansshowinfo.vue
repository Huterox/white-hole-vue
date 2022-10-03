<template>
<div class="showansinfo">
  <div >
      <!--      user-->
    <br>
      <div style="height:100px">
        <div  style="width:16%;height: 100%;border-radius: 100px;margin: 0 auto">
          <img
            style="width:100%;height: 100%;border-radius: 100px"
            src="/static/temporary/showbg1.jpg"
            class="image"

          >
          <p style="font-family: Microsoft YaHei;
          margin: 0 auto;text-align: center">
            Huterox
          </p>
        </div>
      </div>

      <br>
      <br>
<!--    这个是我们的回答的具体内容-->
      <div>
        <div style="width: 96%;margin: 0 auto">
          <p style="font-family: cursive">
          这部分主要是这样的。

          首先咱们还是已经知道了，咱们有96个边框，并且我们知道了每一个cell 不同类别的条件概率。

          例如我们预测上面的那个小姐姐。我这里以三个类别举个例子。
          那么按照咱们的假设就是输出 7 x 7 x 13 的样子。

          那么我们怎么处理呢，首先是先对这个边框 bounding box
        </p>
        </div>
      </div>
  </div>

  <div>
    <div style="width: 96%;margin: 0 auto">
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

      <br><br>
    </div>
  </div>
  <br><br>
  <div class="show">
    <comment_ans></comment_ans>
  </div>
</div>
</template>

<script>
import comment_ans from "../../components/comment/comment_ans";
export default {
  name: "ansshowinfo",
  components: {
    comment_ans
  },
  data(){
    return{

      Messages:
        {"info":"Spring 是一个轻量级的开发框架",
          "name":"Spring 5 核心原理解析",
          "number": 999,"data":"2022-3-27","favorite": 999,
          "collect":100,
        },

    }
  },
}
</script>

<style scoped>
.showansinfo{
  margin: 20px auto;
  width: 100%;

  border: 0px solid #81badc;
  transition: all 0.9s;
  border-radius: 10px;

}
.showansinfo:hover{
  box-shadow: 0px 15px 30px rgb(12, 132, 224);
  margin-top: 10px;

}
</style>
