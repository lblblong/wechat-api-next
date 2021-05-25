import { applyMixins } from '../../../utils'
import { WebAPI } from '../../WebAPI'
import { GetAccessToken } from './GetAccessToken'
import { GetUserInfo } from './GetUserInfo'

export class Auth {
  constructor(protected readonly root: WebAPI) {}
}

export interface Auth extends GetAccessToken, GetUserInfo {}

applyMixins(Auth, [GetAccessToken, GetUserInfo])
