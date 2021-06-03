---
title: 快速开始
order: 1
---

# 快速开始

wechat-api-next 通过 `MiniAPI` 提供微信小程序服务端 API 的封装。

`MiniAPI` 构造函数参数说明：

- `options.appid` 小程序唯一凭证，即 AppID，可在「微信公众平台 - 设置 - 开发设置」页中获得。（需要已经成为开发者，且帐号没有异常状态）
- `options.appsecret` 小程序唯一凭证密钥，即 AppSecret，获取方式同 appid
- `options.endpoint` 可选，[接口域名配置](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Interface_field_description.html)

参考示例：

```typescript
import { MiniAPI } from 'wechat-api-next'

// 通过创建 MiniAPI 对象即可使用
const client = new MiniAPI({
  appid: 'your appid',
  appsecret: 'your appsecret',
})
```

## API 列表

#### 内容安全

内容安全相关 API 挂载在 `MiniAPI.security` 下

- [security.msgSecCheck](/api-mini/security/msg-sec-check) 文本内容检测

#### 订阅消息

订阅消息相关 API 挂载在 `MiniAPI.subscribeMessage` 下

- [subscribeMessage.send](/api-mini/subscribe-message/send) 发送订阅消息

#### 小程序码

小程序码相关 API 挂载在 `MiniAPI.wxacode` 下

- [wxacode.createQRCode](/api-mini/wxacode/create-qrcode) 获取小程序二维码，适用于需要的码数量较少的业务场景。
- [wxacode.getUnlimited](/api-mini/wxacode/get-unlimited) 获取小程序码，适用于需要的码数量极多的业务场景。
