import { BaseMiniAPI } from '../../MiniAPI'

export type SubmitPagesResult = {
  errcode: number
  errmsg: string
}

export interface SubmitPages extends BaseMiniAPI {}

export class SubmitPages {
  /**
   * 小程序开发者可以通过本接口提交小程序页面url及参数信息(不要推送webview页面)，让微信可以更及时的收录到小程序的页面信息，开发者提交的页面信息将可能被用于小程序搜索结果展示。
   * 
   * @example
   * ```ts
   * client.search.submitPages({
   *   pages: [
   *     { path: "pages/news/index", query: "id=11" },
   *     { path: "pages/article/index", query: "id=22" }
   *   ]
   * })
   * ```
   *
   * https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.msgSecCheck.html
   *
   */
  async submitPages(options: {
    /** 小程序页面信息列表 */
    pages: {
      /** 页面路径 */
      path: string
      /** 页面参数 */
      query: string
    }[]
  }) {
    const token = await this.root.getToken()
    const res = await this.root.request.post('/wxa/search/wxaapi_submitpages?access_token=' + token, {
      ...options,
    })

    return res.isSuccess<SubmitPagesResult>()
  }
}
