<!-- Zod Interview Questions -->
# 📚 Interview Questions & Answers

## 1. What is Zod?

### Answer

Zod is a TypeScript-first schema validation library that helps validate data at runtime while providing automatic TypeScript type inference.

### Example

```ts
const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});
```

### Key Points

* Runtime Validation
* Type Safety
* Automatic Type Inference
* Better Error Handling

---

## 2. Why do we need Zod?

### Answer

Zod helps ensure that incoming data matches the expected structure and type before it is processed by the application.

### Benefits

* Prevents invalid data
* Reduces runtime errors
* Improves code reliability
* Provides detailed validation errors

---

## 3. What is the difference between parse() and safeParse()?

### Answer

Both methods validate data, but they handle validation failures differently.

### parse()

Throws an exception when validation fails.

```ts
UserSchema.parse(data);
```

### safeParse()

Returns a result object instead of throwing an exception.

```ts
const result = UserSchema.safeParse(data);
```

### Interview Tip

In production applications, `safeParse()` is generally preferred because it avoids application crashes.

---

## 4. What is z.infer?

### Answer

`z.infer` automatically generates a TypeScript type from a Zod schema.

### Example

```ts
const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

type User = z.infer<typeof UserSchema>;
```

### Advantage

No need to write separate interfaces and schemas.

---

## 5. What is refine() in Zod?

### Answer

`refine()` is used to implement custom validation rules that are not available through built-in validators.

### Example

```ts
const PasswordSchema = z
  .string()
  .min(8)
  .refine(
    (password) => /[A-Z]/.test(password),
    {
      message:
        "Password must contain at least one uppercase letter",
    }
  );
```

### Common Use Cases

* Password confirmation
* Business rules
* Age restrictions
* Custom validation logic

```
```


<!-- TypeScript -->
# 📚 TypeScript Interview Questions & Answers

## 1. What is TypeScript?

### Answer

TypeScript is an open-source programming language developed by Microsoft. It is a superset of JavaScript that adds static typing and other advanced features.

### Key Features

* Static Typing
* Better Code Quality
* Improved Developer Experience
* Compile-time Error Detection

---

## 2. What is the difference between TypeScript and JavaScript?

### Answer

JavaScript is dynamically typed, while TypeScript is statically typed.

### JavaScript Example

```js
let age = "25";
```

### TypeScript Example

```ts
let age: number = 25;
```

### Benefits of TypeScript

* Type Safety
* Better Autocomplete
* Easier Refactoring
* Early Error Detection

---

## 3. What are Primitive Data Types in TypeScript?

### Answer

Primitive data types represent single values.

### Examples

```ts
let name: string = "Limon";

let age: number = 24;

let isStudent: boolean = true;

let value: null = null;

let data: undefined = undefined;
```

### Primitive Types

* string
* number
* boolean
* null
* undefined
* bigint
* symbol

---

## 4. What is the difference between any and unknown?

### Answer

`any` disables type checking, while `unknown` is type-safe.

### any Example

```ts
let value: any = "Hello";

value = 123;

value.toUpperCase();
```

### unknown Example

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

### Interview Tip

Always prefer `unknown` over `any` when possible.

---

## 5. What is the difference between Interface and Type?

### Answer

Both are used to define object shapes, but interfaces support declaration merging and extension more naturally.

### Interface

```ts
interface User {
  name: string;
  age: number;
}
```

### Type

```ts
type User = {
  name: string;
  age: number;
};
```

### Interview Tip

Use Interface for object structures and Type for unions, intersections, and complex types.

---

## 6. What is Optional Property in TypeScript?

### Answer

Optional properties are not required when creating an object.

### Example

```ts
interface User {
  name: string;
  phone?: string;
}

const user: User = {
  name: "Limon",
};
```

### Benefit

Allows flexible object creation.

---

## 7. What is a Union Type?

### Answer

A Union Type allows a variable to hold multiple types.

### Example

```ts
let id: string | number;

id = 101;

id = "EMP-101";
```

### Use Case

Useful when a value can be more than one type.

---

## 8. What is Type Inference?

### Answer

TypeScript automatically determines the type when it can.

### Example

```ts
let name = "Limon";
```

TypeScript automatically infers:

```ts
let name: string;
```

### Benefit

Reduces unnecessary type annotations.

---

## 9. What are Generics in TypeScript?

### Answer

Generics allow creating reusable components that work with different types.

### Example

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));

console.log(identity<number>(100));
```

### Benefits

* Reusability
* Type Safety
* Cleaner Code

---

## 10. What is the difference between == and === ?

### Answer

`==` compares values after type conversion, while `===` compares both value and type.

### Example

```ts
console.log(5 == "5");
```

Output:

```text
true
```

### Example

```ts
console.log(5 === "5");
```

Output:

```text
false
```