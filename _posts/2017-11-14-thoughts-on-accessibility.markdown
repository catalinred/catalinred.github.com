---
author: Red
comments: true
date: 2017-11-14 10:10:00
layout: post
slug: thoughts-on-accessibility
title: Thoughts on accessibility
description: Accessibility is hard and sometimes we make it hard. We tend to skip native in favor of beautiful and non-semantic stuff.
categories:
- Miscellaneous
- A11Y
---

As a person who mainly works on small teams, I always felt guilty of making accessibility a lower priority. The reasons were multiple and it's hard to blame someone else other than me.

Over time, I read lots of good articles on accessibility but couple of months ago, I stumbled upon this incredible [article by Tuukka Ojala](https://www.vincit.fi/en/blog/software-development-450-words-per-minute/). Both incredible and inspiring, that article remained stuck in my head and hopefully will change the way I write HTML and not only.

![Accessibility](/dist/uploads/2017/11/a11y.png)

<!-- more -->

## A11Y is hard

Accessibility is hard because we make it hard, we tend to skip native in favor of beautiful and non-semantic stuff. 

Accessibility is hard because sometimes it can be quite hard to convince colleagues at work or clients about its benefits. You can't just dive in into the accessibility world without having colleagues or management's validation, because the general feeling  is that "something more important" could be implemented instead.

It's a clicke, but people seek and need validation.

Ian Devlin wrote an interesting and successful story about [accessibility at Trivago](http://tech.trivago.com/2017/09/26/accessibility-at-trivago/): how they increased awareness, tackle internal challenges and manage to push this further. 

## On becoming a better developer

A while ago, I wrote some [thoughts on becoming a better developer](https://catalin.red/becoming-a-better-developer/) and those things still apply. But when it comes to accessibility, I have to be a bit more specific:

- I installed the [NVDA](https://www.nvaccess.org/), which is a free screen reader that works on my Windows machine. I admit I was deeply impressed by thinking about how people with disabilities navigate the Web with a screen reader.

- I made a [Chrome extension](https://chrome.google.com/webstore/detail/awrstudyr/mbkehkfjhncahcaggkncdaacfnikmoid) that does, among other things, a quick accessibility check/audit. The extension is free and it uses Karl Groves's Tenon API for gathering accessibility issues for a page.

- I try to make sure that every piece of HTML code I write is semantically correct. I even searched for [A11Y issues within 8 million pages](https://css-tricks.com/random-interesting-facts-htmlsvg-usage/#article-header-id-22), for an article I wrote for CSS-Tricks a while back.

- I like to dig into frameworks like [Bootstrap](http://getbootstrap.com/docs/4.0/getting-started/accessibility/) to try tp understand the efforts that the contributors are putting into making all the dynamic components to be fully accessible.

- I always check good resources on accessibility when in doubt, my favorites:
  - [https://inclusive-components.design/](https://inclusive-components.design/)
  - [http://a11yproject.com/](http://a11yproject.com/)

- I don't hesitate to play with and integrate, within my projects, cool CLI tools like Addy Osmani' [A11Y CLI]( https://addyosmani.com/a11y/) or [Pa11y](https://github.com/pa11y/pa11y).

- I try to stay up-to-date. As I was writing this article down, I've found that Heydon Pickering started working on a new and comprehensive [list of inclusive design considerations](https://github.com/Heydon/inclusive-design-checklist).

- Last but not least, I follow and try to learn as much as I can from some smart people on Twitter, people that give a damn about accessibility.

---

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.
>
> *<span title="W3C Director and inventor of the World Wide Web">Tim Berners-Lee, "Web Developer"</span>*