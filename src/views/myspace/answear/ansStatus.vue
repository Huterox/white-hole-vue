
<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <br>

    <br>
    <div style="width: 80%;margin-left: 1%" class="main">
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
              <el-button type="warning" round style="height: 50%;width: 100%;display: inline-block">
                <i class="el-icon-delete"></i>
              </el-button>
              <br><br><br>
            </div>

            <div style="display: inline-block;width: 48%;height: 100%">
              <el-button type="primary" round style="height: 50%;width: 100%;display: inline-block">
                <i class="el-icon-edit-outline"></i>
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
  name: "ansStatus",
  data(){
    return{
      total: 2,
      Messages:[
        {"info":"审核通过",
          "type":"提问",
          "name":"大学生应该如何自学",
          "number": 2,"data":"2022-3-27",favorite: 0

        },
        {"info":"审核未通过，回答过于偏激，不过小编支持",
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
