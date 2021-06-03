import { WechatBase } from '../Base'

export type GetTicket = () => Promise<string>
export type SetTicket = (ticket: string) => Promise<any>

let time: any, ticket: string | undefined

export class TicketHandler {
  async fetchJsapiTicket(this: TicketHandler & WechatBase) {
    const token = await this.getToken()
    const res = await this.request.get('/cgi-bin/ticket/getticket', {
      access_token: token,
      type: 'jsapi',
    })

    const { ticket } = res.hasSuccess()

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
