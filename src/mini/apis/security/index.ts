import { applyMixins } from '../../../utils'
import { MiniAPI } from '../../MiniAPI'
import { MsgSexCheck } from './MsgSecCheck'

export class Security {
  constructor(protected readonly root: MiniAPI) {}
}

export interface Security extends MsgSexCheck {}
applyMixins(Security, [MsgSexCheck])
