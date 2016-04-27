---
author: Red
comments: true
date: 2013-03-07 07:50:52+00:00
layout: post
slug: horizontal-centering-using-css-fit-content-value
title: Horizontal centering using CSS fit-content value
description: Read about an alternative approach on horizontal centering using the new CSS fit-content value.
wordpress_id: 6137
categories:
- CSS
tags:
- CSS
- CSS3
- HTML
---

The other day I read a good article on horizontal centering by [Roger Johansson](http://www.456bereastreet.com/archive/201303/how_to_shrinkwrap_and_center_elements_horizontally/) in where he explains the shrinkwrapping effect. Basically, it's about one of the most common problems you can find in the wild, namely how to center a navigation bar which contains floated elements with undefined widths.

As we all know, centering this kind of stuff can be quite tricky sometimes. With this common example in mind, Roger made an awesome list with solutions you can apply in order to achieve horizontal centering.

![CSS fit-content value and horizontal centering](/dist/uploads/2013/03/css-fit-content-value.png)

<!-- more -->


## Just another possible approach


Recently, I found out that Firefox and Chrome both support [intrinsic widths](http://dev.w3.org/csswg/css3-box/#the-width-and-height-properties) and one of the most interesting value for `width` seems to be the `fit-content` one. Also, in this article you'll see how `fit-content` can be a solution for solving the problem above.

Apparently, [just as on tables](http://www.w3.org/TR/CSS2/tables.html#table-display), when you only need to add `auto` for left and right margins to center it horizontally, setting `width: fit-content;` to an element tells the browser the element's width is defined by its content and will not automatically size to fill its containing block.


## Proper example

Now, with Roger's markup example:    

{% highlight html %}
<div class="navbar center">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About us</a></li>
        <li><a href="/">Our products</a></li>
        <li><a href="/">Customer support</a></li>
        <li><a href="/">Contact</a></li>
    </ul>
</div>
{% endhighlight %}

and the following CSS lines:

{% highlight css %}
.center ul{
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
    margin: auto;   
}
{% endhighlight %}

... you just got a new experimental solution for centering horizontally a navigation bar which contains floated elements within. Pretty straightforward, huh? Don't forget to check demo's page source to see the full styles.


[View demo](/dist/uploads/2013/03/horizontal-centering-using-css-fit-content-value-demo.html)


## Minimal browser support, but really promising though.


Despite the poor browser support at this time (Chrome and Firefox), this might be a good alternative to keep in mind for the future. Just think about the CSS Flexbox module, at the beginning the support was quite minimal and now it's getting wider and wider.

Also, you should be aware that `fit-content` value is kinda experimental and it's not a final recommendation. It's available in W3C Editor's Draft and that means that specs might change in the future.