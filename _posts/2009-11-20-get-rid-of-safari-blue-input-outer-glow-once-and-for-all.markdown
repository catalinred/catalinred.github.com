---
author: Red
comments: true
date: 2009-11-20 23:33:23+00:00
layout: post
slug: get-rid-of-safari-blue-input-outer-glow-once-and-for-all
title: Get rid of Safari's blue input outer glow
description: How to remove Safari's blue input outer glow when focusing an input.
categories:
- CSS
---

When you're building web interfaces or just websites you always need to do cross-platform browser testing. As we saw, inputs inherit different styles from browsers and you need to [style them](/style-an-input-button). In this article, I will show you how simple is to remove Safari's glowing blue outline.

![Blue input glow effect on focus](/dist/uploads/2009/11/safari-blue-outer-glow.png)

<!-- more -->

The normal state of our input looks like this:

![Input type text on Safari](/dist/uploads/2009/11/safari-input-text-default.png)

Please notice the effect that appears on input focus, we're talking about the Safari browser on Mac OS X:

![Focused input text on Safari](/dist/uploads/2009/11/safari-input-text-focus.png)

To remove this annoying input effect we just need to add one CSS line and it will disappear:

{% highlight css %}
input:focus {
  outline: 0;
}
{% endhighlight %}

![Input type text on Safari without the default blue outline](/dist/uploads/2009/11/safari-input-text-without-outline.png)

There you go! Simple but very efficient.

## Update <time datetime="2019-12-22">2019, December 22</time>

Please keep in mind that removing the default outline styles should always be used with caution and adding an alternative styling is mandatory. Read more on this matter:

- [Never remove CSS outlines](https://a11yproject.com/posts/never-remove-css-outlines/)
- [The plague of outline:0](https://webaim.org/blog/plague-of-outline-0/)