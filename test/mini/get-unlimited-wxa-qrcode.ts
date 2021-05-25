import assert from 'assert'
import { MiniAPI } from '../../src'
import { miniConfig } from '../config'

describe('小程序二维码', function () {
  const api = new MiniAPI({ appid: miniConfig.appid, appsecret: miniConfig.appsecret })

  before(() => {
    return api.fetchToken()
  })

  it('创建小程序二维码', async () => {
    const data = await api.wxacode.getUnlimited({
      scene: `id=11`,
      page: 'pages/index/index',
    })
    assert(Buffer.isBuffer(data))
  })
})
