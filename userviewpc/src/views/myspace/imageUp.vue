<template>
  <div>
    <div class="show">
      <div class="show1" >
        <img ref="showing" src="" id="showimg" style="margin-left: 1px;margin-top: 3px">
      </div>
      <br>
      <div class="upload">图片选择
      <input multiple="multiple" id="file" ref="file"
             accept=".jpg,.png"
             @click="changepic(this)" type="file" name="userpic"
             style="
              position: absolute;
              overflow: hidden;
              right: 0;
              top: 0;
              opacity: 0;
             width: 100%;
             height: 32px;
             "
      >
      </div>
      <el-tooltip content="一天只允许提交一次哟~" placement="top">
      <button @click="subchangepic()" style="height: 40px;position: relative; margin-left:35%;">确定</button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import {getUUID} from "../../components/upload/uuid";

export default {
  name: "imageUp",
  data(){
    return {
      userid: null,
      loginToken: null,
      filename: null,
      f64: null,
      loadImage: "",
      dataObj: {
        policy: '',
        signature: '',
        key: '',
        ossaccessKeyId: '',
        dir: '',
        host: '',
        // callback:'',
      },
    }
  },
  created() {
    let loginToken = localStorage.getExpire("LoginToken");
    let userid = localStorage.getExpire("userid");
    //这个只有用户自己才能进入，自己只能进入自己对应的MySpace
    if(loginToken==null && userid==null) {
      alert("检测到您未登录，请先登录")
      this.$router.push({path: "/login"});
    }else {
      this.userid=userid;
      this.loginToken = loginToken;
    }
  },
  methods: {

    pullImg(filename) {
      let _self = this;
        // 获取认证码
        this.axios
          .get('/third-part/oss/userSpaceUpImgPolicy')
          .then(response => {
            response = response.data;
            _self.dataObj.policy = response.data.policy;
            _self.dataObj.signature = response.data.signature;
            _self.dataObj.ossaccessKeyId = response.data.accessid;
            _self.dataObj.key = response.data.dir +getUUID()+"_"+filename;
            _self.dataObj.dir = response.data.dir;
            _self.dataObj.host = response.data.host;
            //推送到OSS
            this.uploadImg();
          }).catch(function (error) {
            alert(error)
            console.log("出错了...",err)
          })
      },

    upImgPath(imgpath){
      //将图片的地址上传到我们的服务器
      this.axios({
        url: "/user/user/space/userUpImg",
        method: 'post',
        headers: {
          "userid": this.userid,
          "loginType": "PcType",
          "loginToken": this.loginToken,
        },
        data: {
          'userid': this.userid,
          'imgpath': imgpath
        }
      }).then((res) => {
        res = res.data;
        if (res.code === 0) {
          alert("头像上传成功，一天后才可以重新上传哟~")
        } else {
          this.$message.error(res.msg);
        }
      });
    },

    uploadImg(){
      //组装数据
      let formData = new FormData();
      Object.keys(this.dataObj).forEach(key => {
        // 添加一个新值到 formData 对象内的一个已存在的键中，如果键不存在则会添加该键。
        formData.append(key, this.dataObj[key]);
      });
      formData.append('file',this.f64)
      //此时发送请求去给到OSS
      this.axios({
        url: this.dataObj.host,
        method: 'post',
        data: formData
      }).then((res) => {
        let imgpath = this.dataObj.host + '/' + this.dataObj.key;
        //将得到的图片地址返回到我们的服务器
        this.upImgPath(imgpath)
      })
    },

    subchangepic(){
      /**
      * 更换头像，现在的情况是：
       * 1.拿到第三方OSS服务的授权
       * 2.通过授权，去上传图片
       * 3.拿到授权后的图片，并将链接上传到服务端
      * */
      if(this.$refs.file.files[0]!=null) {
        this.f64 = this.$refs.file.files[0];
        let filename = this.f64.name;
        //此时先拿到授权
        this.pullImg(filename)
      }
    },

    changepic() {
      document.getElementById('file').onchange = function () {
        var imgFile = this.files[0];
        var fr = new FileReader();

        fr.onload = function () {
          let showing = document.getElementById('showimg')
          let img = fr.result;
          this.f64 = img;
          this.filename = imgFile.name
          showing.src = img;
          showing.style.height = "220px";
          showing.style.width = "220px";
          showing.style.borderRadius = "200px"
        };
        fr.readAsDataURL(imgFile);
      }
    },
  }
}
</script>

<style scoped>

.upload{
  margin-left: 20%;
  width: 12%;
  text-align: center;
  color: white;
  height: 32px;
  border-radius: 3px;
  background: #1E90FF;
  cursor: pointer;
  outline: none;
  border-width: 0px;
  font-size: 17px;
  display:inline-block;
  padding: 4px 10px;
  line-height:30px;
  position: relative;
  text-decoration: none;

}

button {
  margin-left: 70%;
  width: 15%;
  height: 35px;
  border-width: 0px;
  border-radius: 3px;
  background: #1E90FF;
  cursor: pointer;
  outline: none;
  color: white;
  font-size: 17px;
}
.show{
  margin: 100px auto;
  width: 80%;
  height: 450px;
  border: 5px solid #18a0ec;
  transition: all 0.9s;
  border-radius: 10px;

}
.show1{
  margin: 50px auto;
  width: 222px;
  height: 226px;
  border: 5px solid #18a0ec;
  transition: all 0.9s;
  border-radius: 150px;

}

.show1:hover{
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4);
  margin-top: 45px;
}

.show:hover{
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4);
  margin-top: 45px;

}

.texti{
  border: 1px solid #ccc;
  padding: 13px 14px;
  width: 30%;

  font-size: 14px;
  font-weight: 300;

  border-radius: 5px; /* 边框半径 */
  background: white; /* 背景颜色 */
  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
  outline: none; /* 不显示轮廓线 */


}
.texti:focus{
  border-color: #1e88e1;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}
textarea {
  resize: none;

}
</style>
