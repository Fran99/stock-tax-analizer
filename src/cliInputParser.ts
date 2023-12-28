import { type OperationDto } from './dtos/operation.dto'
import { type IParser } from './interfaces/IParser'

export class CliInputParser implements IParser {
  constructor (public data: string) {}

  parse (): OperationDto[][] {
    const parsedInput = this.data.trim().split('\n')
    return parsedInput.filter((item) => item.length > 0).map((item) => JSON.parse(item))
  }
}
