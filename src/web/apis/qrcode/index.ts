import { applyMixins } from '../../../utils'
import { WebAPI } from '../../WebAPI'
import { CreateQRCode } from './CreateQRCode'

export class Qrcode {
  constructor(protected readonly root: WebAPI) {}
}

export interface Qrcode extends CreateQRCode {}
applyMixins(Qrcode, [CreateQRCode])
