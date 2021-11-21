import { BaseWebAPI } from '../../WebAPI'

export type GetUserInfoResult = {
  /** 用户的唯一标识 */
  openid: string
  /** 用户昵称 */
  nickname: string
  /**	用户的性别，值为1时是男性，值为2时是女性，值为0时是未知 */
  sex: string
  /** 用户个人资料填写的省份 */
  province: string
  /** 普通用户个人资料填写的城市 */
  city: string
  /** 国家，如中国为CN */
  country: string
  /** 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。 */
  headimgurl: string
  /** 用户特权信息，json 数组，如微信沃卡用户为（chinaunicom） */
  privilege: string[]
  /** 只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。 */
  unionid?: string
}

export interface GetUserInfo extends BaseWebAPI {}

export class GetUserInfo {
  /**
   * 获取用户信息
   *
   * 如果网页授权作用域为snsapi_userinfo，则此时开发者可以通过access_token和openid拉取用户信息了。
   *
   * 注意：此方法与 user.getUserInfo 不同
   * https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#3
   */
  async getUserInfo(options: {
    /** 网页授权接口调用凭证,注意：此access_token与基础支持的access_token不同 */
    access_token: string
    /** 用户唯一标识 */
    openid: string
    /** 返回国家地区语言版本，zh_CN 简体，zh_TW 繁体，en 英语 */
    lang?: 'zh_CN' | 'zh_TW' | 'en'
  }) {
    options = { ...{ lang: 'zh_CN' }, ...options }

    const res = await this.root.request.get(`/sns/userinfo`, {
      ...options
    })

    if (res.data.errcode) throw Error(res.data.errcode + '：' + res.data.errmsg)

    return res.isSuccess<GetUserInfoResult>()
  }
}
