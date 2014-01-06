---
author: Red
comments: true
date: 2009-12-01 12:56:57+00:00
layout: post
slug: things-you-should-know-about-css-anatomy
title: Things you should know about CSS anatomy
wordpress_id: 288
categories:
- CSS
tags:
- CSS
---

I often notice people tend to use stylesheets without knowing its structure meaning. That's why, in this tutorial I will try to present you the CSS components structure.

[![CSS Structure ](http://www.red-team-design.com/wp-content/uploads/2009/12/css-structure-anatomy.png)](http://www.red-team-design.com/things-you-should-know-about-css-anatomy)

<!-- more -->

## 1.Selectors

The selector is the element that is linked to a particular style.In the following example the selector is "p", so "p" is the element who's margin properties will be "0".

{% highlight css %}
p {
  margin: 0;
}
{% endhighlight %}    
    
### Class Selectors

The advantage of a class selector is that it can be applied to more than one elements according to [W3C recommendation](http://www.w3.org/TR/html401/struct/global.html#h-7.5.2).

{% highlight css %}
.colored {
  color: red;
}
{% endhighlight %}    
   
Having this, all paragraphs who'll have "colored" class as attribute will inherit red color from stylesheet.

### ID Selectors

The id attribute assigns a unique identifier to an element, so try assigning an id attribute to no more than just one element.

If you'll assign a CSS id to more elements within a page you will fail the [W3C Markup Validation](http://validator.w3.org/) which is very important for you, as a designer.

{% highlight css %}
#colored {
  color: red;
}
{% endhighlight %}    
 
### Contextual Selectors

{% highlight css %}
p#colored span {
  color: blue;
}
{% endhighlight %}

This selector is applied to all "span" elements within the paragraph with "colored" id attribute.

Result:
![blue-css-example](http://www.red-team-design.com/wp-content/uploads/2009/12/blue-css-example.png)

## 2.Properties

Now that we know how a selector looks like let's see what is a CSS property. CSS properties defines how the styles should look on the Web page or elsewhere.

**Examples:** margin, padding, color, border, background [etc](http://htmlhelp.com/reference/css/properties.html).

In this example, the h1 element has three properties: color, font-family and margin. These properties with theirs values defines how the h1 element will look.

{% highlight css %}
h1 {
  color: red;
  font-family: Verdana;
  margin: 10px 0;
}
{% endhighlight %} 

## Conclusion

Using the selectors properly you will not only have a cleaner markup but you will also have a more beautiful CSS code.