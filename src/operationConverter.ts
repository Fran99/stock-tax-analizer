import { Operation } from './operation'
import { type OperationDto } from './dtos/operation.dto'

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
 * {...} -> Instance of Operation
 *
 */
export class OperationConverter {
  constructor (public plainOperationCollectionArray: OperationDto[][]) {}

  convert (): Operation[][] {
    return this.plainOperationCollectionArray.map((plainOperationArray) => {
      return plainOperationArray.map((plainOperation: OperationDto) =>
        new Operation(plainOperation.operation, plainOperation['unit-cost'], plainOperation.quantity)
      )
    })
  }
}
