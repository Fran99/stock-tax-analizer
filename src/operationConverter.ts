import { Operation } from './operation'

/**
 * Transforms a plain JS array into an array of operation collections.
 *
 * plainOperationCollectionArray
 * [
 *  [{...}, {...}, {...}] -> each line is an independent simulation, a collection of operations
 *  [{...}, {...}, {...}] -> ...
 *  [{...}, {...}, {...}] -> ...
 * ]
 *
 * plainOperationCollection
 * [{...}, {...}, {...}]
 *
 * plainOperation
 * {...}
 *
 */
export class OperationConverter {
  constructor (public plainOperationCollectionArray: any[][]) {}

  process (): Operation[][] {
    return this.plainOperationCollectionArray.map((plainOperationArray) => {
      return plainOperationArray.map((plainOperation: { operation: 'buy' | 'sell', ['unit-cost']: number, quantity: number }) =>
        new Operation(plainOperation.operation, plainOperation['unit-cost'], plainOperation.quantity)
      )
    })
  }
}
