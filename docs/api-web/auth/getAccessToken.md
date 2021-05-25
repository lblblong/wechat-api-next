---
title: getAccessToken
group:
  order: 1
  title: 网页授权
---

# auth.getAccessToken

[查看微信原文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#1)

通过用户 Code 获取网页授权 access_token

首先请注意，这里通过 code 换取的是一个特殊的网页授权 access_token,与基础支持中的 access_token（该 access_token 用于调用其他接口）不同。公众号可通过下述接口来获取网页授权 access_token。如果网页授权的作用域为 snsapi_base，则本步骤中获取到网页授权 access_token 的同时，也获取到了 openid，snsapi_base 式的网页授权流程即到此为止。

尤其注意：由于公众号的 secret 和获取到的 access_token 安全级别都非常高，必须只保存在服务器，不允许传给客户端。后续刷新 access_token、通过 access_token 获取用户信息等步骤，也必须从服务器发起。

## 方法定义

```typescript
getAccessToken(options: {
    code: string;
}): Promise<GetAccessTokenResult>

// 返回数据类型
export type GetAccessTokenResult = {
  /** 网页授权接口调用凭证,注意：此access_token与基础支持的access_token不同 */
  access_token: string
  /** access_token接口调用凭证超时时间，单位（秒） */
  expires_in: number
  /** 用户刷新access_token */
  refresh_token: string
  /** 用户唯一标识，请注意，在未关注公众号时，用户访问公众号的网页，也会产生一个用户和公众号唯一的OpenID */
  openid: string
  /** 用户授权的作用域，使用逗号（,）分隔 */
  scope: string
}
```

## 调用示例

```typescript
async snsapiUserinfoHandler({ code }: DtoSnsapiUserinfo) {
  // 通过网页授权 code 获取 access_token 和 openid
  const { access_token, openid } = await this.webApiClient.auth.getAccessToken({ code })

  // 查询该 openid 是否已在业务系统注册
  let wechatUser = await UmsUserWechat.findOne({
    relations: ['user'],
    where: {
      openid,
    },
  })

  // 未注册则注册
  if (!wechatUser) {
    const res = await this.webApiClient.auth.getUserInfo({ access_token, openid, lang: 'zh_CN' })
    wechatUser = new UmsUserWechat()
    wechatUser.openid = res.openid
    wechatUser.unionid = res.unionid
    wechatUser.avatar = res.headimgurl
    ...
    await wechatUser.save()
  }

  if (wechatUser.user) {
    // 如果已存在用户信息，则跳转到首页
    return ...
  } else {
    // 如果用户没有身份信息，则跳转到注册页
    return ...
  }
}
```
