<template>
<div style="width: 85%;margin: 0 auto">

  <el-container>
    <el-container>
      <el-aside width="10%">
        <div>
          <br><br>
          <div>
            <el-badge :value="11" class="item" type="primary">
              <el-button size="big" icon="el-icon-check"></el-button>
            </el-badge>
          </div>
          <br>
          <div>
            <el-badge :value="11" class="item" type="primary">
              <el-button size="big" icon="el-icon-star-off"></el-button>
            </el-badge>
          </div>
          <br>
          <div>
            <el-badge :value="12" class="item" type="primary">
              <el-button size="big" icon="el-icon-chat-dot-square"></el-button>
            </el-badge>
          </div>
          <br>
          <div>
            <el-badge :value="12" class="item" type="primary">
              <el-button size="big" icon="el-icon-upload2"></el-button>
            </el-badge>
          </div>
          <br>

          <div>
              <el-button class="share-button" icon="el-icon-share" type="primary" plain></el-button>
          </div>
          <br>
          <div>
            <el-button class="share-button"  type="primary" plain>Fork</el-button>
          </div>
          <br>
          <div>
            <el-button @click="goMerge" type="primary" plain >
              <span>合并</span>
            </el-button>
          </div>

        </div>
      </el-aside>
      <el-main>
          <div style="width: 100%" class="show">
            <div style="width: 96%;margin: 0 auto">
            <p style="font-size: 20px;font-family: 幼圆;font-weight: bold">WhiteHole项目</p>
              <div style="height:100px">
<!--                <el-avatar shape="circle" style="display:inline-block;"-->
<!--                            :size="100" src="/static/temporary/headpic.jpg">-->

<!--                </el-avatar>-->
                <div  style="width:13%;height: 100%;border-radius: 100px;display:inline-block;">
                  <img
                    style="width:100%;height: 100%;border-radius: 100px"
                    src="/static/temporary/headpic.jpg"
                    class="image"
                  >
                </div>
                <div style="display:inline-block;margin-left: 5%;vertical-align:top">
                  <p>Huterox</p>
                  <p class="message">
                    2022年10月01日 10:37 ·  阅读 4296
                  </p>
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <div style="display:inline-block;vertical-align:top">
                  <p>
                    <el-button @click="focusOn"  v-if="focusOnFlag===false" icon="el-icon-plus" type="primary" plain >
                      <span>关注</span>
                    </el-button>
                    <el-button @click="focusOn"  v-else icon="el-icon-check" type="primary" plain >
                      <span>已关注</span>
                    </el-button>
                  </p>
                </div>

              </div>
            </div>
        </div>
<!--         文章的主体内容，这部分的话应该是markdown插件去渲染的-->
        <div class="showblog">
          <hr style="margin:0px;background-color:#eee;height:0.5px;border:none;" />
          <div style="width: 96%;margin: 0 auto">
            <div class="stackedit__html"><h1><a id="WhiteHole_0"></a>WhiteHole</h1>
              <p>whitehole是一个由Huterox团队开发的致力于社区交流，知识共享的社区交流平台。同时也是Huterox本人用于技术成长的中型项目。</p>
              <h1><a id="_4"></a>期望</h1>
              <p>我们希望这个项目是最终用于上线的WhiteHole项目，本次将采用符合企业的开发的标准流程进行开发，并作为用于记录成长的开源项目。我们期望这个项目将成为一个合格的基于分布式的优秀项目，未来也期望得益于分布式架构，我们将集成人工智能模块，完成完整的用户推荐系统，流量检测分析，AI用户检测行为检测等。最后本团队Huterox希望能够在大三学期末完成基本功能构建并上线。同时也希望和别的小伙伴一起努力去经营这个项目。</p>
              <h1><a id="_8"></a>立项</h1>
              <p>本项目从Huterox在大学本科阶段二年级就开始筹划，技术栈从基于Python的Django体系至基于SpringBoot+vue的体系，到如今的基于分布式微服务构建的体系。当前历经了3个技术版本的迭代，前两次均为技术验证，本次为第三次，目标为上线。</p>
              <p>不同版本之间的区别如下：</p>
              <ol>
                <li>
                  <p>Django版本，基于Python 采用MVT设计模式，纯原生html css js开发<br>
                    项目地址：<a href="https://gitee.com/Huterox/WhiteHole">https://gitee.com/Huterox/WhiteHole</a></p>
                </li>
                <li>
                  <p>SpringBoot+vue 版本，采用前后端分离模式设计，主要亮点在于前端。<br>
                    项目地址：<a href="https://github.com/Huterox/WhiteHoleBoot">https://github.com/Huterox/WhiteHoleBoot</a></p>
                </li>
                <li>
                  <p>当前版本，使用分布式架构并将结合多种算法用于网站体验，同时将推出小程序，安卓，ios端。<br>
                    项目地址（前端）：<a href="https://gitee.com/Huterox/white-hole-vue">https://gitee.com/Huterox/white-hole-vue</a><br>
                    项目地址（后端）：<a href="https://gitee.com/Huterox/white-hole-cloud">https://gitee.com/Huterox/white-hole-cloud</a></p>
                </li>
              </ol>
              <h1><a id="_23"></a>作者</h1>
              <p>Huterox</p>
              <p>csdn地址：<a href="https://blog.csdn.net/FUTEROX">https://blog.csdn.net/FUTEROX</a><br>
                邮箱： 3139541502@qq.com<br>
                掘金地址： <a href="https://juejin.cn/user/2542529912789694">https://juejin.cn/user/2542529912789694</a></p>
            </div>
          </div>

        </div>
        <!--          评论部分-->
        <div class="showcom">
          <comment_article></comment_article>
        </div>

      </el-main>
      <el-aside width="25%" style="height: 600px" class="el-aside-right">

        <div class="show">
          <p>
            <el-tooltip content="参与文章Pull，并通过作者审核后可上榜" placement="bottom" effect="light">
              <el-button icon="el-icon-trophy" type="primary" round size="big">贡献墙</el-button>
            </el-tooltip>
          </p>
          <div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <el-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
            <el-avatar src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-avatar>
          </div>
        </div>
          <div class="show">
            <p>日志</p>
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
                {{message.content}}
              </el-timeline-item>
            </el-timeline>
          </div>

      </el-aside>
    </el-container>
  </el-container>

