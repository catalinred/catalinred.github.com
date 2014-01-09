---
author: Red
comments: true
date: 2012-01-16 06:00:46+00:00
layout: post
slug: cool-headings-with-pseudo-elements
title: Cool headings with pseudo-elements
description: In this article you'll learn how to create some cool headings effects using CSS pseudo-elements.
wordpress_id: 4152
categories:
- CSS
tags:
- CSS3
---

Whether you're designing a website or a web application, you'll need custom styles for headings like `h1` or `h2`. In this article you'll learn how to create some cool headings effects using CSS pseudo-elements.

![](/wp-content/uploads/2012/01/cool-headings-with-pseudo-elements.jpg)

<!-- more -->

[View demo](/wp-content/uploads/2012/01/cool-headings-with-pseudo-elements-demo.html)

## Introduction

So, why [pseudo-elements](http://www.red-team-design.com/before-after-pseudo-elements)? The answer is very simple: there is no need to add extra markup. This fit perfectly for the heading we're going to create here.

## The HTML
    
{% highlight html %}
<h1 class="headline1">I took lessons</h1>
{% endhighlight %} 

As you can see above, there is no rocket science here. Just a simple HTML heading with a CSS class that will properly style it. All the other headings use a similar HTML structure, so it can't easier than that.


{% highlight html %}
<link href='http://fonts.googleapis.com/css?family=Droid+Sans:700' rel='stylesheet'>
{% endhighlight %}

Also, for this demo, we'll use a [Google custom font](www.red-team-design.com/google-font-api-and-typekit-solutions-vs-font-face).

## The CSS

Further, we'll use the `body` as our main wrapper:

{% highlight css %}
body {
  width: 60%;
  margin: 50px auto;
  padding: 15px;
  position: relative; /*needed for heading4 rule*/
  z-index: 0; /* again, just for heading4 rule*/    
  border: 7px solid #cecece;
  border: 7px solid rgba(0,0,0,.05);
  background: #fff;
  background-clip: padding-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, .5);
}

h1 {
  font-family: 'Droid Sans', sans-serif;
  font-size: 22px;
}
{% endhighlight %}

Noticed the `background-clip: padding-box` declaration? This will help you achieve a cool effect: **transparent borders** for the main wrapper. Basically, the `[background-clip](https://developer.mozilla.org/en/CSS/background-clip)` CSS property specifies whether an element's background, either the color or image, extends underneath its border.

![Headings with transparent border](/wp-content/uploads/2012/01/cool-headings-with-pseudo-elements-transparent-border.jpg)

_Browser support for background-clip: Safari 5+, Chrome 7+, Firefox 3.6+, Opera 10+, IE 9+ _

## Headline 1

Below is a simple and good looking effect made using CSS `border` property:

![CSS heading style 1](/wp-content/uploads/2012/01/css-heading-1.jpg)


{% highlight css %}
.headline1 {
  border-bottom: 1px dashed #aaa;
  border-left: 7px solid #aaa;    
  border-left: 7px solid rgba(0,0,0,.2);
  margin: 0 -15px 15px -22px;
  padding: 5px 15px;
}
{% endhighlight %}

## Headline 2
This style is made using a CSS triangle shape, you've seen this before [here](http://www.red-team-design.com/css3-animated-dropdown-menu):

![CSS heading style 2](/wp-content/uploads/2012/01/css-heading-2.jpg)

{% highlight css %}
.headline2 {
  border-bottom: 1px solid #aaa;
  margin: 15px 0;
  padding: 5px 0;
  position: relative;
}

.headline2:before,
.headline2:after {
  content: '';
  border-right: 20px solid #fff;
  border-top: 15px solid #aaa;
  bottom: -15px;
  position: absolute;
  left: 25px;
}

.headline2:after {
  border-top-color: #fff;
  border-right-color: transparent;
  bottom: -13px;
  left: 26px;
}
{% endhighlight %}

## Headline 3

The below HTML heading style is created using the [ribbon](http://www.red-team-design.com/css-ribbons) effect:

![CSS heading style 3](/wp-content/uploads/2012/01/css-heading-3.jpg)

{% highlight css %}
.headline3 {
  position: relative;
  margin-left: -22px; /* 15px padding + 7px border ribbon shadow*/
  margin-right: -22px;
  padding: 15px;
  background: #e5e5e5;
  background: linear-gradient(#f5f5f5, #e5e5e5);
  box-shadow: 0 -1px 0 rgba(255,255,255,.8) inset;
  text-shadow: 0 1px 0 #fff;
}

.headline3:before,
.headline3:after {
  position: absolute;
  left: 0;
  bottom: -6px;
  content:'';
  border-top: 6px solid #555;
  border-left: 6px solid transparent;
}

.headline3:before {
  border-top: 6px solid #555;
  border-right: 6px solid transparent;
  border-left: none;
  left: auto;
  right: 0;
  bottom: -6px;
}
{% endhighlight %}

## Headline 4

Using `box-shadow`, you can create some [slick effects](http://www.red-team-design.com/how-to-create-slick-effects-with-css3-box-shadow):

![CSS heading style 4](/wp-content/uploads/2012/01/css-heading-4.jpg)

{% highlight css %}
.headline4 {
  position: relative;
  border-color: #eee;
  border-style: solid;
  border-width: 5px 5px 5px 0;
  background: #fff;
  margin: 0 0 15px -15px;
  padding: 5px 15px;
  box-shadow: 1px 1px 1px rgba(0,0,0,.3);
}

.headline4:after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 15px;
  right: 15px;
  width: 70%;
  height: 10px;
  background: rgba(0, 0, 0, .7);
  box-shadow: 0 15px 10px rgba(0, 0, 0, .7);
  transform: rotate(2deg);    
}
{% endhighlight %}

## That's it!

I hope you liked my headings examples, and if you have some other cool ones to add, feel free to share your thoughts with us. Thanks you for reading!

## Update

I've updated the demo with one more heading style, related to my latest [CodePen](http://codepen.io/catalinred/pen/bwqta) example and inspired by Chris Coyier's [Line-on-sides headers](http://css-tricks.com/line-on-sides-headers/) post.