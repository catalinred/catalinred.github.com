---
author: Red
comments: true
date: 2017-11-07 10:10:00
layout: post
slug: switch-red-team-design-to-catalin-red
title: I made the switch to catalin.red
description: After a very long time I managed to switch red-team-design.com to catalin.red.
categories:
- Miscellaneous
---

I've never been a big fan of my very own domain name. Besides the fact that it was quite long, I really hated the hyphens for `red-team-design.com`. 

Two hyphens, the mistakes of my youth.

![Switch red-team-design.com to catalin.red](/dist/uploads/2017/11/rtd-to-catalinred.png)

<!-- more -->

## TL;DR

I gave up to my old `red-team-design.com` domain and made the switch to `catalin.red` domain.

- I submitted to Google Search Console a request for a site move.
- I updated my Jekyll website that is hosted on GitHub Pages in order to reflect the changes.
- I used CloudFlare in order get SSL enabled on GitHub Pages and still use a custom domain.
	
## Google Change of Address

One of the most important things to think about when preparing to switch domains is what Google has to say about that.

The catch is that you need all the website variants added to Google Search Console, with working redirects, in order to go further.

> To use the change of address tool, all variants for the old site and new site must be added and verified in Webmaster Tools.

*from [Webmaster Central Help Forum](https://productforums.google.com/forum/#!category-topic/webmasters/webmaster-tools/CJCVrHmTlHA)*

So, I did add all the variants, in order to be able to request the change of address. 

- http://catalin.red
- http://www.catalin.red
- https://catalin.red
- https://www.catalin.red

- http://red-team-design.com
- http://www.red-team-design.com
- https://red-team-design.com
- https://www.red-team-design.com

![Google Search Console websites list](/dist/uploads/2017/11/google-search-console-websites.png)

## CloudFlare

I had some issues with trying to add 301 redirects using GoDaddy from red-team-design.com to this domain as they only allow a kind of forwarding instead the 301 redirect.

So, currently I'm using CloudFlare in order to add the above 301 redirects and to take advantage of their Universal SSL option and HTTP/2 for the site you're reading right now.

As you may already know, GitHub Pages doesn't support SSL on custom domains, so here's where [CloudFlare](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/) might come in handy.

![Cloudflare websites](/dist/uploads/2017/11/cloudflare-websites.png)

## Feedburner

I moved away from Feedburner and now I'm trying a new email service called [Elevatr](https://getelevatr.com/). I just hope in the future I'll be able to write more and manage to send better newsletter emails to you.

## Mail forwarding

After moving my DNS from Name.com to CloudFlare I lost the ability to use Name.com as a mail forwarder. For anyone not sure what mail forwarding is, well, this allows you to receive emails at you@domain.com and have it automatically forwarded somewhere else, like your personal Gmail account.

So, I got a free [Mailgun](https://www.mailgun.com/) account and set up the same thing.

You can now reach me, like any time, at **me@catalin.red**.	

## That's it!

Last but not least, I made some minor updates for the logo, typography and overall look and feel.

It's not rocket surgery but I feel pretty proud about it, so go [check out the GitHub repository](https://github.com/catalinred/catalinred.github.com).