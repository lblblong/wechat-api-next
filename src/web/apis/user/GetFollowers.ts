import { BaseWebAPI } from '../../WebAPI'

export type GetFollowersResult = {
  /** 关注该公众账号的总用户数 */
  total: number
  /** 拉取的OPENID个数，最大值为10000 */
  count: number
  data: {
    /** 列表数据，OPENID的列表 */
    openid: string[]
  }
  /** 拉取列表的最后一个用户的OPENID */
  next_openid: string
}

export interface GetFollowers extends BaseWebAPI {}

export class GetFollowers {
  /**
   * 获取关注者列表
   * https://developers.weixin.qq.com/doc/offiaccount/User_Management/Getting_a_User_List.html
   * @returns
   */
  async getFollowers(options?: {
    /** 第一个拉取的OPENID，不填默认从头开始拉取 */
    next_openid?: string
  }) {
    const token = await this.root.getToken()
    const res = await this.root.request.get(`/cgi-bin/user/get`, {
      ...options,
      access_token: token,
    })

    return res.hasSuccess<GetFollowersResult>()
  }
}
