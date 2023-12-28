import { type ResponseDto } from '../dtos/responseDto'

export interface IOutput {
  write: (data: ResponseDto[][]) => void
}
