<template>
<div style="height: 960px;width: 80%;margin: 0 auto">
  <el-row :gutter="22">
    <el-col :span="16">
      <div class="grid-content bg-purple">
        <div class="block" style="width: 100%;margin: 0 auto">
          <span class="demonstration"><i  class="el-icon-position">&nbsp;精选推荐：</i></span>
          <br><br><br>
          <el-carousel height="220px" :interval="4000" type="card">
            <el-carousel-item v-for="item in Items" :key="item">
              <div  style="width:80%;height: 80%;margin: 0 auto">
                <img
                  style="width:100%;height: 100%;border-radius: 5px"
                  v-bind:src="item.image"
                  class="image"
                >
                <p class="message" style="font-weight:bold;text-align: center;
                   width: 100%;
                   margin: 0 auto
                  ">
                  {{item.info}}</p>
              </div>

            </el-carousel-item>
          </el-carousel>

          <br><br>
          <div style="margin-left: 2%">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">热门文章</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/lastArticle'}">最新文章</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/hotAns'}">热门问答</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/lastAns'}">最新问答</el-breadcrumb-item>
              <el-breadcrumb-item ></el-breadcrumb-item>
            </el-breadcrumb>

          </div>
          <br><br>
          <div style="width: 98%;margin: 0 auto">
              <router-view></router-view>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="7">
      <div class="grid-content bg-purple" >
        <p style="color: snow;background-color: #439dea;height: 35px;border-radius: 5px">Calendar：</p>

        <el-calendar class="test" style="background-color: #fffefe">
          <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
          <template
            slot="dateCell"
            slot-scope="{date, data}">
            <p :class="data.isSelected ? 'is-selected' : ''">
              {{ data.day.split('-').slice(2).join('-') }} {{ data.isSelected ? '✔️' : ''}}
            </p>
          </template>
        </el-calendar>
        <br>
        <i class="el-icon-bell">活动：</i>
        <br><br>
        <div style="width: 95%">

          <el-carousel indicator-position="outside">

            <el-carousel-item v-for="item in ItemsNot" :key="item">
              <div  style="width:100%;height: 80%;margin: 0 auto">
                <img
                  style="width:100%;height: 150px;border-radius: 5px"
                  v-bind:src="item.image"
                  class="image"
                >
                <p class="message" style="font-weight: bold;font-size: 2px;text-align: center;
                   width: 100%;
                   margin: 0 auto
                  ">
                  {{item.info}}</p>
              </div>

            </el-carousel-item>
          </el-carousel>

        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "homepage",
  data(){
    return{
      Items: [
        {
          "image":"/static/temporary/headpic.jpg",
          "info":"手写Spring5核心注解"
        },
        {
          "image":"/static/temporary/showbg.jpg",
          "info":"深入JVM"
        },
        {
          "image":"/static/temporary/showbg1.jpg",
          "info":"情感问答：要不要做舔狗"
        },
        {
          "image":"/static/temporary/showbg2.jpg",
          "info":"社区推荐：Huterox社区"
        },
      ],
      ItemsNot: [
        {
          "image":"/static/temporary/headpic.jpg",
          "info":"WhiteHole V0.7火热开发中"
        },
        {
          "image":"/static/temporary/showbg.jpg",
          "info":"2022未来可期"
        },

      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: white;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: white;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: white;
}
.bg-purple {
  background: white;
}
.bg-purple-light {
  background: white;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.message{
  width: 10em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.is-selected {
  color: #1989FA;
}
.test /deep/  .el-calendar-table .el-calendar-day{
  width: 100%;
  height: 35px;
  font-size: 1px;
}
</style>
