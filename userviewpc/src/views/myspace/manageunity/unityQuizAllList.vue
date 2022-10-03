
<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <br>
    <div style="width: 80%;margin-left: 1%" class="main">

      <el-form :inline="true">
        <el-form-item >
          <el-input style="width: 300px" placeholder="请输入问答名称" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button >查询</el-button>
        </el-form-item>
      </el-form>

      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">{{message.type}}:{{message.name}}</p>
            <p style="font-weight: lighter; color: #bae88a;" class="message"

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

            </p>

          </div>

          <div  style="width:18%;height: 100%;
          display:inline-block;
          "
          >
            <div style="display: inline-block;width: 48%;height: 100%">
              <el-tooltip content="移除" placement="bottom" effect="light">
                <el-button type="warning" round style="height: 50%;width: 100%;display: inline-block">
                  <i class="el-icon-right"></i>
                </el-button>
              </el-tooltip>
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
  name: "unityQuizAllList",
  data(){
    return{
      total: 1,
      Messages:[

        {"info":"女权无非是行走的50w和表面上以维护女性权益来迷惑女性煽动性别对立获取利益的汉奸后代",
          "type": "回答",
          "name":"如何看待女权",
          "number": 1,"data":"2022-3-27",favorite: 0

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
