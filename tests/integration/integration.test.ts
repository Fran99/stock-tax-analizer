import { expect } from 'chai'

import { describe, it } from 'mocha'

import { StockMarketInvestment } from '../../src/stockMarketInvestment'
import { testCases } from '../data/testCases'

describe('Integrations tests', () => {
  describe('Case 1', () => {
    it('Should return taxes for case 1', () => {
      const s = new StockMarketInvestment(testCases.case1.input).getTaxes()
      expect(s).to.deep.equal(testCases.case1.output)
    })
  })

  describe('Case 2', () => {
    it('Should return taxes for case 2', () => {
      const s = new StockMarketInvestment(testCases.case2.input).getTaxes()
      expect(s).to.deep.equal(testCases.case2.output)
    })
  })

  describe('Case 3', () => {
    it('Should return taxes for case 3', () => {
      const s = new StockMarketInvestment(testCases.case3.input).getTaxes()
      expect(s).to.deep.equal(testCases.case3.output)
    })
  })

  describe('Case 4', () => {
    it('Should return taxes for case 4', () => {
      const s = new StockMarketInvestment(testCases.case4.input).getTaxes()
      expect(s).to.deep.equal(testCases.case4.output)
    })
  })

  describe('Case 5', () => {
    it('Should return taxes for case 5', () => {
      const s = new StockMarketInvestment(testCases.case5.input).getTaxes()
      expect(s).to.deep.equal(testCases.case5.output)
    })
  })

  describe('Case 6', () => {
    it('Should return taxes for case 6', () => {
      const s = new StockMarketInvestment(testCases.case6.input).getTaxes()
      expect(s).to.deep.equal(testCases.case6.output)
    })
  })

  describe('Case 7', () => {
    it('Should return taxes for case 7', () => {
      const s = new StockMarketInvestment(testCases.case7.input).getTaxes()
      expect(s).to.deep.equal(testCases.case7.output)
    })
  })

  describe('Case 8', () => {
    it('Should return taxes for case 8', () => {
      const s = new StockMarketInvestment(testCases.case8.input).getTaxes()
      expect(s).to.deep.equal(testCases.case8.output)
    })
  })

  describe('Case 9', () => {
    it('Should return taxes for case 9', () => {
      const s = new StockMarketInvestment(testCases.case9.input).getTaxes()
      expect(s).to.deep.equal(testCases.case9.output)
    })
  })
})
