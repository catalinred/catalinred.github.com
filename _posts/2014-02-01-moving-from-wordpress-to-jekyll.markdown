---
author: Red
comments: true
date: 2014-02-01 08:00
layout: post
slug: moving-from-wordpress-to-jekyll
title: Moving from Wordpress to Jekyll
description: test description
categories:
- Miscellaneous
---

I've read a lot of inspiring articles on moving from Wordpress to Jekyll but the one you're reading now is a bit different, this one is merely mine. Jekyll might not be the easiest way to blog but it's one of the most challenging for sure. *Blogging Like a Hacker*, by its creator, [Tom Preston-Werner](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html), might be the best title ever that describes Jekyll.

<!-- more -->

## But... why?
Yep, that's a pretty good question. Why would you want to move from Wordpress to Jekyll when everything works just fine? The short answer is to learn. Obviously, I'm not a hacker but my website needed a fresh new look, and what better chance to **learn a new approach** than this?

I'm still a big fan of WordPress, I'm still using it for other projects, I'll still recommend to others. But this time I just wanted something different. Lately I thought a lot about it and this move was part of my New Year's resolutions.

I knew from the start what moving from Wordpress to Jekyll will involve, so I made my homeworks, some things worked as expected and some other not but in the end I made it. This article is a plain HTML file generated with Jekyll and it was written using Markdown. Phew!

## Running Jekyll

Before going anywhere further, I'd like to point out that if you're planing to publish blog articles from your mobile, then Jekyll might not suit your needs. And that's because of its dependencies.

I'll start with the begining, which is perhaps the ugliest part of my story: set up everything on a Windows machine. It felt just great when I got it running, but it's not that easy as on a Mac OS.

tutorial
ruby install
devkit
python, easy install
=====


## Migrating the existing content 
To migrate the existing articles and pages to Jekyll, I've decided to go with [existwp](https://github.com/thomasf/exitwp) and for that I had to install some dependencies like html2text, PyYAML and Beautiful soup. Please note that having Python installed is mandatory for this tool to work.

Once I've set up existwp, I just ran `exitwp.py` and voila, all my posts were in Markdown format. Everthing went just fine, just some minor content adjustments were made for the resulted files.

### Custom meta description
For SEO purposes, it's recommended to have custom descriptions for each of your pages, that's why I used the Yoast plugin on Wordpress. When migrating, unfortunatelly you kinda lose every custom meta description field you filled in. Unless you want the lazy aproach - setting a single description for all your pages within `_config.yml` - you may need a coffee and some extra patience to fill meta descriptions for *each* of your markdown pages.

### Post excerpt
One of the things I cared about was to keep the existing content excerpt format for the index page posts. Thanks to the exitwp export tool, all my resulted Markdown posts kept the `<!-- more -->` code. Having this breakpoint code already, I just needed to specify it as the `excerpt` in the `_config.yml`.

{% highlight html %}
excerpt_separator: <!-- more -->
{% endhighlight %}

### Code syntax highlighting
I switched from Google's JavaScript Code Prettify to [Pygments](http://pygments.org/), a Python syntax highlighter. All the code syntax highlighting is now made upon the build of HTML files. Simply place the code to wish to highlight in liquid highlight tags.

{% highlight js %}
{% raw %}
{% highlight js %}
// your JS code here
{% endhighlight %}
{% endraw %}
{% endhighlight %}


### Comments
Following the research I made on porting comments further with Jekyll, *To keep, or not to keep?*, that was the question. After reading a lot of pros and cons, I chose to keep the comments because sometimes they are so valuable. Sometimes they're just spammy, but that's another story.

Therefore, the only logical choice was to go further with [Disqus](http://disqus.com/). I've never been a Disqus fan, but this time proved to be the best option for porting comments from a database driven blog to static.

## SASS-ify
Made everything from scratch using SASS.

## Setting up GitHub pages and deploy
With this oportunity, I decided to try out GitHub Pages as well. deploy ...

## Conclusion
When I first though about this big change, I though I'll never have enough time for that. I knew this is going to be time consuming but everything worth it. Definitely! Because in the end, the more important thing is to learn new stuff, that's part of [becoming a better developer](http://www.red-team-design.com/becoming-a-better-developer).