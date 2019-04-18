---
author: Red
comments: true
date: 2019-04-22 10:00:00
layout: post
slug: almighty-website-name-google-serp
title: An SEO story on the almighty website name from within the Google SERP title
description: I didn't add a website name within the title tag for my website, then I switched the domain and Google was showing my old website name references in the SERP for my new domain queries.
categories:
- SEO
- HTML
- CSS
---

Or what happens when you don't specify a website name within the `title` tag, then Google grabs one for you from your `h1`, later on you switch to a new domain and get stuck with the old website name. Oh and that's because you didn't add a website name this time either.

![Website name within Google SERP](/dist/uploads/2019/04/website-name-google-serp.png)

<!-- more -->

## Google chooses which titles to display in search results

So we know that Google changes the SERP result title depending on your search query, the reason is to show you, the searcher, the best content result based on your query.

Here's Matt Cutts in a video in which he explains how [Google chooses which titles to display in search results](https://www.youtube.com/watch?v=L3HX_8BAhB4), it's from 2014, but thought it's relevant now too, given this article's topic.

## The story

I [updated my website](/switch-red-team-design-to-catalin-red/) back in November 2017, from `red-team-design.com` to `catalin.red`. Later on, while performing the usual double-check queries on Google, I noticed that the Google SERP was still showing obsolete title references containing the old domain website name:

![My Mastodon article in the Google SERP](/dist/uploads/2019/04/google-serp-result-mastodon.png)

*A Google SERP example with one of my website's article, containing the old website name.*

![catalin.red query in the Google SERP](/dist/uploads/2019/04/catalin-red-google-query.png)

*Another SERP result with the "catalin.red" query, "Red Team Design" strikes again.*

So I did what a normal person would do in this case. I went to Google Search Console -> URL inspection -> Crawled page tool preview for my above URL in question at that time and noticed there's no website name in there, no "Red Team Design" or anything else.

![Google Search Console inspect URL preview](/dist/uploads/2019/04/google-search-console-preview.png)

In the meantime, I've also tested other search engines as Duckduckgo or Bing and randomly got kind of similar results which meant to me that they use a similar algorithm for storing / getting the website name from within the HTML page source.

I waited and waited but I've not seen any noticeable update in the SERP for my website pages and I proceeded further to adding the new website name back to my pages.

{% highlight html %}
<title>I inspected the mastodon.social website - Catalin Red</title>
{% endhighlight %}

I've noticed the `title`s were looking as they should in the SERP so apparently, *overriding* the website name in the title was the winner to say so.

Later on, in April I met [John Muller](https://twitter.com/JohnMu/), from Google Search Console, at SMX Munchen and I took advantage of the opportunity and [asked him about this matter](https://twitter.com/catalinred/status/1113457168030814208) of mine. He was kind enough to answer to some of my questions and as far as I understood, Google stores a website name for your website and based on the fact that Google changes the SERP result title depending on your search query, I was seeing the old website name that Google kept stored.

I guess I was too ignorant about this SEO title matter, but learned lots of things along the way. For example, when Google grabs the website name for you, I can only assume it transforms the respective string from [camelCase / PascalCase to Title case](https://en.wikipedia.org/wiki/Camel_case) where appropriate. I stalked, I mean [I met John again](https://twitter.com/catalinred/status/1116721640874893313) at Brighton, later in April 2019, and he confirmed that Google indeed tries that for your website name but it depends a lot of the website name in question.

## Conclusion

In the end, having all my [website's code on Github](https://github.com/catalinred/catalinred.github.com/), I was able to go back in time and build a sort of commits timeline related to this website name story of mine. Here's a rough timeline attempt below, just in case:

This is [the first GitHub commit](https://github.com/catalinred/catalinred.github.com/commit/5222844d8b39a5c13254b32804c8a406f0a81e7f#diff-aeb42283af8ef8e9da40ededd3ae2ab2R1) with my website name stored in a [YAML](https://yaml.org/) config file, back in 2014.

{% highlight yaml %}
name: RedTeamDesign
{% endhighlight %}

Having the above in the config file, according to the [Jekyll documentation](https://jekyllrb.com/docs/configuration/), you can later use it within your templates using `site.name`.

{% highlight html %}
<h1 class="title"><a href="/">{% raw %}{{ site.name }}{% endraw %}</a></h1>
{% endhighlight %}

So that's [what I did at that time](https://github.com/catalinred/catalinred.github.com/commit/5222844d8b39a5c13254b32804c8a406f0a81e7f#diff-2c19d9859b055d0302043d0fa2833e3fR20), I added my *ugly-but-unique* `RedTeamDesign` website name to an `h1`. Later on, Google *beautified* and stored it as `Red Team Design` by only using capital letters for the principal words. a.k.a *Title case*.

---

After the initial init, [I added a custom logo](https://github.com/catalinred/catalinred.github.com/commit/ac3faeddc92a663d0d0fd1d483d3321d35e69b76#diff-2c19d9859b055d0302043d0fa2833e3fR47) using the CSS image replacement technique. But I guess at that time Google already had the website name stored from within the h1, as in the initial above commit.

{% highlight html %}
<a href="/" class="rtd-logo">
  {% raw %}{{ site.name }}{% endraw %}
</a>
{% endhighlight %}

---

In autumn 2017, I replaced the `site.name` [with Catalin Red](https://github.com/catalinred/catalinred.github.com/commit/c044a6028fbf4b4854cc318a7b1b53a35a28ca92#diff-aeb42283af8ef8e9da40ededd3ae2ab2) and I also [updated the logo](https://github.com/catalinred/catalinred.github.com/commit/b36becb4997be428bbf7ede475035104fcaa4a51?diff=unified#diff-2c19d9859b055d0302043d0fa2833e3fL29) from using the CSS image replacement technique to an inline SVG with an `aria-label` attribute.

{% highlight html %}
<a href="/" aria-label="{% raw %}{{ site.name }}{% endraw %} logo">
  <svg viewBox="...">
    <polyline points="..."/>
    <polyline points="..."/>
    <polyline points="..."/>
  </svg>
</a>
{% endhighlight %}