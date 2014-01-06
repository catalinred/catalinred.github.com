---
author: Red
comments: true
date: 2009-12-13 22:36:24+00:00
layout: post
slug: drop-shadow-effect-using-css
title: Add drop shadow effect using CSS text-shadow property
description: Check this article for various drop shadow effects using CSS3 text-shadow.
wordpress_id: 360
categories:
- CSS
tags:
- CSS
---

One of the CSS properties people like to use nowadays is the CSS _text-shadow_ property. The text-shadow property represents a comma separated list of shadow effects to be applied to the text of the element.

The times when you had to use the CSS image replacement technique for a simple text shadow effect are gone.

[![](http://www.red-team-design.com/wp-content/uploads/2009/12/css-shadow.gif)](http://www.red-team-design.com/drop-shadow-effect-using-css/)

<!-- more -->

## Text-shadow property is CSS level 3

Accordingly, this property will work only on **Webkit (from Safari 3+), Opera 9.5, Firefox 3.1(pre-Alpha), Konqueror or iCab**. Notice there is no problem using this CSS3 property with browsers like Internet Explorer, this property simply will not work on IE so the layout won't be affected anyhow.

## Definition of the [CSS text-shadow property](http://www.w3.org/TR/css3-text/#text-shadow):

![text-shadow](http://www.red-team-design.com/wp-content/uploads/2009/12/text-shadow.gif)

The first two values are the X and Y axis offsets, the third is the  blur radius value which is an optional value and the last value in our photo is the color of the shadow.

The cool thing about these values is that depending how you combine these value you can achieve great shadow effects like  [letterpress](http://en.wikipedia.org/wiki/Letterpress_printing) or outlines.

For the following CSS code:

{% highlight css %}
h1 {
	color:#777777;
	margin:0;
	font-family: Trebuchet MS;
	font-size: 35px;
	text-align:center;
	text-shadow: 1px 1px 3px #323232;
}
{% endhighlight %} 

here is what you achieve:
![Css drop shadow browsers compatibility](http://www.red-team-design.com/wp-content/uploads/2009/12/browsers-compatibility.gif)

[![Demo drop shadows](http://www.red-team-design.com/wp-content/uploads/2009/12/demo.gif)](http://www.red-team-design.com/wp-content/uploads/2009/12/demo.html)

[View Demo](http://www.red-team-design.com/wp-content/uploads/2009/12/demo.html)

Thanks for reading, I hope you like this effect as much as i do...it's simple, easy to add and there are no problems with browsers that does not support CSS3.