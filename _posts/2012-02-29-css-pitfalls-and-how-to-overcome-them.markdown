---
author: Red
comments: true
date: 2012-02-29 06:00:04+00:00
layout: post
slug: css-pitfalls-and-how-to-overcome-them
title: CSS pitfalls and how to overcome them
description: Learn about common CSS pitfalls and how to overcome them using simple and effective tips and tricks.
wordpress_id: 4187
categories:
- CSS
tags:
- CSS3
- HTML5
---

When you write CSS, there are some problems you may run into. Then, to overcome the situation, you'll need to use some small and effective CSS tricks.

In this article I'll try to show you some tips and tricks that can definitely help you when writing CSS.

![](http://www.red-team-design.com/wp-content/uploads/2012/02/css-pitfalls-and-how-to-overcome-them.png)

<!-- more -->

## Buttons styling

I'll begin with classical HTML buttons. When trying to style buttons like `input type"submit"` or `button`, if you want to achieve _pixel perfection_ in your designs, don't forget about the following:
    
{% highlight css %}
/* removes extra side spacing in IE */
.button{
  overflow: visible; 
}

/* removes extra inner spacing in Firefox */
.button::-moz-focus-inner{
  border: 0;
  padding: 0;
}
{% endhighlight %}

Want to see some buttons that are using the above snippet?
	
  * [Just some other awesome CSS3 buttons](http://www.red-team-design.com/just-another-awesome-css3-buttons)	
  * [Design a beautiful CSS3 search form](http://www.red-team-design.com/design-a-beautiful-css3-search-form)	
  * [Cool CSS3 search box](http://www.red-team-design.com/how-to-create-a-cool-and-usable-css3-search-box)

## Using pseudo-elements

I'm sure you already know that using pseudo-elements like `:before` and `:after` helps you specifying which content should be inserted before (or after) the content of that element. Besides that, elements like `input` or `img` have no content, therefore, the pseudo-elements will not render anything for them. An **exception** is the `hr` element, which, for some reason, allows adding pseudo-elements to it. 

Also, keep in mind the [difference](http://www.red-team-design.com/before-after-pseudo-elements) between `:before` and `::before`. To summarize it, IE8 is the only reason to use the single colon syntax. 

## Gradient background for whole body

If you tried before to add a [CSS3 gradient](http://www.red-team-design.com/css-gradients-quick-tutorial) for your `body`, then you noticed that it will not stretch and it will repeat instead. To fix that, just add the following lines:    
    
{% highlight css %}
html, body {
    height: 100%;
}
body {
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
{% endhighlight %}

## Fake transitions on gradients

Speaking of gradients, want transitions for CSS3 gradients? Unfortunately, there's no browser support for gradients transitions (yet). 

But, this can be done using some tricks like:

	
  * Use `background-position` on `:hover` to give the illusion that the gradient is transitioning. Actually, it's shifted using the Y-axis only. This technique is used by [Twitter's Bootstrap](http://twitter.github.com/bootstrap/).


{% highlight css %}
a {
    background: linear-gradient(orange, red) repeat-x;
    display: inline-block;
    padding: 20px;
}

a:hover {
    background-color: red;
    background-position: 0 -15px;
    transition: background-position .1s linear;
}
{% endhighlight %}
	
  * The second option (and my favorite) is to transition the `background-color` and apply a gradient image to it which fades to transparent value. Again, this gives the illusion of an transitioning gradient.

{% highlight css %}
a {
    background-color: orangered;
    background-image: linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
    transition: background-color .1s linear;
    display: inline-block;
    padding: 20px;
}

a:hover {
  background-color: red;
}
{% endhighlight %}

## Inline-block gaps

Let's say you'd like to use `inline-block` instead `float` for a horizontal list. When doing that, a horizontal space will appear between your `inline-block` elements. To avoid that, you'll need to use a _dirty_ (also good) method, namely adjust your markup.

So, instead using a clean structure like the below one:

{% highlight html %}
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
{% endhighlight %}

you'll have to use something like this:

{% highlight html %}
<ul>
    <li>one</li><li>two</li><li>three</li>
</ul>
{% endhighlight %}

Read more about the CSS display `inline-block` value: [Why it rocks, and why it sucks](http://robertnyman.com/2010/02/24/css-display-inline-block-why-it-rocks-and-why-it-sucks/).

## When height 100% actually works?

It's actually quite simple: when you set a `height: 100%` for an element, always think about the parent's height. If the parent's height is not defined in your styles, then the inner element will have height: 100% of _nothing_.

Please consider the following **working** (and rough) example:

{% highlight html %}
<div id="parent">
    <div id="child">2</div>
</div>
{% endhighlight %}

and

{% highlight css %}
#parent{
    height: 400px;
    padding:10px;
    background:red;
}

#child{
    height: 100%;
    background:green;
}
{% endhighlight %}

In the above example, the green colored `#child`, using `height: 100%`, will stretch and fill the whole `400px` vertical space. Also, you can check my [CSS3 progress bars](http://www.red-team-design.com/stylish-css3-progress-bars) for a live example of the above trick.


## Rounded corners for tables

The trick consist of setting the table's `border-spacing` to `0`. The `border-collapse`‘s default value is `separate`, you'll only need to set it to `collapse` for IE7 and lower ( for a graceful degradation).


{% highlight css %}
table {
    *border-collapse: collapse; /* IE7 and lower */
    border-spacing: 0;
    border-radius: 5px;
}
{% endhighlight %}

Check my [CSS3 tables with rounded corners](http://www.red-team-design.com/practical-css3-tables-with-rounded-corners) article to read more about it.

## Inputs box model

When designing a search box, for example, you'll notice that after setting the same `height` or `width` for your `input type="submit"` and `input type="text"`, the result will most likely disappoint you.

Quite frustrating, but the thing is that `input type="submit"` has a `border-box` box model, while `input type="text"` has a `content-box` box model (on IE and FF). 

To overcome this kind of of issue, you can set for both form's inputs (text and submit) the same box sizing model. This can be done using CSS3 `box-sizing`:

{% highlight css %}
box-sizing: content-box | padding-box | border-box;
{% endhighlight %}

## Conclusion

The above are just some tricks I often use when writing CSS. I found them very useful, and I sincerely wish I knew them at the beginning. 

I hope you enjoyed these and feel free to share yours by adding a comment below. Thank you for reading!