import { TicketHandler } from '../apis/TicketHandler'
import { WechatBase } from '../Base'
import { applyMixins } from '../utils'
import { Auth } from './apis/auth'
import { Qrcode } from './apis/qrcode'
import { Template } from './apis/template'
import { User } from './apis/user'

export class BaseWebAPI {
  constructor(protected readonly root: WebAPI) {}
}

export class WebAPI extends WechatBase {
  /** 二维码 */
  qrcode = new Qrcode(this)

  /** 用户 */
  user = new User(this)

  /** 网页授权 */
  auth = new Auth(this)

  /** 模板消息 */
  template = new Template(this)
}

export interface WebAPI extends TicketHandler {}
applyMixins(WebAPI, [TicketHandler])
