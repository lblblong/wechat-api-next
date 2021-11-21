import { BaseWebAPI } from '../../WebAPI'

export type GetAccessTokenResult = {
  /** 网页授权接口调用凭证,注意：此access_token与基础支持的access_token不同 */
  access_token: string
  /** access_token接口调用凭证超时时间，单位（秒） */
  expires_in: number
  /** 用户刷新access_token */
  refresh_token: string
  /** 用户唯一标识，请注意，在未关注公众号时，用户访问公众号的网页，也会产生一个用户和公众号唯一的OpenID */
  openid: string
  /** 用户授权的作用域，使用逗号（,）分隔 */
  scope: string
}

export interface GetAccessToken extends BaseWebAPI {}

export class GetAccessToken {
  /**
   * 通过用户 Code 获取网页授权 access_token
   * https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#1
   */
  async getAccessToken(options: { code: string }) {
    const res = await this.root.request.get(`/sns/oauth2/access_token`, {
      ...options,
      appid: this.root.appid,
      secret: this.root.appsecret,
      grant_type: 'authorization_code',
    })

    if (res.data.errcode) throw Error(res.data.errcode + '：' + res.data.errmsg)

    return res.isSuccess<GetAccessTokenResult>()
  }
}
