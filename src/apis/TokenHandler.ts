import { WechatBase } from '../Base'

export type GetToken = () => Promise<string>
export type SetToken = (token: string) => Promise<any>

let time: any, token: string | undefined

export class TokenHandler {
  /**
   * 获取 AccessToken
   *
   * 该接口成功获取 token 之后会调用 setTokenHandler 传入的 setToken
   *
   * https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html
   *
   */
  async fetchToken(this: TokenHandler & WechatBase) {
    const res = await this.request.get('/cgi-bin/token', {
      grant_type: 'client_credential',
      appid: this.appid,
      secret: this.appsecret,
    })

    const { access_token } = res.hasSuccess()

    await this.setToken(access_token)
    return access_token
  }

  async getToken(this: TokenHandler & WechatBase) {
    if (!token) {
      return await this.fetchToken()
    }
    return token
  }

  async setToken(_token: string) {
    clearTimeout(time)
    token = _token
    time = setTimeout(() => {
      token = undefined
    }, 1000 * 60 * 90)
  }

  setTokenHandler(handlers: { getToken: GetToken; setToken: SetToken }) {
    this.getToken = handlers.getToken
    this.setToken = handlers.setToken
  }
}
