---
author: Red
comments: true
date: 2011-05-09 21:01:29+00:00
layout: post
slug: before-after-pseudo-elements
title: The :before and :after pseudo-elements syntax
description: Clarify some common misunderstandings regarding the :before and :after pseudo-elements syntax.
wordpress_id: 2535
categories:
- CSS
tags:
- CSS
- CSS3
---

In my previous articles, you may have noticed how often I used these pseudo-elements. Why I like to use them? Because they are so handy to use as no extra HTML markup is required, but this article's purpose isn't about pseudo-elements advantages.

This article's purpose is to clarify some common misunderstandings regarding the above **pseudo-elements syntax**. 

![CSS pseudo elements](/dist/uploads/2011/05/before-after-pseudo-elements.png)

<!-- more -->

## Pseudo-what?

The pseudo-elements are so-called because they are not _real_ HTML elements. For example, there are no HTML tags called before or after, but using CSS you can apply styles to a certain element using `:before` or `:after`.

## Single/double colon syntax

There is absolutely no difference between `:before` and `::before`, or between `:after` and `::after`. Using double colon for pseudo-elements is "da new thang", **the CSS3 way**. 

> This :: notation is introduced by the current document in order to establish a discrimination between pseudo-classes and pseudo-elements. For compatibility with existing style sheets, user agents must also accept the previous one-colon notation for pseudo-elements introduced in CSS levels 1 and 2 (namely, :first-line, :first-letter, :before and :after).

_http://www.w3.org/TR/css3-selectors/#pseudo-elements_

## Let's recap

[Internet Explorer](http://www.red-team-design.com/how-to-solve-common-ie-bugs) 7 and lower do not support the above pseudo-elements. But, the surprise is that IE8 **does** and I'd say that's a very good (also the only) reason  to use the single colon syntax. 

## Important!

Please note that this discution, to use single-colon (:) or double-colon (::), is valid only when talking about pseudo-elements. Pseudo-classes are left out of discussion.

## How do you use pseudo-elements?

Single-colon or double-colon? Leave a comment and share with us your opinion!