const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // publicPath: process.env.NODE_ENV === 'production' ? '.' : '/',
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       data: '@import "@/assets/scss/_value.scss";'
  //     },
  //     postcss: {
  //       ident: 'postcss',
  //       plugins: [require('autoprefixer')]
  //     }
  //   }
  // }
})
