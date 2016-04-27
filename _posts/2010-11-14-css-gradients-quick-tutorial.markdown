---
author: Red
comments: true
date: 2010-11-14 15:58:08+00:00
layout: post
slug: css-gradients-quick-tutorial
title: CSS gradients - quick tutorial
description: Create simple CSS3 gradients with no hassle. Get rid of images and start using gradients now!
wordpress_id: 1443
categories:
- CSS
tags:
- CSS
- CSS3
---

CSS3 gradients aren't something new, but because of cross browser incompatibility, they weren't used that much until now. 

However, you should know that they are available to use in Safari, Chrome (Webkit) and Mozilla Firefox (from 3.6) browsers. 

With this post I will show you how to use CSS gradients for some major browsers: Firefox, Safari, Chrome and IE (surprise!).

[![CSS gradients](/dist/uploads/2010/11/css-gradients.jpg)](http://www.red-team-design.com/css-gradients-quick-tutorial) 

<!-- more -->

## But first... why use CSS3 gradients?

If CSS can help you to get rid of extra images, then you should consider this as a good solution for your design, because:

  * You will get fewer HTTP requests
  * CSS gradients are scalable, meaning less headaches for you
  * CSS3 it's so cool :)

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

I would suggest you to use these filters only in conditional CSS files, otherwise these filters will [affect your files performance](http://msdn.microsoft.com/en-us/library/ms532847%28VS.85%29.aspx).

{% highlight css %}
filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#6191bf, endColorstr=#cde6f9); /* IE6 & IE7 */
-ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#6191bf, endColorstr=#cde6f9)"; /* IE8 */
{% endhighlight %}  

## Cross-browser CSS linear gradient

But, lets see how it works. Use the following lines of code from above together and you will get a cross-browser gradient box.

[![](/dist/uploads/2010/11/css-linear-gradient.png)](/dist/uploads/2010/11/css-linear-gradient.html)

[View Demo](/dist/uploads/2010/11/css-linear-gradient.html)

{% highlight css %}
background: #6191bf; /* Fallback background color for non supported browsers */   
background-image: -moz-linear-gradient(top, #81a8cb, #cde6f9); /* Firefox 3.6 */
background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0, #cde6f9),color-stop(1, #81a8cb)); /* Safari & Chrome */     
filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#81a8cb', endColorstr='#cde6f9'); /* IE6 & IE7 */
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#81a8cb', endColorstr='#cde6f9')"; /* IE8 */  
{% endhighlight %}

## CSS3 radial gradient

IE gradient filters doesn't support color-stop, gradient angle, and radial gradient. This means you can only specify just horizontal and vertical linear gradients (as above) with two colors, one for start and one for end. 

But lets see how you can define a CSS3 radial gradient for Firefox, Safari and Chrome.

[![](/dist/uploads/2010/11/css-radial-gradient.png)](/dist/uploads/2010/11/css-radial-gradient.html)


[View Demo](/dist/uploads/2010/11/css-radial-gradient.html)

{% highlight css %}
background: #6191bf; /* Fallback background color for non supported browsers */ 
background-image: -moz-radial-gradient(center 45deg,circle cover, #cde6f9, #6191bf);
background-image: -webkit-gradient(radial, 50% 50%, 0, 50% 50%,800, from(#cde6f9), to(#6191bf));
{% endhighlight %} 

## Conclusion

Although CSS gradients are great, not all browsers support it (yet). So, you shouldn't totally rely on CSS gradient when coding your web design and you should always use a fallback for it.

If you have anything to add, feel free to do it in the comments below. Let me know your opinion.

## Further reading

  * [Mozilla gradients](https://developer.mozilla.org/en/CSS/-moz-linear-gradient)
  * [Webkit gradients](http://webkit.org/blog/175/introducing-css-gradients/)
  * [IE gradients filters](http://msdn.microsoft.com/en-us/library/ms532997%28VS.85,loband%29.aspx)

## Update

Since I wrote this article, Webkit gradient syntax was [updated](http://www.red-team-design.com/css3-webkit-gradient-support-updated), [Internet Explorer](http://www.red-team-design.com/how-to-solve-common-ie-bugs) 10 Test Drive was launched (glad to see CSS3 gradients are supported) and Opera 11 also added CSS3 gradients to its features.

So here is the latest CSS3 gradients syntax:

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

## Quick tip for you

To stay updated with latest CSS3 gradients syntax, check this wonderful CSS3 [resource](http://css3please.com/).