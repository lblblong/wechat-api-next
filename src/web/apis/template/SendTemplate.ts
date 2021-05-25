import { BaseWebAPI } from '../../WebAPI'

export type SendTemplateResult = {
  errcode: number
  errmsg: string
  msgid: number
}

export interface SendTemplate extends BaseWebAPI {}

export class SendTemplate {
  /**
   * 发送模板消息
   *
   * https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Template_Message_Interface.html#5
   *
   * 注：url和miniprogram都是非必填字段，若都不传则模板无跳转；若都传，会优先跳转至小程序。开发者可根据实际需要选择其中一种跳转方式即可。当用户的微信客户端版本不支持跳小程序时，将会跳转至url。
   */
  async sendTemplate(options: {
    /** 接收者openid */
    touser: string
    /** 模板ID */
    template_id: string
    /** 模板数据 */
    data: {
      [key: string]: {
        value: string
        color?: string
      }
    }
    /** 模板内容字体颜色，不填默认为黑色 */
    color?: string
    /** 模板跳转链接（海外帐号没有跳转能力） */
    url?: string
    /** 跳小程序所需数据，不需跳小程序可不用传该数据 */
    miniprogram?: {
      /** 所需跳转到的小程序appid（该小程序appid必须与发模板消息的公众号是绑定关联关系，暂不支持小游戏） */
      appid: string
      /** 所需跳转到小程序的具体页面路径，支持带参数,（示例index?foo=bar），要求该小程序已发布，暂不支持小游戏 */
      pagepath: string
    }
  }) {
    const token = await this.root.getToken()
    const res = await this.root.request.post('/cgi-bin/message/template/send?access_token=' + token, {
      ...options,
    })

    return res.hasSuccess<SendTemplateResult>()
  }
}
