import { type Operation } from './operation'
import { TaxCalculator } from './taxCalculator'

export default class StockMarketInvestment {
  constructor (
    private readonly operationCollectionArray: Operation[][]
  ) {}

  getTaxes (): any[] {
    const results: any[] = []
    this.operationCollectionArray.forEach((operationCollection) => {
      const operationCalculator = new TaxCalculator()
      const operationResult = operationCalculator.execute(operationCollection)
      results.push(operationResult)
    })
    return results
  }
}
