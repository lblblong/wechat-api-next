---
title: getFollowers
group:
  order: 1
  title: 用户管理
---

# user.getFollowers

[查看微信原文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/Getting_a_User_List.html)

获取关注者列表

公众号可通过本接口来获取帐号的关注者列表，关注者列表由一串 OpenID（加密后的微信号，每个用户对每个公众号的 OpenID 是唯一的）组成。一次拉取调用最多拉取 10000 个关注者的 OpenID，可以通过多次拉取的方式来满足需求。

## 方法定义

```typescript
getFollowers(options?: {
  /** 第一个拉取的OPENID，不填默认从头开始拉取 */
  next_openid?: string
}): Promise<GetFollowersResult>


export type GetFollowersResult = {
  /** 关注该公众账号的总用户数 */
  total: number
  /** 拉取的OPENID个数，最大值为10000 */
  count: number
  data: {
    /** 列表数据，OPENID的列表 */
    openid: string[]
  }
  /** 拉取列表的最后一个用户的OPENID */
  next_openid: string
}
```
