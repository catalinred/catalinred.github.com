---
author: Red
comments: true
date: 2018-07-02 10:00:00
layout: post
slug: sticky-table-th
title: Sticky table th's with position:sticky
description: Sticky table thead's or tr's not going to happen anytime soon, in the meantime check out sticky th's with CSS position:sticky.
categories:
- CSS
---

This is not new anymore, nowadays it became so easy to have a piece of content stuck while you're scrolling. No JS, no hassle just some CSS [`position: sticky`](/position-sticky-might-be-the-next-best-thing) magic. But the real thing is dealing with tabular sticky info.

Remember the last web app you're working on it that had a large table with lots of data rows? Feels like yesterday, no? Well, having this scenario, in terms of UX, it's almost mandatory to have `thead`'s or `tr`'s stuck while browsing the tabular data.

![CSS writing mode experiment](/dist/uploads/2018/07/sticky-table-th.png)

<!-- more -->

### Sounds easy, but ...

Sticky `thead`'s or `tr`'s: not going to happen anytime soon.

> For tables, position: sticky defers to the position: relative spec. At this time, Blink only supports CSS 2.1 for positioned elements, and the position: relative CSS 2.1 spec says that it does not apply to <thead> and <tr> elements.
>
> from the [Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=702927#c1)

{% highlight css %}
  table th {
    position: sticky;
    top: 0;
  }
{% endhighlight %}

For now, sticky positioning for `th`'s seems to be the only workaround and it works just fine in stable Chrome, Firefox, Edge and Safari browsers.

### Useful links
- [https://caniuse.com/#search=sticky](https://caniuse.com/#search=sticky)
- [https://bugzilla.mozilla.org/show_bug.cgi?id=975644#c42](https://bugzilla.mozilla.org/show_bug.cgi?id=975644#c42)
- [https://bugs.chromium.org/p/chromium/issues/detail?id=702927](https://bugs.chromium.org/p/chromium/issues/detail?id=702927)
- [https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/16765952/](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/16765952/)
