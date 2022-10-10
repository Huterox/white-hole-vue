<template>
<div style="width: 90%;margin: 0 auto">
  <el-container style="height: 600px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: white">
      <el-menu :default-openeds="['1']">

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>问答消息</template>
          <el-menu-item-group>

            <router-link class="alink" to="/notices">
              <el-menu-item index="1-1">
                <el-badge :value="5" :max="99" class="item">
                  评论消息
                </el-badge>
              </el-menu-item>
            </router-link>
            <router-link class="alink" to="/notices/thumbNews">
              <el-menu-item index="1-2">
                点赞消息
              </el-menu-item>
            </router-link>

            <router-link to="/notices/replyMessage" class="alink">
              <el-menu-item index="1-3">
                回答消息
              </el-menu-item>
            </router-link>
          </el-menu-item-group>

        </el-submenu>


        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>文章消息</template>
          <el-menu-item-group>

            <router-link to="/notices/articleComment" class="alink">
              <el-menu-item index="2-1">
                文章评论
              </el-menu-item>
            </router-link>

            <router-link class="alink" to="/notices/thumbArticles">
              <el-menu-item index="2-2">
                文章点赞
              </el-menu-item>
            </router-link>

            <router-link class="alink" to="/notices/articlePush">
              <el-menu-item index="2-3">
                文章push
              </el-menu-item>
            </router-link>

          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message-solid"></i>系统通知</template>
          <el-menu-item-group>

            <router-link class="alink" to="/notices/auditInformation">
              <el-menu-item index="3-1">
                审核消息
              </el-menu-item>
            </router-link>

            <router-link class="alink" to="/notices/activeMessage">
              <el-menu-item index="3-2">
                活动消息
              </el-menu-item>
            </router-link>
          </el-menu-item-group>

        </el-submenu>

        <el-submenu index="4">
          <template slot="title"><i class="el-icon-s-custom"></i>好友</template>
          <el-menu-item-group>

            <router-link class="alink" to="/notices/friendVerification">
              <el-menu-item index="4-1">
                好友验证
              </el-menu-item>
            </router-link>

            <router-link class="alink" to="/notices/friendsMessage">
              <el-menu-item index="4-2">
                好友消息
              </el-menu-item>
            </router-link>
          </el-menu-item-group>

        </el-submenu>

        <el-submenu index="5">
          <template slot="title"><i class="el-icon-setting"></i>设置</template>
          <router-link class="alink" to="/notices/noticesettings">
            <el-menu-item-group>
              <el-menu-item index="5-1">消息设置</el-menu-item>
            </el-menu-item-group>
          </router-link>
        </el-submenu>

      </el-menu>
    </el-aside>


      <el-container
        style="
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
  name: "notices",
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
