---
order: 90
---

# 多进程

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

