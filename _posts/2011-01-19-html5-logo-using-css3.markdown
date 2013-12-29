---
author: Red
comments: true
date: 2011-01-19 00:22:50+00:00
layout: post
slug: html5-logo-using-css3
title: HTML5 logo using CSS3
wordpress_id: 2059
categories:
- CSS
- HTML5
tags:
- CSS3
- HTML5
---

As you probably found out, yesterday, the The World-Wide Web Consortium (W3C) has unveiled the [HTML5 Logo](http://www.w3.org/html/logo/). They launched more than a logo as they got also a full branding, including badges, t-shirts and stickers. 

So, I suppose that's a good thing, that HTML5 got some branding, sounds very interesting! 

While looking at it and admiring it, as I find it very nice, I thought about how can I **do it with CSS3** (typically for me). 

![](http://www.red-team-design.com/wp-content/uploads/2011/01/HTML5-logo.png)
<!-- more -->

What about the logo? _It's A Bird... It's A Plane... _ 

No, it's the new HTML5 logo and in this article I'll design it **using only CSS**!



### Concept


Getting back to our business, I thought about the _ingredients_ I'd need for this angular orange shield:





  * CSS borders shapes


  * `:before` and `:after` pseudo-elements


  * CSS3 properties that I used: `opacity` and `transform`


  * [Geo](http://code.google.com/webfonts/preview#font-family=Geo) font via Google font API


  * Some empty divs to build the five number_(later edit)_





#### CSS borders shapes


As seen before, in one of my previous articles, you can achieve [angled shapes](http://www.red-team-design.com/happy-holidays-with-css3) using CSS borders. In this case, I used borders in order to recreate the shield icon.



#### :before and :after pseudo-elements


Using this type of selectors it's helpful when you  want to achieve a minimal HTML markup.



#### CSS3 opacity and transform


Even if the article's name says : "HTML5 Logo made with CSS3", this isn't mainly about CSS3, but, `opacity` and `transform` properties were very useful for this.



#### Custom font


The method I'll use to display the _5_ number is to include  the [Geo](http://code.google.com/webfonts/preview#font-family=Geo) font via [Google Font API](http://code.google.com/apis/webfonts/). 

I know it's not identical, but, at the time I wrote this article, I found it quite similar. Instead, I'd appreciate if you could suggest me a better font to use for the number.



_Later edit:_


For a perfect result, I guess I could have used CSS3 [skew transformation](http://www.w3.org/TR/SVG/coords.html#SkewXDefined) and a lot of empty divs to create the "5" number ...



### My <del>initial </del> result:


[
![](http://www.red-team-design.com/wp-content/uploads/2011/01/css3-html5-logo-initial.png)
](http://www.red-team-design.com/wp-content/uploads/2011/01/html5-css3-logo.html)

I know it's not perfect, especially the _5_ number, but I hope you will still like it! Check the below demonstration page:



[View initial demo](http://www.red-team-design.com/wp-content/uploads/2011/01/html5-css3-logo.html)






### Updated result


I finally made it, I updated the initial HTML5 logo. Instead the custom font, empty divs were used in order to replicate the logo. 

Now you have it! Minimal HTML markup, CSS3 transforms and pseudo-elements:
[
![](http://www.red-team-design.com/wp-content/uploads/2011/01/css3-html5-logo.png)
](http://www.red-team-design.com/wp-content/uploads/2011/01/html5-css3-logo-updated.html)



[View final demo](http://www.red-team-design.com/wp-content/uploads/2011/01/html5-css3-logo-updated.html)





### Browser support


Latest versions of:




  * Mozilla


  * Chrome


  * Safari


  * Opera


  * IE9


