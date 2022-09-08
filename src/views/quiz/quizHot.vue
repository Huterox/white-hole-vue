
<template>
  <div style="width: 100%">
    <br>
    <br>
    <div style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">

          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold" >
              <router-link to="/quiz/quizshow">
                {{message.name}}
              </router-link>
            </p>
            <p style="font-weight: lighter;color: #dc3838" class="message"

            >
              {{message.info}}

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
  name: "quizHot",
  data(){
    return{
      total: 9,
      Messages:[
        {"info":"为什么中国会出现女拳",
          "name":"女拳主义如何打击",
          "number": 999,"data":"2022-3-27",favorite: 999
        },
        {"info":"Java与Python如何取舍",
          "name":"会Java还要不要Python",
          "number": 999,"data":"2022-3-27",favorite: 999
        },
        {"info":"Spring 是一个轻量级的开发框架，我要对它复现",
          "name":"造轮子的重要性",
          "number": 999,"data":"2022-3-27",favorite: 999
        },
        {"info":"小白一枚，不知道如何准备",
          "name":"数学建模如何准备",
          "number": 999,"data":"2022-3-27",favorite: 999
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
