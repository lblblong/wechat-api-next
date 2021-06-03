import { BaseMiniAPI } from '../../MiniAPI'

export type SubscribeMessageSendResult = {
  errcode: number
  errmsg: string
}

export interface Send extends BaseMiniAPI {}

export class Send {
  /**
   * 发送订阅消息
   *
   * https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html
   *
   * @throws {ApiError}
   */
  async send(options: {
    /** 接收者openid */
    touser: string
    /** 模板ID */
    template_id: string
    /** 模板数据 */
    data: {
      [key: string]: {
        value: string
      }
    }
    /** 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。 */
    page?: string
    /** 跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版 */
    miniprogram_state?: 'developer' | 'trial' | 'formal'
    /** 进入小程序查看”的语言类型，支持zh_CN(简体中文)、en_US(英文)、zh_HK(繁体中文)、zh_TW(繁体中文)，默认为zh_CN */
    lang?: string
  }) {
    const token = await this.root.getToken()
    const res = await this.root.request.post('/cgi-bin/message/subscribe/send?access_token=' + token, {
      ...options,
    })

    return res.hasSuccess<SubscribeMessageSendResult>()
  }
}
