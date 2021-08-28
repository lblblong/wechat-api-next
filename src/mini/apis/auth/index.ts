import { applyMixins } from '../../../utils'
import { MiniAPI } from '../../MiniAPI'
import { Code2Session } from './Code2Session'

export class Auth {
  constructor(protected readonly root: MiniAPI) {}
}

export interface Auth extends Code2Session {}
applyMixins(Auth, [Code2Session])
