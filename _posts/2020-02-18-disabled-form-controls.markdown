---
author: Red
comments: false
date: 2020-02-18 10:00:00
layout: post
slug: disabled-form-controls
title: Disabled form controls and how to tackle them
description: Find out how to use the HTML disabled boolean attribute, toggle it with JavaScript and style disabled form controls.
categories:
- HTML
- CSS
- JS
---

When an HTML form control element is disabled that means it can't be selected, clicked on, typed into nor does accept focus anymore. Also, by default, browsers display such form controls grayed out.

In this article, you'll find out how to use the HTML `disabled` boolean attribute, toggle it with JavaScript and style disabled form controls.

![Disabled form controls using HTML, CSS, JS and ARIA](/dist/uploads/2020/02/disabled-form-controls.png)

<!-- more -->

## Summary

- [The HTML `disabled` boolean attribute](#the-html-disabled-boolean-attribute)
  - [Disabled fieldset](#disabled-fieldset)
  - [`disabled` != `readonly`](#disabled--readonly)
  - [The `aria-disabled` attribute](#the-aria-disabled-attribute)
- [Toggle the `disabled` state with JS](#toggle-the-disabled-state-with-js)
- [Style the `disabled` form controls](#style-the-disabled-form-controls)
  - ["disabled" links](#disabled-links)
  - [Default User Agent `disabled` styles](#default-user-agent-disabled-styles)

## The HTML `disabled` boolean attribute

According to [WHATWG](https://html.spec.whatwg.org/dev/form-control-infrastructure.html#attr-fe-disabled), the HTML `disabled` attribute is supported by a limited group of HTML elements and by the newly introduced [form-associated custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-face-example):

- `button`
- `fieldset`
- `optgroup`
- `option`
- `select`
- `textarea`
- `input`

In this article we'll be focusing on the basic [HTML elements](/html-replaced-void-elements/) only, so here's a checkbox input which has a `disabled` attribute:

{% highlight html %}
<input type="checkbox" id="check" name="check" disabled>
<label for="check">Checkbox</label>
{% endhighlight %}

Note that setting a value for the `disabled` attribute is not really required, due to its [boolean](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute) logic. Therefore, considering the presence of a boolean attribute on an element, all the below values are redundant and the outcome is a `disabled` behavior anyway:

- `disabled="disabled"`
- `disabled="true"`
- `disabled="false"`
- `disabled="whatever"`

### Disabled fieldset

The HTML `fieldset` element is used to group several controls within a web form. If the boolean `disabled` attribute is set on the `fieldset`, then all the form controls contained within will become disabled too.

Here's an example with both of the [form controls](/form-controls-currentcolor-pseudo-elements/) being disabled due to being wrapped by a disabled `fieldset` element.

{% highlight html %}
<form>
  <fieldset disabled>
    <legend>Disabled fieldset</legend>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" value="Chris">
    </div>
    <div>
      <label for="pwd">Password</label>
      <input type="password" id="pwd" value="topsecret">
    </div>
  </fieldset>
</form>
{% endhighlight %}

### `disabled` != `readonly`

Comparing to the `readonly` form controls, the `disabled` ones are not submitted within a form, therefore they are also ignored when it comes to `form` validation. Also, the `disabled` form controls are not focusable either.

### The `aria-disabled` attribute

> If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.
>
> from [W3C](https://www.w3.org/TR/using-aria/#rule1)

When using an HTML element, such as a [form control](https://html.spec.whatwg.org/#form-controls), which natively supports the `disabled` boolean attribute, you don't need the `aria-disabled` attribute.

Steve Faulkner wrote a good piece on the [disabled/aria-disabled attributes](https://codepen.io/stevef/post/short-note-on-the-disabled-attribute) so you should go check it out!

---

## Toggle the `disabled` state with JS

You can take advantage of the fact that the [`.disabled` property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled) returns a boolean value so you can toggle it easily using the following:

{% highlight js %}
let el = document.querySelector(".myFormControl");
el.disabled = !el.disabled;
{% endhighlight %}

Also, besides the classic `removeAttribute()` and `setAttribute()` methods, you can use the `toggleAttribute()` method to toggle the `disabled` attribute or any other boolean attribute. Although the [browser support](https://caniuse.com/#feat=mdn-api_element_toggleattribute) is not perfect, this might come in handy:

{% highlight js %}
let el = document.querySelector(".myFormControl");
el.toggleAttribute("disabled");
{% endhighlight %}

---

## Style the `disabled` form controls

There are two ways to select a disabled element using CSS:

- The old `[disabled]` attribute selector can be used for any HTML element user that has a `disabled` attribute, and it doesn't really have to be a form control element.

- The `:disabled` pseudo-class, introduced in [Selectors Level 3](https://www.w3.org/TR/selectors-3/), is the preferred method to select a disabled element, due to the fact it matches HTML elements that support the `disabled` attribute only.

### "disabled" links

Links are not `button`s, neither `div`s, `span`s or whatever. Still, an `a` element can act as a placeholder link when it's used without its `href` attribute.

> If the `a` element has no href attribute, then the element represents a placeholder for where a link might otherwise have been placed.
>
> From [WHATWG](https://html.spec.whatwg.org/#the-a-element)

We know that the `:disabled` CSS pseudo-class only applies to form controls that natively support a `disabled` attribute and the `a` element is not among them.

Therefore, the following [CSS rule](/things-you-should-know-about-css-anatomy/) contains both the `[disabled]` attribute selector and the `.disabled` class selector. You know, just in case you want, need, or have to use `<a disabled>...</a>` instead of `<a class="disabled">...</a>` in a certain situation.

{% highlight css %}
.disabled,
[disabled] {
  pointer-events: none;
  cursor: not-allowed;
  opacity: .7;
}
{% endhighlight %}

If you're wondering why would you even *disable* link elements, there is a scenario I'm having in mind and I'm sure you also did stumble upon this before:

Let's say you have an active item within a navigation, showing it's the active URL in that navigation. Now, besides the *active* styles applied to it, you might also want to prevent the user clicking and refreshing that already active page he's on.

### Default User Agent `disabled` styles
In case you're wondering where all those default disabled styles come from, here's a list with the most popular User Agent styles, feel free to dive in:

- [Chromium](https://cs.chromium.org/chromium/src/third_party/blink/renderer/core/html/resources/html.css)
- [Mozilla](https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css)
- [WebKit](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)

## Conclusion

- The IE 11 and below don’t fully support the boolean `disabled` attribute on a `fieldset`.
- When adding the CSS `pointer-events: none` declaration to a link, in an attempt to *disable* it, you should also think of applying `tabindex="-1"` in order to take it out of the tab order.
- There is no good reason to use the CSS `[disabled]` attribute selector in favor of the `:disabled` pseudo-class. Perhaps needing IE6 - IE8 support and that's definitely not a good reason.
- Comparing to the boolean `disabled` attribute, the `aria-disabled`, when set as an attribute, does require a value of either `true` or `false`.
- If `aria-disabled="false"` is set on a form control along with the `disabled` attribute, then the latter has greater *specificity*  and the `aria-disabled` attribute gets ignored.