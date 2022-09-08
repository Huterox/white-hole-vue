<template>
  <div style="background-color: white">
    <br>

    <br>
    <div style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <div  style="width:14%;height: 100%;border-radius: 100px;display:inline-block;">
            <img
              style="width:100%;height: 100%;border-radius: 100px"
              v-bind:src="message.image"
              class="image"
            >
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">{{message.name}}</p>
            <p style="font-weight: lighter;color: #3e71be" class="message"

            >
              {{message.type}}: &nbsp;{{message.info}}

            </p>
            <p class="message">
              阅读：
              <i class="el-icon-view"></i>
              {{message.number}}
              &nbsp;&nbsp;
              收藏：
              <i class="el-icon-star-off"></i>
              {{message.favorite}}
            </p>

          </div>

          <div  style="width:18%;height: 100%;
          display:inline-block;
          "
          >

            <p style="text-align: center">{{message.data}}</p>
            <br><br>
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
  name: "quizFriend",
  data(){
    return{
      total: 3,
      Messages:[
        {
          "type":"提问",
          "info":"如何提高Java水平",
          "name":"Huterox",
          "number": 999,"data":"2022-3-27",favorite: 999,
          "image": "/static/temporary/headpic.jpg"
        },
        {
          "type":"回答",
          "info":"如何提高Java水平",
          "name":"莫颜",
          "number": 999,"data":"2022-3-27",favorite: 9,
          "image": "/static/temporary/showbg.jpg"
        },
        {
          "type":"提问",
          "info":"如何拒接追求你的小姐姐",
          "name":"Huterox",
          "number": 999,"data":"2022-3-27",favorite: 999,
          "image": "/static/temporary/showbg1.jpg"
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
</style>
