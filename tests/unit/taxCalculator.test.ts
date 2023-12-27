import { expect } from 'chai'
import { it, describe } from 'mocha'
import { TaxCalculator } from '../../src/taxCalculator'
import { testCases } from '../data/testCases'

describe('TaxCalculator unit test', () => {
  const tc = new TaxCalculator()
  const ex = tc.execute(testCases.case7.input[0])

  describe('execute()', () => {
    it('Should return taxes for case 7', () => {
      expect(ex).to.deep.equal(testCases.case7.output[0])
    })
  })
})
