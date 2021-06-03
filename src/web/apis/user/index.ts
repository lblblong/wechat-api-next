import { applyMixins } from '../../../utils'
import { WebAPI } from '../../WebAPI'
import { GetFollowers } from './GetFollowers'
import { GetUserInfo } from './GetUserInfo'
import { UpdateRemark } from './UpdateRemark'

export class User {
  constructor(protected readonly root: WebAPI) {}
}

export interface User extends GetFollowers, GetUserInfo, UpdateRemark {}
applyMixins(User, [GetFollowers, GetUserInfo, UpdateRemark])
