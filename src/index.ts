// ********Zod***********

// ------Zod Schema------

import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z
  .email()
  .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  password: z.string(),
  isActive: z.boolean(),
  sallary: z.number(),
  role: z.enum(["USER", "ADMIN", "MODERATOR"]),
  skills: z.array(z.string()),
  age: z.number(),
});

// ----- Valide Data example------
const formData = {
  name: "md limon islam",
  email: "mdlimonislam@gmail.com",
  password: "limon123",
  isActive: true,
  sallary: 25000,
  role: "ADMIN",
  skills: ["Typescript", "Nextjs"],
  age: 21
}

const result = UserSchema.safeParse(formData)
console.log(result)

// --------convert in type script-----------
const UserSchema2 = z.object({
  name: z.string(),
  email: z.email(),
  age: z.number(),
});

type User2 = z.infer<typeof UserSchema2>;

const user2: User2 = {
  name: "Limon",
  email: "limon@gmail.com",
  age: 25,
};

console.log(user2);

// ----------Refine & Regex--------
// ***Refine****

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

console.log(
  PasswordSchema.safeParse("Password123")
);

// ***regex***
const PhoneSchema = z.string().regex(
  /^01[3-9]\d{8}$/,
  "Invalid Bangladeshi Phone Number"
);

console.log(
  PhoneSchema.safeParse("01812345678")
);




// *******/ Primitive Data Type *******



let name: string = "Limon";
let age: number = 25;
let isStudent: boolean = true;

// console.log(name);
// console.log(age);
// console.log(isStudent);

// ********* Array *********

let names: string[] = ["Limon", "Milon", "Ripon"]
let numbers: number[] = [11,22,33,44]

names.push("Naim")
numbers.push(55)

// console.log(names)
// console.log(numbers)

// ******** Object *********

const user: {
    name: string,
    age: number,
    isActive: boolean
} = {
    name: "Md Limon Islam",
    age: 21,
    isActive: true
}

// console.log(user)

// object extends using interface
interface User {
  id: number;
  username: string;
}

interface AdminUser extends User {
  role: 'admin' | 'superadmin';
  permissions: string[];
}

// Usage
const admin: AdminUser = {
  id: 2585,
  username: "alice_dev",
  role: "admin",
  permissions: ["manage_users", "delete_posts"]
};
// console.log(admin)

// ******* Function **********
function add(a: number, b: number): number {
  return a + b;
}

const res = add(10, 20);

// console.log(res);

// generics

function identity<T>(argument: T ): T {
    return argument
}

const output = identity("limon");
// console.log(output)

// ****** Read Only ******

type Person = {
  readonly id: number;  // read only change kora jabe nah
  name: string;
  email?: string;  // optional
};

const person: Person = {
  id: 1,
  name: "Limon"
};

// console.log(person);


// ********* Type Vs InterFace*******
// Type-----------

type People = {
  name: string;
  age: number;
};

const p1: People = {
  name: "Limon",
  age: 25
};

// console.log(p1)

// interface

interface Student {
  name: string;
  roll: number;
}

const s1: Student = {
  name: "Hasan",
  roll: 10
};

// console.log(s1);