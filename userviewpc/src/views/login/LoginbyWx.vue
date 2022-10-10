<template>
  <div>
    <el-image
      style="width: 60%; height: 60%;margin: 0 auto"
      src="static/image/WX.jpg"
      fit="fit"></el-image>
    <p>
      <el-tooltip content="勾选同意后将自动创建账号并进入账号设置绑定页面" placement="bottom" effect="light">
      <el-checkbox v-model="checked" label="1">使用微信登录时，自动创建账号</el-checkbox>
      </el-tooltip>
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginbyWx",
  data () {
    return {
      checked: true
    };
  },
}
</script>

<style scoped>

</style>
