import { applyMixins } from '../../../utils'
import { MiniAPI } from '../../MiniAPI'
import { SubmitPages } from './SubmitPages'

export class Search {
  constructor(protected readonly root: MiniAPI) {}
}

export interface Search extends SubmitPages {}
applyMixins(Search, [SubmitPages])
