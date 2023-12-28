import { type Operation } from './operation'
import { type ResponseDto } from './dtos/responseDto'

/**
 * Class in charge of calculate taxes of a collection of operations.
 */
export class TaxCalculator {
  private losses = 0
  private weightedAverage = 0
  private stocksQty = 0
  private readonly taxPercentage = 20 / 100
  private readonly limit = 20000

  execute (operationCollection: Operation[]): ResponseDto[] {
    return operationCollection.map((operation: Operation) => {
      if (operation.isBuying()) { return this.buy(operation) }
      if (operation.unitCost < this.weightedAverage) { return this.sellWithLoss(operation) }
      if (operation.getOperationAmount() <= this.limit) { return this.sellWithinLimit(operation) }
      return this.sellWithProfit(operation)
    }).map(amount => {
      return { tax: amount }
    })
  }

  private buy (operation: Operation): number {
    // Every buy we need to calculate the weighted average price.
    this.weightedAverage = ((this.stocksQty * this.weightedAverage) +
            (operation.qty * operation.unitCost)) /
            (this.stocksQty + operation.qty)
    this.weightedAverage = parseFloat(this.weightedAverage.toFixed(2))
    // Add stocks to the overall count
    this.stocksQty += operation.qty

    // Buying stocks do not pay taxes
    return 0
  }

  private sellWithProfit (operation: Operation): number {
    this.stocksQty -= operation.qty
    const profit = ((operation.unitCost - this.weightedAverage) * operation.qty) - this.losses
    this.losses -= (operation.unitCost - this.weightedAverage) * operation.qty
    if (this.losses < 0) this.losses = 0

    return profit > 0 ? profit * this.taxPercentage : 0
  }

  private sellWithLoss (operation: Operation): number {
    this.stocksQty -= operation.qty
    this.losses += (this.weightedAverage - operation.unitCost) * operation.qty
    return 0
  }

  private sellWithinLimit (operation: Operation): number {
    this.stocksQty -= operation.qty
    return 0
  }
}
