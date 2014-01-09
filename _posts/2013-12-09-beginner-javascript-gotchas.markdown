---
author: Red
comments: true
date: 2013-12-09 06:00:57+00:00
layout: post
slug: beginner-javascript-gotchas
title: A beginner's list of JavaScript gotchas
description: This article contains a list of some JavaScript gotchas that every new JavaScript developer might find it useful.
wordpress_id: 6718
categories:
- JavaScript
---

I consider myself a novice when it comes to coding in JavaScript but lately I played a bit more with this language and stumbled upon a few random things I thought were worth sharing. So, if you are new to JavaScript or just don't know it as well as you would like, I hope you find this article useful.

![JavaScript logo](/wp-content/uploads/2013/11/JavaScript-gotchas.png)

<!-- more -->

## 0 == "0", even though 0 is falsy and "0" is truthy


At first sight, this is very odd, but once you read more about the [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) this make sense. To avoid misunderstandings like this one, be sure to always use the strictly equal operator (===) to do this type of comparison. [Lous Lazaris](http://www.impressivewebs.com/why-use-triple-equals-javascipt/) wrote an entire article on the unpredictable results that can occur when the equality comparison operator is not used the right way.
    
{% highlight js %}
console.log(0 == "0"); // true
console.log(0 === "0"); // false
{% endhighlight %}

You may want to check this JavaScript [truth table](http://zero.milosz.ca/) as well, but don't try to memorize it :)

## 1+2+"3" != "1"+"2"+3

JavaScript is quite tolerant when it's about strings and numbers, just think about the "+" operator, which both adds and concatenates. Unlike other programming languages that would shout at you when encountering the line above, JavaScript actually tries to solve this by assuming, at a time, that numbers are strings too. 

    
{% highlight js %}
1+2+"3" != "1"+"2"+3; 
// 3+"3" != "12"+3
// 33 !=123
{% endhighlight %}

## JavaScript hoists variable and function declarations

The following code piece will run without problems because the JavaScript allows you to use the function before the point at which it was declared.

    
{% highlight js %}
sayHello(); //Call the function before its declaration
function sayHello() {
    console.log("Hello!");
}
{% endhighlight %}

However, watch out for functions expressions and variable declarations! Although their declarations are hoisted as well, the function's definition and respectively the variable's initialization are not. If you want to read more, [Jeffrey Way](http://net.tutsplus.com/tutorials/javascript-ajax/quick-tip-javascript-hoisting-explained/) and [James Allardice](http://jamesallardice.com/explaining-function-and-variable-hoisting-in-javascript/) wrote some great articles on variable and function hoisting in JavaScript.

## Omitting the var keyword

The `var` keyword helps defining a variable and optionally initializing it to a value. But, when you omit it, the code still works and the JavaScript interpreter displays no error. That happens because the respective variable will be created in the global scope and not in the local scope you defined it in. This kind of behavior is often described as a JavaScript pitfall and it's highly recommended to avoid it as it can create [unexpected results](http://answers.oreilly.com/topic/2076-why-you-should-use-the-var-keyword-in-javascript/).    

{% highlight js %}
var myFunction = function() {  
    var foo = 'Hello'; // Declares and initialize foo, scoped to myFunction
    bar = 'World!';     // This works too, but the scope is global
};
{% endhighlight %}

## The semicolon is optional, but...

You can go crazy and write JavaScript statements without caring about adding semicolons at the end. But there's a catch. Even though JavaScript automatically inserts semicolons at the end of each line, in some cases, especially if you're an [Allman style](http://en.wikipedia.org/wiki/Indent_style) indentation fan, problems may appear.
    
{% highlight js %}
// OK
return {
  'ok': false
};

// not OK
return
{
  'ok': false
};
{% endhighlight %}

Douglas Crockford gave the best example on this matter, and why should always use semicolons in the JavaScript code. At first sight, the above code pieces look like they do the same: return an object. In reality, the second one will fail because the returned value is `undefined`, due the automatic semicolon injection.

{% highlight js %}
return; // returns undefined

// code block that does nothing
{ 
  'ok': false
}
{% endhighlight %}

Also, if you didn't already, you should try to adopt Douglas Crockford's [JavaScript code convention](http://javascript.crockford.com/code.html).

## The console is your friend

You already know the _"Google is your friend"_ phrase, with that in mind I'd say _"The console is your friend"_ applies best in this case. The console object has some interesting methods you can use to debug your JavaScript code, the `log()` being by far the most known.

I think the `console.log()` doesn't need any introduction anymore, its non-blocking behavior and nice formatting was a big plus comparing with `alert()`. The issue here is that, even though the `console.log` was implemented in IE8 and IE9, the `console` object somehow is not created until you toggle the DevTools.

So, found out on my own skin that if you let any `console.log` calls in your code, it will break your code on browsers like [IE8 and IE9](http://www.red-team-design.com/how-to-solve-common-ie-bugs). After browsing for a solution, I found the following as a good and simple solution. Basically, if the `window` object does not have access to browser's debugging console, just override the `console.log` with a dummy function that does nothing at all. 

    
{% highlight js %}
if (!window.console) { 
  console.log = function(){};
}
{% endhighlight %}

### Colorful log messages

But if logging methods like `log`, `info`, `error` & warn are not enough to to distinguish your messages, you can try [adding your own styling](https://coderwall.com/p/fskzdw) to the `log` messages.

    
{% highlight js %}
var consoleStyling = 'background: #0f0; color: #fff; font-weight: bold;';
console.log('%c A colorful message', consoleStyling);
{% endhighlight %}


### Debugging with console.table()


Again, if using `console.log()` feels too mainstream, you could try some advanced JavaScript debugging with [`console.table()`](http://blog.mariusschulz.com/2013/11/13/advanced-javascript-debugging-with-consoletable). A very nice feature of console.table() is that it also works with objects.


    
{% highlight js %}
var browsers = {
    chrome: { name: "Chrome", engine: "WebKit" },
    firefox: { name: "Firefox", engine: "Gecko" }
};

console.table(browsers);
{% endhighlight %}

## Final words

When reading more about how JavaScript actually works, the following question will inevitably pop up in your head: **Why does JavaScript have so many different ways to do the same thing?** Maybe the answer is so we can choose our own way, with the best practices in mind.

To get back, the above are just some things I got in mind when I wrote this article, but there are so many more. Thank you for reading and I'm looking forward to read your comments as well on what JavaScript pieces of code did you found as being the most intriguing.