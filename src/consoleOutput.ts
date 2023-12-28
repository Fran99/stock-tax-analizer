import { type IOutput } from './interfaces/IOutput'
import { type ResponseDto } from './dtos/responseDto'

export class ConsoleOutput implements IOutput {
  write (data: ResponseDto[][]): void {
    console.log(data)
  }
}
