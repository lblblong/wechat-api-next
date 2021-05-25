---
order: 70
---

# 介绍

wechat-api-next 是一个类型提示友好，响应友好的微信服务端 API Node.js 封装。

由于 [wechat-api](https://github.com/node-webot/wechat-api) 不再维护，已有 4 年未更新，目前再使用 wechat-api 有以下问题：

- 方法调用使用回调，代码不够清晰
- 没有类型提示不够友好
- 没有小程序相关的 API 封装
- 文档网站过于老旧不方便阅读

而 wechat-api-next 就是为了解决以上问题而诞生的。

## 安装

```shell
$ npm install wechat-api-next
# or
$ yarn add wechat-api-next
```

## 开始使用

#### 公众号开发

```typescript
import { WebAPI } from 'wechat-api-next'

const client = new WebAPI({ appid, appsecret })

try {
  const userinfo = await client.user.getUserInfo({ openid })
  console.log('用户信息：', userinfo)
} catch (err) {
  console.log('获取用户信息失败：', err.message)
}
```

[了解更多](/api-web)

#### 小程序开发

```typescript
import { MiniAPI } from 'wechat-api-next'

const client = new MiniAPI({ appid, appsecret })

try {
  await client.security.msgSexCheck({ content: '校验文本合法性' })
  console.log('校验通过')
} catch (err) {
  console.log('校验未通过')
}
```

[了解更多](/api-mini)
