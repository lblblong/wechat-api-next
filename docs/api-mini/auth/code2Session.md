---
title: code2Session
group:
  order: 1
  title: 登录
---

# auth.code2Session

[查看微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)

登录凭证校验。通过 [wx.login](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) 接口获得临时登录凭证 code 后传到开发者服务器调用此接口完成登录流程。更多使用方法详见 [小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)。


## 方法定义

```typescript
code2Session(options: {
  /** 登录时获取的 code */
  js_code: string
}): Promise<Code2SessionResult>

// 返回数据类型
export type Code2SessionResult = {
  /** 用户唯一标识 */
  openid: string
  /** 会话密钥 */
  session_key: string
  /** 用户在开放平台的唯一标识符，若当前小程序已绑定到微信开放平台帐号下会返回，详见 [UnionID](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html) 机制说明。 */
  unionid: string
  errcode: number
  errmsg: string
}
```
