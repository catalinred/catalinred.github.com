---
author: Red
comments: true
date: 2011-12-20 03:00:47+00:00
layout: post
slug: meet-the-css4-selectors
title: Meet the CSS4 selectors
wordpress_id: 3981
categories:
- CSS
tags:
- CSS3
- CSS4
---

You may already know that, when speaking about web development, **CSS3** and **HTML5** are the two main buzz words. This matter might change in the future because, almost two months ago, the latest [CSS Selectors Level 4 Working Draft](http://www.w3.org/TR/2011/WD-selectors4-20110929) was released by the World Wide Web Consortium (W3C).

In this article you'll find out some interesting stuff about the new CSS4 selectors.

![CSS Level 4 Selectors](http://www.red-team-design.com/wp-content/uploads/2011/12/css4-selectors.png)

<!-- more -->

As an introduction, you should know that these CSS4 selectors specifications are quite new and no browser actually supports any of the below features yet. Further, I hope this will change.

So let's see below some great new CSS4 stuff:

## The "parent" selector

Before, there was no option to select the parent of an element in CSS (not even CSS3). With CSS4, the most important news in the current W3C draft is the support for the parent selector.

{% highlight css %}
$ul li:hover{
    background: #fff;
}
{% endhighlight %}

Using the above, when hovering an list element, the whole unordered list will be somehow highlighted by adding a white background to it. 

Another example I'm thinking about now is when using HTML forms: for example we could highlight a HTML `fieldset` when one of its inputs is focused:

![Fieldset highlighting](http://www.red-team-design.com/wp-content/uploads/2011/12/css4-selectors-fieldset.png)
_Fieldset highlighted when an inner input is focused_

{% highlight css %}
$fieldset input:focus{
    background: #f3eab1;
}
{% endhighlight %}

## Matches-Any Pseudo-class

The `:matches()` CSS4 selector is the standardized version of Mozilla’s [`:-moz-any()`](https://developer.mozilla.org/en/CSS/%3A-moz-any) pseudo class. This new proposal can simplify the process of writing complex CSS. 

Here's a quick example:

{% highlight css %}
:matches(section, article, aside) h1 {
    font-size: 2em;
}
{% endhighlight %}

as an abbreviation for: 

{% highlight css %}
section h1, article h1, aside h1 {
    font-size: 2em;
}
{% endhighlight %}

## Other CSS4 pseudo-class selectors

The `:indeterminate` pseudo-class applies to UI elements whose value is in an indeterminate state. For example, radio and checkbox elements can be toggled between checked and unchecked states, but are sometimes in an indeterminate state, neither checked nor unchecked. Similarly a progress meter can be in an indeterminate state when the percent completion is unknown. 

The `:nth-match(an+b of selector-list)` pseudo-class notation represents an element that has a parent and has `an+b-1` siblings that match the given selector-list before it in the document tree, for any zero or positive integer value of n.

## Conclusion

We never get bored when it comes about new web technologies. I remember somebody said something like: We (developers) are living in exciting times. True.

Also, I'd strongly recommend you to read more about CSS4 selectors here:
	
  * [W3C Working Draft 29 September 2011](http://www.w3.org/TR/2011/WD-selectors4-20110929/)	
  * [What’s slated for CSS4 Selectors?](http://generatedcontent.org/post/10865123182/selectors4)