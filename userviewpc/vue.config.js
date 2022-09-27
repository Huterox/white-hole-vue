//  在根目录添加一个  vue.config.js  文件
//   重启项目
module.exports = {
  //以下配置的效果
  //   “/api/getok.php”  -->   http://122.51.238.153/getok.php
  // 修改的配置
  devServer: {
    proxy: {
      //如果地址以/api开头，它就会请求到 http://122.51.238.153
      '/api': {
        target: 'http://127.0.0.1:88/api',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/api': '',   //重写请求路径,这里就不用重写了
        },
      }
    }
  }
}
