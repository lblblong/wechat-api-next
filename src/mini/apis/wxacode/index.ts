import { applyMixins } from '../../../utils'
import { MiniAPI } from '../../MiniAPI'
import { CreateQRCode } from './CreateQRCode'
import { GetUnlimited } from './GetUnlimited'

export class Wxacode {
  constructor(protected readonly root: MiniAPI) {}
}

export interface Wxacode extends CreateQRCode, GetUnlimited {}
applyMixins(Wxacode, [CreateQRCode, GetUnlimited])
