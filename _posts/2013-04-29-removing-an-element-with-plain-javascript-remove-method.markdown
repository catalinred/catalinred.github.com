---
author: Red
comments: true
date: 2013-04-29 05:00:21+00:00
layout: post
slug: removing-an-element-with-plain-javascript-remove-method
title: Removing an element with the plain JavaScript remove() method
description: Remove an element with the plain JavaScript remove() method available in the current DOM4 specs along with other mutation methods like append(), prepend(), before(), after() and replace().
wordpress_id: 6329
categories:
- jQuery
---

As you might know, the DOM does not supports removing an element directly. When removing an element with JavaScript, you must go to its parent first instead. This was always odd and not so straightforward.

According to DOM level 4 specs, which is the current version in development, there are some new handy [mutation methods](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#interface-element) available: `append()`, `prepend()`, `before()`, `after()`, `replace()`, and `remove()`. In this article we'll focus a bit on one of the new kids on the block, the plain vanilla JavaScript `remove()` method.

![JavaScript remove() method](/wp-content/uploads/2013/04/javascript-remove-method.png)

<!-- more -->

## The bulletproof way

Assuming we have the following HTML element:    
    
{% highlight html %}
<div id="myDiv">test</div>
{% endhighlight %}

... to remove it from the DOM tree, you would need to run the following JavaScript lines:
    
{% highlight js %}
var elem = document.getElementById("myDiv");
elem.parentNode.removeChild(elem);
{% endhighlight %}


## The jQuery way

If you're using a JavaScript framework like jQuery, to take an element out of the DOM, you have to use the [`remove()`](http://api.jquery.com/remove/) method:
    
{% highlight js %}
$('#myDiv').remove();
{% endhighlight %}

## The new way. FTW.


Having already defined the variable `elem`, here's how to properly remove that node:

{% highlight js %}
var elem = document.getElementById("myDiv");
elem.remove();
{% endhighlight %}


Notice the jQuery similarity? This new way is simpler and much more intuitive... for the win.

## Browser support

At this time, the support is: [Chrome](http://trac.webkit.org/changeset/129400), [Opera](http://www.opera.com/docs/specs/presto2.12/#m212-395), Safari and soon [Firefox](http://hg.mozilla.org/mozilla-central/rev/9b71c6c95c6c) 23. Maybe it's not so awesome for production purposes, but still great for testing and debugging.

However, if you're looking for a larger browser support, there are some [polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills) that definitely worth an eye on:

	
  * [DOM4](https://github.com/WebReflection/dom4#dom4)	
  * [DOM-shim](https://github.com/Raynos/DOM-shim)

P.S. Beside these new methods, don't forget about the `querySelector()` as well. That's another cool JavaScript method which is very useful to select an element by class name for example. All these combined, provide a very good support for daily debugging and personal projects without using any framework. Especially if you're not interested in supporting older browsers like IE7 and lower.