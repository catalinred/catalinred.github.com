---
author: Red
comments: true
date: 2009-11-20 23:33:23+00:00
layout: post
slug: get-rid-of-safari-blue-input-outer-glow-once-and-for-all
title: Get rid of Safari's blue input outer glow once and for all
description: A quick solution for getting rid of Safari's blue input outer glow.
wordpress_id: 260
categories:
- CSS
tags:
- CSS
---

<ins>Please keep in mind that removing the default outline styles should always be used with caution and adding an alternative styling is mandatory.</ins>

When you're building web interfaces or just websites you always need to do cross-platform browser testing. As we saw, inputs inherits different styles from browsers and you need to [style them](/style-an-input-button). In this article i will show you how simple is to remove Safari's glowing blue outline.

[![](/dist/uploads/2009/11/safari-blue-outer-glow.png)](/get-rid-of-safari-blue-input-outer-glow-once-and-for-all/)

<!-- more -->

The normal state of our input looks like this:

![safari-blue-outer-glow-state](/dist/uploads/2009/11/safari-blue-outer-glow-state.png)

Please notice the effect that appears on input focus(we're talking about Mac OS X browser-Safari):

![safari-blue-outer-glow-state2](/dist/uploads/2009/11/safari-blue-outer-glow-state2.png)

To remove this annoying input effect we just need to add one css line and it will disappear:

{% highlight css %}
input:focus {
  outline: none;
}
{% endhighlight %}

![safari-blue-outer-glow-state3](/dist/uploads/2009/11/safari-blue-outer-glow-state3.png)

There you go! Simple but very efficient.