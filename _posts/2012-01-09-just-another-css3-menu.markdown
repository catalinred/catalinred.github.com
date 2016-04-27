---
author: Red
comments: true
date: 2012-01-09 06:00:25+00:00
layout: post
slug: just-another-css3-menu
title: Just another CSS3 menu
description: In this article you'll learn how to create a simple and clean CSS3 menu in just a few steps.
wordpress_id: 4105
categories:
- CSS
tags:
- CSS3
---

Hey there, this is my first post on 2012 and today you'll learn how to create a simple and clean CSS3 menu in just a few steps. 

![](/dist/uploads/2012/01/just-another-css3-menu.png)

<!-- more -->

[View demo](/dist/uploads/2012/01/just-another-css3-menu-demo.html)

I know, there are so many CSS3 menu tutorials in the wild (including here on RTD) but I hope you will love this one also.

## CSS3 menu tutorials

Below is a list with other CSS3 menu articles you may have read here:
	
  * [Sexy CSS3 menu](/sexy-css3-menu)	
  * [CSS3 animated dropdown menu](/css3-animated-dropdown-menu)	
  * [Cool CSS3 navigation menu](/cool-css3-navigation-menu)	
  * [Vertical dropdown menu with CSS3 and jQuery](/create-a-stylish-html5-template-from-scratch)

## The idea

The idea for this CSS3 navigation menu came to me while watching this button on [UI Parade](http://www.uiparade.com/portfolio/ultra-clean-home-button/). Usually, when I see design stuff on the internet, I try to image how can I make it using CSS3. I think this a professional habit.

## The HTML

Check the markup below, simple and effective:
    
{% highlight html %}
<nav>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Categories</a></li>
        <li><a href="">About</a></li>               
        <li><a href="">Portfolio</a></li>
        <li><a href="">Contact</a></li>     
    </ul>
</nav>
{% endhighlight %}

Also, do not forget to include the following snippet when using HTML5 specific tags like `nav`:

{% highlight html %}
<!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
{% endhighlight %}


## The CSS

The following lines do not contain the vendor-specific properties like `-moz-` or `-webkit-`. From now on, I think this is how I'll present the CSS in my articles. Just keep in mind that you can always find the full code in the demo page source.

### Step 1

To be short: reset the margin and padding for the unordered list, also center align the `inline-block` list elements:

![Initial menu styles](/dist/uploads/2012/01/initial-menu-styles.png)


{% highlight css %}
nav{
    width: 960px;
    margin: 80px auto;
    text-align: center;
}

nav ul{
    margin: 0;
    padding: 0;
}
{% endhighlight %}

### Step 2

For the menu elements, instead using [float](/clearing-floats-nowadays) I chose the `inline-block` alternative. If you want to find out more about `inline-block` pros and cons, I'd recommend Robert Nyman's article: [CSS display: inline-block: why it rocks, and why it sucks](http://robertnyman.com/2010/02/24/css-display-inline-block-why-it-rocks-and-why-it-sucks/).

![Inline block elements](/dist/uploads/2012/01/inline-block-elements.png)

{% highlight css %}
nav li{
    margin: 0 10px; /* Add some horizontal spacing */
    display: inline-block;
    *display: inline;  /* IE7 and below */
    zoom: 1;
}
{% endhighlight %}

### Step 3


Using cool CSS3 properties like [gradients](/css-gradients-quick-tutorial) and [shadows](/how-to-create-slick-effects-with-css3-box-shadow) we're going to style the anchor elements:

![CSS3 menu link styles](/dist/uploads/2012/01/css3-menu-anchor-styles.png)

{% highlight css %}
nav a{
    display: inline-block;
    position: relative;
    padding: 8px 15px;
    border: 2px solid #fff;
    text-decoration: none;
    color: #999;
    font: bold 14px 'Lucida sans', Arial, Helvetica;
    background-color: #eaeaea;
    background-image: linear-gradient(top, #eaeaea, #fff);
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05) inset,
                0 0 1px 0 rgba(0, 0, 0, .2),
                0 2px 2px rgba(0, 0, 0, .3),
                0 10px 10px -5px rgba(0, 0, 0, .2);
}

nav a:hover{
    background-color: #eee;
    background-image: linear-gradient(top, #eee, #fff);     
}   

nav a:active{
        top: 1px; /* Simulate the push button effect */
    background: #f5f5f5;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05) inset,
                0 0 1px 0px rgba(0, 0, 0, .2),
                0 1px 2px rgba(0, 0, 0, .3);
}
{% endhighlight %}

### Step 4

The below is the most interesting part, in my opinion. Without, adding any extra markup and using a [pseudo-element](/before-after-pseudo-elements) you will be able to create a cool effect:

![Menu pseudo element](/dist/uploads/2012/01/css3-menu-before-pseudo-element.png)

{% highlight css %}
nav a::before{
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    z-index: -1;
    background-color: #e3e3e3;
    background-image: linear-gradient(top, #e3e3e3, #f7f7f7);
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(0,0,0,.05) inset;        
}

nav a:active::before{
    top: -11px; /* Hey you, don't move! */
}
{% endhighlight %}

## That's it!

I hope you enjoyed this article and I'm looking forward to hear your thoughts about it. Thanks for reading!