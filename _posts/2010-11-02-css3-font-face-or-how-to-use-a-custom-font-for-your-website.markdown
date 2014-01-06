---
author: Red
comments: true
date: 2010-11-02 18:00:43+00:00
layout: post
slug: css3-font-face-or-how-to-use-a-custom-font-for-your-website
title: CSS3 font-face or how to use a custom font for your website
description: Get rid of the common fonts and learn more about how to use a custom font for your website.
wordpress_id: 1253
categories:
- CSS
tags:
- CSS3
- HTML
---

Web designers have been constrained to use a limited number of safe-fonts due to the dependence of being available on various computers and operating systems. CSS3 changed that by introducing a feature that allows you to use any font for your website.

This article contains a simple and easy to implement tutorial  about using the @font-face property.

[![](http://www.red-team-design.com/wp-content/uploads/2010/10/css3-font-face.png)](http://www.red-team-design.com/css3-font-face-or-how-to-use-a-custom-font-for-your-website)

<!-- more -->

## Ok, how can I use this?

Let's see now how can you take advantage of this. So, in order to be able to use this CSS3 property, you must complete the following 3 steps and you can also check the demo.

[Demo page](http://www.red-team-design.com/wp-content/uploads/2010/10/css-font-face-demo.html)

For this fast example I used [3Dumb](http://www.fontsquirrel.com/fonts/3Dumb) font from [Font Squirell](http://www.fontsquirrel.com/).

![](http://www.red-team-design.com/wp-content/uploads/2010/10/font-face-example.png)

### 1.Upload the font to your server

Just open your FTP tool and upload the font to your server and note the location. If you don't have a cool font to use for your website then you could try:
	
  * [Dafont](http://www.dafont.com/)	
  * [Fontsquirrel](http://www.fontsquirrel.com/)	
  * [Urbanfonts](http://www.urbanfonts.com/)

### 2.Define it in your CSS file
    
{% highlight css %}
@font-face {
  font-family: '3DumbRegular';
  src: url(‘your-path/3Dumb-webfont.eot’);
  src: local('?'), url('3Dumb-webfont.woff') format('woff'), url('3Dumb-webfont.ttf') format('truetype'), url('3Dumb-webfont.svg#webfont57ztNrX6') format('svg');
}
{% endhighlight %}

Just make sure that you change "your-path" with the exact location of your font.

Thanks to [Paul Irish](http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/), we can use this cross browser font-face solution. As you notice there are multiple font sources defined, as ttf, eot and svg.

  * **TTF** - Works in most browsers except IE and iPhone.	
  * **EOT** - IE only.	
  * **WOFF** - Compressed, emerging standard.	
  * **SVG** - iPhone/iPad.

### 3.Properly use it

{% highlight css %}
h1 {
  font-family: '3DumbRegular', Arial, sans-serif
}
{% endhighlight %}      

## On Copyright

I'd recommend always make sure you check the used font license before you use it in commercial/personal purposes. Use free fonts or check the [fonts available for @font-face embedding](http://webfonts.info/wiki/index.php?title=Fonts_available_for_@font-face_embedding) list.

## That's all folks!

This is how you can beautify the fonts from your site, I hope you enjoyed my article and feel free to comment about it.