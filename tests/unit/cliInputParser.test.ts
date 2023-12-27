import { expect } from 'chai'
import { it, describe } from 'mocha'
import { CliInputParser } from '../../src/cliInputParser'

describe('CliInputParser unit test', () => {
  describe('parse()', () => {
    it('Input data 1', () => {
      const input = '[{"operation":"buy","unit-cost":10.00,"quantity": 10000}]'
      const parsedData = new CliInputParser(input).parse()
      expect(Array.isArray(parsedData)).to.equal(true)
      expect(Array.isArray(parsedData[0])).to.equal(true)
      expect(parsedData[0][0].operation).to.equal('buy')
    })

    it('Input data 2', () => {
      const input = '[{"operation":"buy","unit-cost":10.00,"quantity": 10000},{"operation":"sell","unit-cost":20.00,"quantity": 5000}]'
      const parsedData = new CliInputParser(input).parse()
      expect(Array.isArray(parsedData)).to.equal(true)
      expect(Array.isArray(parsedData[0])).to.equal(true)
      expect(parsedData[0][1].operation).to.equal('sell')
    })

    it('Input data 3', () => {
      const input = `
      [{"operation":"buy","unit-cost":10.00,"quantity": 10000},{"operation":"sell","unit-cost":20.00,"quantity": 5000}]
      [{"operation":"buy","unit-cost":2.00,"quantity": 3000},{"operation":"sell","unit-cost":20.00,"quantity": 3000}]`
      const parsedData = new CliInputParser(input).parse()
      expect(Array.isArray(parsedData)).to.equal(true)
      expect(Array.isArray(parsedData[1])).to.equal(true)
      expect(parsedData[1][0].operation).to.equal('buy')
    })
  })
})
