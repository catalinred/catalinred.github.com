---
author: Red
comments: true
date: 2014-03-03 08:00
layout: post
slug: moving-from-wordpress-to-jekyll
title: Moving from WordPress to Jekyll
description: How I decided to move from WordPress to Jekyll. It was fun to build and lots to learn.
categories:
- Miscellaneous
---

My website was needing a fresh new look, and what better chance to learn a new approach than this? You may ask why would you want to move from WordPress to Jekyll when everything works just fine? That's a good question and I think the short answer is [to learn](/becoming-a-better-developer).

![WordPress to Jekyll](/dist/uploads/2014/03/wordpress-to-jekyll.png)

<!-- more -->

## Still... why?

I've read a lot of inspiring articles on moving from WordPress to Jekyll, yet the one you're reading now is a bit different, this one is merely mine. Jekyll might not be the easiest way to blog but it's one of the most challenging for sure. *Blogging Like a Hacker*, by its creator, [Tom Preston-Werner](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html), might be the best title ever that describes Jekyll. However, don't get me wrong, I'm not a hacker. Not even close. :)

I'm still a big fan of WordPress, I'm still using it for other projects and recommend to others. But this time I just wanted something different, I thought about this move a lot it was part of my New Year's resolutions.

From the start, I knew what moving from WordPress to Jekyll will involve, so I made my homeworks, some things worked as expected and some other not but in the end I made it. This article is a plain HTML file generated with Jekyll and it was written using Markdown. Phew!

## Running Jekyll

