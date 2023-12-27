import { type Operation } from './operation'

interface Tax {
  tax: number
}

/**
 * Class in charge of calculate taxes of a collection of operations.
 */
export class TaxCalculator {
  private readonly taxes: Tax[] = []
  private losses = 0
  private weightedAverage = 0
  private stocksQty = 0
  private currentOperation!: Operation
  private readonly taxPercentage = 20 / 100
  private readonly limit = 20000

  execute (operationCollection: Operation[]): Tax[] {
    return operationCollection.map((operation: Operation) => {
      this.currentOperation = operation
      if (operation.isBuying()) { return this.buy() }
      if (operation.unitCost < this.weightedAverage) { return this.sellWithLoss() }
      if (operation.getOperationAmount() <= this.limit) { return this.sellWithinLimit() }
      return this.sellWithProfit()
    }).map(amount => {
      return { tax: amount }
    })
  }

  buy (): number {
    // Every buy we need to calculate the weighted average price.
    this.weightedAverage = ((this.stocksQty * this.weightedAverage) +
            (this.currentOperation.qty * this.currentOperation.unitCost)) /
            (this.stocksQty + this.currentOperation.qty)
    this.weightedAverage = parseFloat(this.weightedAverage.toFixed(2))
    // Add stocks to the overall count
    this.stocksQty += this.currentOperation.qty

    // Buying stocks do not pay taxes
    return 0
  }

  sellWithProfit (): number {
    this.stocksQty -= this.currentOperation.qty
    const profit = ((this.currentOperation.unitCost - this.weightedAverage) * this.currentOperation.qty) - this.losses
    this.losses -= (this.currentOperation.unitCost - this.weightedAverage) * this.currentOperation.qty
    if (this.losses < 0) this.losses = 0
    return profit > 0 ? profit * this.taxPercentage : 0
  }

  sellWithLoss (): number {
    this.stocksQty -= this.currentOperation.qty
    this.losses += (this.weightedAverage - this.currentOperation.unitCost) * this.currentOperation.qty
    return 0
  }

  sellWithinLimit (): number {
    this.stocksQty -= this.currentOperation.qty
    return 0
  }
}
