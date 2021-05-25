import assert from 'assert'
import { WebAPI } from '../../src'
import { webConfig } from '../config'

describe('用户', function () {
  const api = new WebAPI({ appid: webConfig.appid, appsecret: webConfig.appsecret })

  before(() => {
    return api.fetchToken()
  })

  it('获取用户信息', async () => {
    const data = await api.user.getUserInfo({ openid: 'ofL4cs7hr04cJIcu600_W-ZwwxHg' })
    assert(!!data.nickname)
  })

  it('获取关注者列表(openid)', async () => {
    const data = await api.user.getFollowers()
    assert(Array.isArray(data?.data?.openid))
  })
})
