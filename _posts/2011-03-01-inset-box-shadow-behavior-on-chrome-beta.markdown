---
author: Red
comments: true
date: 2011-03-01 12:11:49+00:00
layout: post
slug: inset-box-shadow-behavior-on-chrome-beta
title: Inset box-shadow behavior on Chrome beta
description: Read more about a strange behavior on Chrome beta version for the inset box-shadow.
wordpress_id: 2371
categories:
- CSS
tags:
- CSS3
---

In my previous [article](http://www.red-team-design.com/how-to-create-a-cool-and-usable-css3-search-box), `border`, ` border-radius` and `box-shadow` properties were used to create a slick HTML5 search box. As you may know, when using all these together, a well-known [Chrome bug](http://code.google.com/p/chromium/issues/detail?id=25334) is triggered.

Although this bug was fixed in the latest Chrome beta releases, below you'll see the _strange_ (may I call it like that?) or should I better say _different_ behavior:

![Chrome Beta version](http://www.red-team-design.com/wp-content/uploads/2011/02/beta-chrome.png)

<!-- more -->

Following [Atul](http://www.red-team-design.com/how-to-create-a-cool-and-usable-css3-search-box/comment-page-1#comment-18245)'s comment, I made a quick "investigation" and here is what I noticed.

After downloading the latest [Chrome beta version](http://www.google.com/landing/chrome/beta/) (10.0.648.119 in this case), I've also noticed that my search box example (now updated) doesn't looks well neither on this version (as it should look). 

## The normal behavior

Here's what you need to make a perfect circle:

{% highlight css %}
#circle {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: #999
}
{% endhighlight %}

Note that you don't need `border-radius: 100px` for that, just half of it. Here's a CSS3 circle [example](http://jsfiddle.net/catalinred/MEXx2/6/") with `50px` radius.

![CSS circle radius](http://www.red-team-design.com/wp-content/uploads/2011/02/css-circle-radius.png)

### Bug fixed

{% highlight css %}
    #circle {
        width: 100px;
        height: 100px;
        background: #999;    
        border: 2px solid red; 
        border-radius: 52px;       
        box-shadow: 0 10px 10px #000 inset;
    }
{% endhighlight %}

![CSS circle radius inset shadow](http://www.red-team-design.com/wp-content/uploads/2011/02/css-circle-radius-inset-shadow.png)

Check also the [example](http://jsfiddle.net/catalinred/MEXx2/8/) - if you have the BETA Chrome version.

### The strange behavior

This happens when you use for example:

{% highlight css %}
#circle {
    width: 100px;
    height: 100px;
    background: #999;    
    border: 2px solid red; 
    border-radius: 100px;     
    box-shadow: 0 10px 10px #000 inset;
}
{% endhighlight %} 

![Chrome beta bug](http://www.red-team-design.com/wp-content/uploads/2011/02/beta-chrome-bug.png)
Here's the live [example](http://jsfiddle.net/catalinred/MEXx2/10/) - again: you must have BETA Chrome version.

So, the problem (re-) appears only **when the radius value is greater than half-width or half-height**. If the box will have also some padding, plus the borders, height, width... Hm, should you always re-calculate the radius?! Do you get my point? :)

In order to avoid this type of situation, I think you should always be allowed to set a higher `border-radius` value - as a backup.

### "Statement"

I love Google Chrome browser, as I also love the other modern browsers. The purpose of this article is about how to make things better, as I share the idea that reporting bugs is a [web developer's responsibility](http://ejohn.org/blog/a-web-developers-responsibility/).

## Conclusion

I suppose this is also a bug? Don't you think so? Please let me know your opinions about this subject! Meanwhile, I think I'll report this as a bug to the Google Chrome browser project.

## Update

Tested also on Chrome **11.0.672.2** (Dev) version. The result is OK, any higher `border-radius` value is allowed without causing any problem.