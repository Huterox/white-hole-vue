
<template>
  <div style="width: 100%">
    <br>
    <br>
    <div style="width: 100%;margin-left: 1%" class="main">
      <el-card shadow="hover" v-for="(message,index) in Messages" :key="index">

        <div style="height:100px">
          <div  style="width:14%;height: 100%;border-radius: 100px;display:inline-block;">
            <img
              style="width:100%;height: 100%;border-radius: 100px"
              v-bind:src="message.image"
              class="image"
            >
          </div>
          <div style="display:inline-block;margin-left: 5%;width: 60%">
            <p class="message" style="font-weight:bold">

              <router-link class="alink" to="/blogshow">
                {{message.name}}
              </router-link>

            </p>
            <p style="font-weight: lighter" class="message"

            >
              {{message.info}}

            </p>
            <p class="message">
              阅读：
              <i class="el-icon-view"></i>
              {{message.number}}
              &nbsp;&nbsp;
              收藏：
              <i class="el-icon-star-off"></i>
              {{message.favorite}}
              &nbsp;&nbsp;

             fork:{{message.fork}}
            </p>

          </div>

          <div  style="width:18%;height: 100%;
          display:inline-block;
          "
          >
            <p style="text-align: center">{{message.data}}</p>
            <br><br>
          </div>

        </div>
        <br>
      </el-card>
    </div>
    <br>
    <div class="footer" style="margin: 0 auto;width: 100%;">
    </div>

  </div>

</template>

<script>
export default {
  name: "lastArticle",
  data(){
    return{

      Messages:[
        {"info":"Spring 是一个轻量级的开发框架",
          "name":"Spring 5 核心原理解析",
          "number": 1,"data":"2022-3-27",favorite: 1,
          "fork": 2,"image":"/static/temporary/showbg2.jpg"
        },
        {"info":"Spring 是一个轻量级的开发框架",
          "name":"Spring 5 核心原理解析",
          "number": 9,"data":"2022-3-27",favorite: 2,
          "fork": 2,"image":"/static/temporary/showbg2.jpg"
        },
        {"info":"Spring 是一个轻量级的开发框架",
          "name":"Spring 5 核心原理解析",
          "number": 9,"data":"2022-3-27",favorite: 3,
          "fork": 2,"image":"/static/temporary/showbg.jpg"
        },
        {"info":"Spring 是一个轻量级的开发框架",
          "name":"Spring 5 核心原理解析",
          "number": 99,"data":"2022-3-27",favorite: 999,
          "fork": 22,"image":"/static/temporary/showbg1.jpg"
        },
        {"info":"Spring 是一个轻量级的开发框架",
          "name":"Spring 5 核心原理解析",
          "number": 99,"data":"2022-3-27",favorite: 999,
          "fork": 22,"image":"/static/temporary/showbg1.jpg"
        },
        {"info":"Spring 是一个轻量级的开发框架",
          "name":"Spring 5 核心原理解析",
          "number": 99,"data":"2022-3-27",favorite: 999,
          "fork": 22,"image":"/static/temporary/showbg1.jpg"
        },
        {"info":"Spring 是一个轻量级的开发框架",
          "name":"Spring 5 核心原理解析",
          "number": 99,"data":"2022-3-27",favorite: 999,
          "fork": 22,"image":"/static/temporary/showbg1.jpg"
        },
        {"info":"Spring 是一个轻量级的开发框架",
          "name":"Spring 5 核心原理解析",
          "number": 99,"data":"2022-3-27",favorite: 999,
          "fork": 22,"image":"/static/temporary/showbg1.jpg"
        },

      ]
    }
  },
}
</script>

<style scoped>
.message{
  width: 25em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.alink{

  text-decoration: none;
  color: #333333;
}

</style>
