---
author: Red
comments: true
date: 2010-11-08 16:00:31+00:00
layout: post
slug: png8-alpha-transparency-using-adobe-fireworks
title: PNG8 alpha transparency using Adobe Fireworks
description: Read more on PNG8 alpha transparency using Adobe Fireworks.
wordpress_id: 771
categories:
- Miscellaneous
tags:
- design
---

PNG-8 with alpha transparency? 

I know some of you will say that this is impossible, because that was exactly what I was saying when I found out about it. 

But, Adobe Fireworks makes itself "guilty" about that and in this article I will show you how you can get a PNG-8 image with alpha transparency.

[![](/wp-content/uploads/2010/10/fireworks-png.png)](http://www.red-team-design.com/png8-alpha-transparency-using-adobe-fireworks)

<!-- more -->

## What is alpha transparency?

Some time ago, [GIF](http://en.wikipedia.org/wiki/Graphics_Interchange_Format) was the most popular type of image compression for web graphics. The GIFs  have done a very good job and they still do but their disadvantage in front of the [PNG](http://en.wikipedia.org/wiki/Portable_Network_Graphics) is that they only support index transparency. In other words they support transparent pixels but they have to be full transparent.

## Why should this matter present interest to me?

Because ** IE6 doesn't support alpha transparency**. So, to keep it simple...IE6 doesn't render well the transparent PNGs and more than that...all transparent pixels are transformed into light blue/gray pixels as you will see in the bellow examples.

![IE6 browser and PNG transparency image](/wp-content/uploads/2010/10/ie6png.jpg)
_Photo credit: [ablenetdesign](http://www.flickr.com/photos/ablenetdesign/)_

## How PNG-24 is rendered by IE6

Let's use the following example as a PNG-24 image you want to convert it to 8-bit PNG:

![Rtd wings logo image](/wp-content/uploads/2010/10/rtd-img.png)

Let's see in the bellow image how these wings will look into different browsers, please note the strange (but well-known) transparent pixels problem for the IE6:

![PNG transparency comparison for browsers image](/wp-content/uploads/2010/10/transparency-comparison.png)

## Introducing you a solution an alternative for this problem

In order to proceed please open the 24 bits PNG image using Adobe Fireworks. If the **Optimize** panel isn't visible for your workspace then toggle **F6** to see it or select **Window** -> **Optimize** from your top menu.

![Fireworks settings image](/wp-content/uploads/2010/10/fireworks-settings.png)

With the above settings you can export now your new PNG-8 image. Let’s make a new comparison and check how IE6 renders the PNG-8 image now:

![Transparency comparison for the PNG8 image](/wp-content/uploads/2010/10/transparency-comparison-png8.png)

Note the **jagged** effect that appears now when IE6 browser renders the PNG-8 image we just made. So, as a conclusion, this method can't be considered a solution 100% because has its owns issues.

## Final Thoughts

The purpose of this article is not to provide you a solution for IE6 alpha transparency problem, but to give you an alternative point of view for this problem.

On the other hand, if you compare resulting PNGs for different situations you may consider this method a solution for your web design. This happens when the resulting PNG image matches your design expectations.

## IE6 PNG fix resources

If you don't like complicated things and you just want a quick and effective way to fix PNG alpha transparency issue I'd recommend you the following resources:

  * [PNG Behaviour](http://webfx.eae.net/dhtml/pngbehavior/pngbehavior.html)
  * [TwinHelix](http://www.twinhelix.com/css/iepngfix/)
  * [24 Ways](http://24ways.org/2007/supersleight-transparent-png-in-ie6)
  * [DD Belated PNG](http://dillerdesign.com/experiment/DD_belatedPNG/)
  * [Dean Edwards solution](http://dean.edwards.name/weblog/2008/01/ie7-2/)

## Further Resources

  * [Sitepoint - PNG8 the clear winner](http://blogs.sitepoint.com/2007/09/18/png8-the-clear-winner/)
  * [Brenelz - PNG8 alpha transparency screencast](http://brenelz.com/blog/png-8-alpha-transparency-screencast/)