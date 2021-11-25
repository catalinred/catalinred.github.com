---
author: Red
comments: true
date: 2016-01-18 08:00
layout: post
title: AWRStudyr Chrome extension or what I've been up to lately
description: Lately I've been working on AWRStudyr which is a Chrome extension that offers powerful SEO & web technologies insights each time you open a new web page.
categories:
- Miscellaneous
---

If you'd ask me what I've been up lately, I'd say: working, reading, learning - pretty much just like you, I guess. The thing is it's been a while since I wrote something here and my first article this year is about AWRstudyr, a Chrome extension I've been working lately and it's something I've put lots of effort into it.

![AWRstudyr screenshot](/dist/uploads/2016/01/awrstudyr.jpg)

<!-- more -->

## What's AWRStudyr about
If you're like me, you hit `view source` on a regular basis while browsing just every time you enjoy, dislike or when being too curious onto something. And when `view source` is not enough, you go with `F12` and try to stumble upon on how things work down there.

So, I started thinking on a tool that could deliver relevant info for a web page without having to repeat the above steps every time I wanted to find out more about the tools and frameworks a page uses. Feedback was crucial and I was interested mainly if there were more people having my problem - trying to get as many data possible for an URL at first sight.

As a result, together with my colleagues at Caphyon, we made AWRstudyr - a Chrome extension that shows web page insights on SEO gathered from a keyword research database compiled from a set of 30 million keywords, plus lots of web development answers like:

- What web server is behind the URL?
- What Analytics tool is used to get visitor insights?
- What Marketing or Chat tools are used to convert the visitors?
- What Advertising network is running in order to sell ads?
- What CMS powers the forum, blog or the online shop?
- What CSS and JS frameworks are used to build that user interface?

and more...

- Is the page mobile-friendly and how does it look like on small devices?
- What Google PageSpeed scores does that URL have?
- Is that URL HTML5 valid according to W3C?
- Does this URL have mixed content that can break the SSL?
- How many times does this URL has been shared in the wild?

![AWRstudyr SEOverview](/dist/uploads/2016/01/seoverview.png)
![AWRstudyr Technologies](/dist/uploads/2016/01/tech.png)
![AWRstudyr HTML5](/dist/uploads/2016/01/html5.png)
![AWRstudyr mobile friendly](/dist/uploads/2016/01/mobile.png)
![AWRstudyr PageSpeed Insights](/dist/uploads/2016/01/pagespeed.png)
![AWRstudyr social shares](/dist/uploads/2016/01/social.png)

## How it's made

The cool thing is that we were able to use the latest cutting-edge technologies to build it, without having to care about cross-browser consistency or other issues.

- We chose B.E.M. as a CSS methodology.
- Sass is the preprocessor tool and Grunt does the automation.
- On postprocessing CSS, Autoprefixer does the job.
- We're not using any CSS framework but we tried to create ours for this, inspired by the ones available in the wild.
- The grid system that makes everything straightforward is made using Flexbox.
- The JavaScript framework that made our lives easier is AngularJS.
- Most of graphics are SVG and it's a wonderful feeling to be able to use it without any polyfills or fallbacks.

## Where to get it
You can go to [AWRstudyr](https://wattspeed.com/) website or [get it on Chrome Store](https://chrome.google.com/webstore/detail/awrstudyr/mbkehkfjhncahcaggkncdaacfnikmoid) directly to give it a try. I hope you enjoy it and looking forward to your feedback!
