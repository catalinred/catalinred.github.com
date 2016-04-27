---
author: Red
comments: true
date: 2015-01-6 08:00
layout: post
title: Unicode chars are now colored in latest Firefox on Windows 8.1
description: If you're using Firefox on Windows 8.1, then you should check the newly colored Unicode characters in your web pages.
categories:
- CSS
---

You know Unicode characters, those glyphs we're inserting most of times via HTML or CSS in order to add a soft touch to our [buttons](http://red-team-design.com/dist/uploads/2011/09/awesome-css3-buttons.html), [form controls](http://red-team-design.com/dist/uploads/2014/11/custom-form-controls.html) and so on. Well, if you're using Firefox on Windows 8.1, then you should check the newly colored Unicode characters in your web pages.

![Colored Unicode characters](/dist/uploads/2015/01/colored-unicodes.png)

<!-- more -->

## The good

The good news to say so is that there's a [reported bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1054780). It applies in latest Firefox versions on Windows 8.1 only - Firefox 34 being the latest stable version at this time. Another *good* thing is that, being a reduced case scenario, most people won't probably ever notice this kind of inconsistence.

## The bad

The bad news is that there's no visible progress on the above bug.

## The fix

You need to properly specify `Segoe UI Symbol` font as a fallback for your Unicode glyphs. This way you'll replace the user agent's default `Segoe UI Emoji` that does not allow any color alteration for its glyphs.

In most cases, something like the following will be just enough:

{% highlight css %}
.unicode-icon {
  font-family: arial, helvetica, Segoe UI Symbol;
}
{% endhighlight %}