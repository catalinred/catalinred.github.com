---
author: Red
comments: true
date: 2012-07-23 05:00:46+00:00
layout: post
slug: firefox-doesnt-allow-cross-domain-fonts-by-default
title: Firefox doesn't allow cross-domain fonts
description: Read this article to find out more about Firefox and cross-domain fonts issues and workarounds.
categories:
- CSS
- Miscellaneous
- HTML
---

<ins>
  Last updated on <time datetime="2019-12-27">2019, December 27</time>
</ins>

It would be just great if we could learn something new every day. I guess the best way to do it is by trying new stuff every time it's possible.

While working on a project, I had a situation where it was needed to use an iconic font externally declared via CSS `@font-face`. So, in this situation, my iconic font worked perfectly in all major supported browsers, excepting Firefox. It was such a disappointing situation.

After I've pulled out half of my hair searching for a solution, I found out that Firefox doesn't allow cross-domain fonts by default - unless you set an `Access-Control-Allow-Origin` header to the font.

![Firefox does not allow cross-domain fonts](/dist/uploads/2012/07/firefox-does-not-allow-cross-domain-fonts.png)

<!-- more -->

## The scenario

![The font icon loads successfully on Chrome but not on Firefox](/dist/uploads/2012/07/firefox-cross-domain-fonts.png)

In this case, using the iconic font, the `<i class="icon-user"></i>` should generate an user icon. And it does for most of the browsers, excepting Mozilla Firefox.

{% highlight html %}
  <!doctype html>
  <html>
  <head>
    <title>...</title>
    <link rel="stylesheet" href="https://www.example.com/style.css">
  </head>
  <body>
    <i class="icon-user"></i>
  </body>
  </html>
{% endhighlight %}

_The style.css would contain all necessary [@font-face](/css3-font-face-or-how-to-use-a-custom-font-for-your-website) declarations for the iconic font._

## The problem

It seems that, for security reasons, Firefox simply doesn't allow you to use by default a font that is not hosted on your domain, not even on your subdomain. The CDN based websites can be also affected in this case.

> Web fonts are subject to the same domain restriction (font files must be on the same domain as the page using them) unless HTTP access controls are used to relax this restriction.
>
> *from MDN's docs on [CSS @font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)*

## The solution

After some investigations, I found out the workaround: set an `Access-Control-Allow-Origin` header to the font.

{% highlight html %}
  <FilesMatch "\.(ttf|otf|eot|woff)$">
    <IfModule mod_headers.c>
      Header set Access-Control-Allow-Origin "*"
    </IfModule>
  </FilesMatch>
{% endhighlight %}

_Add the snippet above to a `.htaccess` file within the same folder as the font file._

Also, if you are using Nginx as your webserver you will need to include the code below in your virtual host file:

{% highlight html %}
  location ~* \.(eot|otf|ttf|woff)$ {
    add_header Access-Control-Allow-Origin *;
  }
{% endhighlight %}

**Best-case scenario:** set this header and get rid of this problem.

**Worst-case scenario:** you're using Amazon Web Services. In this case, you should know that, at this time, you're not allowed to specify the `Access-Control-Allow-Origin` header for your files. Read more about AWS Cross-Origin Resource Sharing (CORS) in their [developer docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html).

In this case, you can:

  * Serve the fonts from another cloud service, that supports cross-origin file serving or where you can easily set the `Access-Control-Allow-Origin` header.
  * Encode the font as a [Base64 string](/data-uri-tools/).