---
author: Red
comments: true
date: 2014-04-07 08:00
layout: post
title: Gamespot's loading hearts
description: Lots of spinners and loaders in the wild, but you may like this loading hearts animation as well.
categories:
- CSS
---

"Video games ruined my life. Good thing I have extra lives." If you're a passionate gamer like me, then you've probably heard this before. On this matter, the other days I was browsing through some reviews to find out more about my latest favorite game, Dark Souls 2 which by the way, it rocks.

But, I'm not making video games reviews here. The thing is that while checking the Gamespot review, I noticed a very nice and original loader somehow inspired by the above tagline. I fall instantly in love with that animation and tried to replicate it with CSS, I just couldn't help myself. 

So, just in case you weren't already tired of spinners and loaders, here's another one.

![Gamespot's loading hearts](/dist/uploads/2014/04/gamespot-loading-hearts.jpg)

<!-- more -->

## Drawing with `box-shadow`

A while ago, drawing with CSS `box-shadow` was the buzz thing in the wild. I admit I never been a huge fan of this type of drawings and I still do but they open a lot of possibilities nevertheless.

## Steps, steps, steps
The demo uses [pseudo-elements](/before-after-pseudo-elements/) to limit the number of HTML tags and they're the ones responsible for the half-hearts progress animation. Nothing new, we already know that's possible because lately pseudo-elements do support CSS animations and transitions.

While *thinkering* with the code, the tricky part was to simulate a restart for the hearts filling animation once a cycle is finished. In order to hack this, after a couple of successfully failed attempts to get the desired effect, I found `animation-timing-function` with `steps()` as the winning solution. According to the docs, the [`steps()`](https://developer.mozilla.org/en/docs/Web/CSS/timing-function#The_steps()_class_of_timing-functions) function lets you define the number of keyframes to render in the animation timeframe.

<p data-height="268" data-theme-id="0" data-slug-hash="ugFpC" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/catalinred/pen/ugFpC'>Gamespot's loading hearts</a> by Catalin Rosu (<a href='http://codepen.io/catalinred'>@catalinred</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

## This is an experiment

This obviously would need some fine tuning and maybe Sass can help here with some loops to ease the process of `box-shadow` drawings. Please keep in mind that the above demo is a very rough and dirty experiment, and it is meant to be so. 