---
author: Red
comments: true
date: 2009-10-23 21:34:55+00:00
layout: post
slug: style-an-input-button
title: Style an input button with CSS
description: How to style an input button with CSS and add rounded corners via border-radius.
categories:
- CSS
- design
---

I assume there was at least one time when you wanted to add more appeal to an HTML `input` button and at that moment you didn't know how to do it. We all know how boring looks an input when we use it without styling it and that's why today I will show you a way to get rid of this old-style input.

![From a default HTML input button to a styled with CSS one](/dist/uploads/2009/10/style-html-input-button.png)

<!-- more -->

For the beginning here is how a non-styled input looks like:

When styling and input button, we have two alternatives, to style it using only CSS with pout a background image, or using a custom background image.

## Style an input button using CSS only

First, add a class or an id to your button. For this tutorial we will add an `id` because we do not intend to use this kind of button several times into a page:

Now let's add some styles for the `id`:

{% highlight css %}
#btn {
  border: 1px solid #777;
  background: #6e9e2d;
  color: #fff;
  font: bold 11px 'Trebuchet MS';
  padding: 4px;
  cursor: pointer;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
}
{% endhighlight %}

## Conclusion

The final result looks like the image below, note that [border-radius](https://caniuse.com/#feat=border-radius) actually is working only on latest Firefox, Chrome and Safari.

![A green button styled with CSS](/dist/uploads/2009/10/css-green-button.png)

That's it, I hope you'll find it useful!

## Update <time datetime="2019-12-21">2019, December 21</time>

Lots have changed since this article was first published, including making the border corners round using `border-radius` support:

![border-radius support via Can I use](/dist/uploads/2009/10/css3-border-radius-support-2020.png)

Check out below the current native HTML buttons and see their usage in this [HTML study](https://www.advancedwebranking.com/html/) I made on milions of homepages from top twenty Google results:

- `button`
- `input[type=image]`
- `input[type=button]`

Also, speaking of styling buttons, here are some recent articles I wrote on CSS buttons:

- [Cross-browser CSS gradient buttons](/cross-browser-css-gradient-buttons/)
- [Just some other awesome CSS3 buttons](/just-another-awesome-css3-buttons/)
- [CSS3 patterned buttons](/css3-patterned-buttons/)

If you want to dig more into best practices when it comes to buttons, check out these modern frameworks and libraries and see how they approach building and styling `button`s:

- [Examples of building buttons with Tailwind CSS](https://tailwindcss.com/components/buttons/)
- [Bootstrap’s custom button styles](https://getbootstrap.com/docs/4.0/components/buttons/)
- [Yelp's basic buttons](https://www.yelp.com/styleguide#buttons)
- [Foundation's button styles](https://get.foundation/sites/docs/button.html)
- [turretcss' button style](https://turretcss.com/element/button/)
- [Bulma's buttons in different colors, sizes, and states](https://bulma.io/documentation/elements/button/)
- [Lightning Design System's buttons](https://www.lightningdesignsystem.com/components/buttons/)
- [Tachyon's buttons](https://tachyons.io/components/#buttons)
- [GitHub's Primer CSS buttoms](https://primer.style/css/components/buttons)