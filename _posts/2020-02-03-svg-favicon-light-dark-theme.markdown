---
author: Red
comments: false
date: 2020-02-03 10:00:00
layout: post
slug: svg-favicon-light-dark-theme
title: Light and dark themed SVG favicon using the CSS prefers-color-scheme media feature
description: How to use an SVG as a favicon for your website, considering the light and dark theme detection in the browser using the CSS prefers-color-scheme media feature, with PNG and ICO fallbacks.
categories:
- HTML
- CSS
- JS
- A11Y
- SEO
---

In this article you'll learn how to use an SVG as a favicon for your website, considering the light and dark theme detection in the browser using the CSS `prefers-color-scheme` media feature.

![A website with SVG favicon for both light and dark themes](/dist/uploads/2020/02/svg-favicon-light-dark-theme.png)

<!-- more -->

## Summary
- [How to add a favicon to your website](#how-to-add-a-favicon-to-your-website)
- [Light & Dark theme detection in the browser](#light--dark-theme-detection-in-the-browser)
  - [CSS detection](#css-detection)
  - [JS detection](#javascript-detection)
- [How to switch the SVG favicon when in Dark Mode](#how-to-switch-the-svg-favicon-when-in-dark-mode)
- [Browser support and fallbacks](#browser-support-and-fallbacks)
- [Google SERP and favicons](#google-serp-and-favicons)
  - [Failed SERP redesign](#failed-serp-redesign)
  - [Dark pattern design scenario](#dark-pattern-design-scenario)

## How to add a favicon to your website

A favorites icon, also known as a favicon, is a tiny icon associated with a particular web site or web page that is displayed usually in browser's address bar and bookmarks menu.

The favicon is used to improve the user experience and enforce a brand's consistency. When a familiar favicon is seen in the browser's address bar, for example, it helps users to know they are in the right place. This is how phishing in the browser usually succeeds but that's a completely different story.

Here are the image formats you can use to add a favicon to your website. Spoiler alert: there is no *one-size-and-format* that fits in all the browsers. There would have been too easy!

- **ICO** - the ancient default
- **GIF** - for when, you know, want to draw attention within a plethora of open tabs
- **PNG** - all browsers support the .ico format but the PNG format might be handy
- **SVG** - the higher resolution approach that has worse browser support but lots of potential

In this article, we'll be focusing on the latter approach that is based on using the Scalable Vector Graphics (SVG), as it teams up perfectly with the CSS `prefers-color-scheme` media feature.

## Light & Dark theme detection in the browser

We don't know for sure yet why most developers prefer to use dark themes in general but some say it's comfortable on the eyes while others find it more exciting. Also, there's the category below:

> ― Why do programmers prefer dark mode? <br>
> ― Cause light attracts bugs.

*from [r/Jokes](https://www.reddit.com/r/Jokes/comments/edna99/why_do_programmers_prefer_dark_mode/)*

### CSS detection

You can enable CSS theme mode detection with CSS `prefers-color-scheme` media feature, in order to add an alternative look and feel to your website with custom [CSS rules](/things-you-should-know-about-css-anatomy/):

{% highlight css%}
@media (prefers-color-scheme: dark) {
  /* "Give yourself to the Dark Side" - Darth Vader */
}
{% endhighlight %}

### JavaScript detection

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia), the Window's `matchMedia()` method returns an object that represents the result of the specified [media query](/things-you-should-know-about-css-anatomy/) string.

The dark mode or dark theme has made its way to the main headlights for some time, so here's how to detect *the darkness* with JavaScript:

{% highlight js%}
if (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // “Fear is the path to the Dark Side" - Yoda
}
{% endhighlight %}

Although the above is a possible and working solution for switching the favicon in the HTML, I wouldn't recommend it, as now you can do that without JavaScript at all.

## How to switch the SVG favicon when in Dark Mode

First, add the SVG favicon to your HTML `<head>` section:

{% highlight html%}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
{% endhighlight %}

Regarding the SVG `favicon.svg`'s inner content, below is a rough example of an SVG rectangle with rounded corners, which has a different color, depending on the active theme. The detection is made using the above CSS `prefers-color-scheme` media feature.

{% highlight html%}
<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect {
      fill: green;
    }
    @media (prefers-color-scheme: dark) {
      rect {
        fill: red;
      }
    }
  </style>
  <rect width="50" height="50" rx="5"/>
</svg>
{% endhighlight %}

## Browser support and fallbacks

Considering the current [browser support for the SVG favicon](https://caniuse.com/#feat=link-icon-svg), a fallback is required. In this case, we serve the PNG format when the browser fails to accept SVG as a favicon.

> If the user agent tries to use an icon but that icon is determined, upon closer examination, to in fact be inappropriate (e.g. because it uses an unsupported format), then the user agent must try the next-most-appropriate icon as determined by the attributes.

*from [WHATWG](https://html.spec.whatwg.org/multipage/links.html#rel-icon) docs*

The common approach when it comes to older browsers that support neither the PNG favicon format is to keep a `favicon.ico` file in the root. Careful not to `<link>` to it within the `<head>` section at all because doing that will result in browsers *picking* the `favicon.ico` as the default.

{% highlight html%}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon alternate" href="/favicon.png" type="image/png">
<!-- favicon.ico in the root -->
{% endhighlight %}

With that being said, after testing this in all the existing modern browsers, here is the order the browsers will look for the favicon, with the code above:

1. SVG (hopefully!)
2. PNG (no worries, this is good too!)
3. ICO (oh, here we go again!)

Yes, lots of browsers, because we have to love them all!

![Modern browsers icons](/dist/uploads/2020/02/modern-browsers-icons.png)

## Google SERP and favicons

Browsers began to accept SVG favicons and I'm pretty sure we'll all implement that eventually using the CSS `prefers-color-scheme` media feature. I mean I just did, while writing this article.

The latest Google SERP design, with favicons, available for only a couple of days, raised some questions in my head. Their documentation on defining a favicon in search results states they support any valid favicon format, including SVG.

Hypothetically, if Google will ever get back to displaying favicons again in their SERP, which SVG favicon would they pick for their SERP?

- Will they pick the SVG format to show in search results too, or they will fall back to PNG or ICO?
- If they'll show SVG in the SERP, which *side* they'd choose? If your answer is the *light* side, that wouldn't be that accurate because it might be considered a dark pattern. I wrote some lines on this scenario below in this article.
- If they'll choose to fallback to PNG or ICO, knowing that [Chrome supports SVG favicons](https://www.chromestatus.com/feature/5180316371124224), will not be a good idea either.

### Failed SERP redesign

Google made a release with the favicons design within the search engine results pages and then, after the amount of feedback received, they reverted the change.

> Last week we updated the look of Search on desktop to mirror what’s been on mobile for months. We’ve heard your feedback about the update. We always want to make Search better, so we’re going to experiment with new placements for favicons.

*via [@searchliaison on Twitter](https://twitter.com/searchliaison/status/1220768238490939394)*

### Dark pattern design scenario

A dark pattern is a user interface carefully crafted to trick or mislead users into doing things they might not otherwise do.

I might push things way too far away with this scenario I mentioned above, maybe it's just me, but here's a thought that popped out in my head, considering the increasing browsers support for SVG favicon customization using CSS `prefers-color-scheme`:

1. There are chances that the users to see an appealing or familiar favicon in the Google SERP. This usually impacts the CTR (Click-through rate).

2. When they click on the SERP result and arrive at the actual web page, there is also a chance for the users, this time, to see a slightly different favicon in the browser tab.

3. That's due to the possibility of the current web page to contain an implementation of the SVG favicon using the `prefers-color-scheme` CSS media feature.

This can lead to an initial confusion, depending on the level of the current SVG favicon customization. Because besides changing colors you can manipulate all sort of things when it comes to the SVG overall appearance: show/hide `paths`, sizes, modify `stoke`'s, etc, therefore you have the ability to serve a totally different SVG favicon once the user enters a page from the SERP.

As I said, maybe it’s just me, and maybe there are too many `if`s above!

## Read more

Anyways, getting back to the track, you might want to read more on SVG, favicons and CSS media features:

- [Favicon - Wikipedia](https://en.wikipedia.org/wiki/Favicon)
- [`prefers-color-scheme` in SVG favicons for dark mode icons](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/)
- [prefers-color-scheme](https://web.dev/prefers-color-scheme/)
- [SVG & media queries](https://jakearchibald.com/2016/svg-media-queries/)