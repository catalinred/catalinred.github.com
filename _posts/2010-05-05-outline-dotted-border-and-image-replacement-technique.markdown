---
author: Red
comments: true
date: 2010-05-05 18:05:19+00:00
layout: post
slug: outline-dotted-border-and-image-replacement-technique
title: The outline dotted border and the image replacement technique
description: Read more on the outline dotted border and the image replacement technique.
wordpress_id: 563
categories:
- CSS
tags:
- CSS
- HTML
---

If you are a web developer then you surely know what is an image replacement technique and what that means. One of the most common CSS techniques is the **Phark Method**, a very good and simple method. 

Although this is very used, I noticed developers tend to skip fixing Firefox appearance of a dotted border that goes to the edge of the screen. In this tutorial I will show you how this can be fixed in a simple way.

[![Image replacement technique and dotted border](/dist/uploads/2010/04/image-replacement-dotted-border.png)](/outline-dotted-border-and-image-replacement-technique/)

<!-- more -->

First let's see how Phark Method looks:

{% highlight html %}
<a href="#" class="replacement">dotted border</a>
{% endhighlight %}

and the CSS:

{% highlight css %}
a.replacement {
background: url(dotted-border.png) no-repeat;
height: 44px;
width: 316px;
display: block;
text-indent: -9999px;
}
{% endhighlight %}

The reason why the outline border goes to the edge is because of the text-indent value: -9999px. If the value is negative the text will be indented to the left and **Firefox users** will notice a **dotted border that goes to the left edge of the screen**.

There are two simple methods I know to fix this:

### First method: use overflow


This is a fix I use frequently and it's most recommended.

{% highlight css %}
a.replacement {
  background: url(dotted-border.png) no-repeat;
  height: 44px;
  width: 316px;
  display: block;
  text-indent: -9999px;
  overflow: hidden;  /*Add this line to the image replacement method*/
}
{% endhighlight %}    

### Second method: use outline

This also fixes the problem but this can cause problems(you will not see the selection) when tabbing (if accessibility is an important factor for you).

{% highlight css %}
a.replacement
{
  background: url(dotted-border.png) no-repeat;
  height: 44px;
  width: 316px;
  display: block;
  text-indent: -9999px;
  outline: none; /*Add this line to the image replacement method*/
}
{% endhighlight %}

## Conclusion

At first sight this doesn't seems to be a very important problem, doesn't affect the HTML layout but when you are developing a website you want to be close to perfection (at least you should try it :)) so I hope this will help you when encountering this kind of behavior.

Bellow you have a live demo with this outline example, please feel free to comment about it or about other solutions you've found!

[Demo example](/dist/uploads/2010/04/image-replacement-and-dotted-border.html)