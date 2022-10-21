<template>
  <div style="width: 95%;margin: 0 auto">
    <vue-particles
      class="login-background"
      color="#97D0F2"
      :particleOpacity="0.7"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#97D0F2"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.8"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push">
    </vue-particles>
    <el-container >
      <el-main class="show" style="height: 600px;z-index: 1">
        <div>
          <span>当前内容</span>
          <span style="margin-left: 43%">提交内容</span>
        </div>
        <div>
          <code-diff :old-string="oldStr"
                     :new-string="newStr" :context="10"
                     outputFormat="side-by-side"
                     diffStyle="word"
          />
        </div>

        <div>
          <el-tooltip content="确定合并后将跳转至文章编辑页面，可进一步修改" placement="bottom" effect="light">
            <el-button @click="submit"
                       plain type="primary" round
                       style="margin-left: 90%"
            >
              确定合并
            </el-button>
          </el-tooltip>
        </div>
      </el-main>
      <el-aside width="25%" style="height: 600px" class="show">

          <p>Pull</p>
          <el-timeline v-if="Message.length>0" v-infinite-scroll="load"
                       v-bind:infinite-scroll-distance="long"
                       infinite-scroll-disabled="busy"
                       class="infinite-list">
            <el-timeline-item
              v-for="(message, index) in Message"
              :key="index"
              :color=message.color
              :timestamp="message.data"
            >
              <el-button @click="loadContent(message.contentID)"  type="primary" plain>
                <el-avatar :src="message.userpic"></el-avatar>
                contentID:<span style="font-size: smaller;color: #00c4ff">{{message.contentID}}</span>
              </el-button>
            </el-timeline-item>
          </el-timeline>
      </el-aside>

    </el-container>
  </div>
</template>
<script>
export default {
  name: "blogshowMerge",
  data() {
    return {
      oldStr: '这里是测试数据\n用于测试',
      newStr: '',
      long: 2,
      Message: [
        {
          //颜色由后端传递
          contentID: 'asdasds',
          userpic: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          data: '2022-10-2',
          color:'#28c90f'
        }, {
          contentID: 'sadaasd',
          userpic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          data: '2022-05-02',
          color:'#e5d681'
        },

      ],
    }
  },
  methods:{
    submit(){
      alert("即将进入博文编辑页面微调")
      this.$router.push({path:'/writeblog',query: {id:'1'}})
    },
    loadContent(val){
    //  先去服务端获取到内容，然后给到这里
      this.newStr="模拟是服务端获取到的Pull内容"+val;
    },
    load () {
      //这部分让你的axios去动态加载
      // let temp=[
      //   {
      //     content: '加载了',
      //     data: '2022-03-27',
      //   },
      //   {
      //     content: '加载了',
      //     data: '2022-03-27',
      //   }
      //
      // ]
      // for (let i = 0; i < temp.length; i++) {
      //   this.Message.push(temp[i])
      // }

    },
  },
}
</script>

<style scoped>
.login-background {
  width: 96%;
  margin: 0 auto;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: 0;
  position: absolute;
}
.show{

  width: 90%;

  border: 0px solid #81badc;
  transition: all 0.9s;
  border-radius: 10px;

}
.show:hover{
  box-shadow: 0px 15px 30px rgb(12, 132, 224);
  margin-top: 10px;

}

</style>
