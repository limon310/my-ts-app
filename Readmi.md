1. What is the difference between == and === in JavaScript?
Answer:

== (Loose Equality) compares two values for equality after converting both values to a common type (Type Coercion). For example, 5 == "5" returns true.

=== (Strict Equality) compares both the value and the type without converting them. If the types are different, it immediately returns false. For example, 5 === "5" returns false.

2. Explain the concept of "Closure" in JavaScript with a simple example.
Answer: A closure is a feature where an inner function has access to the outer (enclosing) function’s variables, even after the outer function has finished executing.

3. What is the difference between var, let, and const?
Answer:
var: Function-scoped, can be redeclared and reassigned, and is hoisted to the top of its scope initialized as undefined.

let: Block-scoped (only exists inside { }), cannot be redeclared in the same scope, but can be reassigned.

const: Block-scoped, cannot be redeclared or reassigned. It must be initialized during declaration.

4. What is the event loop in JavaScript, and how does it handle asynchronous code?
Answer: JavaScript is single-threaded, meaning it can only execute one task at a time. The Event Loop is the mechanism that allows JavaScript to perform non-blocking asynchronous operations (like API fetches or timers).

# Synchronous code runs instantly on the Call Stack.

# Asynchronous operations are offloaded to the browser APIs. Once completed, their callbacks are sent to the Callback Queue (or Microtask Queue for Promises).

# The Event Loop continuously checks the Call Stack. If the stack is empty, it pushes the first task from the queue onto the stack to be executed.

5. What are the differences between an Interface and a Type Alias in TypeScript?
Answer: Both are used to define the shape of an object, but they have key differences:

# Declaration Merging: Interfaces support declaration merging (if you define two interfaces with the same name, they combine). Type aliases do not allow duplication.

# Extending: Interfaces extend other interfaces using the extends keyword. Type aliases extend others using intersections (&).

# Capabilities: Type aliases can define primitives, unions (e.g., type Status = "success" | "error"), and tuples, which interfaces cannot do.

6. What is the Virtual DOM in React, and how does it work?
Answer: The Virtual DOM (VDOM) is a lightweight, in-memory representation of the real DOM elements.
When a component's state or props change, React follows a 3-step process:

# React renders the entire UI into a new Virtual DOM snapshot.

# It compares the new Virtual DOM with the previous snapshot to see exactly what changed. This process is called Diffing.

# React updates only the changed elements in the real browser DOM. This process is called Reconciliation, and it makes apps much faster by avoiding expensive real DOM manipulation.

7. What are the differences between useEffect and useMemo in React?
Answer:

useEffect: Used to handle side effects in a component fetching data, setting up event listeners, manually changing the DOM. It runs after the render phase.

useMemo: Used for performance optimization. It caches (memoizes) the result of a complex calculation so that the calculation doesn't run again on every single render unless its dependencies change.

8. What are semantic HTML tags, and why are they important? 
Answer: Semantic HTML tags clearly describe the meaning and purpose of the content they contain. 
Examples include <header>, <footer>, <article>, and <section>. 
They are important because they improve code readability, accessibility, and SEO, helping 
browsers and assistive technologies understand the page structure. 

9. How can you optimize the performance of a frontend web application?
Answer: Web performance can be optimized using several industry-standard practices:

# Code Splitting / Lazy Loading: Loading components or routes only when they are needed using React.lazy() or dynamic imports.

# Image Optimization: Using modern formats like WebP or AVIF, implementing lazy loading on images, and using responsive image sizes.

# Minification & Compression: Reducing file sizes of HTML, CSS, and JS files, and serving them using Gzip or Brotli compression.

# Caching: Using service workers, HTTP caching headers, and Content Delivery Networks (CDNs) to load assets closer to the user.

# Reducing Asset Sizes: Eliminating unused packages (tree shaking) and keeping the final bundle size small.

10. Difference between position: relative and absolute? 
Answer: 
● relative: Positioned relative to itself 
● absolute: Positioned relative to the nearest positioned ancestor (not static)