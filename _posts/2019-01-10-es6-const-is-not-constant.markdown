---
author: Red
comments: true
date: 2019-01-10 10:00:00
layout: post
slug: es6-const-is-not-constant-immutable
title: ES6 const is not constant or immutable
description: ES6 const is not meant to be constant or immutable.
categories:
- JS
---

I gave a quick talk on JS a while ago on [hoisting in JS](/hoisting-in-javascript) and while discussing on how hoisting apply to variable declarations, we imminently reached to ES6's `let` and `const`. So we began talking about the difference between `var`, `let` and `const` and how `const` is not really a constant or immutable.

![JavaScript const and Object.freeze()](/dist/uploads/2019/01/const-object-freeze.png)

<!-- more -->

## What is `const`

> Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be redeclared.

*[from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)*

In reality, `const` is not really a constant and it's not immutable.

{% highlight js %}
  const obj = {
    one: 1,
    two: 2
  };

  // Object mutation is ok
  obj.three = 3;

  // Reassignment doesn't work
  // Uncaught TypeError: Assignment to constant variable.
  obj = {
    one: "bazinga",
    two: "bazinga"
  };
{% endhighlight %}

The value of a constant cannot change through reassignment, but any object or array stay mutable.

> As an object, an array can be frozen; after doing so, its elements cannot be altered and no elements can be added to or removed from the array.

*[same MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)*

{% highlight js %}
  const arr = ["one","two"];

  // Array mutation is ok
  // ["one", "two", "three"]
  arr.push("three");

  Object.freeze(arr);
  // Uncaught TypeError: Cannot add property 3, object is not extensible
  arr.push("new");
{% endhighlight %}

## Conclusion

In languages like `C++`, for example an object is immutable if it's declared `const`.

But when it comes to JavaScript, `const` is not about immutability and to make an object’s values immutable you can use [Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

You might want to read more on this matter:

- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) on const.
- [@mathias](https://twitter.com/mathias) on why [const is not about immutability](https://mathiasbynens.be/notes/es6-const).
- Last but not least, this Stack Exchange post on the [difference between immutable and const](https://softwareengineering.stackexchange.com/questions/149555/difference-between-immutable-and-const) is very useful to get the big picture when it comes to other programming languages as C++ and Java.