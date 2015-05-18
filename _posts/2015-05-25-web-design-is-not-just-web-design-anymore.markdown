---
author: Red
comments: true
date: 2015-05-25 08:00
layout: post
title: Web design is not just web design anymore
description: 
categories:
- Miscellaneous
---

I've wanted to write this article for some time now, and this time I made it. 

It's been a while since doing web design isn't just like making stuff nice in Photoshop and then pass it to somebody else to slice it and deliver. In the meantime, designers have learned to code and nowadays, being a good web designer means to have the ability to combine your design skills with things like usability and accessibility knowledge in order to deliver the best user experience. Oh, and I almost forgot about SEO - you really need to know to handle your markup so that search engines to like you.

![web design](/wp-content/uploads/2015/05/webdesign.gif)

<!-- more -->

**TL;DR this is just a short rant.**

From sketch to the final result, when crafting an web page or an UI element you have to answer to lots and lots of questions.

## Mobile first, right?
The new thing you're working on it, is going to be mobile first, ain't that right? 

Then you know about how to use correctly the [`viewport`](http://webdesign.tutsplus.com/tutorials/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972) meta tag and you're eager to use the latest [HTML5 input types](http://html5doctor.com/html5-forms-input-types/) like search, email, url etc.

With all this mobile friendly stuff, you know you have to pass Google's latest [mobile-friendly test](https://www.google.com/webmasters/tools/mobile-friendly/), don't you? After all, we all want [better mobile rankings](http://www.advancedwebranking.com/blog/google-mobile-update-study/). 

Also, PageSpeed and YSlow are still mandatory to have in your toolbox. 

##How this will behave on multiple displays?

What are the main layout breakpoints? How can this be progressively enhanced to take advantage of modern web development techniques? Is CSS `@supports` an option here? Or maybe `flexbox` will be useful later to solve some [existential CSS problems](http://philipwalton.github.io/solved-by-flexbox/).

## How can SVG can help in this particular case?
Should you use a background image SVG, if yes then you should use the multiple backgrounds fallback to add a PNG for older browsers. 

Hm, but you could go with inline SVG because you have full control on its paths and shapes. Cool, so now you have to add a IE only HTML comment in order to add the PNG fallback, just in case you're not using Modernizr for your project.

## How to optimize images?

Don't you forget to optimize your images, it's good for your website health!

*Save as optimized* is simply not enough anymore. You need tools like [TinyPNG](https://tinypng.com/), [JPEGmini](http://www.jpegmini.com/) and [SVGO](https://jakearchibald.github.io/svgomg/) in order to get the best results. And when it comes to using [JPEG](http://sixrevisions.com/graphics-design/jpeg-101-a-crash-course-guide-on-jpeg/), making it [progressive](http://calendar.perfplanet.com/2012/progressive-jpegs-a-new-best-practice/) is a must.

## What hamburger to choose from the menu?

If you're dealing with a menu list, then you have to choose a good and tasty hamburger from it. Or maybe a kebab?

![web design](/wp-content/uploads/2015/05/mobile.png)

<small>[via Luke Wroblewski](https://twitter.com/lukew/status/591296890030915585)</small>

Ok, seriously now, will you stack the menu items on mobile displays or you'll hide them under a hamburger icon? Slide out/off canvas style? What will fit better for your design?

## What kind of CSS grid will  your design be based on?
You know that floats based grid systems don't play good with centered vertical alignment. Inline blocks are great for that but do you like fighting with white space? Flexbox based grid? Or you can't afford yet because of your users?

## Is this a link or a button?
Should that element be a link? If you click on it and it triggers some action instead of going to a new URL, most likely you should use a button instead. Basic rule: use `a` when you need a link and `button` when you need a button. 

It's simple... but why does the `form` submits when I click on that button? It shouldn't! Yeah, but as you may have guessed, there's a gotcha: [always set a type on `button`s](http://wtfhtmlcss.com/#buttons-type) because the default value is `submit`, meaning any `button` in a form can submit the form - and you don't want that.


## Is it a form we are talking about? 
Check for labels, make sure everything is grouped for a better readability and watch out for labels and radios - they're easier to scan and understand if they're stacked and not inline. If the basic rules are applied, think about using a custom look for the form elements or try a floating label effect for the inputs.

Always keep in mind that the `placeholder` is not a replacement for the `label`.

## And there's much more

All the above so that **the user to enjoy the best possible experience**, no matter the scenario - what device and what browser is he using.

## But...

But then I hear people around saying: 

> You gotta think like you're the user! Stop designing stuff, make it functional first! 

![Are you kidding me?](/wp-content/uploads/2015/05/really.png)

Really? Are you kidding me? [*Isn't that what I am already doing*](/becoming-a-better-developer/), for f@#$s sake?

Hm, maybe is just me. But I feel much better now.