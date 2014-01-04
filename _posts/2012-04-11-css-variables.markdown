---
author: Red
comments: true
date: 2012-04-11 05:00:41+00:00
layout: post
slug: css-variables
title: CSS Variables Preview
wordpress_id: 4453
categories:
- CSS
tags:
- CSS
- CSS3
- CSS4
---

If you are a developer then you are very familiar with variables and they are probably one of your best friends. A variable is by definition a temporary storage which contains some known or unknown quantity or information, a value. 

But, what is this having to do with the CSS we all know? The latest news is that the first working draft of [CSS Variables](http://www.w3.org/TR/css-variables/) just got released.

![](http://www.red-team-design.com/wp-content/uploads/2012/04/css-variables.jpg)

<!-- more -->

## Why CSS variables?


Variables in CSS is something that people have been asking and wanting for a quite [long time](http://disruptive-innovations.com/zoo/cssvariables/). 

Think about all those colors, heights, widths and sizes: will not be great to define them just once? After all, this is what we all want: **write less & do more**.

## A CSS common practice

When people asked about defining color variables in CSS, adding a comment at the top of the CSS file was sort of variable's behavior simulation:


{% highlight css %}
/*--------------------------
link color: #99D1FF (light blue)
box color: #555 (dark gray)
--------------------------*/
{% endhighlight %}

_Later, to update you'd need to search and replace content._

## The LESS/Sass ways to do it

The idea of using variables for style sheets was one of those that have propelled [LESS](http://lesscss.org/) or [Sass](http://sass-lang.com/).


### LESS

![LESS](http://www.red-team-design.com/wp-content/uploads/2012/04/less-variables.png)

### Sass

![Sass](http://www.red-team-design.com/wp-content/uploads/2012/04/sass-variables.png)

## How it will work

First of all, please keep in mind that there's no browser support actually. But this is how it will work: **var-foo** for definition, **var(foo)** for usage.

According to the draft:

> Any property name starting with the prefix "var-" is a variable property.


### Quick example

The following rule declares a variable property named "var-header-color" on the root element, and assigns to it the value "#99D1FF":
    
{% highlight css %}
:root {
  var-header-color: #99D1FF;
}
{% endhighlight %}    

Further, its value can be referenced via the "header-color" variable:

{% highlight css %}
h1 { 
  color: var(header-color); 
}
{% endhighlight %}

Using color variables within gradient declarations can be very helpful too. You'd just need to replace values for the variables, and voila: all gradients updated. Sounds pretty cool if you ask me.

Also, when creating a layout, variables together with the [calc()](http://www.w3.org/TR/css3-values/#calc0) function can help you making interesting calculations.

## Conclusion

CSS is not a programming language and it neither shouldn't be complicated too. Though, I think you agree that using CSS variables will be able to help you avoiding redundancy and creating more flexible style sheets. 

Now, with the first module for CSS Variables release, we're looking forward to seeing browsers implementing it in the near future.