---
author: Red
comments: true
date: 2017-09-25 10:10:00
layout: post
slug: design-websites-for-iphone-x
title: Designing websites for iPhone X, they say
description: Thoughts on latest Apple iPhone X and what it means to designing websites for this device.
categories:
- CSS
---

Upon the iPhone X release, I did enjoy the jokes and memes on Jony Ive and his notch haircut, or how to implement a scrolling list that shifts to avoid the notch. Those were funny. But the below excerpt from latest WebKit post on "Designing websites for iPhone X" isn't.

> ... selectively apply padding to elements that contain important content, in order to ensure that they are not obscured by the shape of the screen.

![Designing websites for iPhone X. How about no.](/dist/uploads/2017/09/iphone-x.png)

<!-- more -->

# A little bit of history

I remember when the iPhone 4 introduced Apple's high-resolution "Retina Display". That was awesome, we all wanted to know how to make our website image assets look better.

In the end, we got used to having something like the below lines in our stylesheets and everyone was fine with it. Mostly because everyone knew the other providers will strive to deliver this feature too.

Later on, better SVG support was implemented for the major browsers and things got better.

{% highlight css %}
/* CSS for high-resolution screens */
.icon{
  width: 100px;
  height: 100px;
  background-image: url(icon.png);
}

/* CSS for Retina screens */
@media (-webkit-min-device-pixel-ratio: 2) { 
  .icon{
    background-image: url(icon@2x.png);
    background-size: 100px 100px;
  }
}
{% endhighlight %}

But **designing for retina was a proper progressive enhancement** while **designing websites for iPhone X looks a lot alike graceful degradation**.

> **Graceful degradation**
> Providing an alternative version of your functionality or making the user aware of shortcomings of a product as a safety measure to ensure that the product is usable.
>
>*[w3.org](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement)* 

> **Progressive enhancement** 
> Starting with a baseline of usable functionality, then increasing the richness of the user experience step by step by testing for support for enhancements before applying them.
>
>*[w3.org](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement)*

## Winter is coming

I guess Apple should have done more to make sure that websites look good on iPhone X instead of throwing new burdens on us.

- [Removing the White Bars in Safari on iPhone X](http://stephenradford.me/removing-the-white-bars-in-safari-on-iphone-x/)
- [Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
- [“The Notch” and CSS](https://css-tricks.com/the-notch-and-css/)

## P.S.

> Don’t like designing for the iPhone X notch? You probably wouldn’t enjoy designing for HUDs on windshields, glasses, curved displays etc

While writing these lines down, I read the above on Twitter. Things are different because if I'd want to design for HUD's on windshields or glasses, I'd apply for a company that does proprietary sofware that runs on proprietary hardware.

I don't want to design for specific devices, I design for the web.