
<template>
  <div style="background-color: rgba(239,250,246,0.53)">
    <br>
    <div style="width: 80%;margin-left: 1%" class="main">
      <el-form :inline="true">
        <el-form-item >
          <el-input style="width: 300px" placeholder="请输入为问题名称" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>查询</el-button>
        </el-form-item>
      </el-form>
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
            <p class="message">{{message.from}} 回答问题：</p>
            <p style="font-weight:bold"
            >
              {{message.answer}}</p>
            <p class="message">
              来自问答：{{message.quiz}}

            </p>
          </div>

          <div style="display:inline-block;margin-left: 20%">
            <p>
              <el-tooltip content="进入问答审查内容，审查结束后返回点击此按钮设置生成状态" placement="bottom" effect="light">
                <el-button type="success" @click="dialogVisible = true"
                           round style="height: 50%;width: 100%;display: inline-block"
                >
                  <i class="el-icon-coordinate"></i>
                </el-button>
              </el-tooltip>
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

    <el-dialog
      title="Tips"
      :visible.sync="dialogVisible"
      width="25%"
    >
      <p style="text-align: center">是否选择加入至社区中</p>
      <span slot="footer" class="dialog-footer">
        <el-button style="margin-right: 40%" @click="dialogVisible = false" type="warning">移 除</el-button>
        <el-button type="success" style="margin-right: 6%" @click="dialogVisible = false" >确 定</el-button>
      </span>
    </el-dialog>

  </div>


</template>

<script>
export default {
  name: "unityQuizAnsJoinList",
  data(){
    return{
      dialogVisible: false,
      total: 999,
      Messages:[
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
