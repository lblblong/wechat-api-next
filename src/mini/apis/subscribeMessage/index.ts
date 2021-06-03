import { applyMixins } from '../../../utils'
import { MiniAPI } from '../../MiniAPI'
import { Send } from './Send'

export class SubscribeMessage {
  constructor(protected readonly root: MiniAPI) {}
}

export interface SubscribeMessage extends Send {}
applyMixins(SubscribeMessage, [Send])
