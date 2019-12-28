---
author: Red
comments: true
date: 2012-09-10 05:00:06+00:00
layout: post
slug: how-to-create-triangle-shapes
title: How to create triangle shapes in HTML, SVG & CSS
description: Learn how to create simple triangle shapes in HTML with entities or Base64, SVG, CSS border and transform.
categories:
- CSS
- HTML
- JavaScript
---

You've seen triangles everywhere: on [tooltips](/easy-css3-jquery-tooltips/), [dropdowns](/css3-animated-dropdown-menu/) and even on [loading animations](/css3-loading-animation-experiment/). Like it or not, these triangle shapes are quite important when trying to build some relationships between various UI elements.

Everything is a rectangle when working with HTML. But there are different ways to build triangle shapes in HTML, SVG & CSS for your designs and in this article, you'll see how you can actually do that.

![Colored triangles in HTML, SVG and CSS](/dist/uploads/2012/08/webdesign-triangles.png)

<!-- more -->

[View demo](/dist/uploads/2012/09/create-triangle-shapes-demo.html)

## Encoded image

![Encoded base64 triangle](/dist/uploads/2012/09/encoded-base64.png)

Assuming you already created your custom triangle image and you want to save a valuable HTTP request, then [converting it into a Base64 string](/data-uri-tools/) is the best solution.

### Pros

* You can design it as you wish using shadows, gradients and strokes and then just encode it.

### Cons

* You'll need a tool like Photoshop or Gimp to edit it.
* For larger images, the resulting Base64 string can be quite huge.
* Older browsers like IE6/IE7 do not support this type of encoding.

## CSS borders

![CSS green border triangle](/dist/uploads/2012/09/border-triangle.png)

This is also a pretty common technique used on stuff like [tooltips](/css3-tooltips) and [dropdowns](/css3-dropdown-menu). Together with the above, this is one of my favorite methods for creating small and useful triangles.

### Pros

* Easy to update color and size by adjusting some CSS values.
* This is a cross-browser solution.

### Cons

* This technique consists of using borders, so you can't add shadows, gradients and other CSS3 awesomeness.
* Keep in mind that IE6 doesn't support transparent borders - in case you care about this matter anymore.
* If you're using Firefox, be aware that CSS's `transparent` may not be that transparent, especially on those [diagonal borders](/css-diagonal-borders-still-not-rendering-properly-on-firefox/).

## HTML entity

![HTML entity triangle](/dist/uploads/2012/09/entity-triangle.png)

If you read my [previous](/simple-and-effective-dropdown-login-box/) [articles](/just-another-awesome-css3-buttons/), then you've seen how this solution works. It's based on using characters from the available [Unicode characters list](https://en.wikipedia.org/wiki/List_of_Unicode_characters).

### Pros

* It's a cross-browser technique.
* You can add a shadow using [CSS `text-shadow`](/drop-shadow-effect-using-css/) property.

### Cons

* Again, you can't play too much with CSS3 here, excepting the use of `text-shadow`.
* It's quite impossible to achieve pixel perfection across all browsers.

Here's the official list of character entities: [WHATWG's named character references](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).


Besides using an entity, if you're already using an [icon font](https://fontawesome.com/) in your project, then you can simply use an arrow symbol from the available ones (in case there is one).

## CSS rotated square

![CSS triangle from a cropped rectangle](/dist/uploads/2012/09/cropped-triangle.png)

Basically, for this technique to work, you'll need two blocks. But, it's not mandatory to use two elements, so you can use an element with a pseudo-element for example.

* Create a box. e.g. `100x100px` - this one will contain the rotated block.

* Rotate the contained block by 45deg to obtain the diamond shape.

* Shift the diamond shape to the top then set `overflow: hidden` to the wrapping block to show just the part we're interested in.

* There you go!

### Pros

* The possibility of playing with [CSS box-shadow](/how-to-create-slick-effects-with-css3-box-shadow/) and [gradients](/css-gradients-quick-tutorial/).

### Cons

* This solution is not cross-browser due to using the CSS `transform` property.

## HTML5 Canvas

Having the following `canvas` element in your HTML file:

{% highlight html %}
  <canvas id="triangle" height="100" width="100">Triangle</canvas>
{% endhighlight %}

... here's how to draw a triangle using JavaScript:

{% highlight js %}
  var canvas = document.getElementById('triangle');
  var context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(100, 0);
  context.lineTo(50, 100);

  context.closePath();

  context.fillStyle = "rgb(78, 193, 243)";
  context.fill();
{% endhighlight %}

## SVG (Scalable Vector Graphics)

This is how you can define an inline SVG triangle in your markup:

{% highlight html %}
  <svg xmlns="http://www.w3.org/2000/svg" class="svg-triangle">
    <polygon points="0,0 100,0 50,100"/>
  </svg>
{% endhighlight %}

Then, just add some styles:

{% highlight css %}
  .svg-triangle{
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }

  .svg-triangle polygon {
    fill:#98d02e;
    stroke:#65b81d;
    stroke-width:2;
  }
{% endhighlight %}

## Final words

I must admit I haven't played too much with the last two described in this article: `canvas` and `SVG`. This is something I must improve in the future as they are very powerful. Anyways, the truth is that they were made for things greater than just trivial triangles :)

Let me know your thoughts about these ways to build triangles, what is the method you often use?