import { type Operation } from './operation'
import { type ResponseDto } from './dtos/response.dto'

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
    // Round decimals to the nearest hundredth
    this.weightedAverage = parseFloat(this.weightedAverage.toFixed(2))
    // Add stocks to the overall count
    this.stocksQty += operation.qty

    // Buying stocks do not pay taxes
    return 0
  }

  private sellWithProfit (operation: Operation): number {
    this.stocksQty -= operation.qty
    // Calculates the operation's profit
    const operationProfit = ((operation.unitCost - this.weightedAverage) * operation.qty)
    // Deduct the losses
    const profitBeforeTax = operationProfit - this.losses
    // Recalculate the losses
    this.losses = Math.max(this.losses - operationProfit, 0)

    // If only losses have been deducted without generating any profit, return 0;
    // Otherwise, return the applicable taxes
    return profitBeforeTax > 0 ? profitBeforeTax * this.taxPercentage : 0
  }

  private sellWithLoss (operation: Operation): number {
    this.stocksQty -= operation.qty
    // Add losses
    this.losses += (this.weightedAverage - operation.unitCost) * operation.qty
    // Do not pay taxes
    return 0
  }

  private sellWithinLimit (operation: Operation): number {
    // Operation is less than the limit; does not pay taxes nor touches the losses
    this.stocksQty -= operation.qty
    return 0
  }
}
