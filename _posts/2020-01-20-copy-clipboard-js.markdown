---
author: Red
comments: false
date: 2020-01-20 10:00:00
layout: post
slug: copy-clipboard-js
title: How to copy to the clipboard using JS and the Clipboard API
description: Find out how to copy to the clipboard using JS and the modern asynchronous Clipboard API.
categories:
- HTML
- CSS
- JS
---

The clipboard is a useful feature that helps to transfer data between a browser's window to another one or to a different operating system application using operations like cut, copy, and paste. In this article, you'll find out how to copy an API token to the clipboard using JS and the modern asynchronous Clipboard API.

![An API token example you can copy with JS and Clipboard API](/dist/uploads/2020/01/clipboard-js.png)

<!-- more -->

## How to copy an API token

A classic scenario we all met in the wild is to copy an API token from an account settings form. I had to implement a similar example in the past weeks and decided to write this article down to show you an example on how to do to that effectively.

There are two popular ways to copy to the clipboard:

- The synchronous `execCommand()` method helps to manipulate editable form inputs or `contentEditable` elements.
- The modern asynchronous Clipboard API, which is accessible through the global `navigator.clipboard`, is meant to supersede accessing the clipboard using the synchronous `execCommand()` method.

## `document.execCommand()`

Using the `execCommand()` method, you can perform operations or commands like copy, cut and paste when an HTML document has been switched to [`designMode`](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode). If `document.designMode === 'on'`, according to the specification, it means the entire document is editable.

{% highlight js %}
  // Operations/commands examples
  document.execCommand("copy");
  document.execCommand("cut");
  document.execCommand("paste");
{% endhighlight %}

To learn more about the syntax and full list of operations, [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) has a comprehensive entry about `execCommand()` in its web docs.

## `navigator.clipboard`

Further on, you'll see how to copy to the clipboard using JS and the modern asynchronous Clipboard API, as the `execCommand()` method is considered deprecated and superseded by this new Clipboard API.

> The Clipboard API adds to the Navigator interface the read-only `clipboard` property, which returns the Clipboard object used to read and write the clipboard's contents.

*from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard)*

API, interface, property, object... reading and assembling all these in mind might seem confusing but to keep it simple, the Clipboard API can help you to cut, copy and paste stuff in a web page.


## Copy an API token when double click
The following HTML code might be a section in the account settings page. With using HTML `mark` and `code` elements, we'll make sure we have some good default and native stylings offered by the browser.

{% highlight js %}
API token: <mark><code>joiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ</code></mark>
{% endhighlight %}

For the sake of brevity, I queried the current token by the `code` element but I assume that in production that will most probably replaced by an unique identifier instead.

{% highlight js %}
const token = document.querySelector("code");
{% endhighlight %}

We'll add a JS listener to the `click` event type and before writing any other JavaScript lines, we'll check out first if the Clipboard API is available in the browser:

{% highlight js %}
// Clipboard API is not available
token.addEventListener("click", () => {
  if (!navigator.clipboard) {
    return;
  }
});
{% endhighlight %}

In the end, considering the asynchronous behavior of the Clipboard API, check out the full code of the example. Also, here's a [CodePen demo](https://codepen.io/catalinred/pen/wvBEQNx) too.

{% highlight js %}
const token = document.querySelector("code");

token.addEventListener("click", async (event) => {
  if (!navigator.clipboard) {
    return;
  }

  try {
    const text = event.target.innerText;
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("Copy failed", error);
  }
});
{% endhighlight %}

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="catalinred" data-slug-hash="wvBEQNx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="API token">
  <span>See the Pen <a href="https://codepen.io/catalinred/pen/wvBEQNx">
  API token</a> by Catalin Rosu (<a href="https://codepen.io/catalinred">@catalinred</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Reading the clipboard
On security and permissions, the write permission is granted automatically but when it comes to the read permission, that must be requested specifically.

![The browser permission prompt to read the clipboard](/dist/uploads/2020/01/browser-permission-prompt-read-clipboard.png)

Read more on the interaction with the clipboard, including both write and read operations:
- https://www.w3.org/TR/clipboard-apis/
- https://developers.google.com/web/updates/2018/03/clipboardapi
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard

## Browser support

The browser support for the code above is strictly related to supporting Clipboard API in your browser, because as [Caniuse data](https://caniuse.com/#feat=mdn-api_clipboard) shows, if the browser supports Clipboard API then most probably has support for JS async functions too.

If you're targeting a wider browser support for copying to clipboard, you may use [clipboard.js](https://clipboardjs.com/), which is a 3KB gzipped library, based on both Selection and execCommand APIs and offers a very good support for legacy browsers.

![The browser permission prompt to read the clipboard](/dist/uploads/2020/01/clipboardjs-browser-support.png)