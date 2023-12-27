export class ConsoleOutput {
  constructor (public data: any[]) {}
  write (): void {
    console.log(this.data)
  }
}
