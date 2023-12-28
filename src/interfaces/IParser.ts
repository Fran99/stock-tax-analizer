import { type OperationDto } from '../dtos/operation.dto'

export interface IParser {
  parse: () => OperationDto[][]
}
