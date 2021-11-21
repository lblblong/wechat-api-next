import { BaseWebAPI } from '../../WebAPI'

export type UpdateRemarkResult = {
  errcode: number
  errmsg: string
}


export interface UpdateRemark extends BaseWebAPI {}

export class UpdateRemark {
  /**
   * 更新用户备注名
   *
   * https://developers.weixin.qq.com/doc/offiaccount/User_Management/Configuring_user_notes.html
   *
   *
   */
  async updateRemark(
    options: {
      /** 用户标识 */
      openid: string
      /** 新的备注名，长度必须小于30字符 */
      remark: string
    }
  ) {
    const token = await this.root.getToken()
    const res = await this.root.request.post(`/cgi-bin/user/info/updateremark?access_token=${token}`, {
      ...options,
    })

    return res.isSuccess<UpdateRemarkResult>()
  }
}
