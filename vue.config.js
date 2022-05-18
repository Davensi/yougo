const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置绝对路径
  configureWebpack: {
    resolve: {
      alias: {
        'views': "@/views",
        'components': "@/components",
        'img': "@/assets/img",
        'css': "@/assets/css",
        'js': "@/assets/js",
        'common': "@/common",
        'ajax': "@/api",
      }
    }
  }
})
