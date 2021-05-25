import assert from 'assert'
import { MiniAPI } from '../../src'
import { miniConfig } from '../config'

describe('内容检测', function () {
  const api = new MiniAPI({ appid: miniConfig.appid, appsecret: miniConfig.appsecret })

  before(() => {
    return api.fetchToken()
  })

  it('检测文本', async () => {
    const data = await api.security.msgSexCheck({
      content: '',
    })
    assert(data.errcode === 0)
  })
})
