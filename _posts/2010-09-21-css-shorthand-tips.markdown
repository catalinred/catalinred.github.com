---
author: Red
comments: true
date: 2010-09-21 16:06:09+00:00
layout: post
slug: css-shorthand-tips
title: 5 CSS shorthand tips and how to optimize CSS
description: Read more about the CSS shorthand tips and how to optimize your CSS code.
categories:
- CSS
---

If you want to write efficient and optimized CSS code then you'll surely need to have in mind the following shorthand tips. These tips and tricks apparently don't seem to be that important, but once you write thousands of CSS lines you will wish to optimize every single line.

Why's that? Because loading speed does matter (Google introduced this to their ranking algorithms) and your web pages will load faster because your stylesheet file size will be smaller. Below I will present you a short, yet comprehensive CSS shorthand guide to help you get started optimizing your CSS file. So let's have a look at some examples and see exactly how we can optimize a CSS file.

<!-- more -->

## 1.Background properties

Defining a background property could be made in an easier way than we often happen to see.

Why using:

{% highlight css %}
  background: url(example.gif);
  background-color: #eaeaea ;
  background-repeat: repeat-x;
  background-position: top left;
{% endhighlight %}

... when you could easier write:

{% highlight css %}
  background: #eaeaea url(example.gif) repeat-x top left;
{% endhighlight %}

## 2.Border property

When all of the border widths are the same, instead of using:

{% highlight css %}
  border-color: red;
  border-width: 1px;
  border-style: solid;
{% endhighlight %}

... you can simply write this:

{% highlight css %}
  border: 1px solid red;
{% endhighlight %}

## 3.List properties

The following list properties:

{% highlight css %}
  list-style-position: outside;
  list-style-image: none;
  list-style-type: disc;
{% endhighlight %}

... could be simplified into one declaration:

{% highlight css %}
  list-style: disc outside;
  /* shorthand notation for list properties */
  /* list-style: [list-style-type] [list-style-position] [list-style-image];*/
{% endhighlight %}

## 4.Font and line-height properties

Font and line-height properties like the ones below:

{% highlight css %}
  font-family: Arial, Helvetica;
  font-weight: bold;
  font-style: italic;
  font-size: 1em;
  line-height: 1.5em;
{% endhighlight %}

... can be easily transformed into:

{% highlight css %}
  font: bold italic 1em/1.5em Arial, Helvetica;
{% endhighlight %}

## 5.Margin and padding properties

This example applies for margin and also for padding, so next, we'll use as an example the CSS `margin` property.

{% highlight css %}
  /* top=10px, right=5px, bottom=15px, left=20px */
  margin: 10px 5px 15px 20px;

  /* top=10px, right=5px, bottom=10px, left=5px*/
  margin: 10px 5px;

  /* top=10px, right=5px, bottom=15px, left=5px*/
  margin: 10px 5px 15px;
{% endhighlight %}

---

Now let's see what else we can do to write optimized CSS:

## `0` equals `0`

Use the `0` value instead `0px` or `0em` because no matter the CSS value unit `0` equals `0`. So, the following [CSS properties](/things-you-should-know-about-css-anatomy/)'s `0` values

{% highlight css %}
  margin: 0px;
  padding: 0em;
{% endhighlight %}

can be easily written as unitless values:

{% highlight css %}
  margin: 0;
  padding: 0;
{% endhighlight %}

## Shortcuts for hexadecimal CSS colors

White color equal to `#ffffff` or just `#fff`,  `#aabbcc` can be wrote like `#abc` and so on.

## Simplify non integer CSS values

Instead of writing `0.5em` you can use `.5em`.

## The last declaration's semicolon is not mandatory

You can skip the last declaration's semicolon, and it still passes the W3C CSS validation.

{% highlight css %}
  div {
   margin: 0;
    padding: 0 /* no semicolon here * /
  }
{% endhighlight %}

## Floated elements inherits `display:block` declaration

When floating an element there's no need to add also "display: block" declaration as we often see. This is helpful for avoiding redundancy and save us one line of CSS.

## Conclusion
These are some CSS shorthand tips I often use as they are very helpful to write shorter and better CSS code.