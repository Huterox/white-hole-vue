<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <br>
    <div class="head" style="width: 90%;margin: 0 auto">

      <el-button style="margin-left:80%" type="primary" plain>清空所有</el-button>

    </div>
    <br>
    <div style="width: 80%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:80px">

          <div style="display:inline-block;margin-left: 5%">
            <p class="message">{{message.info}} &nbsp;&nbsp;
              <i class="el-icon-s-opportunity"></i></p>

            <p class="message">
              查看详情：{{message.link}}

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
  name: "activeMessage",
  data(){
    return{
      total: 1,
      Messages:[
        {"info":"社区改版通知","link":"WhiteHoleV0.7即将发布啦~","data":"2022-3-27"},

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
