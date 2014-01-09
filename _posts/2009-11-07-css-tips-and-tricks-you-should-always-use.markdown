---
author: Red
comments: true
date: 2009-11-07 17:53:26+00:00
layout: post
slug: css-tips-and-tricks-you-should-always-use
title: 10 CSS tips and tricks you should always use
description: Check this beginner's list for various CSS tips and tricks.
wordpress_id: 206
categories:
- CSS
tags:
- CSS
---

When starting coding a Photoshop layout or whenever you work for something,  you should always be aware of some CSS tips that will make your life easier.

[![](/wp-content/uploads/2009/11/css-tips-tricks.png)](http://www.red-team-design.com/css-tips-and-tricks-you-should-always-use/)

<!-- more -->

## 1. Place CSS in a separate file


When you're working with CSS code you should always use an [external file](http://www.tizag.com/cssT/external.php) to load CSS from. It's very important to have your project files well organized and this helps you doing that.

![css-external-file](/wp-content/uploads/2009/11/css-external-file.png)


### 2. Reset CSS

You need to reset CSS because as you've seen, browsers assign different styles to some elements and the best approach is to clear(reset) all styles from the beginning. In this way you'll be sure you made a good start.

![reset-css](/wp-content/uploads/2009/11/reset-css1.png)

The best method I know since I work in this area is the [Eric Mayer's Css Reset method ](http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/).

For those of you who think his method is too complex I suggest you to create your own reset method.  You can start by resetting the elements you think you'll use most like in this example:

{% highlight css %}
body, div, h1,h2, h3, h4, h5, h6, p,ul
{
  margin: 0;
  padding: 0;
}
{% endhighlight %} 

## 3. Always style inputs

![style-inputs](/wp-content/uploads/2009/10/style-button-input.png)

There is no reason why you must use the predefined styles for the inputs, so always try to [customize the inputs](http://www.red-team-design.com/style-an-input-button). If you don't do that you will experience different looks for different browsers.

## 4. Use CSS comments


![css-comments](/wp-content/uploads/2009/11/css-comments.png)

This is a good way to organize your code and you should do that especially when you have more than let's say 100 css lines.

{% highlight css %}
p {
  margin: 10px 0;
}

/*This is a css comment*/

div {
  height: 20px;
}
{% endhighlight %}    
    


## 5. Center horizontally

![center-horizontally](/wp-content/uploads/2009/11/center-horizontally.png)

Here you can see how to center horizontally an inline element:

{% highlight css %}
text-align: center;
{% endhighlight %} 

To center horizontally a block element you must set the width for it and also auto for the left and right margins:

{% highlight css %}
width: 200px;
margin: 0 auto;
{% endhighlight %}    

## 6. Use inline and block elements correctly

This mean it's recommended for you as a designer/developer to use the [block](http://htmlhelp.com/reference/html40/block.html) elements like "div" when you need a block element and not use a "span" element for example with "display: block" style. This is available also for the [inline](http://htmlhelp.com/reference/html40/inline.html) elements like "b" or "i", they must be used as inline elements when possible.

## 7. CSS text-transform property

Avoid writing with capitalized letters and use instead the text-transform property to do that:

{% highlight css %}
text-transform: uppercase;
{% endhighlight %}    
    
## 8. Background sprites

[![globalnavbg](/wp-content/uploads/2009/11/globalnavbg.png)](http://images.apple.com/global/nav/images/globalnavbg.png)

Using sprites avoids causing flickering when using hover effects, try using all the time this technique because it's awesome.
Two excellent articles about CSS background sprites I'll recommend are [alistapart.com](http://www.alistapart.com/articles/sprites/) article and the [smashingmagazine.com](http://www.smashingmagazine.com/2009/04/27/the-mystery-of-css-sprites-techniques-tools-and-tutorials/) one.

## 9. Font properties in one declaration

Instead having these three four lines declaration block:

{% highlight css %}
font-family: Arial;
font-size: 12px;
font-weight: bold;
line-height: 20px;
{% endhighlight %}    
  
you can use this single line declaration:

{% highlight css %}
font: bold 12px/20px Arial;
{% endhighlight %}

## 10. Validate, validate and validate again!

You must always validate your css code to be sure that your code is [W3c](http://jigsaw.w3.org/css-validator/) valid. A valid code means a good developer.
[](http://jigsaw.w3.org/css-validator/)

[![w3c-css](/wp-content/uploads/2009/11/w3c-css.png)](http://jigsaw.w3.org/css-validator/)

What other CSS  tips you are using  that are mandatory in your design/development?