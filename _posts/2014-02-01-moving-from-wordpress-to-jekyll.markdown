---
author: Red
comments: true
date: 2014-02-01 08:00
layout: post
slug: moving-from-wordpress-to-jekyll
title: Moving from WordPress to Jekyll
description: How I decided to move from WordPress to Jekyll. It was fun to build, a lot to learn and very challenging.
categories:
- Miscellaneous
---

My website was needing a fresh new look, and what better chance to learn a new approach than this? You may ask why would you want to move from WordPress to Jekyll when everything works just fine? That's a pretty good question and the I think the shortest answer is to learn.

<!-- more -->

## Still... why?

I've read a lot of inspiring articles on moving from WordPress to Jekyll but the one you're reading now is a bit different, this one is merely mine. Jekyll might not be the easiest way to blog but it's one of the most challenging for sure. *Blogging Like a Hacker*, by its creator, [Tom Preston-Werner](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html), might be the best title ever that describes Jekyll. Don't get me wrong, I'm not a hacker! :)

I'm still a big fan of WordPress, I'm still using it for other projects, I'll still recommend to others. But this time I just wanted something different. Lately I thought a lot about it and this move was part of my New Year's resolutions.

From the start, I knew what moving from WordPress to Jekyll will involve, so I made my homeworks, some things worked as expected and some other not but in the end I made it. This article is a plain HTML file generated with Jekyll and it was written using Markdown. Phew!

## Running Jekyll

Before going anywhere further, I'd like to point out that if you're planing to publish blog articles from your mobile, while on vacation, then Jekyll might not suit your needs. And that's because of its dependencies. Unless perhaps you're using something like [Prose.io](http://prose.io), but that's another story.

I'll start with the beginning, which is perhaps the ugliest part of my story: set up everything on a Windows machine. It felt just great when I got it running, but it wasn't that easy as on a Mac OS.

To be able to run Jekyll on a Windows system, you just need the Ruby environment and Jekyll of course. But if you want Pygments, the Python syntax highlighter, Python is required as well. 

- [Ruby](http://www.rubyinstaller.org/downloads/) & Ruby DevKit
- [Jekyll](http://jekyllrb.com/)
- [Python](http://www.python.org/download/)
- [Pygments](http://pygments.org/)

###Ruby
If you heard about Sass before then you heard about Ruby too, it's used to make Sass work and Jekyll as well. It might seem overwhelming, I had the same feeling too, but you don't actually need to know Ruby so you can run Sass and Jekyll. Trust me, I know what it feels like. :)

>You don't have to know Node. Just like you don't have to know Ruby to use Sass. Or PHP to use WordPress. Or C++ to use Microsoft Word.

*[Chris Coyier](http://24ways.org/2013/grunt-is-not-weird-and-hard/), on a similar matter.*

To make stuff work on my Windows system, I found [this article](http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html) very helpful. So, if stuck on this step, go there and find out more.

###Jekyll
Once you have Ruby set up, installing Jekyll is pretty straightforward, just run the following lines:

{% highlight ruby %}
gem install jekyll
jekyll new my-awesome-site
cd my-awesome-site
jekyll serve
# Browse to http://localhost:4000
{% endhighlight %}

Well, that's pretty much it with the Jekyll, everything should work just fine now. Browse to `http://localhost:4000` and see your new Jekyll project in action.

### Python
Installing Python and Pygments is optional, but if you want a syntax highlighter that runs on build, then go for it. You might like it comparing to other JS solutions.

### Pygments
To get Pygments, you can use `pip` or `easy_install`. They are both Python modules that automatically download, build, install and manage Python packages. Some people prefer `pip` over `easy_install` but for me, `easy_install` worked just fine.

To keep it simple, think they act just like `gem` for Ruby.

To get `easy_install`, browse to [Python's packages list](https://pypi.python.org/pypi/setuptools#windows), download `ez_setup.py` and then run it:

{% highlight python %}
python distribute_setup.py
{% endhighlight %}

Now, having the `easy_install` module, you can install Pygments:

{% highlight python %}
easy_install Pygments 
{% endhighlight %}

At this step, you need to *expose* the Pygments syntax highlighter to Ruby, and to do that run the following like that will install the 0.5.0 pygments.rb version. Other versions do not behave well.

{% highlight ruby %}
gem install pygments.rb --version "=0.5.0"
{% endhighlight %}

### My current setup
You might encounter issues when trying to set up everything, at least I did it... a lot. But it worth it, every single search on Google or StackOverflow.

Here's my current setup, just in case you might be interested: 

- Windows 8
- Ruby 1.9.3p484
- Jekyll 1.4.2
- Python 2.7.6
- `easy_install` distribute 0.6.49 
- `pygments.rb` 0.5.0


## Migrating the existing content 
To migrate the existing articles and pages to Jekyll, I've decided to go with [existwp](https://github.com/thomasf/exitwp) and for that I had to install some dependencies like html2text, PyYAML and Beautiful soup. Please note that having Python installed is mandatory for this tool to work.

Once I've set up existwp, I just ran `exitwp.py` and voila, all my posts were in Markdown format. Everthing went just fine, just some minor content adjustments were made for the resulted files.

### Custom meta description
For SEO purposes, it's recommended to have custom descriptions for each of your pages, that's why I used the Yoast plugin on WordPress. When migrating, unfortunatelly you kinda lose every custom meta description field you filled in. Unless you want the lazy approach - setting a single description for all your pages within `_config.yml` - you may need a coffee and some extra patience to fill meta descriptions for *each* of your markdown pages.

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

## Sass
I was thinking to use [Compass](http://compass-style.org/) for this project, but at a second thought I've decided to skip it and go with plain SCSS and [Autoprefixer](https://github.com/ai/autoprefixer). Not that I do not like Compass, I've used it in the past, but this time I just wanted to build everything from scratch. As much as possible.

The styles are split into Sass partials, later used with the `@import` directive within the `style.scss`.

{% highlight html%}
/sass/
|--  style.scss
|--  _base.scss
|--  _buttons.scss
|--  _grid.scss
|--  _helpers.scss
|--  _mixins.scss
|--  _pygments.scss
|--  _sidebar.scss
|--  _typography.scss
|--  _vars.scss
{% endhighlight %}

## Grunt
Running Jekyll and Sass in separate `cmd` windows was not an option. Everybody loves automation, so do I. For this project, [Grunt](http://gruntjs.com/) was my choice.

I made a Gruntfile.js and even though it's far from being perfect, it works. In the future I'll work on improving it, it's on my todo list.

## Setting up GitHub pages and deploy
With this opportunity, I chose to try out GitHub Pages as well.

## Conclusion
When I first though about this big change, I though I'll never have enough time for that. I knew this is going to be time consuming but everything worth it. Definitely! Because in the end, the more important thing is to learn new stuff, that's part of [becoming a better developer](http://www.red-team-design.com/becoming-a-better-developer).