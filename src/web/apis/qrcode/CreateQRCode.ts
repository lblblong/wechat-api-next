import { BaseWebAPI } from '../../WebAPI'

export enum QRCode {
  /** 临时 */
  temporary,
  /** 永久 */
  permanent,
}

export interface IQRCodeResult {
  /** 获取的二维码ticket，凭借此ticket可以在有效时间内换取二维码。 */
  ticket: string
  /** 该二维码有效时间，以秒为单位。 最大不超过2592000（即30天）。 */
  expire_seconds: number
  /** 二维码图片解析后的地址，开发者可根据该地址自行生成需要的二维码图片 */
  url: string
  /** 获取二维码图片 */
  ticket_url: string
}

export interface CreateQRCode extends BaseWebAPI {}

export class CreateQRCode {
  /**
   * 创建二维码
   * https://developers.weixin.qq.com/doc/offiaccount/Account_Management/Generating_a_Parametric_QR_Code.html
   * @returns
   */
  async createQRCode(options: {
    /** type 二维码类型：临时、永久 */
    type: QRCode
    /** 场景值ID（字符串形式的ID），字符串类型，长度限制为1到64 */
    scene_str: string
    /** 该二维码有效时间，以秒为单位。 最大不超过2592000（即30天），此字段如果不填，则默认有效期为30秒。 */
    expire_seconds?: number
  }) {
    const token = await this.root.getToken()
    const res = await this.root.request.post(`/cgi-bin/qrcode/create?access_token=${token}`, {
      action_name: options.type === QRCode.temporary ? 'QR_STR_SCENE' : 'QR_LIMIT_SCENE',
      action_info: {
        scene: {
          scene_str: options.scene_str,
        },
      },
      ...{ expire_seconds: options.expire_seconds },
    })

    const data = res.isSuccess()

    return {
      ...data,
      ticket_url: 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + data.ticket,
    } as IQRCodeResult
  }
}
