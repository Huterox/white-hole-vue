
<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <div style="width: 80%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">

          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">
              <router-link class="alink" to="/quiz/quizshow">
                {{message.name}}
              </router-link>
            </p>
            <p style="font-weight: lighter;color: #46433b" class="message"

            >
              {{message.info}}

            </p>
            <br>

          </div>

          <div  style="width:18%;height: 100%;
            display:inline-block;
          "
          >
            <div style="display: inline-block;width: 50%;margin-top: 20%;margin-left: 24%">
              <el-button type="warning" round style="height: 50%;width: 100%;display: inline-block">
                <i class="el-icon-delete"></i>
              </el-button>
              <br><br>
            </div>
            <p style="text-align: center;">{{message.date}}</p>
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
  name: "collectionColums",
  data(){
    return{
      total: 2,
      Messages:[
        {"name":"Java社区",
          "info":"这是一个Java大神进入的社区",
          "date": "2022-5-1"
        },
        {"name":"Python社区",
          "info":"这个是Python“大屌”才能去的社区",
          "date": "2022-5-1"
        },
      ]
    }
  },
}
</script>

<style scoped>
.message{
  width: 30em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.alink{

  text-decoration: none;
  color: #333333;
}
</style>
