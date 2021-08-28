---
title: getUserInfo
group:
  order: 1
---

# user.getUserInfo

[查看微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/Get_users_basic_information_UnionID.html)

获取用户基本信息

在关注者与公众号产生消息交互后，公众号可获得关注者的 OpenID（加密后的微信号，每个用户对每个公众号的 OpenID 是唯一的。对于不同公众号，同一用户的 openid 不同）。公众号可通过本接口来根据 OpenID 获取用户基本信息，包括昵称、头像、性别、所在城市、语言和关注时间。

请注意，如果开发者有在多个公众号，或在公众号、移动应用之间统一用户帐号的需求，需要前往微信开放平台（open.weixin.qq.com）绑定公众号后，才可利用 UnionID 机制来满足上述需求。

UnionID 机制说明：

开发者可通过 OpenID 来获取用户基本信息。特别需要注意的是，如果开发者拥有多个移动应用、网站应用和公众帐号，可通过获取用户基本信息中的 unionid 来区分用户的唯一性，因为只要是同一个微信开放平台帐号下的移动应用、网站应用和公众帐号，用户的 unionid 是唯一的。换句话说，同一用户，对同一个微信开放平台下的不同应用，unionid 是相同的。

请注意： 20 年 6 月 8 日起，用户关注来源“微信广告（ADD_SCENE_WECHAT_ADVERTISEMENT）”从“其他（ADD_SCENE_OTHERS）”中拆分给出。

## 方法定义

```typescript
getUserInfo(options: {
  /** 普通用户的标识，对当前公众号唯一 */
  openid: string
  /** 返回国家地区语言版本，zh_CN 简体，zh_TW 繁体，en 英语 */
  lang?: 'zh_CN' | 'zh_TW' | 'en'
}): Promise<WechatUserInfo>


export type WechatUserInfo = {
  /** 用户是否订阅该公众号标识，值为0时，代表此用户没有关注该公众号，拉取不到其余信息。 */
  subscribe: number
  /** 用户的标识，对当前公众号唯一 */
  openid: string
  /** 用户的昵称 */
  nickname: string
  /** 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知 */
  sex: number
  /** 用户的语言，简体中文为zh_CN */
  language: string
  /** 用户所在城市 */
  city: string
  /** 用户所在省份 */
  province: string
  /** 用户所在国家 */
  country: string
  /** 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。 */
  headimgurl: string
  /** 用户关注时间，为时间戳。如果用户曾多次关注，则取最后关注时间 */
  subscribe_time: number
  /** 只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。 */
  unionid: string
  /** 公众号运营者对粉丝的备注，公众号运营者可在微信公众平台用户管理界面对粉丝添加备注 */
  remark: string
  /** 用户所在的分组ID（兼容旧的用户分组接口） */
  groupid: number
  /** 用户被打上的标签ID列表 */
  tagid_list: number[]
  /** 返回用户关注的渠道来源，ADD_SCENE_SEARCH 公众号搜索，ADD_SCENE_ACCOUNT_MIGRATION 公众号迁移，ADD_SCENE_PROFILE_CARD 名片分享，ADD_SCENE_QR_CODE 扫描二维码，ADD_SCENE_PROFILE_LINK 图文页内名称点击，ADD_SCENE_PROFILE_ITEM 图文页右上角菜单，ADD_SCENE_PAID 支付后关注，ADD_SCENE_WECHAT_ADVERTISEMENT 微信广告，ADD_SCENE_OTHERS 其他 */
  subscribe_scene: string
  /** 二维码扫码场景（开发者自定义） */
  qr_scene: number
  /** 二维码扫码场景描述（开发者自定义） */
  qr_scene_str: string
}
```
