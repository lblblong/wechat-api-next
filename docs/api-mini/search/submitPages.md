---
title: submitPages
group:
  order: 1
  title: 小程序搜索
---

# search.submitPages

[查看微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/search/search.submitPages.html)

小程序开发者可以通过本接口提交小程序页面 url 及参数信息(不要推送 webview 页面)，让微信可以更及时的收录到小程序的页面信息，开发者提交的页面信息将可能被用于小程序搜索结果展示。

## 方法定义

```typescript
submitPages(options: {
    /** 小程序页面信息列表 */
    pages: {
      /** 页面路径 */
      path: string
      /** 页面参数 */
      query: string
    }[]
}): Promise<SubmitPagesResult>

// 返回数据类型
export type Code2SessionResult = {
  errcode: number
  errmsg: string
}
```
