export namespace Price {
  export function formatter(price: number): string {
    return price.toFixed(2).replace(".", ",");
  }
}
