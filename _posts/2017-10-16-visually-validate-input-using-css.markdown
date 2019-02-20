---
author: Red
comments: true
date: 2017-10-16 10:10:00
layout: post
slug: visually-validate-input-using-css
title: Visually validate an input field using CSS
description: An attempt to visually validate an input before submission using nothing but few lines of CSS.
categories:
- CSS
---

While working on this site, I tried to improve my email subscription box a little bit. The idea was to *enable* the action button only when the user types something in the email input. So I found a way to use `:placeholder-shown` CSS pseudo-class in an attempt to visually validate an input before form submission.

![Simple form with an email input and a subscribe button](/dist/uploads/2017/10/placeholder-shown.png)

<!-- more -->

## The result

<p data-height="300" data-theme-id="dark" data-slug-hash="OxRzjP" data-default-tab="result" data-user="catalinred" data-embed-version="2" data-pen-title=":placeholder-shown in action" class="codepen" style="margin-bottom: 1rem">See the Pen <a href="https://codepen.io/catalinred/pen/OxRzjP/">:placeholder-shown in action</a> by Catalin Rosu (<a href="https://codepen.io/catalinred">@catalinred</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## :placeholder-shown

The `:placeholder-shown` CSS pseudo-class helps to make the distinction between form elements that are currently showing the `placeholder` attribute text versus those that aren't.

## The clean HTML version

![Clean HTML form](/dist/uploads/2017/10/clean-html.gif)

*The submit button is enabled as you start typing within the text input.*

I did use [Tachyons](http://tachyons.io/) for the CodePen demo, but that is completely optional. You can merely use the following markup:

{% highlight html %}
  <form id="form">
    <label for="email">Email Address</label>
    <input placeholder="Your email address" type="email" id="email" required>
    <button type="submit" id="submit">Subscribe</button>
  </form>
{% endhighlight %}

Please note that to keep the markup simple, I used the weakest possible naming convention for my ID's. Don't do that in production, we have better [naming conventions](/css-utility-classes-naming-conventions/)!

## The CSS

To summarize, the next CSS selector says (from right to left): **select the `#submit` element that has no focus and that is placed next to the `#email` element whose placeholder is shown**.

{% highlight css %}
  #email:placeholder-shown + #submit:not(:focus) {
    opacity: .5; /* fake the disabled state */
    pointer-events: none; /* disable mouse events */
  }
{% endhighlight %}

This CSS rule makes the submit button to look like a *disabled* one until the required email input is filled. Basically, the disabled state is visually faked with CSS rather than using native HTML `disabled` attribute.

![Disabled submit button](/dist/uploads/2017/10/disabled-submit.gif)

*Style the submit button to simulate the disabled state.*

When it comes to keyboard tabbing, this trick might not be that effective so we avoid faking the disabled state when the `#submit` element is focused. This is basically what `:not(:focus)` is used for in the above selector.

![Keyboard tabbing](/dist/uploads/2017/10/keyboard-tabs.gif)

*Prevent any keyboard tabbing inconsistency.*

### `:focus-within`
While playing with the current demo, I thought about how the `:focus-within` can improve the form. In case you missed it, the `:focus-within` pseudo-class selects an element that has received focus or contains an element that has received focus.

It looks a bit like the [CSS parent selector](https://drafts.csswg.org/selectors-4/#relational) because it selects a parent element based on a child element, in this case the focused input.

![Focus within the form](/dist/uploads/2017/10/focus-within.gif)

*Simple form drop shadow effect.*

{% highlight css %}
  #form:focus-within {
    box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    transform: translateY(-2px);
  }
{% endhighlight %}

## That's it

This solution doesn't break the native form elements behavior of any kind, so I guess you can use this safely in order to add a small touch to your UX design with CSS only.

Feel free to play with the **[demo on CodePen](https://codepen.io/catalinred/pen/OxRzjP)** and make sure you check the browser support too.

- [http://caniuse.com/#feat=css-placeholder-shown](http://caniuse.com/#feat=css-placeholder-shown)
- [http://caniuse.com/#feat=css-focus-within](http://caniuse.com/#feat=css-focus-within)