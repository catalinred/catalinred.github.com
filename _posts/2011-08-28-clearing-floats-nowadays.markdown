---
author: Red
comments: true
date: 2011-08-28 22:00:19+00:00
layout: post
slug: clearing-floats-nowadays
title: Clearing floats nowadays
description: In this article you'll see some effective solutions for clearing CSS floated elements.
wordpress_id: 2462
categories:
- CSS
tags:
- CSS
- HTML
---

At my beginnings as a web developer, when I first discovered how to clear floats I was so happy and it was for sure an "a-ha" moment. Since then, so many things have changed and new clearing methods have appeared. One thing remained the same: the need to clear floats.

In this article, we'll see some effective solutions for clearing floated elements.

![How to clear floats](/dist/uploads/2011/08/clearing-floats.png)

<!-- more -->

## But first, what is float?

Arranging website page elements was always a struggle for you as a web developer. To achieve your desired website layout, a lot of calculation of [box dimensions](http://www.w3.org/TR/CSS21/box.html#box-dimensions) are needed, and various implementation decisions must be taken as well.

At the beginning, perhaps you used `table` elements to structure your layout, and even if tables are very intuitive, the table purpose is to list tabular data. You also tried the CSS [display](http://www.w3.org/TR/CSS2/visuren.html#display-prop)  values like: `table`, `table-cell` or  `table-row` to build structures, but shortly you gave up as there wasn't enough support for that.

In the end, you got rid of table markup and skipped to `div` floats.

So, **float** is a CSS property which help you aligning and positioning your web page elements.

![Clearing floats example](/dist/uploads/2011/08/clearing-floats-simple-example.png)

## Clearing floats

Elements placed after a floated element will wrap around the floated element. To avoid this behavior, you must clear floats. To do that, generally you use the `clear` property which has four values: `left`, `right`, `both` and `none`.

{% highlight html %}
<div style="float:left"></div>
<div style="float:right"></div>
<div style="clear:both"></div>
{% endhighlight %}

Beside the above example that requires extra HTML markup, below is a list with some clearing methods that I found very useful (and they do not require extra markup):

## [Clearfix reloaded](http://www.yuiblog.com/blog/2010/09/27/clearfix-reloaded-overflowhidden-demystified/) _by [Thierry Koblentz](http://www.tjkdesign.com/)_

![Clearfix reloaded](/dist/uploads/2011/08/clearfix-reloaded.png)

{% highlight css %}
.clearfix:before,
.clearfix:after 
{
  content: ".";    
  display: block;    
  height: 0;    
  overflow: hidden; 
}
.clearfix:after {clear: both;}
.clearfix {zoom: 1;} /* IE < 8 */
{% endhighlight %}


## [New clearfix hack](http://perishablepress.com/press/2009/12/06/new-clearfix-hack/) _by [Jeff Starr](http://perishablepress.com/)_

![Clearfix hack](/dist/uploads/2011/08/new-clearfix-hack.png)

{% highlight css %}
.clearfix:after 
{
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

* html .clearfix             { zoom: 1; } /* IE6 */
*:first-child+html .clearfix { zoom: 1; } /* IE7 */
{% endhighlight %}

## [Micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/) _by [Nicolas Gallagher](http://nicolasgallagher.com/)_

![Micro clearfix hack](/dist/uploads/2011/08/micro-clearfix.png)

{% highlight css %}
.cf:before,
.cf:after 
{
  content:"";
  display:table;
}

.cf:after 
{
  clear:both;
}

/* For IE 6/7 (trigger hasLayout) */
.cf 
{
  zoom:1;
}
{% endhighlight %}

## [CSS clearing floats with overflow](http://webdesignerwall.com/tutorials/css-clearing-floats-with-overflow) _by [Nick La](http://webdesignerwall.com/)_

![CSS clearing floats with overflow](/dist/uploads/2011/08/clear-overflow.png)

## [The shortest clearfix ever](http://www.cssmojo.com/latest_new_clearfix_so_far/)
Considering the latest browser support trends, if you're targeting IE8 and above only - meaning excluding IE6 and IE7 -  you can now rely on a single CSS rule:

{% highlight css %}
.btcf:after {
    content:"";
    display:table;
    clear:both;
}
{% endhighlight %}

## That's it!

You may already know the above techniques and my questions is: Which one do you use most? Share your opinion with us!