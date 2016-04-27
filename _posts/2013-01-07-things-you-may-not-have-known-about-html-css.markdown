---
author: Red
comments: true
date: 2013-01-07 07:06:36+00:00
layout: post
slug: things-you-may-not-have-known-about-html-css
title: Things you may not have known about HTML & CSS
description: In this article you'll find some random things and facts you may not have known about HTML & CSS.
wordpress_id: 5605
categories:
- CSS
- HTML5
tags:
- CSS
- HTML
---

I've recently watched a good [video](http://vimeo.com/channels/fronteers12/52851509) presentation by [Mathias](http://mathiasbynens.be/) from Fronteers 2012 which I found both interesting and inspirational. I already had in mind some similar things, so I ended up writing this article down. It's about some random things and facts you may (not) have known about HTML & CSS.

![Things you may not have known about HTML & CSS](/dist/uploads/2013/01/things-you-may-not-have-known-about-html-css.png)

<!-- more -->

## CSS em unit

Originally, the CSS em unit was derived from the width of the capital letter M, which is where its name came from. I remind myself I first read this in a CSS book a while ago, not sure about the book's name but you can check the Wikipedia [page](http://en.wikipedia.org/wiki/Em_(typography)) for more on this topic.


## HTML5 tags

The HTML5 structural elements are a practical implementation of naming searches among CSS [class](https://developers.google.com/webmasters/state-of-the-web/2005/classes) and [id](http://devfiles.myopera.com/articles/572/idlist-url.htm) selectors found in the wild at that time. I first read about how the currently HTML5 tags were born while digging into [Introducing HTML5](http://introducinghtml5.com/) By Bruce Lawson and Remy Sharp.

## Minimal valid web page

With the HTML5 arrival, you'd only need to define the `doctype` and `title` in order to create a new [valid](http://validator.w3.org/) web page. So, theoretically, no `html`, `head` or `body` tags are needed for that. This is happening because browsers assume them anyway, just check browsers' debuggers with the code below:

{% highlight html %}
<!doctype HTML>
<title>Bazinga</title>
{% endhighlight %}

## CSS specificity

It takes 256 chained CSS class selectors in order to beat an id specificity. When Chris Coyier made [this example](http://codepen.io/chriscoyier/pen/lzjqh), there has been a lot of [discussion](http://news.ycombinator.com/item?id=4388649) on this topic. [Ryan Seddon](http://www.thecssninja.com/css/extreme-specificity) wrote some thoughts about this too.

Also, on topic, an interesting fact is that there is no maximum length for a class name or id in CSS.

## Colors

`Peru` and `Tomato` are actually both valid CSS color names. Also, the hex `#badA55` color is not so badass, it's actually sort of lime :)

Also, when using the HTML deprecated `bgcolor` attribute, a bloody red color is rendered. Mathias mentioned it in his video as being the blood of Chuck Norris's enemies. Pure coincidence... or not :)

Read the [Stack Overflow](http://stackoverflow.com/questions/8318911/why-does-html-think-chucknorris-is-a-color) discussion to find out why does HTML think "chucknorris" is a color.

## CSS can be #funny

Check the following CSS lines to put a smile on your face:
    
{% highlight css %}
#universe:before { content: ""; }
.ninja { visibility: hidden; }
.kids-these-days { -webkit-perspective: none; }
.work:after{ content:"Beer!"; }
{% endhighlight %} 

Also, you may want to check [CSSHumor](https://twitter.com/CSSHumor) on Twitter for more.

## CSS px != Device px

The “px” unit in CSS doesn't really have anything to do with screen pixels, despite the poorly chosen name. You need to take deep breath and take your time to read more [here](http://inamidst.com/stuff/notes/csspx) and [here](http://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html).

## No (more) CSS4

It seems that there is no such thing as CSS4 after all. Also, CSS3 is everything after CSS2.1, it's all about modules. [Tab Atkins](http://www.xanthir.com/b4Ko0) wrote in detail about why there is no such thing as CSS4. 


## How to tell if a site's using HTML5 #funny
	
  * Try it on Internet Explorer.	
  * Did it work?	
  * No?	
  * It's HTML5.

## HTTP request

>The fastest HTTP request is the one not made.

This is not HTML & CSS related but I like this line a lot. Everytime I work on a project and try to optimize the number of HTTP requests, this pops up into my mind. I guess I first saw it while reading on of [Steve Souders](http://www.stevesouders.com/blog/2012/03/22/cache-them-if-you-can/)' posts.

## ::before & ::after pseudo elements


Until a few days ago, Firefox was the only one that supported transitions and animations for CSS pseudo elements like `::before` and `::after`. That's a great feature and the good news for 2013 is that [WebKit now supports that](http://trac.webkit.org/changeset/138632) too. You can now open Google Chrome Canary and see them in action.



## When you drop IE6 and IE7...


[IE6](/how-to-solve-common-ie-bugs) does not play an important role anymore, so with that in mind, now it's perfectly OK to use:
	
  * Multiple CSS class selectors (e.g. `.foo.bar`)	
  * Attribute selectors (e.g. `E[foo]`)	
  * Fixed positioning	
  * Immediate child selector (e.g. `.foo > .bar`)

Read more about this matter [here](http://www.bennadel.com/blog/2306-What-CSS-Properties-Are-Supported-When-You-Drop-IE6-Support.htm) and if IE7 isn't on your supported browsers list as well, you may want to use [the shortest clearfix ever](http://www.css-101.org/articles/clearfix/latest-new-clearfix-so-far.php).

## Costly CSS properties
Usually, CSS properties aren't expensive at all, but when it comes about browser painting, you should be aware that some of the following can affect the way your page renders:
	
  * position:fixed	
  * background-position: fixed	
  * border-radius	
  * background-size	
  * box-shadow	
  * gradients

Check the [Better CSS Performance With Tools](http://dl.dropbox.com/u/39519/talks/cssperf-cssdevconf/index.html) slides by Paul Irish to find out more.

## That's it!
Do you know more interesting stuff that worths sharing? Please feel free to do it in the comments section below. Thanks for reading this article and I'm looking forward to read your thoughts about it.