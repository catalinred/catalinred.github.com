---
author: Red
comments: true
date: 2012-07-23 05:00:46+00:00
layout: post
slug: firefox-doesnt-allow-cross-domain-fonts-by-default
title: Firefox doesn't allow cross-domain fonts
description: Read this article to find out more about Mozilla Firefox and cross-domain fonts issue and workarounds.
wordpress_id: 5076
categories:
- CSS
- Miscellaneous
tags:
- CSS3
---

It would be just great if we could learn something new every day. I guess the best way to do it is by trying new stuff every time it's possible.

While working on [LeadConverter](http://www.lead-converter.com/), I had a situation where it was needed to use an iconic font externally declared via `@font-face`. So, in this situation, my iconic font worked perfectly in all major supported browsers, **excepting Firefox**. It was such disappointing situation.

After I've pulled out half of my hair searching for a solution, I found out that Firefox doesn't allow cross-domain fonts by default - unless you set an `Access-Control-Allow-Origin` header to the font.

![Firefox does not allow cross domain fonts](/wp-content/uploads/2012/07/firefox-does-not-allow-cross-domain-fonts.png)

<!-- more -->

## The scenario

![Scenario](/wp-content/uploads/2012/07/firefox-cross-domain-fonts.png)

In this case, using the iconic font, the `<i class="icon-user"></i>` should generate an user icon. And it does for most of browsers, excepting Mozilla.
    
{% highlight html %}
<!doctype html>
<html>
<head>
<title></title>
<link rel="stylesheet" href="http://www.example.com/style.css">
</head>
<body>
  <i class="icon-user"></i>
</body>
</html>
{% endhighlight %}    


_The style.css would contain all necessary [@font-face](http://www.red-team-design.com/css3-font-face-or-how-to-use-a-custom-font-for-your-website) declarations for the iconic font._

## The problem

It seems that, for security reasons, Firefox simply don't allow you to use by default a font that is not hosted on your domain, not even on your subdomain. The CDN based websites can be also affected in this case.

## The solution

After some investigations, I found out the workaround: set a `Access-Control-Allow-Origin` header to the font.


    
{% highlight html %}
<FilesMatch "\.(ttf|otf|eot|woff)$">
  <IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
  </IfModule>
</FilesMatch>
{% endhighlight %}

_Add the snippet above to a .htaccess file within the same folder as the font file._

Also, if you are using nginx as your webserver you will need to include the code below in your virtual host file:

{% highlight html %}
location ~* \.(eot|otf|ttf|woff)$ {
    add_header Access-Control-Allow-Origin *;
}
{% endhighlight %}


**Best-case scenario:** set this header and get rid of this problem.

**Worst-case scenario:** you're using Amazon Web Services. In this case, you should know that, at this time, you're not allowed to specify the `Access-Control-Allow-Origin` header for your files. Read more about this subject on their [forums](https://forums.aws.amazon.com/message.jspa?messageID=160131).

### Options
	
  * Serve the fonts from another hosting service, where you can set the headers.	
  * Embed the font in your as a [Base64](http://www.red-team-design.com/css3-signup-form) string.

## Read more

Of course, in the end I managed to solve my problem. In case you want to read more about this, here are other two interesting articles on this topic:
	
  * [Cross domain workaround for @font-face and Firefox](http://geoff.evason.name/2010/05/03/cross-domain-workaround-for-font-face-and-firefox/)	
  * [Serving Cross-Domain Fonts](http://www.bryandragon.com/articles/rails-asset-pipeline-cdns-and-serving-cross-domain-fonts)