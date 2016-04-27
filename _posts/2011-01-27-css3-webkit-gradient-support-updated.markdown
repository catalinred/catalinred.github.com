---
author: Red
comments: true
date: 2011-01-27 07:00:42+00:00
layout: post
slug: css3-webkit-gradient-support-updated
title: CSS3 Webkit gradient support updated
description: The CSS3 Webkit gradient syntax is getting a new look.
wordpress_id: 1717
categories:
- CSS
tags:
- CSS3
---

A while ago, I wrote another article here about the [CSS3 gradients](http://www.red-team-design.com/css-gradients-quick-tutorial). At that time, you saw the browser support, the advantages of using them and their syntax. 

**So, what's new since then?**
The CSS3 Webkit syntax, which was quite different than Mozilla at that time, has been **updated**!

![WebKit gradient syntax](/dist/uploads/2011/01/webkit-gradient-updated.jpg)

<!-- more -->

## Latest news

About a week ago, the WebKit dev team announced they were [updating](http://webkit.org/blog/1424/css3-gradients/) the CSS3 gradient support in the rendering engine. 

The most important point of their announcement was the that they will bring the CSS3 Webkit syntax in **line with Mozilla’s implementation**. Pretty cool huh? Now, you will have less headache pain when you'll use both rendering engines (Webkit and Gecko) gradients.

## What about the old syntax?

Now, beside the old  old `-webkit-gradient` value, [nightly](http://nightly.webkit.org/) WebKit builds include support for `-webkit-linear-gradient` and `-webkit-radial-gradient`.

No need to worry about the old syntax, it will still be supported.

> We’ll maintain support for -webkit-gradient for the foreseeable future for all the existing content out there that uses it.

_WebKit team assurances_

### Linear gradients

![Linear gradient syntax](/dist/uploads/2011/01/linear-gradient.png)

{% highlight css %}
background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0, #cde6f9),color-stop(1, #81a8cb));
{% endhighlight %} 

_WebKit linear gradients._


### Now
Check out the above Webkit updated syntax:

{% highlight css %}
background-image: -webkit-linear-gradient(#81a8cb, #cde6f9);
{% endhighlight %}

### Radial gradients


![Radial gradient syntax](/dist/uploads/2011/01/radial-gradient.png)

{% highlight css %}
background-image: -webkit-gradient(radial, 50% 50%, 0, 50% 50%,400, from(#cde6f9), to(#81a8cb));
{% endhighlight %}    

### Now

Check out the above Webkit updated syntax:

{% highlight css %}
background-image: -webkit-radial-gradient(#cde6f9, #81a8cb);
{% endhighlight %}

### Pros


This syntax update has just pros, **no cons**! Why's that?

  * Less complexity
  * No need to search for online CSS3 gradients generators anymore. The syntax is similar across browsers and you can make the translation easier.

### Conclusion

Still not using CSS3 gradients for your website? **What are you waiting for?** 