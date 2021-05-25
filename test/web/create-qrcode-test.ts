import assert from 'assert'
import { QRCode, WebAPI } from '../../src'
import { webConfig } from '../config'

describe('二维码', function () {
  const api = new WebAPI({ appid: webConfig.appid, appsecret: webConfig.appsecret })

  before(() => {
    return api.fetchToken()
  })

  it('创建二维码', async () => {
    const data = await api.qrcode.createQRCode({
      type: QRCode.temporary,
      scene_str: 'login',
      expire_seconds: 300 * 50,
    })
    assert(!!data.url)
  })
})
