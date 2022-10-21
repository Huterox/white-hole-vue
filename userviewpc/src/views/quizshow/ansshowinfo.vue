<template>
<div class="showansinfo">


  <div >
      <!--      user-->
    <br>
      <div style="height:120px">
        <div  style="width:16%;height: 100%;border-radius: 100px;margin: 0 auto">
          <el-image
            style="width:100%;height: 100%;border-radius: 100px"
            :src="Messages.userImg"
            class="image"

          />
          <p style="font-family: Microsoft YaHei;
          margin: 0 auto;text-align: center">
            {{Messages.userNickname}}
          </p>
        </div>
      </div>

      <br>
      <br>
<!--    这个是我们的回答的具体内容-->
      <div>
        <div style="width: 96%;margin: 0 auto">
          <br><br>
          <mavon-editor
            class="md"
            :boxShadow="false"
            :value="Messages.context"
            :subfield="false"
            defaultOpen="preview"
            :toolbarsFlag="true"

          />
        </div>
      </div>
  </div>

  <div>
    <div style="width: 96%;margin: 0 auto">
      阅读:
      <i class="el-icon-view"></i>
      {{Messages.ansViewNumber}}
      &nbsp;&nbsp;
      收藏:
      <i class="el-icon-star-off"></i>
      {{Messages.ansCollectNumber}}
      &nbsp;
      点赞:
      <i class="el-icon-check"></i>
      {{Messages.ansLikeNumber}}
      <br><br>
    </div>
  </div>
  <br><br>
  <div class="show">
    <comment_ans></comment_ans>
  </div>
</div>
</template>

<script>
import comment_ans from "../../components/comment/comment_ans";
export default {
  name: "ansshowinfo",
  components: {
    comment_ans
  },

  created(){

    this.ansid = this.$route.query.ansid;
    let paramsData = sessionStorage.getItem("ans:"+this.ansid);
    if(paramsData){
      this.Messages = JSON.parse(sessionStorage.getItem("ans:"+this.ansid));
    }else {
      this.$router.push({path: "/"});
    }
  },
  data(){
    return{
      ansid: null,
      ansContent: null,
      Messages:
        {
          "userid": null,
          "quizid": null,
          "creatTime": null,
          "quizTitle": null,
          "status": null,
          "userImg": null,
          "userNickname": null,
          "ansCollectNumber": null,
          "ansLikeNumber": null,
          "ansViewNumber": null,
          "context": null,
        },

    }
  },
}
</script>

<style scoped>
.showansinfo{
  margin: 20px auto;
  width: 100%;

  border: 0px solid #81badc;
  transition: all 0.9s;
  border-radius: 10px;

}
.showansinfo:hover{
  box-shadow: 0px 15px 30px rgb(12, 132, 224);
  margin-top: 10px;
}

</style>
