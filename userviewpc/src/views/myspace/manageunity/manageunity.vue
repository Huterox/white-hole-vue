<template>
  <div style="width: 90%;margin: 0 auto">
    <el-container style="height: 600px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: white">
        <el-menu :default-openeds="['1']">

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-postcard"></i>文章管理</template>
            <el-menu-item-group>
              <router-link class="alink" to="/manageunity">
                <el-menu-item index="2-1">
                  全部文章
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/manageunity/unityArticleJoinList">
                <el-menu-item index="2-2">
                  文章审核
                </el-menu-item>
              </router-link>

            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-postcard"></i>问答管理</template>
            <el-menu-item-group>
              <router-link class="alink" to="/manageunity/unityQuizAllList">
                <el-menu-item index="3-1">
                  全部提问
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/manageunity/unityQuizJoinList">
                <el-menu-item index="3-2">
                  提问审核
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/manageunity/unityQuizAnsJoinList">
                <el-menu-item index="3-3">
                  回答审核
                </el-menu-item>
              </router-link>

            </el-menu-item-group>

          </el-submenu>


          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user-solid"></i>用户管理</template>

            <el-menu-item-group>

              <router-link class="alink" to="/manageunity/unityUserList">
                <el-menu-item index="5-1">
                  全部用户
                </el-menu-item>
              </router-link>

              <router-link class="alink" to="/manageunity/unityUserJoinList">
                <el-menu-item index="5-2">
                  用户申请
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
          <div style="width: 90%;margin: 0 auto">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>

    </el-container>

  </div>
</template>

<script>
export default {
  name: "manageunity"
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
