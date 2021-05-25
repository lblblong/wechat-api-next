import assert from 'assert'
import { WebAPI } from '../../src'
import { webConfig } from '../config'

describe('公众号网页登陆', function () {
  const api = new WebAPI({ appid: webConfig.appid, appsecret: webConfig.appsecret })

  before(() => {
    return api.fetchToken()
  })

  it('通过 code 获取 access_token', async () => {
    const data = await api.auth.getAccessToken({ code: '081OW0M81W3OOL1ugSN81fv8M81OW0ML' })
    assert(!!data.access_token)
  })
})
