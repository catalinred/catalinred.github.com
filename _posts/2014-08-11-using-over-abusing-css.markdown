---
author: Red
comments: true
date: 2014-08-11 08:00
layout: post
title: Using and over abusing CSS
description: Using and over abusing CSS features just because we can.
categories:
- CSS
---

People usually are abusing features just because they can. It happened before, it's happening now and most likely it will happen again.

![CSS](/dist/uploads/2014/08/css.png)


<!-- more --> 

>What CSS spec writers come up with has nothing to do with how things are interpreted/implemented by devs out there.<br>
<small>[Thierry Koblentz](https://twitter.com/thierrykoblentz/status/476752560867397633)</small>

So, regarding the above, if you make abstraction of words like CSS, spec writers or devs, I think we could all agree this is universally valid. Things are not always used as they were originally intended.  

## z-index 

... or how to [keep adding digits until the damn thing shows up](https://twitter.com/aflorescu/statuses/405637326329487360)! :)

A while ago, I've seen this amazing CSS declaration in the wild: `z-index: 2147483646`, which is probably the result of pursuing *stacking order happiness*.

Anyway, found out meanwhile, that [2147483647 is the maximum value for a int32](http://stackoverflow.com/questions/94591/what-is-the-maximum-value-for-a-int32). So, those people just wanted to make sure that absolutely nothing will overcome their thing. Nothing!

![Beyond max int32](/dist/uploads/2014/08/matrix.jpg)

## !important

This might not seem so *important* right now, but there was a time, not so long ago, when lots of CSS lines in the wild were *important*.

Now, if you're still doing that sometimes, you are too lazy or ... just need to override some CMS styles, which is quite understandable.

![All in or nothing](/dist/uploads/2014/08/the-most-interesting-man-in-the-world.jpg)

## Animate everything

Along with the ability to animate all kind of stuff using `transition`, one of the craziest idea I've seen was to animate everything. I mean everything.

{% highlight css %}
* {
	transition: all .2s ease;
}
{% endhighlight %} 

Whilst it might be fun to play with it, because of the performance issues involved, this has never been a solution for production purposes. Thanks God!

![Animate everything](/dist/uploads/2014/08/star-trek.jpg)

## OOCSS, BEM, SMACSS, ETC.

At the beginning, tables were used to build layouts. That was an issue and we didn't like it after all, tables are made to display tabular data only. Next we relied on div's and floats and in the end we build custom HTML5 elements like `header` and `footer` to replace some non-semantic markup.

Now, due to using the latest methodologies like OOCSS, BEM or SMACSS, it seems that we have a new issue in town: [trading small CSS for large HTML](https://twitter.com/g16n/statuses/247683730376884224).

So, what's next?!

![What's next?](/dist/uploads/2014/08/ned-stark.jpg)

## Over qualified selectors

Processors are great, but must be used cautiously. If nesting is overused, bad things happen and you wake up having lots of over qualified selectors - a nightmare for specificity and for performance as well. Bad performance because you know, [CSS selectors are parsed from right to left](http://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left).

![Over qualified selectors](/dist/uploads/2014/08/angry-child.jpg)

## will-change

Speaking of performance, to avoid browser computations every time an element is animated, you can tell the browser something like: "Hey, this is going to change its property later". This way, you avoid some last minute browser computations and gain some speed. Sara Soueidan wrote an excellent article on this matter so, [go for it](http://dev.opera.com/articles/css-will-change-property/)!

It's a bit strange because once you set an element with `will-change` you can't _unset_ it later via CSS again. So, apparently the current recommendation is to use JavaScript for now to add and remove values for `will-change`. This new property will create a stacking context on the element so it's quite important to remove it from an element once the action is performed - usually transforms or animations.

This is going to be fun!

![will-change and stacking contexts](/dist/uploads/2014/08/xzibit.jpg)

## *

The universal selector `*` is known to be slow, we know that since everyone used to use it to reset margins and padding for everything - the hardcore way. Later, we agreed using it is not a good practice and now CSS linters keep telling us the same.

Still, we fell in love with the new box model that makes everything easier to work with. And guess what's the selector that is making it happen? Surprise!

{% highlight css %}
*, *:before, *:after {
  box-sizing: border-box;
 }
{% endhighlight %}

![Universal selector](/dist/uploads/2014/08/suspicious-boy.jpg)

## Conclusion

We could have written lines and lines on how everything evolved or how trends changed over time. However, we don't have time to complain about it, there's a lot to learn every single day. In the end maybe it's all about trial and error.

**But at least we can make fun about it a bit.** :)