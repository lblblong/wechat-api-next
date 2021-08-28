import { MiniAPI } from '../../src'
import { miniConfig } from '../config'

describe('登录', function () {
  const api = new MiniAPI({ appid: miniConfig.appid, appsecret: miniConfig.appsecret })

  beforeAll(() => {
    return api.fetchToken()
  })

  it('code2Session', async () => {
    const data = await api.auth.code2Session({
      js_code: '053b75ll2fyaE74z1Wkl258UaR2b75ls',
    })
    console.log(data)
    expect(data.openid).not.toBeNull()
  })
})
