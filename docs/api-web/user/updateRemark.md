---
title: updateRemark
group:
  order: 1
---

# user.updateRemark

[查看微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/Configuring_user_notes.html)

更新用户备注名

开发者可以通过该接口对指定用户设置备注名，该接口暂时开放给微信认证的服务号。

## 方法定义

```typescript
updateRemark(
  options: {
    /** 用户标识 */
    openid: string
    /** 新的备注名，长度必须小于30字符 */
    remark: string
  }
): Promise<UpdateRemarkResult>

export type UpdateRemarkResult = {
  errcode: number
  errmsg: string
}
```