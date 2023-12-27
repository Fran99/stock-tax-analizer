export class Operation {
  constructor (public operation: 'buy' | 'sell', public unitCost: number, public qty: number) {}

  isBuying (): boolean {
    return this.operation === 'buy'
  }

  getOperationAmount (): number {
    return this.unitCost * this.qty
  }
}
