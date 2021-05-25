import assert from 'assert'
import { MiniAPI } from '../../src'
import { miniConfig } from '../config'

describe('订阅消息', function () {
  const api = new MiniAPI({ appid: miniConfig.appid, appsecret: miniConfig.appsecret })

  before(() => {
    return api.fetchToken()
  })

  it('发送订阅消息', async () => {
    const data = await api.subscribeMessage.send({
      touser: miniConfig.openids[0],
      template_id: 'UI9qgCk0e0YHFJdyKrCQeGQtBU8TZ4WAZZX55vcBprM',
      data: {
        thing2: {
          value: 'wechat-api-next',
        },
        thing5: {
          value: '申请通过',
        },
        date3: {
          value: '2020-02-05',
        },
      },
    })

    assert(data.errcode === 0)
  })
})
