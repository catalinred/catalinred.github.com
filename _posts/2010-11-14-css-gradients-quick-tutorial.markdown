---
author: Red
comments: true
date: 2010-11-14 15:58:08+00:00
layout: post
slug: css-gradients-quick-tutorial
title: CSS gradients tutorial
description: Create simple CSS gradients with no hassle and get rid of images.
categories:
- CSS
---

CSS gradients aren't something new, but because of cross-browser incompatibility, they weren't used that much until now.

However, you should know that they are available to use in Safari, Chrome (Webkit) and Mozilla Firefox (from 3.6) browsers. In this article, you will learn how to use CSS gradients, available in some of the major browsers: Firefox, Safari, Chrome and IE (surprise!).

![Multiple CSS gradients colors](/dist/uploads/2010/11/css-gradients.jpg)

<!-- more -->

## Why use CSS gradients?

* You will get fewer HTTP requests to the server
* CSS gradients are scalable, without performance issues
* CSS gradients are easy to update and to debug

## Firefox syntax

{% highlight css %}
  -moz-linear-gradient( [<point> || <angle>,]? <stop>, <stop> [, <stop>]* )
  -moz-radial-gradient( [<position> || <angle>,]? [<shape> || <size>,]? <stop>, <stop>[, <stop>]* )
{% endhighlight %}

## Webkit syntax

{% highlight css %}
  -webkit-gradient(<type>, <point> [, <radius>]?, <point> [, <radius>]? [, <stop>]*)
{% endhighlight %}

## IE trident gradient example

I would suggest you to use these filters only in conditional CSS files, otherwise, these filters will affect [the overall performance](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms532847(v=vs.85)).

{% highlight css %}
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#6191bf, endColorstr=#cde6f9); /* IE6 & IE7 */
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#6191bf, endColorstr=#cde6f9)"; /* IE8 */
{% endhighlight %}

## Cross-browser CSS linear gradient

But, let's see how it works. Use the following lines of code from above together and you will get a cross-browser gradient box.

![A linear light blue CSS gradient](/dist/uploads/2010/11/css-linear-gradient.png)

[View Demo](/dist/uploads/2010/11/css-linear-gradient.html)

{% highlight css %}
  background: #6191bf; /* Fallback background color for non supported browsers */
  background-image: -moz-linear-gradient(top, #81a8cb, #cde6f9); /* Firefox 3.6 */
  background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0, #cde6f9),color-stop(1, #81a8cb)); /* Safari & Chrome */
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#81a8cb', endColorstr='#cde6f9'); /* IE6 & IE7 */
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#81a8cb', endColorstr='#cde6f9')"; /* IE8 */
{% endhighlight %}

## CSS radial gradient

IE gradient filters don't support color-stop, gradient angle, and radial gradient. This means you can only specify just horizontal and vertical linear gradients (as above) with two colors, one for start and one for the end.

But lets see how you can define a CSS radial gradient for Firefox, Safari and Chrome.

![A radial light blue CSS gradient](/dist/uploads/2010/11/css-radial-gradient.png)

[View Demo](/dist/uploads/2010/11/css-radial-gradient.html)

{% highlight css %}
  background: #6191bf; /* Fallback background color for non supported browsers */
  background-image: -moz-radial-gradient(center 45deg,circle cover, #cde6f9, #6191bf);
  background-image: -webkit-gradient(radial, 50% 50%, 0, 50% 50%,800, from(#cde6f9), to(#6191bf));
{% endhighlight %}

## Conclusion

Although CSS gradients are great, not all browsers support it (yet). So, you shouldn't totally rely on the CSS gradient when coding your web design and you should always use a fallback for it.

If you have anything to add, feel free to do it in the comments below. Let me know your opinion.

## Further reading

  * [Mozilla gradients](https://developer.mozilla.org/en/CSS/-moz-linear-gradient)
  * [Webkit gradients](https://webkit.org/blog/1424/css3-gradients/)
  * [IE gradients filters](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms532997(v=vs.85))

## Update

Since I wrote this article, Webkit gradient syntax was [updated](/css3-webkit-gradient-support-updated), [Internet Explorer](/how-to-solve-common-ie-bugs) 10 Test Drive was launched (glad to see CSS gradients are supported) and Opera 11 also added CSS gradients to its features.

So here is the latest CSS gradients syntax:

{% highlight css %}
  background-color: #6191bf; /* Fallback background color for non supported browsers */
  background-image: -webkit-gradient(linear, left top, left bottom, from(#81a8cb), to(#cde6f9));
  background-image: -webkit-linear-gradient(top, #81a8cb, #cde6f9);
  background-image: -moz-linear-gradient(top, #81a8cb, #cde6f9);
  background-image: -ms-linear-gradient(top, #81a8cb, #cde6f9);
  background-image: -o-linear-gradient(top, #81a8cb, #cde6f9);
  background-image: linear-gradient(top, #81a8cb, #cde6f9);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#81a8cb', EndColorStr='#cde6f9'); /* IE6–IE9 */
{% endhighlight %}