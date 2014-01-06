---
author: Red
comments: true
date: 2010-12-27 07:10:27+00:00
layout: post
slug: happy-holidays-with-css3
title: Happy Holidays with CSS3
wordpress_id: 1875
categories:
- CSS
tags:
- CSS3
- HTML
---

New year is coming and I want to wish all of you Happy Holidays. For this reason, I made a little CSS3 experiment (with absolutely no images) and I hope you'll enjoy it.

![Happy holidays - CSS3 experiment](http://www.red-team-design.com/wp-content/uploads/2010/12/happy-holidays.png)

<!-- more -->

Below you have the demonstration, you may take a look or you can follow the step-by-step tutorial:

[View Demo](/wp-content/uploads/2010/12/happy-holidays-with-css3-demo.html)

## HTML code

The HTML is quite minimal, we have a div that wraps all the elements. 

Further you'll see that this experiment it's based on [pseudo-elements](http://www.w3.org/TR/CSS2/selector.html#pseudo-elements) as-well. This is very helpful when you want less HTML code for your website/web application.

{% highlight html %}
<div id="wrapper">
    <div id="snow"></div>
    <div id="tree"></div>
    <h1>Happy Holidays</h1>
</div>
{% endhighlight %} 

## The Background

As you notice if you're using Firefox or Chrome, the background it's a pattern made with [gradients](/css-gradients-quick-tutorial). The new stuff is `background-size` property (with its prefixes for various browsers) when defining CSS gradients. 

In this case, the [background-size](http://www.w3.org/TR/css3-background/#the-background-size) adjust the size of the stripes.

## Look Mom! No images!

![CSS3 pattern](http://www.red-team-design.com/wp-content/uploads/2010/12/css3-pattern.png)

{% highlight css %}
html
{
    height: 100%;
    background-color: #869EA3;
    background-image: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
                        transparent 75%, transparent);    
    background-size: 400px 400px;
}
{% endhighlight %}

## Wrapper

Further you need to add the wrapper within which you'll _draw_ all the other elements.

![Snow wrapper](http://www.red-team-design.com/wp-content/uploads/2010/12/snow-wrapper.png)

{% highlight css %}
#wrapper {
    position: absolute;
    height: 500px;
    width: 800px;
    top: 50%;
    left: 50%;
    margin: -250px 0 0 -400px;
    overflow: hidden;  
    background: #0093d8;
    background: linear-gradient(top, #0093d8, #fff);
    box-shadow: 0 10px 10px rgba(0,0,0,0.5);    
}

#wrapper:before {
    content: '*';
    font: bold 1000px arial;
    color: #fff;
    color: rgba(255,255,255,0.1);
    position: absolute;
    top: -200px;
    left: -100px
}
{% endhighlight %}

The last rule it's for adding a snowflake to our design without extra HTML markup.

## Let's add some snow

![Snow](http://www.red-team-design.com/wp-content/uploads/2010/12/snow.png)

Below you can see how it's made: by overlapping three huge (2000x2000 px) circles. If you'll remove `overflow: hidden` from  the `#wrapper` selector you'll see the circles full-size.

{% highlight css %}
#snow {
    position: absolute;
    z-index: 5;
    top: 400px;
    left: 50%;
    margin-left: -1000px;
    width: 2000px;
    height: 2000px;
    background: #fff;
    border-radius: 2000px;
}

#snow:before {
    content: '';
    position: absolute;
    left: 400px;
    height: 2000px;
    width: 2000px;
    background: #f2f2f2;
    border-radius: 2000px;
}

#snow:after {
    content: '';
    position: absolute;
    right: 400px;
    height: 2000px;
    width: 2000px;
    background: #eaeaea;    
    border-radius: 2000px; 
}
{% endhighlight %}

## Use custom font

There are multiple options to choose for when it's about [custom fonts for your website](/google-font-api-and-typekit-solutions-vs-font-face). For this example I choosed `Sniglet` font from [Google Font API](http://code.google.com/webfonts/preview#font-family=Sniglet).

![Sniglet custom font](http://www.red-team-design.com/wp-content/uploads/2010/12/sniglet.png)

{% highlight css %}
h1 {
    font: bold 120px/95px 'Sniglet', Arial;
    color: #fafafa;
    text-transform: uppercase;
    margin: 0;
    text-shadow: 0 1px 0 rgba(0,0,0,0.15), 
                 0 10px 0 #cfeaed, -5px -5px 10px #4ea5b1;
    position: absolute;
    bottom: 80px;
    left: 20px;
}
{% endhighlight %}

![Happy Holidays custom font](http://www.red-team-design.com/wp-content/uploads/2010/12/happy-holidays-custom-font.png)

## Fir tree made with CSS triangles

One more thing to add and the design it's done. Let's create the fir tree using CSS triangle shapes. This is not CSS3, but it's cool anyway :).

![Fir tree made with CSS triangles](http://www.red-team-design.com/wp-content/uploads/2010/12/css-fir-tree.png)

{% highlight css %}
#tree {
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 60px solid green;
    height: 0;
    width: 0;
    position: absolute;
    right: 50px;
    top: 240px;
}

#tree:before {
    content:'';
    border-left: 90px solid transparent;
    border-right: 90px solid transparent;
    border-bottom: 90px solid green;
    height: 0;
    width: 0;
    position: absolute;
    left: -90px;
    top: 30px;
}

#tree:after {
    content:'';
    border-left: 120px solid transparent;
    border-right: 120px solid transparent;
    border-bottom: 120px solid green;
    height: 0;
    width: 0;
    position: absolute;
    left: -120px;
    top: 60px;
}
{% endhighlight %}  

## Final result

In order to see the demo in the right way, note please that you should use one of the following browsers: **Firefox, Chrome, Safari**. The demo looks OK on **Opera and IE9**, but without [gradients](http://www.red-team-design.com/css-gradients-quick-tutorial).

![Happy holidays - CSS3 experiment](http://www.red-team-design.com/wp-content/uploads/2010/12/happy-holidays.png)

## Happy Holidays

Enjoy your Holidays and let's hope the next year will be a better one for all of us. See you next year!