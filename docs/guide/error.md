---
order: 80
---

# 异常处理

wechat-api-next 在内部判断了状态码，外部调用时 `try/catch` 异常即可

- 当状态码非 0 时，wechat-api-next 会抛出一个 `ApiError` 异常，该异常会包含微信端返回的 `errcode` 和 `errmsg`
- 当状态码为 0 时，正常返回微信端返回的数据

参考以下获取用户信息示例：

```typescript
import { WebAPI, ApiError } from 'wechat-api-next'

const client = new WebAPI(...config)

try {
  const userinfo = await client.user.getUserInfo({ openid })
  console.log('成功获取用户信息：', userinfo)
} catch (err) {
  if (err instanceof ApiError) {
    console.log(`微信端状态码：${err.code}，异常消息：${err.message}`)
  } else {
    console.log(err.message)
  }
}
```

## 其他

[微信公众号开发全局状态码文档](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Global_Return_Code.html)
