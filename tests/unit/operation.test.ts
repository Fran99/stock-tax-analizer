import { expect } from 'chai'
import { it, describe } from 'mocha'
import { Operation } from '../../src/operation'

describe('Operation unit test', () => {
  describe('isBuying()', () => {
    it('Should return true if operation === "buy"', () => {
      const op = new Operation('buy', 1, 1)
      expect(op.isBuying()).to.equal(true)
    })
    it('Should return false if operation === "sell"', () => {
      const op = new Operation('sell', 1, 1)
      expect(op.isBuying()).to.equal(false)
    })
  })

  describe('getOperationAmount()', () => {
    it('Should return the correct amount', () => {
      const op = new Operation('buy', 10, 50)
      expect(op.getOperationAmount()).to.equal(500)
    })
  })
})
