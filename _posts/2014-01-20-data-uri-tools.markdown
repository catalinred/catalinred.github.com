---
author: Red
comments: true
date: 2014-01-20 06:00:35+00:00
layout: post
slug: data-uri-tools
title: Data URI tools for encoding and decoding Base64
description: A list of Data URIs tools that encode and decode your images, SVGs and fonts as Base64 string.
categories:
- Miscellaneous
- CSS
- HTML
---

<ins>
  Last updated on <time datetime="2019-12-27">2019, December 27</time>
</ins>

Nowadays, encoding stuff is not a secret anymore and we're using data URI for small images, SVG's and even custom fonts. After all, this is one of the best ways to minimize the number of HTTP requests. On this matter, I thought about making a list with some online conversion tools you can use right away.

![Data URI tools](/dist/uploads/2014/01/data-uri-tools.png)

<!-- more -->

## When to encode?

Whenever you feel it's worth it. There are a lot of advantages, but don't forget about the disadvantages too. One thing I always think about when deciding whether to encode or not is that the respective content must be re-encoded and re-embedded every single time a change is made. Also, encoding large content should be avoided most of the times, unless you want big chunks of indecipherable data in your code.

## The the [data URI](https://en.wikipedia.org/wiki/Data_URI_scheme) syntax

{% highlight css %}
  data:[<MIME-type>][;charset=<encoding>][;base64],<data>
{% endhighlight %}

So, here's how an inline, small and encoded SVG image looks like:

{% highlight html %}
  <img src="data:image/svg+xml;base64,PD94bWwgd...">
{% endhighlight %}

and if we deconstruct the encoded string:

  * `data` - the name of the scheme
  * `image/svg+xml` - the content type
  * `base64` - the type of encoding
  * `PD94bWwgd...` - the encoded data

## Base64 encoding tools

I'm not going to explain Data URI here, others did it before and did it well. Further, I'll list some online conversion tools that do exactly what they suppose to do, encode or decode your content as Base64 string so you can use it right away in your projects.

  * [b64.io](http://b64.io/)
  * [base64decode.org](https://www.base64decode.org/)
  * [AskApache's Base64 encoder/decoder](https://www.askapache.com/online-tools/base64-image-converter/)
  * [Image2Base64](https://image2base64.wemakesites.net/)
  * [base64encoder.io](https://www.base64encoder.io/)
  * [base64-image.de](https://www.base64-image.de/)
  * [FreeFormatter's Base 64 Encoder / Decoder](https://www.freeformatter.com/base64-encoder.html)

## Using Grunt

If you're using an automated task runner like [Grunt](https://gruntjs.com/), you can make this conversion smoother. For example, to replace image URLs in your stylesheets with data URIs, you can use plugins that can do it for you with no hassle.

In case you haven't used Grunt before, be sure to check out the [Getting Started](https://gruntjs.com/getting-started) guide, as it explains what a Gruntfile is and how to use Grunt plugins as well.

Once you're done with that, you'll be able to install for example the [Grunt Image Embed](https://www.npmjs.com/package/grunt-image-embed) plugin that converts all data found within a stylesheet, like images and fonts, into base64-encoded data URI strings:

{% highlight html %}
  <img src="data:image/svg+xml;base64,PD94bWwgd..." >
{% endhighlight %}

{% highlight js %}
  npm install grunt-image-embed
{% endhighlight %}

Next, add the following line to your project's grunt file and once you're done with configuring stuff, you're ready to go.

{% highlight js %}
  grunt.loadNpmTasks("grunt-image-embed");
{% endhighlight %}

## Conclusion

With the latest spread of icon fonts, having an icon font included in your project is almost mandatory. Menu icons, social icons, even a feature list, they all can be achieved using an icon font. The cool thing is that the "solve all problems" icon font can be encoded and embedded in projects just as a Data URI string.

Also, while working on a project a while ago, I encountered a situation when [using a font encoded in Base64](/firefox-doesnt-allow-cross-domain-fonts-by-default/) proved to be a life savior. So, how often do you use Data URIs in your projects and what type of content do you encode most often? Let me know your thoughts!