---
title: msgSecCheck
group:
  order: 1
  title: 内容安全
---

# security.msgSecCheck

[查看微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.msgSecCheck.html)

检查一段文本是否含有违法违规内容。

应用场景举例：

1. 用户个人资料违规文字检测；
2. 媒体新闻类用户发表文章，评论内容检测；
3. 游戏类用户编辑上传的素材(如答题类小游戏用户上传的问题及答案)检测等。 频率限制：单个 appId 调用上限为 4000 次/分钟，2,000,000 次/天\*

违规内容：

- 国家领导人相关政治内容
- 空字符串
- 色情内容等

## 方法定义

```typescript
msgSexCheck(options: {
  /** 待校验文本内容 */
  content: string
}): Promise<MsgSexCheckResult>

// 返回数据类型
export type MsgSexCheckResult = {
  errcode: number
  errmsg: string
}
```

## 调用示例

```typescript
import { MiniAPI } from 'wechat-api-next'

const client = new MiniAPI(...config)

try {
  await client.security.msgSecCheck({ content: '测试' })
  console.log('校验通过！')
} catch (err) {
  console.log('内容未通过安全测试：', err.message)
}
```
