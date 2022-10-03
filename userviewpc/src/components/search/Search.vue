<template>
  <div>
  <el-autocomplete
      style="width: 90%"
      popper-class="my-autocomplete"
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      clearable
      @select="handleSelect">
      <i
        class="el-icon-edit el-input__icon"
        slot="suffix"
        @click="handleIconClick">
      </i>
      <template slot-scope="{ item }">
        <div class="name">{{ item.value }}</div>
        <span class="addr">{{ item.address }}</span>
      </template>
    </el-autocomplete>
    <el-button type="primary" @click="search">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      restaurants: [],
      state: ''
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      //可以在这里发送axios请求
      return [
        { "value": "手写Spring三大组件", },
        { "value": "Python",},
        { "value": "还没女朋友？我用Transform搭建属于我的AI女友",},

      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    search () {
      if (!this.state) {
        this.$message.warning('请输入你的搜索内容哟~')
        return
      }
      /* 跳转并传值 */
      if (this.$route.path === '/clinicalAnalysis') {
        let diseaseMess = []
        this.diseaseList.forEach((item, index) => {
          if (this.disease === item.value) {
            diseaseMess.push(item.value)
            this.$router.push({
              path: '/effectAnalysis',
              query: { keyword: this.disease, id: item.id }
            })
          }
        })
        // 判断一下，如果该长度为0的话，那就证明输入的内容和列表的内容不一样。
        if (diseaseMess.length === 0) {
          this.$message.warning('未配置“' + this.disease + '”该病种')
        }
      } else {
        let keywords = []
        let errorMess = []
        this.diseaseList.forEach(item => {
          if (this.disease === item.value) {
            errorMess.push(item.value)
            keywords.push({
              name: item.value,
              id: item.id
            })
          }
        })
        if (errorMess.length === 0) {
          this.$message.warning('未配置“' + this.disease + '”该病种')
        }
        this.$emit('keywords', keywords)
      }
    },

  },
  mounted() {
    this.restaurants = this.loadAll();
  }

}
</script>

<style scoped>

</style>
