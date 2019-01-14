---
author: Red
comments: true
date: 2019-01-15 10:00:00
layout: post
slug: js-array-from-array-like-object
title: JS array from an array-like object
description: In this article you'll see how to convert an array-like object to a real array using different methods.
categories:
- JS
---

I remember the struggle and the misunderstanding as I was trying to iterate over a `NodeList` collection with no success. In this article you'll see how to convert an array-like object like `NodeList` to a real `Array` using different methods.

![JavaScript array from array-like object](/dist/uploads/2019/01/js-array-from-array-like.png)

<!-- more -->

## Array-like objects

> Some objects in JavaScript look like an array, but they aren’t one. That usually means that they have indexed access and a length property, but none of the array methods. Examples include the special variable arguments, DOM node lists, and strings.

*Axel Rauschmayer on [array-like objects.](http://speakingjs.com/es5/ch18.html#_pitfall_array_like_objects)*

So why would you want an array from an array-like? To be able to iterate over it of course, oh and `map()`, `filter()`, or `reduce()` too. Also note that the `NodeList` object is iterable now using `forEach()`, even though it's not an `Array`.

{% highlight js %}
  // NodeList / array-like object
  let arrLike = document.querySelectorAll("div");
{% endhighlight %}

## The classic `Array.prototype.slice.call(arrLike)`

> slice method can also be called to convert Array-like objects / collections to a new Array. You just bind the method to the object. The arguments inside a function is an example of an 'array-like object'.

*[Array-like objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like_objects) on MDN*

`Array.prototype.slice` is the slice function for arrays, and the `call()` and `apply()` methods let you manually set the value of this in the function.

{% highlight js %}
  let arr1 = Array.prototype.slice.call(arrLike);
{% endhighlight %}

## The popular `Array.from(arrLike)`
> The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

{% highlight js %}
  let arr2 = Array.from(arrLike);
{% endhighlight %}

## The fancy `[...arrLike]`

> "If it's on the left-hand side of an equal sign then it's rest. If not, it's spread."

*The best explanation on JavaScript rest/spread syntax difference by [@mathias](https://twitter.com/mathias) at [Google I/O ’18](https://www.youtube.com/watch?v=mIWCLOftfRw&feature=youtu.be&t=2024).*

{% highlight js %}
  let arr3 = [...arrLike];
{% endhighlight %}

In this case, it's the **spread** syntax which helps to expand the `arrLike` object into its elements, thus copying it to `arr3`.

## Conclusion

The spread syntax makes converting an array-like to `Array` look easy to follow and it's also the shortest too if you're into optimizing the number of bytes. This might be the most clean and beautiful option to use but the browser support it's important when it comes to a decision.

On performance, [I made some tests](https://jsperf.com/array-like-to-array-perf) and it looks like `Array.prototype.slice.call()` is the fastest with both alternatives being way slower. So I guess in the end it's all about the project you're working on and the browser support you're targeting at. Easy. :)

![jsPerf test](/dist/uploads/2019/01/array-like-test.png)