</div>
</template>

<script>
import comment_article from "../../components/comment/comment_article";
export default {
  name: "blogshow",
  components:{
    comment_article
  },
  data(){
    return{
      focusOnFlag:false,
      long: 2,
      Message: [
        {
          //颜色由后端传递
          content: 'Huterox 修改了博文',
          data: '2022-10-2',
          color:'#0f6cc9'
        }, {
          content: 'Dx pull了博文',
          data: '2022-05-02',
          color:'#69d3b4'
        },
        {
          content: 'Huterox 修改博文',
          data: '2022-05-01',
          color:'#69d3b4'
        },
        {
          content: 'Huterox 修改博文',
          data: '2022-05-01',
          color:'#69d3b4'
        },
        {
          content: 'Huterox 修改博文',
          data: '2022-05-01',
          color:'#69d3b4'
        },
      ],
    }
  },
  methods:{
    goMerge(){

      this.$router.push({path:'/blogshowMerge',query: {id:'1'}})
    },
    focusOn(){
      this.focusOnFlag=!this.focusOnFlag;
      if(this.focusOnFlag){
        alert("关注成功")
      }else {
        alert("取关成功")
      }

    },

    load () {
      //这部分让你的axios去动态加载
      let temp=[
        {
          content: '加载了',
          data: '2022-03-27',
        },
        {
          content: '加载了',
          data: '2022-03-27',
        }

      ]
      for (let i = 0; i < temp.length; i++) {
        this.Message.push(temp[i])
      }

    },
  }
}
</script>

<style  lang="stylus" scoped>
.show{
  margin: 20px auto;
  width: 90%;

  border: 0px solid #81badc;
  transition: all 0.9s;
  border-radius: 10px;

}
.show:hover{
  box-shadow: 0px 15px 30px rgb(12, 132, 224);
  margin-top: 10px;

}

.showblog{
  margin: 20px auto;
  width: 100%;

  border: 0px solid #81badc;
  transition: all 0.9s;
  border-radius: 10px;

}
.showblog:hover{
  box-shadow: 0px 15px 30px rgb(12, 132, 224);
  margin-top: 10px;

}

.showcom{
  margin: 20px auto;
  width: 100%;

  border: 0px solid #81badc;
  transition: all 0.9s;
  border-radius: 10px;

}
.showcom:hover{
  box-shadow: 0px 15px 30px rgb(12, 132, 224);
  margin-top: 20px;

}
.el-header, .el-footer {

  text-align: center;
}

.el-aside-right {
  background-color:#f9fafc;
  color: #333;
  text-align: center;
  line-height: 30px;
}

.el-main {
  background-color: white;
  color: #333;

}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
