---
author: Red
comments: true
date: 2010-11-28 22:00:54+00:00
layout: post
slug: useful-css-snippets-to-save-your-time
title: 11 useful CSS snippets to save your time
description: Check some useful CSS snippets to save your time.
wordpress_id: 1245
categories:
- CSS
tags:
- CSS
- HTML
---

Writing CSS can be a pain and can give you headaches. The truth is that CSS ain't rocket science and you should just have in mind some CSS pieces of code _(snippets)_ you can use everytime.

In the following rows I'll try to present you some important snippets I often use in my project and I hope these will help you too.

[![Useful CSS snippets](/dist/uploads/2010/11/useful-css-snippets.png)](http://www.red-team-design.com/useful-css-snippets-to-save-your-time)

<!-- more -->

### 1. CSS Reset

![CSS reset](/dist/uploads/2010/11/css-reset.png)

The best way to start a CSS file is to choose a CSS reset method from a various list of existing ones.

  * [Eric Meyer's CSS Reset](http://meyerweb.com/eric/tools/css/reset/)	
  * [Yahoo Reset CSS](http://developer.yahoo.com/yui/reset/)	
  * [Siolon Browser CSS Reset](http://www.siolon.com/blog/browser-reset-css/)

## 2. Clear floated elements without any extra markup

![Clear floated elements without extra markup](/dist/uploads/2010/11/clear-float.png)

### HTML:

{% highlight html %}
<ul>
  <li>First floated element</li>
  <li>Second one</li>
<ul>
{% endhighlight %} 

## CSS

{% highlight css %}
ul {
  width: 100%;
  overflow: hidden;
}

li {
  float: left;
}
{% endhighlight %}

## 3. Use `border-radius` instead of `-webkit-border-radius`

Since Chrome and Safari began to use **border-radius** property, you no longer have to use -webkit-border-radius anymore. So, for your rounded corners just add:

{% highlight css %}
-moz-border-radius: 10px; /* Mozilla */
border-radius: 10px; /* Chrome, Safari, Opera ... */
{% endhighlight %}

## 4. CSS3 Box-shadow, text-shadow, gradients and transform properties

Define complex **box shadow** declarations so you can tune up your website:

{% highlight css %}
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 
            0 1px 0 rgba(255, 255, 255, 0.8) inset;
{% endhighlight %}

**Text shadow** as a 1px white stroke effect:

{% highlight css %}
text-shadow: 0 1px 0 white, 0 -1px 0 white;
{% endhighlight %}    

Nice **[gradients](/css-gradients-quick-tutorial)** using CSS:

{% highlight css %}
background-color: #eaeaea; /* Fallback background */
background-image: linear-gradient(#fafafa,#eaeaea);
{% endhighlight %}    


Use **CSS transform** for hover effects:

{% highlight css %}
transform: scale(1.1);
{% endhighlight %}    


[View Demo](/dist/uploads/2010/11/css3-demo.html)

## 5. Image replacement technique

This [CSS technique](/outline-dotted-border-and-image-replacement-technique) is very common and easy to use, you can keep text for search engines and also style the element as you wish by adding an image instead. Here you have a quick example:

{% highlight css %}
h1 {
  background: url(img/replacement-image.png) no-repeat;
  height: 50px;
  width: 400px;
  display: block;
  text-indent: -9999px;
}
{% endhighlight %}

## 6. Centering a div of unknown width

{% highlight css %}
div {
  display: table;
  margin: 0 auto;
}
{% endhighlight %}

...and, as IE6 and IE7 [don't support](http://www.quirksmode.org/css/display.html) the "**display: table**" declaration you can use an alternative [method](http://www.red-team-design.com/center-a-block-element-without-knowing-its-width-part-ii) I often use:

{% highlight html %}
<table class="centered-block">
<tr><td>
<div>
  <!-- Here you'll write your variable witdh block content -->
</div>
</td></tr>
</table>
{% endhighlight %}

Here's the simple CSS for that:

{% highlight css %}
.centered-block {
  margin-left: auto !important;
  margin-right: auto !important;
}
{% endhighlight %}

### Pros

The main advantages of this method
	
  * It's valid	
  * and it's also a **cross-browser** solution

### Cons

A disadvantage would be the fact that includes extra HTML markup and you should consider that before using it.

[View Demo](/dist/uploads/2010/10/center-a-block-element-without-knowing-its-width.html)

## 7. Advanced selectors

You may use these selectors to target easier your elements like text inputs or to style links to pdf files for example:

{% highlight css %}
input[type="text"] {
  padding: 5px;
  border: 1px solid #eaeaea;
}

a[href$=".pdf"] {
   background: url(pdf-icon.png) no-repeat left center;
}
{% endhighlight %} 

## 8. Min-height

The IE6 browser threats last declaration like min-width.

{% highlight css %}
div {
  min-height: 500px;
  height: auto !important;
  height: 500px;
}
{% endhighlight %}    





## 9. Fix IE6/7 double margin/padding bug

This problem appears when a left/right floated elements has a margin/padding value defined. To fix that just target these browsers as you earlier learned in this article and add "display: inline" declaration.

{% highlight css %}
ul li {
  float: right;
  margin-right: 10px;
  *display: inline; /*Target IE7 and bellow*/
  _display: inline; /*Target IE6 and bellow*/
}
/* This example fixes the double right margin bug */
{% endhighlight %} 

Note that you can use these IE6/7 hacks or you can use [conditional comments](http://www.quirksmode.org/css/condcom.html).

## 10.The font shorthand

As always this is very handy as it merges multiple lines of code.

{% highlight css %}
/*font: font-style font-variant font-weight font-size/line-height font-family;*/
font: italic small-caps bold 12px/20px Arial, Helvetica;
{% endhighlight %}

## 11.Change text selection style

![CSS3 text selection](/dist/uploads/2010/11/text-selection.png)

If your get tired of the default blue background selection and white text when you highlight text on a browser then you can try the following.

{% highlight css %}
::selection {
  color: white;
  background-color: red;
}

/* Firefox needs an extra attention for this */
::-moz-selection  {
  color: white;
  background-color: red;
}
{% endhighlight %} 

[View Demo](/dist/uploads/2010/11/text-selection.html)

## Conclusion

These are just some example I had in mind at the time I wrote this article but for sure there are a lot of CSS snippets worthy to mention about, let me know which one you use from this list and not only.