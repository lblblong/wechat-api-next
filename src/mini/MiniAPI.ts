import { TicketHandler } from '../apis/TicketHandler'
import { WechatBase } from '../Base'
import { applyMixins } from '../utils'
import { Security } from './apis/security'
import { SubscribeMessage } from './apis/subscribeMessage'
import { Wxacode } from './apis/wxacode'

export class BaseMiniAPI {
  constructor(protected readonly root: MiniAPI) {}
}

export class MiniAPI extends WechatBase {
  /** 内容安全 */
  security = new Security(this)

  /** 小程序码 */
  wxacode = new Wxacode(this)
  
  /** 订阅消息 */
  subscribeMessage = new SubscribeMessage(this)
}

export interface MiniAPI extends TicketHandler {}
applyMixins(MiniAPI, [TicketHandler])
