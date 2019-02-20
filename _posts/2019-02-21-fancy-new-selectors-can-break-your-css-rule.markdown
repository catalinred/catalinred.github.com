---
author: Red
comments: true
date: 2019-02-21 10:00:00
layout: post
slug: fancy-new-selectors-can-break-your-css-rule
title: Fancy new selectors within groups can break your CSS rule
description: Fancy new selectors within groups can break your CSS rule if just one of these selectors is invalid or if the browser doesn't recognize it.
categories:
- CSS
---

I was working on enhancing a bit [my responsive dropdown menu](https://github.com/catalinred/animenu) by adding the CSS `:focus-within` pseudo-class in order to tab through the dropdown menu items.

To avoid duplication, I thought it is a smart move to group this new fancy CSS `:focus-within` pseudo-class with an existing selector. It was beautiful and it looked a lot like a progressive enhancement but in the end, it broke the entire CSS rule within browsers that do not support the CSS `:focus-within`, e.g. IE.

![CSS selectors within groups](/dist/uploads/2019/02/fancy-new-css-selectors-can-break-your-rule.png)

<!-- more -->

## The scenario

![:focus-within support on caniuse.com](/dist/uploads/2019/02/focus-within-caniuse.jpg)

Here's the GitHub [commit](https://github.com/catalinred/animenu/commit/ede5f8bfcee80d8b54eba59b513e57291e401ab3#diff-dd393be4fd7c82e1bd62a934500aa19dL111) in question, the `:focus-within` pseudo-class doesn't work on IE, as the above CanIUse chart shows, thus the below CSS rule gets invalidated entirely [according to W3C specs](https://www.w3.org/TR/2018/REC-selectors-3-20181106/#grouping).

{% highlight css %}
.myEl,
.myEl:focus-within {
  /* ... */
}
{% endhighlight %}

> If just one of these selectors were invalid, the entire group of selectors would be invalid.

## The fix

I learned the lesson, [fixed the CSS selectors](https://github.com/catalinred/animenu/commit/21b7ae23efeec6cba1ec8aeae495e206b58b529f) and wrote this down. Also, you might like the article I wrote on [how to visually validate an input field](/visually-validate-input-using-css/) using `:placeholder-shown` and `:focus-within`.