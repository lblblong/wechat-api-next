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

公众号开发

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

小程序开发

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


## 多进程下 access_token 共享

多进程下需要共享 `access_token` 通过 `setTokenHandler` 方法自定义存储和获取，以下是通过 `redis` 存储的示例：

```typescript
import { MiniAPI } from 'wechat-api-next'

const TOKEN_KEY = 'wechat-mini-token'

const client = new MiniAPI({ appid, appsecret })

// 自定义 token 存储与获取
client.setTokenHandler({
  getToken: async () => {
    const token = await redisClient.get(TOKEN_KEY)
    if (!token) {
      return await client.fetchToken()
    }
    return token
  },
  setToken: async (token: string) => {
    await redisClient.set(TOKEN_KEY, token)
    await redisClient.expire(TOKEN_KEY, 60 * 90) // 一个半小时过期
  },
})
```

公众号开发设置方式一样

## 多进程下 ticket 共享

```typescript
import { WebAPI } from 'wechat-api-next'

const TICKET_KEY = 'wechat-web-ticket'

const client = new WebAPI({ appid, appsecret })

// 自定义 ticket 存储与获取
client.setJsapiTicketHandler({
  getTicket: async () => {
    const token = await redisClient.get(TICKET_KEY)
    if (!token) {
      return await client.fetchToken()
    }
    return token
  },
  setTicket: async (_ticket: string) => {
    await redisClient.set(TICKET_KEY, token)
    await redisClient.expire(TICKET_KEY, 60 * 90) // 一个半小时过期
  },
})
```
