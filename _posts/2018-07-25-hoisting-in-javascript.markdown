---
author: Red
comments: true
date: 2018-07-25 10:10:00
layout: post
slug: hoisting-in-javascript
title: Hoisting in JavaScript
description: Hoisting in JavaScript when it comes to variable and function declarations, anonymous function and named function expressions.
categories:
- JS
---

Two weeks ago I gave a lightning talk at Caphyon on hoisting in JavaScript. Putting aside all the common jokes about the JS language, people really seemed to like it. It was kind of a challenge to talk about JS while having an audiene of C++ and Java collegues.

Now getting back to the talk, that was lighning ⚡️ fast and it didn't covered that much as I would've liked to. So I'll try to write a bit more on JavaScript scoping and hoisting bellow.

![JS the good parts vs the definitive guide](/dist/uploads/2018/07/js-good-parts-vs-definitive-guide.jpg)

<!-- more -->

## ~~Hosting~~ Hoisting

On the clickbait title, that's actually a true story. Last time I mentioned the *hoisting* term into [an article of mine](/beginner-javascript-gotchas/), I remember that a friend read it and told me I had a typo in the article. So that's it.

## Variable declaration

When declaring a variable, only its name gets hoisted.

{% highlight js %}
console.log(name);
var name = "whatever";
// The console logs undefined
{% endhighlight %}

Here’s how the above is interpreted, thus `undefined`.

{% highlight js %}
var name;
console.log(name);
name = "whatever";
{% endhighlight %}

## Function declaration

Unlike var, a function declaration  hoists its actual definition too.

{% highlight js %}
hello("world");
function hello(p) {
  return "Hello " + p;
}
// The console logs "Hello world"
{% endhighlight %}

Here’s how the above is interpreted, thus `“Hello world”`:

{% highlight js %}
function hello(p) {
  return “Hello ” + p;
}
hello("world");
{% endhighlight %}

## Function expressions

The variable name gets hoisted, but not the function assignment.

{% highlight js %}
hello("world");
var hello = function(p) {
    return “Hello ” + p;
}
// TypeError: hello is not a function
{% endhighlight %}

Here’s how the above is interpreted, thus `hello is not a function`:

{% highlight js %}
var hello;
hello("world");
hello = function(p) {
    return "Hello"  + p;
}
{% endhighlight %}

## On ES6 and later

The hoisting behavior isn't something that applies to latest ECMAScript gems:
- let
- const
- class declaration
- arrow function

{% highlight js %}
// let
console.log(name);
let name = "whatever";
// Uncaught ReferenceError: name is not defined
{% endhighlight %}

{% highlight js %}
// const
console.log(name);
const name = "whatever";
// Uncaught ReferenceError: name is not defined
{% endhighlight %}

{% highlight js %}
// class declaration
const p = new Rectangle();
class Rectangle {...}
// Uncaught ReferenceError: Rectangle is not defined
{% endhighlight %}

{% highlight js %}
// arrow function
console.log(doubled);
const doubled = [1, 2, 3].map(n => n * 2);
// Uncaught ReferenceError: doubled is not defined
{% endhighlight %}


## Last but not least

Here's what Brendan Eich said about JS hoisting:

>`var` hoisting was an implementation artifact. [source](https://twitter.com/BrendanEich/status/562313394431078400)

>`function` hoisting was better motivated: function declaration hoisting is for mutual recursion & generally to avoid painful bottom-up ML-like order [source](https://twitter.com/BrendanEich/status/33403701100154880)

## The slides

[Here are the slides](https://docs.google.com/presentation/d/1Yz7r-kDOFwky7JnW4gTSN1H7ikFv7HBbp37mDL4Nuyo/edit#slide=id.p), just in case.
