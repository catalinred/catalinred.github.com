---
author: Red
comments: true
date: 2011-04-25 21:10:52+00:00
layout: post
slug: how-to-solve-common-ie-bugs
title: How to solve common IE bugs
description: Read more about how to solve Internet Explorer common bugs.
wordpress_id: 1068
categories:
- CSS
tags:
- CSS
---

Lately, I wrote more about CSS3 features and its awesomeness. Today's article is about Internet Explorer common CSS bugs and how to solve them.

You may ask me _"why this article?"_ and you have all the reasons to do that. If you read some of my previous articles, then you know **I'm a CSS3 addicted**. But sometimes, when working on some projects that require cross-browser compatibility, you need to know how to action when you encounter IE bugs.

Modern browsers are constantly evolving and their bugs or strange behaviors are always fixed due new version releases. But what about old browsers like Internet Explorer 6/7? As they are not maintained anymore, their rendering bugs became sort of _"de facto"_.

![Internet Explorer common bugs](/dist/uploads/2011/04/ie-common-bugs.jpg)

<!-- more -->

## Conditional comments

{% highlight html %}
<!--[if IE 6]>
        IE6 stuff
<![endif]-->
{% endhighlight %}

_Internet Explorer 6 conditional comment_

{% highlight html %}
<!--[if IE 7]>
        IE7 stuff
<![endif]-->
{% endhighlight %}

_Internet Explorer 7 conditional comment_

There are also [more options](http://msdn.microsoft.com/en-us/library/ms537512%28v=vs.85%29.aspx) here, but I think the above one are to most used.

## Specifically target elements

{% highlight css %}
p {
  color: #000;
  color : green\9; /* IE8 and below - just in case */
  *color: red; /* IE7 and below */
  _color: blue; /* IE6 and below */
}
{% endhighlight %}

If you are not a big fan of conditional comments, then you may try this solution.

Just in case, I added the line who can help you target the IE8 browser. But, sincerely, if you will need to target Internet Explorer 8, then you have bigger problems. I mean, you should start reviewing your CSS code!



## Doubled Margin

{% highlight css %}
p {
  float: right;
  margin-right: 50px;
}
{% endhighlight %}

This is perhaps the most encountered bug when using floated blocks. For the above example, IE6 will **double the right margin**. To fix this, add `display: inline` to the floated element using one of the above methods (conditional comment or specifically targeting).

## Button's padding is ignored

Try to add padding to an button, you'll see how the padding's values are ignore on IE6 and IE7. To fix that, add `overflow: visible` to that button and the problem will be solved. Read more about this [here](http://www.mrkirkland.com/internet-explorer-submit-button-horizontal-padding/).

## Negative margins

IE6 and negative margins weren't never called friends. When you use a negative margin for an element, to avoid layout problems, you should add `position:relative` to it.

## More bugs/fixes?

To find out more about these common problems check this amazing [resource](http://www.positioniseverything.net/explorer.html) about these bugs.

**What are the most annoying bugs you encounter in your daily developing?** Share them with us by adding a comment.

## In the end

![IE6 countdown](/dist/uploads/2011/04/ie6-countdown.jpg)

> Its name was Internet Explorer 6. Now that we’re in 2011, in an era of modern web standards, it’s time to say goodbye.

...and I'm not the one who's saying that. :)