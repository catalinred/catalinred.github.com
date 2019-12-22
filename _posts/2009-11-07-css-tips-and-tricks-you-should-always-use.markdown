---
author: Red
comments: true
date: 2009-11-07 17:53:26+00:00
layout: post
slug: css-tips-and-tricks-you-should-always-use
title: 10 CSS tips and tricks you should always use
description: This list of CSS tips and tricks include CSS reset, styling buttons, adding comments, horizontally centering, inline versus block, background sprites and more.
categories:
- CSS
---

When starting coding a Photoshop layout or whenever you work for something, you should always be aware of some CSS tips that will make your life easier.

![CSS tips and tricks](/dist/uploads/2009/11/css-tips-tricks.png)

<!-- more -->

## 1. Place CSS in a separate file

When working with CSS code, you should use an external files to load CSS from. It's very important to have your project files well organized and this helps you do that.

![CSS external file](/dist/uploads/2009/11/css-external-file.png)

## 2. Reset CSS

You need to reset CSS because as you've seen, browsers assign different styles to some elements and the best approach is to clear(reset) all styles from the beginning. In this way, you'll be sure you made a good start.

![Reset CSS](/dist/uploads/2009/11/reset-css.png)

The best method I know since I work in this area is [Eric Mayer's CSS Reset method ](https://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/).

For those of you who think his method is too complex, I suggest you to create your own reset method.  You can start by resetting the elements you think you'll use most like in this example:

{% highlight css %}
body, div, h1,h2, h3, h4, h5, h6, p,ul
{
  margin: 0;
  padding: 0;
}
{% endhighlight %}

## 3. Always style inputs

![Image showing a styled HTML input button](/dist/uploads/2009/10/style-html-input-button.png)

There is no reason why you must use the predefined styles for the inputs, so always try to [customize the inputs](/style-an-input-button/). If you don't do that you will experience different looks for different browsers.

## 4. Use CSS comments

![CSS comments within a chat bubble](/dist/uploads/2009/11/css-comments.png)

This is a good way to organize your code and you should do that especially when you have more than let's say 100 CSS lines.

{% highlight css %}
  p {
    margin: 10px 0;
  }

  /*This is a CSS comment*/

  div {
    height: 20px;
  }
{% endhighlight %}

## 5. Center horizontally

![Horizontally centered text and block](/dist/uploads/2009/11/center-horizontally.png)

Here you can see how to center horizontally an inline element:

{% highlight css %}
  div {
    text-align: center;
  }
{% endhighlight %}

To center horizontally a block element you must set the width for it and also auto for the left and right margins:

{% highlight css %}
  div {
    width: 200px;
    margin: 0 auto;
  }
{% endhighlight %}

## 6. Use inline and block elements correctly

This means it's recommended for you as a designer/developer to use the [block](https://htmlhelp.com/reference/html40/block.html) elements like "div" when you need a block element and not use a "span" element for example with "display: block" style. This is available also for the [inline](https://htmlhelp.com/reference/html40/inline.html) elements like "b" or "i", they must be used as inline elements when possible.

## 7. CSS text-transform property

Avoid writing with capitalized letters and use instead the text-transform property to do that:

{% highlight css %}
  h1 {
  text-transform: uppercase;
  }
{% endhighlight %}

## 8. Background sprites

![Apple navigation bar image sprite](/dist/uploads/2009/11/globalnavbg.png)

Using sprites avoids causing flickering when using hover effects, try using all the time this technique because it's awesome.
Two excellent articles about CSS background sprites I'll recommend are [alistapart.com](https://alistapart.com/article/sprites/) article and the [smashingmagazine.com](https://www.smashingmagazine.com/2009/04/the-mystery-of-css-sprites-techniques-tools-and-tutorials/) one.

## 9. Font properties in one declaration

Instead having these three four lines declaration block:

{% highlight css %}
  p {
    font-family: Arial;
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
  }
{% endhighlight %}

you can use this single line declaration:

{% highlight css %}
  p {
    font: bold 12px/20px Arial;
  }
{% endhighlight %}

## 10. Validate, validate and validate again!

You must always validate your CSS code to be sure that your code is [W3C](https://jigsaw.w3.org/css-validator/) valid. A valid code means a good developer.

![W3C CSS validation service header](/dist/uploads/2009/11/w3c-css.png)