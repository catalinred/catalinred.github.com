---
author: Red
comments: true
date: 2013-09-16 05:00:43+00:00
layout: post
slug: position-sticky-might-be-the-next-best-thing
title: position: sticky might be the next best thing
description: Check current browser support for sticky positioning and how this new CSS feature can enhance the user experience without any JavaScript.
wordpress_id: 6648
categories:
- CSS
---

As you may have read a while ago, `position: sticky` [landed in WebKit](http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit). Now, the latest news is that Firefox Nightly supports sticky positioning too and that's definitely good news!

![Sticky positioning](http://www.red-team-design.com/wp-content/uploads/2013/09/position-sticky.png)

<!-- more -->



## The need for position: sticky

I think we all, at a time, switched a header's position from static or relative into fixed depending on scroll position. But I'm not going to write about its pros and cons or how to do it with plain JavaScript, Eric Bidelman did it. And [did it well](http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit).

The most important thing is that sticky stuff will be easier to play with, without any JavaScript event handlers. I'm thinking for example at very long tables with sticky `thead`'s, huge FAQ sections with sticky questions, sticky sidebar blocks and sticky top bars of course. 

I'm eager to see future implementations of this feature and there's not doubt: **sticky positioning will work best combined with responsive design**.


> `position: sticky` is great and it will be awesome when it will get more widely adopted, sooner or later.


## How does it look like
    
{% highlight css %}
.sticky-stuff {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 15px;
}
{% endhighlight %}


Note the `top` value which is mandatory as it lets the browser know the distance from the top of the viewport where the sticky element will be positioned to.


## Browser support

At this time, the browser support include: [Chrome Canary](http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit) (unprefixed), [Firefox Nightly](https://air.mozilla.org/intern-presentation-ford/) (unprefixed) and [Safari 7](http://www.broken-links.com/2013/07/10/web-platform-technologies-in-safari-6-1-and-7/) (OS X Mavericks - TBA). Plus, Safari and Chrome on iOS 6 already support sticky positioning (with `-webkit-` prefix) which is pretty cool and it was a big surprise for me too, as I didn't know it before writing this. Yet, no good news regarding Android support.

[View demo](http://www.red-team-design.com/wp-content/uploads/2013/09/sticky-positioning.html)

Also, in order to view this feature in action on both Canary and Nightly versions, you need to check some settings first. For Chrome Canary, you need to type "about://flags" in your browser address bar and search for "Enable experimental WebKit features". On Firefox Nightly, type "about:config" and search for "layout.css.sticky.enabled", the last one should be set to true. 

## Notes

As far as I tested, on Chrome Canary and the iOS' Safari and Chrome, you are not able to use this type of positioning on table stuff like thead's or td's yet. Though, while reading some [Stackoverflow](http://stackoverflow.com/questions/15646747/css-position-sticky#comment25582510_15646803) discussions, people seem to have been reporting this as working in previous beta releases. On Firefox, `table` elements support `position: sticky` but the behavior is a little buggy though.

Still, this is work in progress and most likely it will be updated again and again. Also, it's good to know that currently there is no available documentation to check out because this feature isn't part of any W3C specifications. Let's hope this will change in the near future.

## Polyfils


If you're looking for a wider cross-browser solution, there are some polyfils in the wild you may want to check out:
	
  * [Position Sticky](https://github.com/philipwalton/polyfill/tree/master/demos/position-sticky) by Philip Walton	
  * [position: sticky; The polyfill!](https://github.com/matthewp/position--sticky-) by Alec Rust


## It's our responsibility, isn't it?


I'm aware that just like `width: fit-content`, which [I wrote about](http://www.red-team-design.com/horizontal-centering-using-css-fit-content-value) a while ago,  `position: sticky` has a low browser support at this time. So, you may be right to think you could "stick" with `position: fixed` and some basic JavaScript lines for now.

But, isn't staying up-to-date with latest news and always trying cutting edge stuff makes us [better developers](http://www.red-team-design.com/becoming-a-better-developer)? Keep experimenting, and have fun with it!