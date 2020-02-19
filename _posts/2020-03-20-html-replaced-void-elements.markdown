---
author: Red
comments: false
date: 2020-02-10 10:00:00
layout: post
slug: html-replaced-void-elements
title: HTML replaced and void elements
description: Learn more about the HTML replaced and void elements and visualize the intersection of these two HTML elements sets using a Venn diagram.
categories:
- HTML
- CSS
---

There is some confusion when it comes to HTML replaced elements and void elements, because some of the replaced elements, such as `img` and `input`, are part of the void elements set as well.

With that in mind, I thought about a Venn diagram that does the job perfectly when it comes to represent and visualize the intersection between these two sets of HTML replaced and void elements.

![A Venn diagram with replaced and void elements in HTML](/dist/uploads/2020/02/html-replaced-void-elements-venn.png)

<!-- more -->

## Summary
- [HTML replaced elements](#html-replaced-elements)
  - [Anonymous replaced elements](#anonymous-replaced-elements)
  - [CSS properties that apply only to HTML replaced elements](#css-properties-that-apply-only-to-html-replaced-elements)
  - [300x150px default size](#300x150px-default-size)
  - [When the `img` is not a replaced element](#when-the-img-is-not-a-replaced-element)
  - [Custom checkbox and radio `input`s](#custom-checkbox-and-radio-inputs)
- [HTML void elements](#html-void-elements)
  - [XHTML-specific forward slash](#xhtml-specific-forward-slash)
- [Random tidbits](#random-tidbits)

### HTML replaced elements

According to [W3C](https://drafts.csswg.org/css-display/#replaced-element), an HTML replaced element is an element whose content is outside the scope of the CSS formatting model. An example is the HTML `img` element, whose content is replaced by the image that its `src` attribute designates.

Oh, and the `img` element is one of the HTML void elements too.

![An img as an HTML replaced element](/dist/uploads/2020/02/html-img-replaced-element.png)

Neither CSS nor HTML standards didn't define before which elements are replaced. So back in 2012, after gathering input from some really awesome people, I did wrote about [CSS content on HTML replaced elements](/css-generated-content-replaced-elements/), namely how the `::before` and `::after` pseudo-elements should work on HTML replaced elements.

Here's the list of HTML elements that can be replaced elements, according to the [WHATWG](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements):

- `audio`
- `canvas`
- `embed`
- `iframe`
- `img`
- `input`
- `object`
- `video`

### Anonymous replaced elements

> Objects inserted using the CSS content property are anonymous replaced elements. They are "anonymous" because they don't exist in the HTML markup.
>
> *from [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)*

I did stumble upon this while writing on how to get the [current DOM node in browser's console](/current-dom-node-console/#0-on-css-pseudo-elements-in-the-dom) but didn't actually know they are called anonymous replaced elements. So, you can run `$0` on [CSS pseudo-elements](/before-after-pseudo-elements/) in the DOM, because the `::before` and `::after` pseudo-elements are displayed in browsers' elements tree.

### CSS properties that apply only to HTML replaced elements

The `object-fit` and `object-position` are two CSS properties that apply only to the HTML replaced elements:

- [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) specifies how the contents of an HTML replaced element should be fitted to the box established by its used height and width.
- [`object-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) determines the alignment of the replaced element inside its box.

### 300x150px default size

The default size for some of the HTML replaced elements, like `iframe` or `object`, is `300` pixels wide and `150` pixels tall.

- [Inline, replaced elements width](https://www.w3.org/TR/CSS22/visudet.html#inline-replaced-width)
- [Inline, replaced elements height](https://www.w3.org/TR/CSS22/visudet.html#inline-replaced-height)

### When the `img` is not a replaced element

Even if the `img` is considered and therefore listed as a replaced element, when the `img` is rendered as its `alt` attribute text, that `img` no longer acts like a replaced element.

Therefore, it is possible to use CSS pseudo-elements in order to style the `img` element when its source image has failed to load. Here's an [article](https://bitsofco.de/styling-broken-images/) on how to style broken images, by Ire Aderinokun.

### Custom checkbox and radio `input`s

Within the WHATWG [table of contents](https://html.spec.whatwg.org/), the form controls are listed under the non-replaced elements. The main reason the `input` element can be considered a replaced element is due to the fact that `input`s with `image` type attributes are replaced elements similar to `img`.

This means that using `::before` and `::after` pseudo-elements on `<input type="checkbox/radio">` is allowed, according to the current standards.

- [Checkbox](https://codepen.io/jensimmons/pen/KKPzxJa) and [radio](https://codepen.io/jensimmons/pen/JjPXeqN) custom styles, by Jen Simmons
- [Styled Form Controls](https://scottaohara.github.io/a11y_styled_form_controls/) by Scott O'Hara
- [Custom Radio Buttons and Checkboxes](https://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html) by Adrian Roselli
- [Bootstrap v5 checkboxes and radios](https://twbs-bootstrap.netlify.com/docs/4.3/forms/checks/)

---

## HTML void elements

To better explain HTML void elements, we should point out first what tags are. When it comes to the HTML [anatomy](/things-you-should-know-about-css-anatomy/), first of all, tags are not elements, as this is a pretty common misunderstanding. The tags are meant to delimit the start and end of elements in the markup.

The HTML void elements don't have a proper end tag, therefore they can't have any kind of content between the start tag and the end tag.

![An URL input as an HTML void element](/dist/uploads/2020/02/html-input-void-element.png)

*Void elements only have a start tag e.g. `<input type="url">`.*

Here's the list of void elements, according to [WHATWG](https://html.spec.whatwg.org/multipage/syntax.html#elements-2):

1. `area`
2. `base`
3. `br`
4. `col`
5. `embed`
6. `hr`
7. `img`
8. `input`
9. `link`
10. `meta`
11. `param`
12. `source`
13. `track`
14. `wbr`

### XHTML-specific forward slash

It often happens to see void elements in the wild with a *closing* forward slash like `<br/>` or even with an extra space e.g. `<br />`, which is specific to the XHTML syntax. For better compatibility with XHTML, the slash is allowed on void elements by the HTML specification, therefore the document passes the [markup validation](https://validator.w3.org/).

As a side note, depending on the [type of the HTML element](https://html.spec.whatwg.org/multipage/syntax.html#elements-2) here's what the forward slash does on `<foo/>`:

- If `foo` is a void element, then the `/` gets ignored.
- If [foreign element](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements), meaning an element from the MathML namespace and the SVG namespace, e.g. `<defs/>` within an inline SVG, then the self-closing syntax is valid.
- If any other HTML element type, other than above, the browsers will ignore the slash and will treat it as a start tag, e.g. `<foo>`. Usually, this leads to a mess in your markup as the siblings are now considered children of the `foo` element.

## Random tidbits

Here's what I noticed, after lurking through W3C, WHATWG and MDN docs, old issues and forgotten corners of the web:

- The void elements are often called empty elements, single elements, stand-alone elements, unpaired elements or *singleton* elements. Yes, singleton, the design pattern, because I guess that's what happens when Java programmers start writing HTML.

- Both [W3C](https://www.w3.org/TR/html52/syntax.html) and [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) list the HTML elements as if they are start tags e.g. `U+003C`(`<`), tag name (element's name) and `U+003E`(`>`), while [WHATWG](https://html.spec.whatwg.org/multipage/syntax.html) seems to do it the right way.

- Within the MDN docs, the void elements are referred solely as [*empty* elements](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element), that cannot have any child nodes.

- It seems that Prettier and ESLint are still [*fighting over void elements*](https://github.com/prettier/prettier/issues/5246#issuecomment-565585320), whether to close or not to close them.

- While [WHATWG](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements) says that `audio`, `canvas`, `embed`, `iframe`, `img`, `input`, `object`, and `video` can be replaced elements, [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element) list only `iframe`, `video`, `embed`, `img` as typical replaced elements while `option`, `audio`, `canvas`, `object` and `applet` are treated as replaced elements only in specific cases.

- I stumbled upon [this issue](https://www.w3.org/Bugs/Public/show_bug.cgi?id=28904) on the need to add an exhaustive list of replaced elements [to the specs](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements). That [happened](https://github.com/whatwg/html/pull/2857) eventually, it just took a bit longer.

- On the [W3C vs WHATWG](https://lists.w3.org/Archives/Public/www-archive/2014Apr/0034.html) matter, hopefully, things are going in the right direction now, as in 2019, [W3C and the WHATWG have signed an agreement](https://www.w3.org/blog/2019/05/w3c-and-whatwg-to-work-together-to-advance-the-open-web-platform/) to collaborate on the development of a single version of the HTML and DOM specifications.

## Conclusion

When in doubt over one or the other, either it's a replaced or a void element, I hope the above Venn diagram will come in handy.

Oh, and always [validate your markup](https://validator.w3.org/nu/), it does miracles for your `body`!