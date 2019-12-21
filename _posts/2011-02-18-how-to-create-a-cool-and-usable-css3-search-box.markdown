---
author: Red
comments: true
date: 2011-02-18 07:46:16+00:00
layout: post
slug: how-to-create-a-cool-and-usable-css3-search-box
title: How to create a cool and usable CSS3 search box
description: Learn how create a cool CSS3 search box using the HTML5 placeholder attribute. This article contains also a jQuery placeholder fallback.
wordpress_id: 2299
categories:
- CSS
- JavaScript
tags:
- CSS3
- HTML5
- JavaScript
---

In this new article, you'll learn how create a cool and usable CSS3 search box using the HTML5 `placeholder` attribute. For the browsers that don’t support this new HTML5 attribute, a fallback is created using Modernizr's feature detection.

![CSS3 searchbox](/dist/uploads/2011/02/css3-searchbox.png)

<!-- more -->

[View demo](/dist/uploads/2011/02/css3-search-box.html)

## Structure

The `form` element is used as the wrapper, while the two inputs are used as search field and search button respectively.

![Search box structure](/dist/uploads/2011/02/searchbox-structure.png)

## The HTML code

{% highlight html %}
<form id="searchbox" action="">
    <input id="search" type="text" placeholder="Type here">
    <input id="submit" type="submit" value="Search">
</form>
{% endhighlight %}

You may notice the `placeholder` attribute, but just ignore it for now, as we will talk later about it.

The reason why there are so many id's (instead of CSS3 advanced selectors as `input[type="text"]` or `input[type="submit"]`) is because I wanted this to degrade gracefully for older browsers.

## Form wrapper styles

{% highlight css %}
#searchbox
{
    background-color: #eaf8fc;
    background-image: linear-gradient(#fff, #d4e8ec);
    border-radius: 35px;
    border-width: 1px;
    border-style: solid;
    border-color: #c4d9df #a4c3ca #83afb7;
    width: 500px;
    height: 35px;
    padding: 10px;
    margin: 100px auto 50px;
    overflow: hidden; /* Clear floats */
}
{% endhighlight %}

Below you can see the current result:

![Form wrapper styles](/dist/uploads/2011/02/form-wrapper.png)

## Inputs styles

{% highlight css %}
#search,
#submit {
    float: left;
}

#search {
    padding: 5px 9px;
    height: 23px;
    width: 380px;
    border: 1px solid #a4c3ca;
    font: normal 13px 'trebuchet MS', arial, helvetica;
    background: #f1f1f1;
    border-radius: 50px 3px 3px 50px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) inset, 0 1px 0 rgba(255, 255, 255, 1);
}

/* ----------------------- */

#submit
{
    background-color: #6cbb6b;
    background-image: linear-gradient(#95d788, #6cbb6b);
    border-radius: 3px 50px 50px 3px;
    border-width: 1px;
    border-style: solid;
    border-color: #7eba7c #578e57 #447d43;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3),
                0 1px 0 rgba(255, 255, 255, 0.3) inset;
    height: 35px;
    margin: 0 0 0 10px;
    padding: 0;
    width: 90px;
    cursor: pointer;
    font: bold 14px Arial, Helvetica;
    color: #23441e;
    text-shadow: 0 1px 0 rgba(255,255,255,0.5);
}

#submit:hover {
    background-color: #95d788;
    background-image: linear-gradient(#6cbb6b, #95d788);
}

#submit:active {
    background: #95d788;
    outline: none;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;
}

#submit::-moz-focus-inner {
       border: 0;  /* Small centering fix for Firefox */
}
{% endhighlight %}

### Quick tip:

When adding `float: left` to an element, there's no need to add also `display: block`. The last one it's [implied](http://www.w3.org/TR/CSS2/visuren.html#dis-pos-flo).

![HTML5 placeholder](/dist/uploads/2011/02/css3-searchbox-default-placeholder.png)

### HTML5 placeholder attribute

 This new HTML5 attribute shows a text in a field as long as the field is empty and not focused, then hides the text. You surely have seen this technique before with JavaScript!

Browser support:

  * Firefox 3.7+
  * Safari 4.0+
  * Chrome 4.0+
  * Opera 11+
  * IE10+

{% highlight css %}
#search::-webkit-input-placeholder {
   color: #9c9c9c;
   font-style: italic;
}

#search:-moz-placeholder {
   color: #9c9c9c;
   font-style: italic;
}

#search:-ms-placeholder {
   color: #9c9c9c;
   font-style: italic;
}
{% endhighlight %}

![CSS3 search box](/dist/uploads/2011/02/css3-searchbox.png)



### Fallback support

For web browsers that are not supporting the this new HTML5 attribute, I made a fallback.

I used [Modernizr](http://www.modernizr.com/) to detect native support for the HTML5 placeholder attribute. Even if this could have been done by writing a short function, I love Modernizr as it also enables you to use more semantic elements from the HTML5 specs.

{% highlight css %}
#search.placeholder {
   color: #9c9c9c !important;
   font-style: italic;
}
{% endhighlight %}

{% highlight js %}
$(document).ready(function() {
    if (!Modernizr.input.placeholder)
    {
        var placeholderText = $('#search').attr('placeholder');

        $('#search').attr('value',placeholderText);
        $('#search').addClass('placeholder');

        $('#search').focus(function() {
            if( ($('#search').val() == placeholderText) )
            {
                $('#search').attr('value','');
                $('#search').removeClass('placeholder');
            }
        });

        $('#search').blur(function() {
            if ( ($('#search').val() == placeholderText) || (($('#search').val() == '')) )
            {
                $('#search').addClass('placeholder');
                $('#search').attr('value',placeholderText);
            }
        });
    }
});
{% endhighlight %}


## Chrome's inset box-shadow bug

![Chrome inset shadow bug](/dist/uploads/2011/02/chrome-inset-box-shadow-bug.png)

There is a bug on Chrome when both `border-radius` and inset `box-shadow` are used. Anyway, there is good news about that. [Paul Irish](http://paulirish.com/) announced last month that [Chrome's inset box-shadow bug is fixed](http://paulirish.com/2011/chrome-inset-box-shadow-bug-fixed/).

### Later update

The demo was updated, thanks for pointing this out Atul.

So, if you're using [Chrome beta 10.0.648.119](http://www.google.com/landing/chrome/beta/) or a greater version, this should work just **perfect**!

## Conclusion

This example it's mostly about **progressive enhancement**.

Regarding the _CSS_, as you will notice, this example will  degrade gracefully for other old browsers. Now, regarding the _HTML5_ `placeholder` attribute, if native support is missing, then the Javascript code will do it for you.