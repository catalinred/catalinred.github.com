---
author: Red
comments: true
date: 2009-12-01 12:56:57+00:00
layout: post
slug: things-you-should-know-about-css-anatomy
title: CSS anatomy and terminology
description: How CSS is structured, its anatomy and terminology including rules or rulesets, selectors, declarations, properties, values and units.
categories:
- CSS
---

<ins>
  Last updated on <time datetime="2019-12-23">2019, December 23</time>
</ins>

People are writing CSS without knowing its structure meaning or being aware of its cascading and inheritance behavior. In this article, we'll take a closer look at how CSS is structured, its anatomy including rulesets or rules, selectors, declarations, properties, values and units.

![A CSS rule structure, including selector, declarations, properties values and units  ](/dist/uploads/2009/12/css-structure-anatomy.png)

<!-- more -->

The CSS structure basics, from rulesets to values and units:

- rules or rulesets
- selectors
- declarations
- properties
- values and units

## CSS rules or rulesets

A CSS rule or ruleset is a group of one or more CSS declarations - known as a declaration block, wrapped together by a CSS selector along with an opening and closing curly braces.

## CSS selectors

A CSS selector defines, identifies and targets the HTML elements to whom its set of style declarations apply. There are four categories or [types of selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#Types_of_selectors):

- Type, class, and ID selectors
- Attribute selectors
- Pseudo-classes and pseudo-elements
- Combinators

### There is no CSS parent selector
There is no such thing as the [CSS parent selector](/css-parent-selector/) available and that's due mostly to performance costs when determining what styles to apply to an element.

But the Selectors Level 4 Working Draft now include a so-called [relational pseudo-class, `:has()`](https://drafts.csswg.org/selectors-4/#relational) which, for example, can help you match only `<a>` elements that contain an `<img>` child:

{% highlight css %}
  a:has(> img) {
    display: block;
  }
{% endhighlight %}

### The :focus-within pseudo-class
The [`:focus-within`](https://www.w3.org/TR/selectors-4/#the-focus-within-pseudo) pseudo-class selects an element container that has received focus or contains an element that has received focus.

On the matter above, this has a parent selector behavior as it allows you to [select and style a container parent element](/visually-validate-input-using-css/), more or less, based on a child element as a focused input.

### Groups of selectors
A comma-separated list of selectors represents a group of selectors and they target all the elements matched by each of the individual selectors in the list. Note that an invalid selector within a group of selectors can [break your CSS rule](/fancy-new-selectors-can-break-your-css-rule/) entirely.

## CSS declarations

A CSS declaration is a property-value pair, with both entities separated by a colon punctuation mark and ended by a semicolon.

## CSS properties

While there's an exhaustive [list of CSS properties](https://www.w3.org/Style/CSS/all-properties.en.html) available, a CSS property is basically responsible for the exact style that you want to apply to the targeted element.

### The most popular CSS properties
Check out the [MDN CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) and [W3C](https://www.w3.org/Style/CSS/all-properties.en.html) for the full lists of CSS properties, both proposed and standard. According to Microsoft's [CSS usage on the web platform](https://developer.microsoft.com/en-us/microsoft-edge/platform/usage/), with data that comes from a scan of 2,726,655 pages, here are the top 15 most popular CSS properties in the wild:

1. `font-size`
2. `margin-top`
3. `margin-left`
4. `color`
5. `margin-bottom`
6. `margin-right`
7. `padding-left `
8. `padding-top `
9. `padding-bottom`
10. `padding-right`
11. `background-color`
12. `width`
13. `display`
14. `font-family`
15. `height`

## CSS values and units
Every CSS declaration consists of a property, a value and an optional unit. The property and value are separated by a colon punctuation mark while the unit is adjacent to the value.

Depending on the CSS property's type and its value, there are [two types of lengths used in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) - absolute and relative.

### Absolute length units

Unit | name |
------------ | --------------- |
cm |	Centimeters |
mm |	Millimeters	|
Q |	Quarter-millimeters	|
in |	Inches	|
pc |	Picas	|
pt |	Points	|
px |	Pixels	|

### Relative length units

Unit | relative to |
------------ | --------------- |
em |	Font size of the parent element. |
ex |	x-height of the element's font. |
ch |	The advance measure (width) of the glyph "0" of the element's font. |
rem |	Font size of the root element. |
lh |	Line height of the element. |
vw |	1% of the viewport's width.
vh |	1% of the viewport's height. |
vmin |	1% of the viewport's smaller dimension. |
vmax |	1% of the viewport's larger dimension. |

### CSS `Q` length unit

The `Q` unit is an [absolute length unit](https://drafts.csswg.org/css-values/#absolute-lengths) and `1Q` represents one quarter of a millimeter (quarter-millimeters) or 1/40th of `1cm`. I'm curious about the use case scenarios, but most likely, given its measurement related to mm or cm, this is intended to be used mostly for customizing print stylesheets.

I wasn't aware of this new CSS unit until I read a [GitHub issue](https://github.com/HTTPArchive/almanac.httparchive.org/issues/513) described on [Web Almanac CSS chapter](https://almanac.httparchive.org/en/2019/css#units)'s unit section.

{% highlight css %}
  h3 {
    letter-spacing: 1Q; /* quarter-millimeters */
  }
{% endhighlight %}

### The most popular unit types

According to the [Web Almanac's CSS Chapter](https://almanac.httparchive.org/en/2019/css), unsurprisingly, when it comes to the popularity of the CSS unit types, `px` is the most used unit type. You wouldn't have expected that, would you?

### CSS unitless values

Most of the time, unitless values are useful in [browser zoom scenarios](https://www.24a11y.com/2019/pixels-vs-relative-units-in-css-why-its-still-a-big-deal/) or when the user is changing the browser's default font settings e.g. for better accessibility.

Also, a unitless value rather than length-based is a known recommended best practice for setting `line-height`. But unitless values are useful as well to shove some bytes, as seen in the code below.

{% highlight css %}
 body {
   margin: 0; /* 0 instead of 0px */
 }
{% endhighlight %}

On a side note, if you think of the the `img` [replaced element](/css-generated-content-replaced-elements/) for example, you might argue that since there is no unit specified for its `width` and `height` attributes, those values are unitless too.

{% highlight html %}
 <img src="..." alt="..." width="400" height="300">
{% endhighlight %}

But the W3C specs clearly state that the values represent CSS pixels:

> The attributes width and height must return the rendered width and height of the image, in CSS pixels.

## There is always more to learn

Like CSS cascading and specificity a.k.a CSS can be both complicated and confusing, or not. Certain is there is always lots to learn and for that check out these resources:

- CSS: Cascading Style Sheets on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- The CSS chapter on [Web Almanac by HTTP Archive](https://almanac.httparchive.org/en/2019/css)