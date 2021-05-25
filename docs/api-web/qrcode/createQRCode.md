---
title: createQRCode
group:
  order: 1
  title: 二维码
---

# qrcode.createQRCode

[查看微信原文档](https://developers.weixin.qq.com/doc/offiaccount/Account_Management/Generating_a_Parametric_QR_Code.html)

生成带参数的二维码

为了满足用户渠道推广分析和用户帐号绑定等场景的需要，公众平台提供了生成带参数二维码的接口。使用该接口可以获得多个带不同场景值的二维码，用户扫描后，公众号可以接收到事件推送。使用接口过程中有任何问题，可以前往微信开放社区 #公众号 专区发帖交流。

目前有2种类型的二维码：

1. 临时二维码，是有过期时间的，最长可以设置为在二维码生成后的30天（即2592000秒）后过期，但能够生成较多数量。临时二维码主要用于帐号绑定等不要求二维码永久保存的业务场景 
2. 永久二维码，是无过期时间的，但数量较少（目前为最多10万个）。永久二维码主要用于适用于帐号绑定、用户来源统计等场景。

用户扫描带场景值二维码时，可能推送以下两种事件：

如果用户还未关注公众号，则用户可以关注公众号，关注后微信会将带场景值关注事件推送给开发者。

如果用户已经关注公众号，在用户扫描后会自动进入会话，微信也会将带场景值扫描事件推送给开发者。

获取带参数的二维码的过程包括两步，首先创建二维码ticket，然后凭借ticket到指定URL换取二维码。

## 方法定义

```typescript
createQRCode(options: {
  /** type 二维码类型：临时、永久 */
  type: QRCode
  /** 场景值ID（字符串形式的ID），字符串类型，长度限制为1到64 */
  scene_str: string
  /** 该二维码有效时间，以秒为单位。 最大不超过2592000（即30天），此字段如果不填，则默认有效期为30秒。 */
  expire_seconds?: number
}): Promise<IQRCodeResult>

export interface IQRCodeResult {
  /** 获取的二维码ticket，凭借此ticket可以在有效时间内换取二维码。 */
  ticket: string
  /** 该二维码有效时间，以秒为单位。 最大不超过2592000（即30天）。 */
  expire_seconds: number
  /** 二维码图片解析后的地址，开发者可根据该地址自行生成需要的二维码图片 */
  url: string
  /** 获取二维码图片 */
  ticket_url: string
}
```