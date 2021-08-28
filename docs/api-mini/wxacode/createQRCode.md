---
title: createQRCode
group:
  order: 1
  title: 小程序码
---

# wxacode.createQRCode

[查看微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.createQRCode.html)

获取小程序二维码，适用于需要的码数量较少的业务场景。通过该接口生成的小程序码，永久有效，有数量限制，详见获取二维码。

## 方法定义

```typescript
createQRCode(options: {
  /** 扫码进入的小程序页面路径，最大长度 128 字节，不能为空；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"，即可在 wx.getLaunchOptionsSync 接口中的 query 参数获取到 {foo:"bar"}。 */
  path: string
  /** 二维码的宽度，单位 px。最小 280px，最大 1280px */
  width?: number
}): Promise<Buffer>
```

该方法调用成功时，直接返回图片的 `Buffer`，调用失败时会抛出 `ApiError` 异常，包含 `errcode` 和 `errmsg`

## 调用示例

```typescript
import { MiniAPI } from 'wechat-api-next'

const client = new MiniAPI(...config)

try {
  const imageBuffer = await client.wxacode.createQRCode({ path: 'pages/index/index?id=11' })
  fs.writeFileSync(path.resolve(__dirname, './wxacode.png'), imageBuffer)
  console.log('二维码图片文件 wxacode.png 已写入本地！')
} catch (err) {
  console.log('图片生成失败：', err.message)
}
```
