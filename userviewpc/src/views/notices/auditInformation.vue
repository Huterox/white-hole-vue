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
            <p class="message">{{message.info}}&nbsp;&nbsp;<i class="el-icon-circle-check"></i></p>

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
  name: "auditInformation",
  data(){
    return{
      total: 999,
      Messages:[
        {"info":"文章通过审核","link":"深入解析Spring Bean工厂","data":"2022-3-27"},
        {"info":"提问通过审核","link":"小姐姐老是不回你消息怎么办","data":"2022-3-27"},
        {"info":"回答通过审核","link":"小姐姐老是不回你消息怎么办","data":"2022-3-27"},
        {"info":"评论通过审核","link":"人家不想和你玩，别当舔狗","data":"2022-3-27"},
        {"info":"社区创建通过审核","link":"Futerox社区","data":"2022-3-27"},
        {"info":"push通过","link":"手写SpringMVC三大组件","data":"2022-3-27"},
        {"info":"合并消息","link":"手写SpringMVC三大组件有合并请求","data":"2022-3-27"},
        {"info":"是否收录","link":"有第四权限文章公开是否收录","data":"2022-3-27"},
        {"info":"社区文章发布通知","link":"JVM深入底层","data":"2022-3-27"},
        {"info":"社区成员加入申请","link":"Huterox 请求加入你的社区","data":"2022-3-27"},

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
