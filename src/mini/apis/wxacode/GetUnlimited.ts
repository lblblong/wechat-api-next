import { BaseMiniAPI } from '../../MiniAPI'

export interface GetUnlimited extends BaseMiniAPI {}

export class GetUnlimited {
  /**
   * 获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制。
   * 
   * 需要注意的是，该方法需要在小程序发布了正式版才可正常调用，否则会获得报错：41030 invalid page rid
   * 
   * https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html
   */
  async getUnlimited(options: {
    /** 最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式） */
    scene: string
    /** 必须是已经发布的小程序存在的页面（否则报错），例如 pages/index/index, 根路径前不要填加 /,不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面 */
    page?: string
    /** 二维码的宽度，单位 px，最小 280px，最大 1280px */
    width?: number
    /** 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false */
    auto_color?: boolean
    /** auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示 */
    line_color?: { r: number; g: number; b: number }
    /** 是否需要透明底色，为 true 时，生成透明底色的小程序 */
    is_hyaline?: boolean
  }) {
    const token = await this.root.getToken()
    const res = await this.root.request.post(
      `/wxa/getwxacodeunlimit?access_token=${token}`,
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
