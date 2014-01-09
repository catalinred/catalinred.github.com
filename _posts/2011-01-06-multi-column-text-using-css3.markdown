---
author: Red
comments: true
date: 2011-01-06 07:41:00+00:00
layout: post
slug: multi-column-text-using-css3
title: Multi-column text using CSS3
description: Read more on how to use multi-column text using CSS3.
wordpress_id: 1949
categories:
- CSS
tags:
- CSS3
---

CSS3 offers a new way to arrange text content using the [Multi-column CSS3 module](http://www.w3.org/TR/css3-multicol/). This CSS3 feature will help you fit your text into columns without extra markup like `div` floats or extra `table` markup.

![Multi column text using CSS3](/wp-content/uploads/2011/01/multi-column-css3.png)

<!-- more -->

[View Demo](/wp-content/uploads/2011/01/multi-column-css3.html)

## Short browser history and support

The draft was published a decade ago - in 2001, but only in April 2005, with the release of the Firefox 1.5 beta (based on Gecko 1.8), parts of the CSS3 Multi-Column module were supported.

Multi-column module is currently supported only in Mozilla and Webkit browsers (Safari and Chrome), this means that there's no support for browsers like IE and Opera. But that should be just OK as long we are aware and understand the [progressive enhancement](http://www.alistapart.com/articles/understandingprogressiveenhancement/).

W3C says that:

> ...style sheets can declare that the content of an element is to be laid out in multiple columns

## OK, so how to use it?

As you read above, being supported only by Mozilla and Webkit-based browsers, means that **vendor prefixes** like `-moz-` and `-webkit-` must be used in production.

## The CSS3 module properties

  * _column-count_ - the desired number of columns for the element.
  * _column-width_ - the width of each column.
  * _column-gap_ -  the padding between columns.
  * _column-rule_ - to specify a border between columns as a divider.

## Enough with the theory, let's see some action!

There are two ways to define columns: 

  * `column-count` - how many columns do you need
  * `column-width` - how wide should each column be

### Column count

{% highlight css %}
#multi-column1 {
  column-count: 3;
  column-gap: 20px;
  text-align: justify;
}
{% endhighlight %}

### Column width

{% highlight css %}
#multi-column2 {
  column-width: 200px;
  column-gap: 30px;  
  text-align: justify;
}
{% endhighlight %}

Alternatively, you may use the _shorthand_ `columns` [property](http://www.w3.org/TR/css3-multicol/#columns0).

### Column rules

Either you choose `column-count` or `column-width` to define you columns, to add a border between them append the following CSS declarations:

{% highlight css %}
column-rule: 2px solid #9c9c9c; 
{% endhighlight %}  

## Conclusion

These are the most interesting Multi-column CSS3 module properties but if you want to find out more, please visit the [W3C specifications](http://www.w3.org/TR/css3-multicol/) for other details.

Below you have an example that shows you how to arrange a paragraph into columns, enjoy the demo and please **let me know your thoughts** about it!