---
author: Red
comments: true
date: 2011-04-17 21:01:31+00:00
layout: post
slug: how-to-create-slick-effects-with-css3-box-shadow
title: How to create slick effects with CSS3 box-shadow
description: Learn how to create awesome CSS3 shadows without actually needing Photoshop anymore.
wordpress_id: 1689
categories:
- CSS
tags:
- CSS3
---

Drop shadows and inner shadows are some of the effects I learned to apply using Photoshop's Blending options. But now, since CSS3 "hit the charts", you don't need Adobe's design tool to add a drop shadow or an inner shadow to a box.

Nowadays, the cool thing is that you create beautiful CSS3 shadows without actually needing Photoshop anymore.

![Box shadow slick effects](/dist/uploads/2011/04/css3-box-shadow.png)

<!-- more --> 

[View demo](/dist/uploads/2011/04/css3-box-shadow.html)

## box-shadow property

The` box-shadow` property allows you to add multiple shadows (outer or inner) on box elements. To do that you must specify values as: color, size, blur and offset.

{% highlight css %}
<shadow> = inset? && [ <length>{2,4} && <color>? ]
{% endhighlight %}

## Rocket science?

Not at all, here's an quick example:

{% highlight css %}
box-shadow: 3px 3px 10px 5px #000;
{% endhighlight %}

This CSS declaration will generate the following shadow:

![Box shadow values](/dist/uploads/2011/04/box-shadow-values.png)
   
  * A positive value for the horizontal offset draws a shadow that is offset to the right of the box, a negative
    length to the left.

  * The second length is the vertical offset. A positive value for the vertical offset basically offsets the
    shadow down, a negative one up.

  * You're not allowed to use negative values for blur radius. The larger
    the value, the more the shadow's edge is blurred, as it can be seen above.

  * Spread distance positive values cause the
    shadow shape to expand in all directions by the specified radius.
    Negative ones cause the shadow shape to contract.

  * The color is the color of the shadow.

  * The `inset` keyword (missing above), if present,
    changes the drop shadow from an outer shadow to an inner
    shadow

The above theory it's just a small amount, if you want to read more, than be my guest and check the W3C [specs](http://www.w3.org/TR/css3-background/#the-box-shadow).

## Enough theory, let's see some stuff!

Now let's see how can you take advantage of this wonderful CSS3 feature. Below I'll show you how to enhance your designs with the coolest box-shadow techniques!

## Add depth to your body

[Reference URL](http://playground.genelocklin.com/depth/)

[![Box shadow depth](/dist/uploads/2011/04/box-shadow-depth.png)](/dist/uploads/2011/04/css3-box-shadow.html)   

{% highlight css %}
body:before { 
  content: "";
  position: fixed;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  z-index: 100;
  -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
  -moz-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
  box-shadow: 0px 0px 10px rgba(0,0,0,.8);
}
{% endhighlight %}

## Drop shadows

[![Drop shadow effect](/dist/uploads/2011/04/box-shadow-drop.png)](/dist/uploads/2011/04/css3-box-shadow.html)

Here are the articles that inspired me, and not only:
	
  * [Divya Manian - Drop Shadows with CSS3 ](http://nimbupani.com/drop-shadows-with-css3.html)	
  * [Nicolas Gallagher - CSS drop-shadows without images](http://nicolasgallagher.com/css-drop-shadows-without-images/)

{% highlight css %}
#box {
  position: relative;
  width: 60%;
  background: #ddd;
  -moz-border-radius: 4px;
  border-radius: 4px;
  padding: 2em 1.5em;
  color: rgba(0,0,0, .8);
  text-shadow: 0 1px 0 #fff;
  line-height: 1.5;
  margin: 60px auto;
}


#box:before, #box:after {
  z-index: -1; 
  position: absolute; 
  content: "";
  bottom: 15px;
  left: 10px;
  width: 50%; 
  top: 80%;
  max-width:300px;
  background: rgba(0, 0, 0, 0.7); 
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
  transform: rotate(-3deg);
}

#box:after {
  transform: rotate(3deg);
  right: 10px;
  left: auto;
}
{% endhighlight %}   

## Quick tips

Try spicing up shadows with RGBa color. The box-shadow property can be used using CSS3 RGBa colors to create shadows with differing levels of opacity. If your browsers supports the `box-shadow` property, then it will definitively support the RGBa color mode. 

Use multiple shadows in one CSS declaration:

{% highlight css %}
box-shadow: 3px 3px 10px 5px #000, 
            0 0 4px rgba(0, 0, 0, .5) inset;
{% endhighlight %}

## Browser Support
	
  * Internet Explorer 9/10	
  * Firefox _(from 3.5)_	
  * Safari/Chrome	
  * Opera _(from 10.5)_

## Final words

You should start using these techniques **today** and I mean it. Why's that? Because you can, as `box-shadow` will not break your layout on older browsers.