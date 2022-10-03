<template>
  <div>
    <el-container style="height: 600px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: white">
        <el-menu :default-openeds="['1']">

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-postcard"></i>信息修改</template>
            <el-menu-item-group>

              <router-link class="alink" to="/myspace/showinfo">
                <el-menu-item index="1-1">
                  基本信息
                </el-menu-item>

              </router-link>

              <router-link class="alink" to="/myspace/infoeditor">
                <el-menu-item index="1-2">
                  信息修改
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace/imageUp">
                <el-menu-item index="1-3">

                  头像修改

                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace/countcontrol">
                <el-menu-item index="1-4">

                    账号管理

                </el-menu-item>
              </router-link>


            </el-menu-item-group>

          </el-submenu>


          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-postcard"></i>文章管理</template>
            <el-menu-item-group>
              <router-link class="alink" to="/myspace/privateAarticle">
                <el-menu-item index="2-1">
                  私密文章
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace/forkArticle">
                <el-menu-item index="2-2">
                  Fork文章
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace">
                <el-menu-item index="2-3">
                  全部文章
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace/columnArticle">
                <el-menu-item index="2-4">
                  我的专栏
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace/statusArticle">
                <el-menu-item index="2-5">
                  审核状态
                </el-menu-item>
              </router-link>
            </el-menu-item-group>

          </el-submenu>


          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-postcard"></i>问答管理</template>
            <el-menu-item-group>
              <router-link class="alink" to="/myspace/myQue">
                <el-menu-item index="3-1">
                  我的提问
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace/myAns">
                <el-menu-item index="3-2">
                  我的回答
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace/ansStatus">
                <el-menu-item index="3-3">
                  审核状态
                </el-menu-item>
              </router-link>
            </el-menu-item-group>

          </el-submenu>



          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>文章书写
            </template>
            <el-menu-item-group>
              <router-link class="alink" to="/writeblog">
                <el-menu-item index="3-1">
                  文章书写
                </el-menu-item>
              </router-link>
            </el-menu-item-group>

          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-postcard"></i>社区</template>

            <el-menu-item-group>

              <router-link class="alink" to="/myspace/myjoincolums">
                <el-menu-item index="5-1">
                  已经加入
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace/mycolums">
                <el-menu-item index="5-2">
                  社区管理
                </el-menu-item>
              </router-link>


            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-star-on"></i>收藏</template>

            <el-menu-item-group>

              <router-link class="alink" to="/myspace/collectionAns">
                <el-menu-item index="6-1">
                  问答收藏
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace/collectionArticle">
                <el-menu-item index="6-2">
                  文章收藏
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/myspace/collectionColums">
                <el-menu-item index="6-3">
                  社区收藏
                </el-menu-item>
              </router-link>

            </el-menu-item-group>


          </el-submenu>
        </el-menu>
      </el-aside>


      <el-container
        style="background-image: url(/static/logo/noticesbg.jpg);
        background-repeat: no-repeat;
        background-size:100% 100%;
        "
      >
        <el-main>
          <div style="width: 80%;margin: 0 auto">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>

    </el-container>

  </div>
</template>

<script>
export default {
  name: "myspace",
  data() {

    return {

    }
  },
}
</script>

<style scoped>
.el-header {
  background-color: #e5efe2;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.router-link-active {
  text-decoration: none;
}

.alink{

  text-decoration: none;
}


</style>
