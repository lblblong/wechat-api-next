import { Request } from 'lbl-request'
import { TokenHandler } from './apis/TokenHandler'
import { ApiError } from './error'
import { applyMixins, buffer2Text } from './utils'

export type WechatBaseOptions = { appid: string; appsecret: string; endpoint?: string }

export class WechatBase {
  constructor(options?: WechatBaseOptions) {
    if (!options) return

    if (options.appid) this.appid = options.appid
    if (options.appsecret) this.appsecret = options.appsecret

    if (options.endpoint) {
      this.endpoint = options.endpoint
      this.request.setBaseUrl(`https://${this.endpoint}`)
    }
  }

  appid: string
  appsecret: string

  endpoint = 'api.weixin.qq.com'

  request = new Request({
    baseURL: `https://${this.endpoint}`,
    successCondition: (result) => {
      return result.code === 0
    },
    onError: (res) => {
      throw new ApiError(res.message, res.code)
    },
    responseFormat: (result, response) => {
      let data = response.data

      // 处理图片
      if (data instanceof Buffer) {
        try {
          data = JSON.parse(buffer2Text(data))
          result.code = data.errcode || 0
          result.message = data.errmsg
          result.data = data
        } catch (err) {
          result.code = 0
          result.message = 'buffer'
          result.data = Buffer.from(data)
        }
      } else {
        result.code = data.errcode || 0
        result.message = data.errmsg
        result.data = data
      }

      return result
    },
  })

  setEndpoint = (endpoint: string) => {
    this.endpoint = endpoint
  }

  setAppid = (appid: string) => {
    this.appid = appid
  }

  setAppsecret = (appsecret: string) => {
    this.appsecret = appsecret
  }
}

export interface WechatBase extends TokenHandler {}

applyMixins(WechatBase, [TokenHandler])
