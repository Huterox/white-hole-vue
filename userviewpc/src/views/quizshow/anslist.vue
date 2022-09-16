
<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <br>

    <br>
    <div style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <div  style="width:18%;height: 100%;border-radius: 100px;display:inline-block;">
            <img
              style="width:100%;height: 100%;border-radius: 100px"
              src="/static/temporary/headpic.jpg"
              class="image"
            >
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">

              <router-link class="alink" to="/blogshowingme">
                {{message.name}}
              </router-link>

            </p>
            <p style="font-weight: lighter" class="message"

            >
              <router-link  class="alink1" to="/quiz/quizshow/ansshowinfo">
              {{message.data}} 回答了该问题
              </router-link>
            </p>
            <p class="message">
              阅读：
              <i class="el-icon-view"></i>
              {{message.number}}
              &nbsp;&nbsp;
              收藏：
              <i class="el-icon-star-off"></i>
              {{message.favorite}}
              &nbsp;&nbsp;
              <i>点赞:{{message.collect}}</i>
            </p>

          </div>

        </div>
        <br>
      </el-card>
    </div>
    <br>
    <div class="footer" style="margin: 0 auto;width: 100%;">
      <div class="block" >
        <el-pagination
          background
          layout="total, prev, pager, next, jumper"
          :total=total>
        </el-pagination>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "anslist",
  data(){
    return{
      total: 999,
      Messages:[
        {
          "name":"Huterox",
          "number": 999,"data":"2022-3-27","favorite": 999,
          "collect": 2
        },
        {
          "name":"Duterox",
          "number": 999,"data":"2022-3-27","favorite": 999,
          "collect": 2
        },


      ]
    }
  },
}
</script>

<style scoped>
.message{
  width: 25em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.alink{

  text-decoration: none;
  color: #333333;

}
.alink1{

  text-decoration: none;
  color: deepskyblue;

}

</style>
