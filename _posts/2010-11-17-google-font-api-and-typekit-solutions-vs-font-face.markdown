---
author: Red
comments: true
date: 2010-11-17 17:40:10+00:00
layout: post
slug: google-font-api-and-typekit-solutions-vs-font-face
title: Google Font API and Typekit solutions VS @font-face
description: Read more on Google Font API and Typekit solutions versus the pure CSS3 @font-face.
wordpress_id: 1347
categories:
- CSS
tags:
- CSS3
- web tools
---

A while ago you've read a quick tutorial here about setting up your website with custom fonts using [**@font-face**](http://www.red-team-design.com/css3-font-face-or-how-to-use-a-custom-font-for-your-website). Since then I've been thinking to write about these alternative solutions, pros and cons.

The aim of this post is to briefly round up your options when using custom fonts in web design.

[![](/dist/uploads/2010/10/google-and-typekit-versus-font-face.png)](http://www.red-team-design.com/google-font-api-and-typekit-solutions-vs-font-face)

<!-- more -->

## CSS3 @font-face

The @font-face was first proposed for CSS2 and has been implemented in Internet Explorer since version 5. However, their implementation relied on the proprietary Embedded Open Type (.eot) format, and no other browsers decided to use this format until Safari 3.1 was released.

Since then, web designers began to use .ttf or .otf fonts for their websites and now this CSS property is well-known.

[![](/dist/uploads/2010/10/css3-font-face.png)](/css3-font-face-or-how-to-use-a-custom-font-for-your-website)

### CSS

{% highlight css %}
@font-face {
  font-family: '3DumbRegular';
  src: url('3Dumb-webfont.eot');
  src: local('?'), url('3Dumb-webfont.woff') format('woff'), url('3Dumb-webfont.ttf') format('truetype'), url('3Dumb-webfont.svg#webfont57ztNrX6') format('svg');
}

h1 {
  font-family: '3DumbRegular', Arial, sans-serif
}
{% endhighlight %}

### Pros

  * A lot of available fonts you can choose from. Check this [detailed](http://webfonts.info/wiki/index.php?title=Fonts_available_for_@font-face_embedding) list.
  * It works for all browsers.
  * It has no JavaScript dependency.

### Cons

  * It takes slightly longer to implement than Google Font API (more code).
  * Quality of font rendering may differ browser to browser.
  * Your CSS may not be validated, depending on your DOCTYPE.

### Google Font API

To use the fonts of Google's font library, just go to [http://code.google.com/webfonts](http://code.google.com/webfonts) and select a font. If you choose "Cantarell" font for example, include the following code into your files.

[![](/dist/uploads/2010/10/google-font-api.png)](http://code.google.com/webfonts)

### HTML

{% highlight html %}
<link href="http://fonts.googleapis.com/css?family=Cantarell&subset=latin" rel="stylesheet" type="text/css">
{% endhighlight %} 

### CSS
{% highlight css %}
h1 {
  font-family: 'Cantarell', arial, serif; /*Add also some font replacements, just in case...*/
}
{% endhighlight %}

### Pros

  * Free solution from Google.
  * Quick set up.
  * No JavaScript dependency.
  * No need to think about font licensing.

### Cons

  * Small number of fonts to choose from. (just for now, I hope)
  * Quality of font rendering may differ browser to browser.
  * <del>No support for iPhone or iPad.</del> Support added from iOS 4.2+ (iPhone, iPad, iPod).

### Typekit

Typekit is a service launched by Small Batch, Inc. which, via JavaScript and a subscription service, allows webmasters and designers to embed non-standard, non-system-specific fonts into online documents. It uses the @font-face CSS property and is available to the public as a paid service.

[![](/dist/uploads/2010/10/typekit.png)](http://www.typekit.com/)

### HTML

{% highlight html %}
<script type="text/javascript" src="http://use.typekit.com/typekitid.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
{% endhighlight %}    

### CSS

{% highlight css %}
h1 {
  font-family: "museo-sans-1", "museo-sans-2", sans-serif;
}
{% endhighlight %}

### Pros

  * Huge fonts library.
  * Good support articles and help section.
  * iPad, iPhone/iPod Touch support _(experimental)_
  * Control the [behavior](http://blog.typekit.com/2010/10/18/more-control-with-typekits-font-events/) of your page as web fonts load _(thanks [@smcbride](http://twitter.com/smcbride))_

### Cons

  * Typekit is a paid service but it also has a free version.
  * JavaScript dependency,  and one extra HTTP request for you.

### Other web fonts solutions

  * [FontDeck](http://fontdeck.com/)
  * [Kernest](http://kernest.com/)
  * [Typotheque](http://www.typotheque.com/webfonts)
  * [sIFR](http://www.mikeindustries.com/blog/sifr/)
  * [Typeface](http://typeface.neocracy.org/)
  * [Cufón](http://chrisjennings.com/2009/02/introducing-cufon-sifr-alternative/)


## Conclusion
Now that you found out all the pros and cons, it's up to you to choose the method that best suits your needs. Let me know in the comments the solution you like most!