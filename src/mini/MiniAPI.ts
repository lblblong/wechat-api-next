import { TicketHandler } from '../apis/TicketHandler'
import { WechatBase } from '../Base'
import { applyMixins } from '../utils'
import { Auth } from './apis/auth'
import { Search } from './apis/search'
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

  /** 登录 */
  auth = new Auth(this)

  /** 小程序搜索 */
  search = new Search(this)
}

export interface MiniAPI extends TicketHandler {}
applyMixins(MiniAPI, [TicketHandler])
