import { type IOutput } from './interfaces/IOutput'
import { type ResponseDto } from './dtos/response.dto'

export class ConsoleOutput implements IOutput {
  write (data: ResponseDto[][]): void {
    console.log(data)
  }
}
