import { WechatBase } from '../Base'

export type GetTicket = () => Promise<string>
export type SetTicket = (ticket: string) => Promise<any>

let time: any, ticket: string | undefined

export class TicketHandler {
  last?: Promise<string>

  /**
   * 获取 jsapi-ticket
   *
   * 该接口成功获取 ticket 之后会调用 setTicketHandler 传入的 setTicket
   *
   */
  async fetchJsapiTicket(this: TicketHandler & WechatBase) {
    if (this.last) return this.last

    this.last = new Promise(async (ok, fail) => {
      try {
        const res = await this._fetchJsapiTicket()
        ok(res)
      } catch (err) {
        fail(err)
      } finally {
        this.last = undefined
      }
    })
    return this.last
  }

  async _fetchJsapiTicket(this: TicketHandler & WechatBase) {
    const token = await this.getToken()
    const res = await this.request.get('/cgi-bin/ticket/getticket', {
      access_token: token,
      type: 'jsapi',
    })

    const { ticket } = res.isSuccess()

    await this.setTicket(ticket)
    return ticket
  }

  async getTicket(this: TicketHandler & WechatBase) {
    if (!ticket) {
      return await this.fetchJsapiTicket()
    }
    return ticket
  }

  async setTicket(_ticket: string) {
    clearTimeout(time)
    ticket = _ticket
    time = setTimeout(() => {
      ticket = undefined
    }, 1000 * 60 * 90)
  }

  setJsapiTicketHandler(handlers: { getTicket: GetTicket; setTicket: SetTicket }) {
    this.getTicket = handlers.getTicket
    this.setTicket = handlers.setTicket
  }
}
