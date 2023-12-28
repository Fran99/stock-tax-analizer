import { type ResponseDto } from '../dtos/response.dto'

export interface IOutput {
  write: (data: ResponseDto[][]) => void
}
