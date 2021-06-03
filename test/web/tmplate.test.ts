import { WebAPI } from '../../src'
import { webConfig } from '../config'

describe('模板消息', function() {
  const api = new WebAPI({ appid: webConfig.appid, appsecret: webConfig.appsecret })

  beforeAll(() => {
    return api.fetchToken()
  })

  it('发送模板消息', async () => {
    const data = await api.template.sendTemplate({
      touser: webConfig.openids[0],
      template_id: 'NptQ_8pnU72Z7OGvARHP3riKQFeMuyQkLguRWrbYSD8',
      data: {
        user_name: {
          value: 'wechat-web-api',
          color: 'red'
        },
        birthday: {
          value: '2021-05-25'
        }
      }
    })
    expect(data.msgid).not.toBeNull()
  })
})
