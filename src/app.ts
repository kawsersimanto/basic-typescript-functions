{
  function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }

  type Item = {
    title: string;
    rating: number;
  };

  function filterByRating(items: Item[]): Item[] {
    return items?.filter((item) => item?.rating >= 4 && item?.rating <= 5);
  }

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result = arrays.reduce(
      (acc, currentArray) => acc.concat(currentArray),
      []
    );
    return result;
  }

  class Vehicle {
    constructor(private make: string, private year: number) {}

    public getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
      super(make, year);
    }

    public getModel() {
      return `Model: ${this.model}`;
    }
  }

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    }

    if (typeof value === "number") {
      return value * 2;
    }

    return 0;
  }

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    const expensiveProduct = products.reduce(
      (expensiveProduct, currentProduct) =>
        currentProduct?.price > expensiveProduct?.price
          ? currentProduct
          : expensiveProduct
    );

    return expensiveProduct;
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Sunday) {
      return "Weekend";
    }

    return "Weekday";
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isPositive(n)) {
          resolve(n * n);
        } else {
          reject(new Error("Negative number not allowed"));
        }
      }, 1000);
    });
  }

  const isPositive = (value: number) => {
    return value > 0;
  };

  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}
