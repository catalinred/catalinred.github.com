---
author: Red
comments: true
date: 2012-05-02 05:00:45+00:00
layout: post
slug: css-filter-effects-in-action
title: CSS filter effects in action
wordpress_id: 4562
categories:
- CSS
tags:
- CSS
- CSS3
---

Ever since CSS filter effects landed in WebKit, I thought about theirs practical implementation. How will they fit with the current web design trends? At this time, my initial impressions are that the best way to showcase the power of CSS filters is something like an image gallery.

With so many CSS filters to choose from, it will be fun to create image galleries in the future. Further in this article we'll create a simple image gallery using CSS filters and the CSS3 `:not` selector.

![CSS filters](http://www.red-team-design.com/wp-content/uploads/2012/05/css-filter-effects-in-action.png)

<!-- more -->

[View demo](http://www.red-team-design.com/wp-content/uploads/2012/05/css-filter-effects-in-action-demo.html)

Whilst at the beginning we had just WebKit nightlies support, now you can view the filter effects using [Chrome Canary](http://tools.google.com/dlpage/chromesxs) too. I encourage you to download it in order to view the [CSS filter effects](https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html) in action. Also, I'm pretty sure that soon we'll see filters support also in stable Chrome's releases.

Here are the current filter effects: `grayscale`, `sepia`, `saturate`, `hue-rotate`, `opacity`, `invert`, `brightness`, `contrast`, `blur`, `drop-shadow`. Read more about them [here](https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html).

In this article we'll be using just the `blur` and `grayscale` effects in order to create our small gallery. Also, the CSS3 `:not` selector will help us here as you'll see below.

## The HTML

Getting back to our image gallery, let's see how the markup looks like:
    
{% highlight html %}
<ul class="gallery">
  <li><img src="1.jpg"></li>
  ...
  <li><img src="6.jpg"></li>      
</ul>
{% endhighlight %} 

## The CSS

I think it's the first time in a long time when I don't have too many CSS lines to show you. This time, less is more :)

The interesting part is related to the `.gallery:hover li:not(:hover)` selector. When you hover over the list, we'll assume you'll hover also over a list element and we'll apply some filters to the non hovered list elements.

![](http://www.red-team-design.com/wp-content/uploads/2012/05/css-filter-effects-in-action-example.jpg)

_This is how the other images looks like when the tulip image is hovered._

{% highlight css %}
.gallery{
  list-style: none;
  margin: 50px auto; padding: 0;
  width: 642px;
  font-size: 0; /* fix inline-block spacing */
}

.gallery li{
    display: inline-block;
    *display: inline;
    zoom: 1;
    width: 200px; height: 150px;
    margin: 2px;
    border: 5px solid #fff;
    box-shadow: 0 2px 2px rgba(0,0,0,.1);
    transition: all .3s ease;        
}

.gallery:hover li:not(:hover){       
    -webkit-filter: blur(2px) grayscale(1);
    opacity: .7; /* fallback */        
}
{% endhighlight %}

For this example I chose to use `inline-block` instead `float` and `font-size: 0` is my "kung-fu" move to [fight the space between inline-block elements](http://css-tricks.com/fighting-the-space-between-inline-block-elements/).

Regarding degradation, here's my method:
  
  * If the browser support CSS filters and `:not`, then apply filters and also decrease opacity.
  
  * If the browser does not support CSS filters (currently all except Canary) but it does support the `:not`, then just decrease opacity.
  
  * If the [browser is too old](http://www.red-team-design.com/how-to-solve-common-ie-bugs) and does not support neither opacity nor `:not` [selector](http://caniuse.com/#search=:not), then do nothing.


## Browser support

Here's the current support for the CSS filter effects: Chrome 20.0.1123.0 (currently Canary) and Webkit nightly.

## Conclusion

**The future sounds good**. We already have a Flexbox Module and CSS Filters, I like to think that in the near future we'll also have [variables](http://www.red-team-design.com/css-variables) and the [CSS parent selector](http://www.red-team-design.com/meet-the-css4-selectors) ready to use. Exciting times for web developers, don't you think so?