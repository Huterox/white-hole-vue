<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <br>
    <div class="head" style="width: 90%;margin: 0 auto">

      <el-button style="margin-left:80%" type="primary" plain>清空所有</el-button>

    </div>
    <br>
    <div style="width: 80%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <div  style="width:14%;height: 100%;border-radius: 100px;display:inline-block;">
            <img
              style="width:100%;height: 100%;border-radius: 100px"
              src="/static/temporary/headpic.jpg"
              class="image"
            >
          </div>
          <div style="display:inline-block;margin-left: 5%">
            <p class="message">{{message.from}} 回答了你的问题 &nbsp;&nbsp;<i class="el-icon-question"></i></p>
            <p style="font-weight:bold"
            >
              {{message.answer}}</p>
            <p class="message">
              来自问答：{{message.quiz}}

            </p>
          </div>

          <div style="display:inline-block;margin-left: 20%">
            <p>
              <el-button  icon="el-icon-delete" ></el-button>
            </p>
            <p>
              {{message.data}}
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
  name: "replyMessage",
  data(){
    return{
      total: 999,
      Messages:[
        {"answer":"人家不喜欢你别做舔狗~小伙子","from":"Futerox","quiz":"小姐姐老是不回你信息怎么办","data":"2022-3-27"},
        {"answer":"人家不喜欢你别做舔狗~小伙子","from":"Futerox","quiz":"小姐姐老是不回你信息怎么办","data":"2022-3-27"},
        {"answer":"人家不喜欢你别做舔狗~小伙子","from":"Futerox","quiz":"小姐姐老是不回你信息怎么办","data":"2022-3-27"},
        {"answer":"人家不喜欢你别做舔狗~小伙子","from":"Futerox","quiz":"小姐姐老是不回你信息怎么办","data":"2022-3-27"},
        {"answer":"人家不喜欢你别做舔狗~小伙子","from":"Futerox","quiz":"小姐姐老是不回你信息怎么办","data":"2022-3-27"},

      ]
    }
  },
}
</script>

<style scoped>
.message{
  width: 20em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
