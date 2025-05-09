# What is the use of the keyof keyword in TypeScript?

The keyof keyword in TypeScript is used for extracting the key of a object type. In most cases, the keyof operator is used to ensure type safety, and type specificity.

## Syntax

```ts
type KeysOfType = keyof ObjectType;
```

## Example

```ts
type Human = {
  name: string;
  age: number;
  isMarried: boolean;
};

const human1: Human = {
  name: "Kamal",
  age: 24,
  isMarried: true,
};

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

console.log(getValue(human1, "isMarried"));
```

# What is the use of enums in TypeScript?

Enum is a feature of typescript that allows developer to define a group constants. Enums are used to enhance the readability of the code.

## Syntax

```ts
enum Name {
  value1,
  value2,
}

Name.value1;
```

## Example

```ts
enum Status {
  PENDING,
  COMPLETED,
  ON_HOLD,
  RETURNED,
  MISSING,
  PICKED_UP,
}

const orderStatus: Status = Status.PENDING;

if (orderStatus === Status.PENDING) {
  console.log("The order is still pending.");
}
```
