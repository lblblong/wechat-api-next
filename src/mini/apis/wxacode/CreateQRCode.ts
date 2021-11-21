import { BaseMiniAPI } from '../../MiniAPI'

export interface CreateQRCode extends BaseMiniAPI {}

export class CreateQRCode {
  /**
   * 获取小程序二维码，适用于需要的码数量较少的业务场景。通过该接口生成的小程序码，永久有效，有数量限制。
   * https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.createQRCode.html
   */
  async createQRCode(options: {
    /** 扫码进入的小程序页面路径，最大长度 128 字节，不能为空；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"，即可在 wx.getLaunchOptionsSync 接口中的 query 参数获取到 {foo:"bar"}。 */
    path: string
    /** 二维码的宽度，单位 px。最小 280px，最大 1280px */
    width?: number
  }) {
    const token = await this.root.getToken()
    const res = await this.root.request.post(
      `/cgi-bin/wxaapp/createwxaqrcode?access_token=${token}`,
      {
        ...options,
      },
      {
        responseType: 'arraybuffer',
      }
    )

    return res.isSuccess<Buffer>()
  }
}
