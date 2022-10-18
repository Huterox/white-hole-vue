<template>
  <div>
    <el-upload
      :action="dataObj.host"
      :data="dataObj"
      list-type="picture"
      :multiple="false" :show-file-list="showFileList"
      :file-list="fileList"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :on-success="handleUploadSuccess"
      :on-preview="handlePreview">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="fileList[0].url" alt="">
    </el-dialog>
  </div>
</template>
<script>
import {getUUID} from "./uuid";
import axios from "_axios@0.26.1@axios";
export default {
  name: 'singleUpload',
  props: {
    value: String
  },
  computed: {
    imageUrl() {
      return this.value;
    },
    imageName() {
      if (this.value != null && this.value !== '') {
        return this.value.substr(this.value.lastIndexOf("/") + 1);
      } else {
        return null;
      }
    },
    fileList() {
      return [{
        name: this.imageName,
        url: this.imageUrl
      }]
    },
    showFileList: {
      get: function () {
        return this.value !== null && this.value !== ''&& this.value!==undefined;
      },
      set: function (newValue) {
      }
    }
  },
  data() {
    return {
      dataObj: {
        policy: '',
        signature: '',
        key: '',
        ossaccessKeyId: '',
        dir: '',
        host: '',
        // callback:'',
      },
      dialogVisible: false
    };
  },
  methods: {
    emitInput(val) {
      this.$emit('input', val)
    },
    handleRemove(file, fileList) {
      this.emitInput('');
    },
    handlePreview(file) {
      this.dialogVisible = true;
    },
    beforeUpload(file) {
      let _self = this;
      return new Promise((resolve, reject) => {
        // 请求后端（请求地址和后端访问地址一样）
        axios
          .get('/third-part/oss/policy')
          .then(response => {
            console.log("这是什么${filename}");
            response = response.data;
            _self.dataObj.policy = response.data.policy;
            _self.dataObj.signature = response.data.signature;
            _self.dataObj.ossaccessKeyId = response.data.accessid;
            _self.dataObj.key = response.data.dir +getUUID()+"_${filename}";
            _self.dataObj.dir = response.data.dir;
            _self.dataObj.host = response.data.host;
            resolve(true);
          })
          .catch(function (error) {
            alert(error)
            console.log("出错了...",err)
            reject(false);
          })
      });
    },
    handleUploadSuccess(res, file) {
      console.log("数据获取为",this.dataObj)
      console.log("上传成功...")
      this.showFileList = true;
      this.fileList.pop();
      this.fileList.push(
        {
          name: file.name,
          url: this.dataObj.host + '/' + this.dataObj.key.replace("${filename}",file.name)
        }
      );
      this.emitInput(this.fileList[0].url);
    }
  }
}
</script>
<style>

</style>
