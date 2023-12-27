import { type Operation } from './operation'
import { TaxCalculator } from './taxCalculator'

export class StockMarketInvestment {
  constructor (
    private readonly operationCollectionArray: Operation[][]
  ) {}

  getTaxes (): any[] {
    return this.operationCollectionArray.map((operationCollection) => {
      const operationCalculator = new TaxCalculator()
      return operationCalculator.execute(operationCollection)
    })
  }
}
