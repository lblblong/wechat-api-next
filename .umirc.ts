import { defineConfig } from 'umi'

export default defineConfig({
  logo: '/wechat-api-next/logo.png',
  favicon: '/wechat-api-next/favicon.ico',
  title: ' ',
  description: '类型提示友好，响应友好的微信服务端 API Node.js 封装',
  mode: 'site',
  exportStatic: {},
  base: '/wechat-api-next',
  publicPath: '/wechat-api-next/',
  navs: [
    {
      title: '使用指南',
      path: '/guide',
    },
    {
      title: '小程序 API 文档',
      path: '/api-mini',
    },
    {
      title: '公众号开发 API 文档',
      path: '/api-web',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/lblblong/wechat-api-next',
    },
  ],
  analytics: {
    baidu: 'b456bfc295b7a013644e2dd895fce467',
  },
})
