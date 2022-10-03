
<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <br>

    <br>
    <div style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <br>
          <div  style="width:12%;height: 100%;border-radius: 100px;display:inline-block;">
            <img
              style="width:100%;height: 100%;border-radius: 100px"
              v-bind:src=message.image
              class="image"
            >
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">

              <router-link class="alink" to="/unityshow">
                {{message.name}}
              </router-link>

            </p>
            <p style="font-weight: lighter;color: #46433b" class="message"

            >
              {{message.info}}

            </p>

          </div>


          <div  style="width:18%;height: 100%;
          display:inline-block;
          "
          >

            <div style="display: inline-block;width: 70%;height: 100%">

              <el-button type="primary" round style="height: 50%;width: 100%;display: inline-block">
                <i class="el-icon-sugar">加入</i>

              </el-button>
              <br><br><br>
            </div>
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
  name: "userunityList",
  data(){
    return{
      total: 2,
      Messages:[
        {"name":"地平线压弯社区",
          "info":"大家一起学习讨论与地平线压弯相关的技术",
          "image":"/static/temporary/showbg.jpg"
        },
        {"name":"虚幻4交流社区",
          "info":"欢迎来到虚幻4社区",
          "image":"/static/temporary/showbg1.jpg"
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
