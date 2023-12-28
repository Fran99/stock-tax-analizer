export interface OperationDto {
  operation: 'buy' | 'sell'
  'unit-cost': number
  quantity: number
}