Before going anywhere further, I'd like to point out that if you're planing to publish blog articles from your mobile, while on vacation, then Jekyll might not suit your needs. And that's because of its dependencies. Unless perhaps you're using something like [Prose.io](http://prose.io), but that's another story.

I'll start with the beginning, which is perhaps the ugliest part of my story: set up everything on a Windows machine. Not that easy but it felt just great when I got it running.

To be able to run Jekyll on a Windows system, you just need the Ruby environment and Jekyll of course. But if you want Pygments, the Python syntax highlighter, Python is required as well. 

- [Ruby](http://www.rubyinstaller.org/downloads/) & Ruby DevKit
- [Jekyll](http://jekyllrb.com/)
- [Python](http://www.python.org/download/)
- [Pygments](http://pygments.org/)

### Ruby
If you heard about Sass before then you heard about Ruby too, it's used to make Sass work and Jekyll as well. It might seem overwhelming, I had the same feeling too, but you don't actually need to know Ruby so you can run Sass and Jekyll. Trust me, I know what it feels like. :)

>You don't have to know Node. Just like you don't have to know Ruby to use Sass. Or PHP to use WordPress. Or C++ to use Microsoft Word.

*[Chris Coyier](http://24ways.org/2013/grunt-is-not-weird-and-hard/), on a similar matter.*

To make Ruby stuff work on my Windows system, I found [this article](http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html) very helpful. So, if stuck on this step, that article might help you.

### Jekyll
Once you have Ruby set up, installing Jekyll is pretty straightforward, just run the following lines:

{% highlight ruby %}
gem install jekyll
jekyll new my-awesome-site
cd my-awesome-site
jekyll serve
# Browse to http://localhost:4000
{% endhighlight %}

Well, that's pretty much it with the Jekyll install, everything should work just fine now. Browse to `http://localhost:4000` and see your new Jekyll project in action.

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

At this step, you need to *expose* the Pygments syntax highlighter to Ruby, and to do so, run the following line that will install the 0.5.0 pygments.rb version. Other versions do not behave well, I found out the hard way.

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
To migrate the existing articles and pages to Jekyll, after I successfully failed with trying [WordPress to Jekyll Exporter](https://github.com/benbalter/wordpress-to-jekyll-exporter), I've decided to go with [existwp](https://github.com/thomasf/exitwp) and for that I had to install some dependencies like html2text, PyYAML and Beautiful soup. Please note that having Python installed is mandatory for this tool to work.

Once I've set up existwp, I just ran `exitwp.py` and voila, all my posts were in Markdown format. Everything went just fine, just some minor content adjustments were made for the resulted files.

### Custom meta description
For SEO purposes, it's recommended to have custom descriptions for each of your pages, that's why I used the Yoast plugin on WordPress. When migrating, unfortunately you kinda lose every custom meta description field you filled in. Unless you want the lazy approach - setting a single description for all your pages within `_config.yml` - you may need a coffee and some extra patience to fill meta descriptions for *each* of your markdown pages.

Using the YAML front matter block, I added a proper description for each article:

{% highlight html %}
---
layout: post
title: Moving from WordPress to Jekyll
description: How I decided to move from WordPress to Jekyll ...
---
{% endhighlight %}

Then, in the `<head>` section, using Liquid:

{% highlight html %}
<meta name="description" content="{% raw %}{{ page.description }}{% endraw %}">
{% endhighlight %}

### Post excerpt
One of the things I cared about was to keep the existing content excerpt format for the index page posts. Thanks to the exitwp export tool, all my resulted Markdown posts kept the `<!-- more -->` piece of code. Having this breakpoint code already, I just needed to specify it as the `excerpt` in the `_config.yml`.

{% highlight html %}
excerpt_separator: <!-- more -->
{% endhighlight %}

### Code syntax highlighting
I switched from Google's JavaScript Code Prettify to [Pygments](http://pygments.org/), a Python syntax highlighter. All the code syntax highlighting is now made upon the build of the static HTML files. Simply place the code you wish to highlight in Liquid highlight tags.

{% highlight js %}
{% raw %}
{% highlight js %}
// your JS code here
{% endhighlight %}
{% endraw %}
{% endhighlight %}


### Comments
Following the research I made on porting comments further with Jekyll, *To keep, or not to keep?*, that was the question. After reading a lot of pros and cons, I chose to keep the comments because sometimes they are so valuable. Still, sometimes they're just spammy.

Therefore, the only logical choice was to go further with [Disqus](http://disqus.com/). I've never been a Disqus fan, but it proved to be the best option for porting comments from a database driven blog to static.

## Sass
I was thinking to use [Compass](http://compass-style.org/) for this project, but at a second thought I've decided to leave it aside for now and go with plain SCSS along with [Autoprefixer](https://github.com/ai/autoprefixer). It's not that I do not like Compass, I've used it in the past, but this time I just wanted to build everything from scratch. As much as possible.

The styles are split into Sass partials, later used with the `@import` directive within the `style.scss`.

{% highlight html%}
/sass/
|--  style.scss
|--  _vars.scss
|--  _mixins.scss
|--  _grid.scss
|--  _helpers.scss
|--  _base.scss
|--  _buttons.scss
|--  _pygments.scss
|--  _typography.scss
|--  ...
{% endhighlight %}

## Grunt
Everybody loves automation, so do I, and for this project, [Grunt](http://gruntjs.com/) was my choice. I made a Gruntfile.js and even though it's far from being perfect, it works. Still, it definitely needs some improvements and I'm planning to do that later.

Here's how my `packages.json` looks like now:

{% highlight js %}
{
  "name": "rtd",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.2",
    "grunt-autoprefixer": "~0.6.5",
    "grunt-contrib-sass": "~0.7.1",
    "grunt-jekyll": "~0.4.1",
    "grunt-contrib-clean": "~0.5.0",
    "grunt-contrib-watch": "~0.5.3",
    "grunt-concurrent": "~0.4.3"
  }
}
{%  endhighlight %}

## Setting up GitHub pages and deploy
GitHub Pages support Jekyll and, with this opportunity, I chose to give it a try and host everything there. This way things got easier to maintain, my website now being a Git repository built when pushing online.

Pushing [everything to GitHub](//github.com/catalinred/catalinred.github.com) was piece of cake, I was rather anxious about setting my domain name A-record pointing to GitHub's IP address. That's because I had to wait several hours for the full propagation.

## Design

Last but not least, on the current design, my main focus was on improving typography, especially vertical rhythm. My previous design was lacking this type of fine tuning and now I paid more attention to it.

Having already chosen the [color scheme](http://dribbble.com/shots/1407691-Just-another-color-scheme), I played a bit with Adobe's Illustrator and made the abstract-shaped header you can see above. The header and the logo are the only images used here, which, by the way, are [encoded](/data-uri-tools/). **More love, less HTTP requests.**

## That's it!
When I first thought about this website update, I thought I'll never have enough time for it. I knew this was going to be time consuming but everything worth it. Definitely! I'm more than happy with the results and the initial feedback was just great.

Let me know your thoughts, I'd appreciate it!