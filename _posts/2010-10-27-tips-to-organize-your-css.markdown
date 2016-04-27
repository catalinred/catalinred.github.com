---
author: Red
comments: true
date: 2010-10-27 14:42:32+00:00
layout: post
slug: tips-to-organize-your-css
title: 7 tips to organize your CSS
description: Read some simple and effective tips on how to organize your CSS files.
wordpress_id: 1191
categories:
- CSS
tags:
- CSS
---

Working often with CSS for my own website or for my job makes me trying always to be organized and that made me thinking about a thing. What is the best way to organize my CSS file(s)? With this article I will try to present you a short guide about CSS organizing.

[![](/dist/uploads/2010/10/tips-to-organize-your-css.png)](/tips-to-organize-your-css)

<!-- more -->

### 1.Group your CSS files into a folder

Beside your main CSS file you may want to use also a print CSS file or why not a CSS file for the IE6 browser. Placing them together in a folder named **css** for example will help you improve your website back-end structure.

![](/dist/uploads/2010/10/group-css-files.png)

## 2.Use efficient selectors

A very important thing for you to know is how browsers understand and read your CSS selectors? The answer is that they read them from **right to left**. That means that for the selector **ul li a span** the first thing thing interpreted is **span**.

![](/dist/uploads/2010/10/efficient-selectors.png)

The id is the selector with the greater specificity so always, instead div#header you should use just #header. This way your file will be **less redundant and smaller**. Also note that the use of [efficient CSS selectors](http://code.google.com/speed/page-speed/docs/rendering.html) is a nowadays requirement.

## 3.Comment and separe your CSS rules

Generally, a CSS file contains reset styles, header, content  and footer styles and in order to easier browse your CSS rules you should choose a way to separe them. 

![](/dist/uploads/2010/10/comment-css.png)

You can choose an simple and easy to notice separator as in the following example:

{% highlight css %}
/* Header styles */
/* ---------------------------------- */
/* Content styles */
/* ---------------------------------- */
/* Footer styles */
{% endhighlight %}    
    
## 4.Create a simple color scheme to use for your styles

When you are dealing for example with a CSS file for an web application you will use a lot common styles and colors. So placing something as following inside a CSS comment could be very helpful for you:

{% highlight css %}
/* Colors: Light Gray #eaeaea, Dark Gray #828282, Red #c60000 */
{% endhighlight %}

## 5.Use a meaning naming convention for your selectors.

Let's suppose you need to name your logo, menu and a tagline  that are placed inside a **header** id wrapper. A good approach in this way would be to use namings as: 

{% highlight css %}
* **header-logo** or **h-logo**
* **header-menu** or **h-menu**
* **header-tag** or **h-tag**
{% endhighlight %}

![](/dist/uploads/2010/10/css-naming-convention.png)

## 6.Create your own small CSS framework

By doing that you will be able to use these common CSS classes at any time for any elements from your markup.

{% highlight css %}
.full-width {
  width: 100% !important;
}

.min-width {
  width: 1% !important;
  white-space: nowrap !important;
}

.centered-inline {
  text-align: center !important;
}

.centered-block {
  margin-left: auto !important;
  margin-right: auto !important;
}
{% endhighlight %}

## 7.Simple is better

Don't try to complicate things because simplicity will save you time, effort and why not your remaining hair :).