import { type Operation } from './operation'
import { TaxCalculator } from './taxCalculator'
import { type ResponseDto } from './dtos/responseDto'

export class StockMarketInvestment {
  constructor (
    private readonly operationCollectionArray: Operation[][]
  ) {}

  getTaxes (): ResponseDto[][] {
    // Loop over each collection, create a new calculator and execute
    return this.operationCollectionArray.map((operationCollection) => {
      const operationCalculator = new TaxCalculator()
      return operationCalculator.execute(operationCollection)
    })
  }
}
