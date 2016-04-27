---
author: Red
comments: true
date: 2009-10-23 21:34:55+00:00
layout: post
slug: style-an-input-button
title: Here's a quick way to style an input button
description: A very quick way to style an input button with no hassle.
wordpress_id: 103
categories:
- CSS
tags:
- CSS
- design
---

I assume there was at least one time when you wanted to add more appeal to a html input and at that moment you didn't knew how.
We all know how boring looks an input when we use it without styling it and that's why today I will show you the way to get rid of this old-style input.

[![](/dist/uploads/2009/10/style-button-input.png)](/style-an-input-button/)

<!-- more -->

For the beginning here is how a non-styled input looks like:

When styling and input button, we have two alternatives, to style it using only CSS with pout a background image, or using a custom background image.

## 1.Use only css without background image

First add a class or an id to your button. For this tutorial we will add an id because we do not intend to use this kind of button several times into a page:

Now let's add some styles for the id:
   
{% highlight css %}
#btn {
  border: 1px solid #777777;
  background: #6e9e2d;
  color: white;
  font: bold 11px 'Trebuchet MS';
  padding: 4px;
  cursor: pointer;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
}
{% endhighlight %}

The final result looks like this:

![test-button-1](/dist/uploads/2009/10/test-button-1.png)

Please note that [border-radius](http://www.css3.info/preview/rounded-border/) actually is working only on Mozilla/Firefox, Google Chrome and Safari 3.

### 2.Use a custom background image

Start by creating a new .psd file with 78x28px size. From the left panel choose "Rounded Rectangle Tool" (ALT+U for Windows Users) and set a 4px radius.Fill it with #6e9e2d (green) color and apply some effects.

This is my result and also this is the **[Photoshop source file](/dist/uploads/2009/10/btn.psd)** (please use it as you wish).

[Download Photoshop FREE source file](/dist/uploads/2009/10/btn.psd)

![test-button-2](/dist/uploads/2009/10/test-button-2.png)

Now, back to our code ....this image is 78x28px and we will use it as background image for our input.Here you have the new css code for it.
Note that this time you don't need to use the value attribute anymore.

{% highlight css %}
#btn {
  background: url(test-button-2.png);
  cursor: pointer;
  width: 78px;
  height: 28px;
  display: block;
  border: none;
}
{% endhighlight %} 

That's it, i hope you'll find it useful!