---
author: Red
comments: true
date: 2011-10-03 22:00:23+00:00
layout: post
slug: practical-css3-tables-with-rounded-corners
title: Practical CSS3 tables with rounded corners
description: Check this article to see how to create beautiful CSS3 tables with rounded corners in a just few steps.
wordpress_id: 3304
categories:
- CSS
- JavaScript
tags:
- CSS3
- usability
- User experience
---

There has been some discussion in the past about how/when to use tables in web development. Though, the conclusion is the same: when you're dealing with tabular data, tables are absolutely required.

Designing a table is a challenge - and here I'm not talking only about the way it looks. It's (mostly) about how **easy** is your table to **read**. If your table isn’t easy to scan, usually users get annoyed as they lose focus when trying to find the right column and row.

Having said that, today we’re going to create beautiful and practical [tables](/feature-table-design-with-css3) styled using CSS3. Also, jQuery will be used to create fallbacks for older browsers.

![CSS3 tables design](http://www.red-team-design.com/wp-content/uploads/2011/10/css3-tables.png)

<!-- more -->

[View demo](/wp-content/uploads/2011/10/practical-css3-tables-with-rounded-corners-demo.html)

## What's so cool about these tables?

In this article you'll see how CSS3 and tables can work together to create some cool and usable results.
	
  * Rounded corners with no images	
  * Very easy to update - there are no extra CSS id's or classes added	
  * User-friendly and easy to read

## Rounded table corners

Here's the trick: while `border-collapse`'s default value is `separate`, we need also to set the `border-spacing` to `0`.

{% highlight css %}
table {
    *border-collapse: collapse; /* IE7 and lower */
    border-spacing: 0; 
}
{% endhighlight %}

_For IE7 and lower, we need to add a specifically line, in order to create a good fallback for the tables._

Then, we just need to round some corners:

{% highlight css %}
th:first-child {
    border-radius: 6px 0 0 0;
}

th:last-child {
    border-radius: 0 6px 0 0;
}

th:only-child{
    border-radius: 6px 6px 0 0;
}
{% endhighlight %}

## jQuery hover fallback

You may already know that when it comes about [IE6](/how-to-solve-common-ie-bugs), `:hover` does not actually work on non-anchor elements.

So, to make it work, instead the CSS solution we've used:
    
{% highlight css %}
.bordered tr:hover {
  background: #fbf8e9;
  transition: all 0.1s ease-in-out;     
} 
{% endhighlight %}

... you could use some jQuery code to simulate the hover effect:


{% highlight js %}
$('.bordered tr').mouseover(function(){
    $(this).addClass('highlight');
}).mouseout(function(){
    $(this).removeClass('highlight');
});
{% endhighlight %}

... and here's also the styles for the CSS `highlight` class:

{% highlight css %}
.highlight {
  background: #fbf8e9;
  transition: all 0.1s ease-in-out;     
} 
{% endhighlight %}
 
_The above is basically the `.bordered tr:hover` duplicate._ 

## jQuery zebra fallback

To create the _zebra_ effect, using CSS3, we've selected the even rows within the `tbody`:

{% highlight css %}
.zebra tbody tr:nth-child(even) {
    background: #f5f5f5;  
    box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;        
}
{% endhighlight %}

Now, the above selector is a CSS3 one - so no support for older browsers. Below you'll see how we may **target and style the even rows for all browsers**:

{% highlight js %}
    $(".zebra tbody tr:even").addClass('alternate');
{% endhighlight %}

{% highlight css %}
.alternate {
    background: #f5f5f5; 
    box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;        
}
{% endhighlight %}

## Browser support


The tables already degrade very nice on older browsers, so it's up to you if you want to use also the above jQuery solutions. It's all about the visitors audience you're targeting.

![CSS tables browser support](http://www.red-team-design.com/wp-content/uploads/2011/10/css3-tables-browser-support.png)

## Conclusion

Do you like the CSS3 tables I made? Feel free to comment about the final result and thanks for reading this article!