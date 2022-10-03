<template>
  <div style="height: 960px;width: 80%;margin: 0 auto">
    <el-row :gutter="22">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div class="block" style="width: 100%;margin: 0 auto">
            <br><br><br>

            <div style="margin-left: 2%">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/treehole' }">日志</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/treehole/haoYou'}">好友</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/treehole/piaoLiu'}">漂流瓶</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/treehole/baiDongZhi'}">白洞值</el-breadcrumb-item>
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
              <div :class="data.isSelected ? 'is-selected' : ''">
                <p style="color: #0856ec;font-weight: bold" v-if="getDay==data.day">
                  {{data.day.split('-').slice(2).join('-') }}
                  {{ '✔️'}}
                </p>
                <p v-else>
                  {{data.day.split('-').slice(2).join('-') }}
                </p>
                {{ data.isSelected ? '✔️' : ''}}
              </div>
            </template>
          </el-calendar>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "treehole",
  computed:{
    getDay(){
      let dt = new Date();
      let year = dt.getFullYear();
      let month = (dt.getMonth() + 1).toString().padStart(2,'0');
      let date = dt.getDate().toString().padStart(2,'0');
      return `${year}-${month}-${date}`;
    }
  },
  data(){
    return{

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
