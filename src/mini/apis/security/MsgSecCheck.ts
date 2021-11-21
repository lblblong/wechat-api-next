import { BaseMiniAPI } from '../../MiniAPI'

export type MsgSexCheckResult = {
  /** 0.内容正常，87014.内容含有违法违规内容 */
  errcode: number
  errmsg: string
}

export interface MsgSexCheck extends BaseMiniAPI {}

export class MsgSexCheck {
  /**
   * 检查一段文本是否含有违法违规内容。
   *
   * 应用场景举例：
   *
   * 用户个人资料违规文字检测；
   *
   * 媒体新闻类用户发表文章，评论内容检测；
   *
   * 游戏类用户编辑上传的素材(如答题类小游戏用户上传的问题及答案)检测等。 频率限制：单个 appId 调用上限为 4000 次/分钟，2,000,000 次/天*
   *
   * https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.msgSecCheck.html
   *
   */
  async msgSexCheck(options: {
    /** 待校验文本内容 */
    content: string
  }) {
    const token = await this.root.getToken()
    const res = await this.root.request.post('/wxa/msg_sec_check?access_token=' + token, {
      ...options,
    })

    return res.isSuccess<MsgSexCheckResult>()
  }
}
