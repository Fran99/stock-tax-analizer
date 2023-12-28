import { expect } from 'chai'
import { it, describe } from 'mocha'
import { OperationConverter } from '../../src/operationConverter'
import { Operation } from '../../src/operation'
import { type OperationDto } from '../../src/dtos/operation.dto'

describe('OperationConverter unit test', () => {
  const input: OperationDto[][] = [
    [{ operation: 'buy', 'unit-cost': 10, quantity: 100 }, { operation: 'sell', 'unit-cost': 15.00, quantity: 50 }, { operation: 'sell', 'unit-cost': 15.00, quantity: 50 }]
  ]
  const oc = new OperationConverter(input)
  const res = oc.convert()

  describe('process()', () => {
    it('Should return true if the first operation is an instance of Operation"', () => {
      expect(res[0][0] instanceof Operation).to.equal(true)
    })

    it('Should return true if the second operation is an instance of Operation"', () => {
      expect(res[0][1] instanceof Operation).to.equal(true)
    })

    it('Should return true if the third operation is an instance of Operation"', () => {
      expect(res[0][2] instanceof Operation).to.equal(true)
    })
  })
})
