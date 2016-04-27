---
author: Red
comments: true
date: 2014-01-20 06:00:35+00:00
layout: post
slug: data-uri-tools
title: Data URI conversion tools
description: This article contains a list of Data URI's conversion tools that encode your content as base64 string so you can use it right away in your projects.
wordpress_id: 6130
categories:
- Miscellaneous
---

Nowadays, encoding stuff is not a secret anymore and we're using data URI for small images, SVG's and even custom fonts. After all, this is one of the best ways to minimize the number of HTTP requests. On this matter, I thought about making a list with some online conversion tools you can use right away.

![Data URI conversion tools](/dist/uploads/2014/01/data-uri-tools.png)

<!-- more -->

## When to encode?

Whenever you feel it's worth it. There are a lot of advantages, but don't forget about the disadvantages too. One thing I always think at when deciding whether to encode or not is that the respective content must be re-encoded and re-embedded every single time a change is made. Also, encoding large content should be avoided most of times, unless you want big chunks of indecipherable data in your code.

## The the [data URI](http://en.wikipedia.org/wiki/Data_URI_scheme) syntax

{% highlight css %}
data:[<MIME-type>][;charset=<encoding>][;base64],<data>
{% endhighlight %}

So, here's how an inline, small and encoded SVG image looks like:

{% highlight html %}
<img src="data:image/svg+xml;base64,PD94bWwgd..." >
{% endhighlight %}   

and if we deconstruct it:
	
  * `data` - the name of the scheme

	
  * `image/svg+xml` - the content type

	
  * `base64` - the type of encoding

	
  * `PD94bWwgd...` - the encoded data

	
  * `data` - name of the scheme

## Some base64 encoding tools

Anyway, I'm not going to explain Data URI here, others did it before and did it well. Further I'll list some online conversion tools that do exactly what they suppose to do, encode your content as base64 string so you can use it right away in your projects.


  * [b64.io](http://b64.io/)

  * [Data URI Converter](http://datauriconverter.appspot.com/)

  * [AskApache's Base64 encoder/decoder](http://www.askapache.com/online-tools/base64-image-converter/)

  * [Web Coders Tools](http://webcodertools.com/imagetobase64converter)

  * [Image2Base64](http://image2base64.wemakesites.net/)

  * [duri.me](http://duri.me)

  * [dataurl.net](http://dataurl.net/#dataurlmaker)


## Using Grunt


If you're using an automated task runner like [Grunt](http://gruntjs.com/), which is quite common nowadays, you can make this conversion smoother. For example, to replace image URLs in your stylesheets with data URIs, you can use plugins that can do it for you with no hassle.

In case you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains what a Gruntfile is and how to use Grunt plugins as well. Once you're done with that, you'll be able to install a plugin by using something like this:

{% highlight html %}
<img src="data:image/svg+xml;base64,PD94bWwgd..." >
{% endhighlight %}    
    
    npm install grunt-plugin-name 

Next, add the following line to your project's grunt file and once you're done with configuring stuff, you're ready to go.
    
    grunt.loadNpmTasks("grunt-plugin-name");

## What about you?

With the latest spread of icon fonts, having an icon font included in your project is almost mandatory. Menu icons, social icons, even a feature list, they all can be achieved using an icon font. The cool thing is that the "solve all problems" icon font can be encoded and embedded in projects just as a Data URI string, as long as you don't care too much about older browsers. Most of times, [Font Squirrel has your back](http://sosweetcreative.com/2613/font-face-and-base64-data-uri).

Also, while working on a project a while ago, I encountered a situation when [using a font encoded in base64](/firefox-doesnt-allow-cross-domain-fonts-by-default) proved to be a life saviour. So, how often do you use Data URI's in your projects and what type of content do you encode most often? Let me know your thoughts!