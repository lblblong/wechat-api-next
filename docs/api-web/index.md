---
title: 快速开始
order: 1
---

# 快速开始

wechat-api-next 通过 `WebAPI` 提供微信小程序服务端 API 的封装。

`WebAPI` 构造函数参数说明：

- `options.appid` 小程序唯一凭证，即 AppID，可在「微信公众平台 - 设置 - 开发设置」页中获得。（需要已经成为开发者，且帐号没有异常状态）
- `options.appsecret` 小程序唯一凭证密钥，即 AppSecret，获取方式同 appid
- `options.endpoint` 可选，[接口域名配置](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Interface_field_description.html)

参考示例：

```typescript
import { WebAPI } from 'wechat-api-next'

// 通过创建 WebAPI 对象即可使用
const client = new WebAPI({
  appid: 'your appid',
  appsecret: 'your appsecret',
})
```

## API 列表

#### 网页授权

网页授权相关 API 挂载在 `WebAPI.auth` 下

- [auth.getAccessToken](/api-web/auth/get-access-token) 通过用户 Code 获取网页授权 access_token
- [auth.getUserInfo](/api-web/auth/get-user-info) 如果网页授权作用域为 snsapi_userinfo，则此时开发者可以通过 access_token 和 openid 拉取用户信息了。

#### 二维码

二维码相关 API 挂载在 `WebAPI.qrcode` 下

- [qrcode.createQRCode](/api-web/qrcode/create-qrcode) 生成带参数的二维码

#### 模板消息

模板消息相关 API 挂载在 `WebAPI.template` 下

- [template.sendTemplate](/api-web/template/send-template) 发送模板消息

#### 用户管理

用户管理相关 API 挂载在 `WebAPI.user` 下

- [user.getFollowers](/api-web/user/get-followers) 获取关注者列表
- [user.getUserInfo](/api-web/user/get-user-info) 获取用户基本信息
- [user.updateRemark](/api-web/user/update-remark) 更新用户备注名
