import { CliInputParser } from './cliInputParser'
import { OperationConverter } from './operationConverter'
import { StockMarketInvestment } from './stockMarketInvestment'
import { ConsoleOutput } from './consoleOutput'
import { type OperationDto } from './dtos/operation.dto'
import { type Operation } from './operation'
import { type ResponseDto } from './dtos/response.dto'

process.stdin.setEncoding('utf8')

process.stdin.on('data', (input) => {
  try {
    const jsonOperationCollectionArray: OperationDto[][] = new CliInputParser(input.toString()).parse()
    const operationsCollectionArray: Operation[][] = new OperationConverter(jsonOperationCollectionArray).convert()
    const stockMarketInvestment = new StockMarketInvestment(operationsCollectionArray)
    const taxes: ResponseDto[][] = stockMarketInvestment.getTaxes();
    (new ConsoleOutput()).write(taxes)
  } catch (e) {
    console.error('An error has occurred, please try again')
  }
})
