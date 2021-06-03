import { MiniAPI } from '../../src'
import { miniConfig } from '../config'

describe('内容安全', function() {
  const api = new MiniAPI({ appid: miniConfig.appid, appsecret: miniConfig.appsecret })

  beforeAll(() => {
    return api.fetchToken()
  })

  it('检测文本', async () => {
    const data = await api.security.msgSexCheck({
      content: ''
    })
    expect(data.errcode).toEqual(0)
  })
})
