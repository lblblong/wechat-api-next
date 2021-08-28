---
title: getUnlimited
group:
  order: 1
---

# wxacode.getUnlimited

[查看微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html)

获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制。 更多用法详见 获取二维码。

## 方法定义

```typescript
getUnlimited(options: {
  /** 最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式） */
  scene: string
  /** 必须是已经发布的小程序存在的页面（否则报错），例如 pages/index/index, 根路径前不要填加 /,不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面 */
  page?: string
  /** 二维码的宽度，单位 px，最小 280px，最大 1280px */
  width?: number
  /** 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false */
  auto_color?: boolean
  /** auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示 */
  line_color?: { r: number; g: number; b: number }
  /** 是否需要透明底色，为 true 时，生成透明底色的小程序 */
  is_hyaline?: boolean
}): Promise<Buffer>
```

该方法调用成功时，直接返回图片的 `Buffer`，调用失败时会抛出 `ApiError` 异常，包含 `errcode` 和 `errmsg`

## 调用示例

```typescript
import { MiniAPI } from 'wechat-api-next'

const client = new MiniAPI(...config)

try {
  const imageBuffer = await client.wxacode.getUnlimited({ page: 'pages/index/index', scene: 'id=11' })
  fs.writeFileSync(path.resolve(__dirname, './wxacode.png'), imageBuffer)
  console.log('二维码图片文件 wxacode.png 已写入本地！')
} catch (err) {
  console.log('图片生成失败：', err.message)
}
```
