import { applyMixins } from '../../../utils'
import { WebAPI } from '../../WebAPI'
import { SendTemplate } from './SendTemplate'

export class Template {
  constructor(protected readonly root: WebAPI) {}
}

export interface Template extends SendTemplate {}
applyMixins(Template, [SendTemplate])
