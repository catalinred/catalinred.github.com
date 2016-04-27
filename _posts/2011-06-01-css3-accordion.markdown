---
author: Red
comments: true
date: 2011-06-01 14:00:26+00:00
layout: post
slug: css3-accordion
title: Pure CSS3 accordion
description: In this article you'll learn how to build a simple animated CSS3 accordion. A jQuery fallback for older browsers is also provided.
wordpress_id: 2942
categories:
- CSS
- JavaScript
tags:
- CSS3
- HTML5
- usability
---

A while ago, I wrote about the CSS3 `:target` pseudo-class and how can that help you achieve [cool results](http://www.red-team-design.com/get-to-know-your-css3-target-pseudo-class). Today you'll learn how to create a pretty simple animated CSS3 accordion with its help.

![CSS3 accordion](/dist/uploads/2011/05/css3-accordion.png)

<!-- more -->

[View demo](/dist/uploads/2011/05/css3-accordion.html)

## What is an accordion

If you're designing with [usability](http://www.red-team-design.com/web-usability-tips-for-your-website) in mind, then an accordion can be very useful when willing to organize content. The main advantage is packing a lot of content in a reduced space.

## The HTML5 part

For this experiment I'll use one of the new HTML5 elements, it's about the `section` element. When using new HTML5 elements like this one, for older browsers, you need to use the following trick:

{% highlight html %}
<script>document.createElement('section');</script>
{% endhighlight %}

_[John Resig HTML5 Shiv](http://ejohn.org/blog/html5-shiv/)_

To simplify things here, I just used the _de facto_ script for enabling HTML5 elements in Internet Explorer. It's about Remy Sharp's [html5shiv](http://code.google.com/p/html5shiv/):

{% highlight html %}
<!--[if lt IE 9]>
  <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
{% endhighlight %}

## Markup

Enough with theory, let's see how this actually works:

{% highlight html %}
<div class="accordion">
    <section id="one">
        <h2><a href="#one">Heading 1</a></h2>
        <div>
            <p>content</p>
        </div>
    </section>
</div>
{% endhighlight %}
        
  * The `accordion` div wraps the sections that compose the proper accordion.	
  * Each `section` panel contains a title and of course its content.

## CSS

{% highlight css %}
section {
    display: block;
} 

.accordion {
    background-color: #eee;
    border: 1px solid #ccc;
    width: 600px;
    padding: 10px;  
    margin: 50px auto;  
    border-radius: 3px; 
    box-shadow: 0 1px 0 #999;
}
 
.accordion section {
    border-bottom: 1px solid #ccc;
    margin: 5px;    
    background-color: #fff;
    background-image: linear-gradient(top, #fff, #eee);
    border-radius: 5px;
}

.accordion h2,
.accordion p {
    margin: 0;  
}

.accordion p {
    padding: 10px;
}
 
.accordion h2 a {
    display: block;
    position: relative;
    font: 14px/1 'Trebuchet MS', 'Lucida Sans';
    padding: 10px;
    color: #333;
    text-decoration: none;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}

.accordion h2 a:hover {
    background: #fff;
}
 
.accordion h2 + div {
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out;    
}

.accordion :target h2 a:after {  
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -3px;
    border-top: 5px solid #333;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;    
}

.accordion :target h2 + div {
    height: 100px;
}
{% endhighlight %}    
    
 ## Result

![CSS3 accordion results](/dist/uploads/2011/05/css3-accordion-result.png)

## Browser support

The demo works in browsers that sup­port the `:tar­get` pseudo-class. Check [compatibility table](http://www.quirksmode.org/css/contents.html) for more details.

So, if you want to use this for your projects, you must be aware that the above isn't a cross-browser solution.

## Later update: Jquery solution


If the above isn't a recommended solution to use for production purposes because of support lacking for older browsers, the below solution is a **cross-browser** one. 

Please check the [Jquery demo](/dist/uploads/2011/06/css3-jquery-accordion.html), I hope it will help you!