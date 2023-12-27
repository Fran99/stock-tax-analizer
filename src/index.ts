import CliInputParser from './cliInputParser'
import OperationConverter from './operationConverter'
import StockMarketInvestment from './stockMarketInvestment'

process.stdin.setEncoding('utf8')

console.log('>')

process.stdin.on('data', (input) => {
  try {
    const jsonOperationCollectionArray: any[][] = new CliInputParser(input.toString()).parse()
    const operationsCollectionArray = new OperationConverter(jsonOperationCollectionArray).process()
    const stockMarketInvestment = new StockMarketInvestment(operationsCollectionArray)

    console.log(
      stockMarketInvestment.getTaxes()
    )
  } catch (e) {
    console.error('An error has occurred, please try again')
  }
})
