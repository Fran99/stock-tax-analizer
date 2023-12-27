import { Operation } from '../../src/operation'

export const testCases = {
  case1: {
    input: [
      [
        new Operation('buy', 10.00, 100),
        new Operation('sell', 15.00, 50),
        new Operation('sell', 15.00, 50)
      ]
    ],
    output: [[
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 }
    ]]
  },
  case2: {
    input: [
      [
        new Operation('buy', 10.00, 10000),
        new Operation('sell', 20.00, 5000),
        new Operation('sell', 5.00, 5000)
      ]
    ],
    output: [[
      { tax: 0.00 },
      { tax: 10000.00 },
      { tax: 0.00 }
    ]]
  },
  case3: {
    input: [
      [
        new Operation('buy', 10.00, 10000),
        new Operation('sell', 5.00, 5000),
        new Operation('sell', 20.00, 3000)
      ]
    ],
    output: [[
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 1000.00 }
    ]]
  },
  case4: {
    input: [
      [
        new Operation('buy', 10.00, 10000),
        new Operation('buy', 25.00, 5000),
        new Operation('sell', 15.00, 10000)
      ]
    ],
    output: [[
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 }
    ]]
  },
  case5: {
    input: [
      [
        new Operation('buy', 10.00, 10000),
        new Operation('buy', 25.00, 5000),
        new Operation('sell', 15.00, 10000),
        new Operation('sell', 25.00, 5000)
      ]
    ],
    output: [[
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 10000.00 }
    ]]
  },
  case6: {
    input: [
      [
        new Operation('buy', 10.00, 10000),
        new Operation('sell', 2.00, 5000),
        new Operation('sell', 20.00, 2000),
        new Operation('sell', 20.00, 2000),
        new Operation('sell', 25.00, 1000)
      ]
    ],
    output: [[
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 3000.00 }
    ]]
  },
  case7: {
    input: [
      [
        new Operation('buy', 10.00, 10000),
        new Operation('sell', 2.00, 5000),
        new Operation('sell', 20.00, 2000),
        new Operation('sell', 20.00, 2000),
        new Operation('sell', 25.00, 1000),
        new Operation('buy', 20.00, 10000),
        new Operation('sell', 15.00, 5000),
        new Operation('sell', 30.00, 4350),
        new Operation('sell', 30.00, 650)
      ]
    ],
    output: [[
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 3000.00 },
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 3700.00 },
      { tax: 0.00 }
    ]]
  },
  case8: {
    input: [
      [
        new Operation('buy', 10.00, 10000),
        new Operation('sell', 50.00, 10000),
        new Operation('buy', 20.00, 10000),
        new Operation('sell', 50.00, 10000)
      ]
    ],
    output: [[
      { tax: 0.00 },
      { tax: 80000.00 },
      { tax: 0.00 },
      { tax: 60000.00 }
    ]]
  },
  case9: {
    input: [
      [
        new Operation('buy', 5000.00, 10),
        new Operation('sell', 4000.00, 5),
        new Operation('buy', 15000.00, 5),
        new Operation('buy', 4000.00, 2),
        new Operation('buy', 23000.00, 2),
        new Operation('sell', 20000.00, 1),
        new Operation('sell', 12000.00, 10),
        new Operation('sell', 15000.00, 3)
      ]
    ],
    output: [[
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 0.00 },
      { tax: 1000.00 },
      { tax: 2400.00 }

    ]]
  }

}
