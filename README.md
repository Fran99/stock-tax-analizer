# Nubank | Capital Gains

### Overview:
Capital Gains, implemented in TypeScript, is a command-line application (CLI) that evaluates the tax implications of a stock market investment through the analysis of profits or losses.

### How to run the CLI?
- You need to have Node.js v18.16.0 or above installed in your system
- In the terminal, in the project root run `npm install`

#### Commands:
- `npm run cli`: runs the cli with no data waiting for input
- `npm run cli:data`: runs the CLI with all the test cases from a file
- `npm run test`: runs all the tests (unit and integration)
- `npm run test:integration`: runs all the integration tests
- `npm run test:unit`: runs all the unit tests
- `npm run coverage`: runs all the tests with coverage

The folder /data contains all the cases specified in the requirements if needed.

#### Dependencies:
- `ts-node`: Enables running TypeScript files directly in Node.js without pre-compiling to JavaScript.
- `mocha`: Test framework for JavaScript and Node.js.
- `chai`: Assertion library for Node.js and browsers.
- `eslint`: Linting tool for identifying and fixing problems in JavaScript and TypeScript

### System requirements:
1. The program will accept arrays, each line representing stock market operations encoded in JSON.
2. Each set of operations is isolated, ensuring no sharing of states.
3. The operations are presented in chronological order.
4. For each input line, the program is expected to output an array indicating the corresponding taxes to be paid.

### Rules:
1. The tax percentage, calculated at 20% of the operation's profit, considers a weighted average price for stocks, taking into account varying purchase prices.
2. The weighted-average price dynamically adjusts with each stock purchase, using a formula that incorporates the current and new stock quantities and their respective prices.
   For example, if 10 stocks are initially bought at $20.00, 5 are sold, and another 5 are bought at $10.00, the weighted average is computed as ((5 * 20.00) + (5 * 10.00)) / (5 + 5) = $15.00.
3. Losses, denoted by selling at a price lower than the weighted average buying price, exempt transactions from taxes. Losses must be deducted from subsequent profits before calculating taxes, with past losses applied to multiple future profits until the entire amount is offset.
4. No taxes apply if the total amount (unit cost of selling multiplied by quantity) is less than or equal to $20,000.00. However, losses should be subtracted from future profits, emphasizing the use of the total amount rather than just the profit to determine tax liability.
5. You do not pay any taxes for buying stocks.

### Class overview:
1. __CliInputParser__: Parses a string input into an array of collections of operation data transfer objects (DTO).
2. __OperationConverter__: Accepts the Operation DTO and transforms it into a data structure based on instances of the Operation class.
3. __Operation__: Responsible for instantiation for each OperationDto.
4. __StockMarketInvestment__: The primary class of the program. Accepts an array of operation collections and executes a specific task, in this case, calculating the taxes to be paid.
5. __TaxCalculator__: Conducts tax calculations for each given collection and provides a response, representing the calculated taxes.
6. __ConsoleOutput__: Writes to the stdout

### Activity diagram:

```
               ┌──────────────────┐
               │      stdin       │
               └────────┬─────────┘
                        │
               ┌────────▼─────────┐
               │  CliInputParser  │
               └────────┬─────────┘
                        │
               ┌────────▼─────────┐
               │OperationConverter│
               └────────┬─────────┘
                        │
          ┌─────────────▼───────────────┐
       ┌──┤    StockMarketInvestment    ├──┐
       │  └─────────────┬───────────────┘  │
       │                │                  │
       │                │                  │
       │                │                  │
┌──────▼──────┐  ┌──────▼──────┐  ┌────────▼─────┐
│ Operation[] │  │ Operation[] │  │  Operation[] │
└──────┬──────┘  └──────┬──────┘  └────────┬─────┘
       │                │                  │
       │                │                  │
┌──────▼──────┐  ┌──────▼──────┐  ┌────────▼─────┐
│ Calculator  │  │ Calculator  │  │  Calculator  │
└──────┬──────┘  └─────────────┘  └────────┬─────┘
       │                                   │
       │       ┌──────────────────┐        │
       └───────┤  ResponseDto[][] ├────────┘
               └─────────┬────────┘
                         │
                  ┌──────▼─────┐
                  │   stdout   │
                  └────────────┘
```
