---
author: Red
comments: true
date: 2010-01-30 11:00:35+00:00
layout: post
slug: center-a-block-element-without-knowing-its-width
title: 'Center a block element without knowing its width  '
wordpress_id: 492
categories:
- CSS
tags:
- CSS
---

Centering an element may seem quite simple thinking that “text-align:center” will solve the problem. Or maybe set “width” and “margin: 0 auto”, but what happens when you need to center a block element with variable width?

In this article you'll learn how to center a block element with variable width.

[![By default div has auto width](http://www.red-team-design.com/wp-content/uploads/2010/01/center-block-element.png)](http://www.red-team-design.com/center-a-block-element-without-knowing-its-width/)

<!-- more -->

W3C tells us that we can use "margin: 0 auto" to center tables so why shouldn't we use [display: table](http://www.w3.org/TR/CSS2/tables.html#table-display) to center a fluid div:

{% highlight css %}
div.my-element {
  display: table;
  margin: 0 auto;
}
{% endhighlight %}

This can solve many problems and does a good job in some cases but you must be aware that "display: table" is not working when using our "beloved" Internet Explorer [(IE5.5, IE 6, IE 7)](http://www.quirksmode.org/css/display.html) so don't count on this for main design elements (especially if this ruins your design).

I hope this was usefully for you! If you have any comments or suggestions, do not hesitate to post them in the comments section.