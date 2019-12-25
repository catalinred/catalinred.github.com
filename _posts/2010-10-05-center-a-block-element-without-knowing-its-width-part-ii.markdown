---
author: Red
comments: true
date: 2010-10-05 18:50:10+00:00
layout: post
slug: center-a-block-element-without-knowing-its-width-part-ii
title: Center a block element without knowing its width revised
description: Maybe one of the most tricky problem is to center a block element without knowing its width.
categories:
- CSS
- HTML
---

You may wonder why I insist about this subject I already [wrote](/center-a-block-element-without-knowing-its-width) but recently I was working for a project and I needed a simple and efficient solution for ALL browsers (including here our ["beloved" IE6](http://mashable.com/2009/08/10/microsoft-ie6-cannot-die/)) to **center blocks of unknown width** - without specifying a width for each.

And meanwhile doing that I found a cross-browsers solution for that.

![Center a block element without knowing its width](/dist/uploads/2010/10/center-block-unknown-width.png)

<!-- more -->

Let's start with a concrete example to better understand this matter and find out the CSS trick I used.

Let's say our block example who needs to be centered contains a button that uses CSS [sliding doors](http://www.alistapart.com/articles/slidingdoors/) technique. So our button will need to have variable width (given by the size of the text) and will need to be centered.

Supposing you're measuring the width of our button wrapper you could assign him a CSS width and you could center it simple adding **margin: 0 auto**. Further, you'll use **trebuchet MS** font for your button as I did in the example, everything is great until you test your HTML in a OS that doesn't support this font like Ubuntu Linux.

When you will check your HTML in Linux OS you'll see the button looks slight different because 'Trebuchet MS' font is not available on that OS. Instead, the default font will appear and the button will look slightly different.

## Conclusion

Measuring the width of a this kind of button isn't the most recommended thing you can do. This is the **main reason** I searched for another solution when using sliding doors buttons.

### Solution

The solution involves again a table, as in my [previous post](/center-a-block-element-without-knowing-its-width) about this. Don't get me wrong, I'm also a fan of [tableless web design](http://en.wikipedia.org/wiki/Tableless_web_design) but we must admit that when we have to deal with tabular data, tables are recommended.

In this case I made an exception because sometimes the purpose is more important than CSS and HTML beauty and this is a case like that.

So I added the button in a table cell, and then I used the fact that table can be horizontally centered setting the left and right margins to auto:

{% highlight html %}
<table class="centered-block">
  <tr>
    <td>
      <div>
        <a href="#"><span>This is my sliding doors button</span></a>
      </div>
    <td>
  </tr>
</table>
{% endhighlight %}

{% highlight css %}
  .centered-block {
    margin-left: auto !important;
    margin-right: auto !important;
  }
{% endhighlight %}

Above you have an example, so please let me know your opinion about this solution and what other methods you use for this?