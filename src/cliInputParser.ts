export class CliInputParser {
  constructor (public data: string) {}
  parse (): any[] {
    const parsedInput = this.data.trim().split('\n')
    return parsedInput.filter((item) => item.length > 0).map((item) => JSON.parse(item))
  }
}
