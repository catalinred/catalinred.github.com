---
author: Red
comments: false
date: 2019-12-16 10:00:00
layout: post
slug: css-resize-none-is-bad-for-ux
title: CSS resize none on textarea is bad for UX
description: Some people decide to remove the textarea resize handle using the CSS resize none declaration and that is a bad thing for UX.
categories:
- HTML
- UX
- CSS
---

For whatever reason, people seem to be passionate about removing the `textarea` resize handle using the CSS `resize: none` declaration. Also, GitHub says there are [more than 3 million code results](https://github.com/search?q=%22resize%3Anone%22+textarea&type=Code) in the wild for `textarea` with CSS `resize:none` applied.

![A resizable textarea element](/dist/uploads/2019/12/css-resize-none-textarea-bad-ux.png)

<!-- more -->

[I'm on Stack Overflow](https://stackoverflow.com/users/596644/red) and feel kind of embarrassed about building reputation on recommending other people in the past to use CSS `resize: none` on `textarea`s.

I'm not a Stack Overflow power user but back in 2011, I did post an [answer on Stack Overflow](https://stackoverflow.com/questions/6340545/how-to-remove-dots-present-at-the-right-bottom-corner-of-the-textarea-html/6340594#6340594) on removing the *bottom-right corner dots* in a `textarea`. Also, the thing is that I still keep getting Stack Overflow reputation on that answer.

![Stack Overflow reputation on CSS resize none](/dist/uploads/2019/12/stackoverflow-reputation-css-resize-none.png)

Never start an answer with *just* and never recommend other people to use CSS `resize: none` in their stylesheets. You can do better than me!

## CSS `resize:none` on `textarea` is bad UX

I think using the CSS `resize:none` declaration on a `textarea` is a bad decision when it comes to the user experience (UX) overall.

Very often, the `textarea` is limited to a number of rows and columns or it has fixed `width` and `height` defined via CSS. Based solely on my own experience, while answering to forums, writing contact forms on websites, filling live chat *popups* or even private messaging on Twitter this is very frustrating.

Sometimes you need to type a long reply that consists of many paragraphs and wrapping that text within a tiny textarea box makes it hard to understand and to follow as you type. There were many times when I had to write that text within Notepad++ for example and then just paste the whole reply in that small textarea. I admit I also opened the DevTools to override the `resize: none` declaration but that's not really a productive way to do things.

## The CSS resize

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/resize), the resize CSS property sets whether an element is resizable, and if so, in which directions. Also, it's important to keep in mind that the `resize` property does not apply to the inline elements and block elements for which the overflow property is set to `visible`.

The CSS `resize` property is ofter applied to `textarea` in order to disable its resizability and this is what this article is about. I felt like an inner contradiction considering the amount of reputation I keep getting on my above Stack Overflow answer while finding on my own this bad UX. Besides that, it looks like the number of GitHub code results on this matter is growing, from 2 millions in 2017 as found by [@humphd](https://twitter.com/humphd/status/911287694550028288) to more than 3 millions two years later.

## Auto height `textarea`s

A common scenario is to have an auto-height `textarea` element which basically expands as you type new rows. On this matter, Chris Ferdinandi wrote a good article on how to [expand a textarea as the user types](https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/).

But besides the above, I've seen lots of JS hacks that involve using the CSS `resize: none` declaration. There are alternatives to simulate the 'textarea' behavior and a popular one is using the classic `div` with the boolean `contentEditable` attribute value set to `true`.

{% highlight html %}
  <div contentEditable="true"></div>
{% endhighlight %}

Here's a more detailed and hopefully accessible example using ARIA roles on Twitter's mobile version:

![DevTools ARIA roles on mobile Twitter](/dist/uploads/2019/12/mobile-twitter-aria-roles.png)

## Fancy live chats a.k.a `resize: none` everywhere

Because it's a fancy new live chat widget and it's a really high competition out there, everyone wants the most visually pleasing, catchy and cool box where to send a message from.

While most live chat apps use the classic HTML `textarea` element, the implementations mostly rely on having listeners and adjust the CSS `height` style based on the text contained within the box, with `resize: none` declaration remaining, unfortunately, a constant presence in the CSS.

![Help Scout uses CSS resize none for the chat widget textarea](/dist/uploads/2019/12/helpscout-textarea-resize-none.png)

So, why `resize: none` is so popular in this case? To answer myself here, maybe if I'd have to write code for a popular live chat app, I wouldn't want a resize handle to ruin my beautiful component design freshly imported from Figma. But maybe I'd stick at least with `resize: vertical` only.

## Conclusion

You must really hate your users if `textarea {resize: none}` is in your stylesheets. CSS resize none is bad for UX and you already know it:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Websites (<a href="https://twitter.com/UserVoice?ref_src=twsrc%5Etfw">@Uservoice</a>) that add resize: none; to their textarea&#39;s. I don&#39;t want to deal with excessive word wrapping, getting 4 words per line on my 24 inch monitor. Why are you so worried about me doing that, that you add this CSS rule? <a href="https://twitter.com/SuckyUX1?ref_src=twsrc%5Etfw">@SuckyUX1</a></p>&mdash; Richard M Boos (@richboos) <a href="https://twitter.com/richboos/status/1113487847150039041?ref_src=twsrc%5Etfw">April 3, 2019</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/AngelListCare?ref_src=twsrc%5Etfw">@AngelListCare</a> can you remove resize: none and increase default height on textarea in /inbound messages when you are talking to candidates as a startup? It&#39;s TOO SMALL.</p>&mdash; Mev-Rael (@Mevrael) <a href="https://twitter.com/Mevrael/status/1004284049320546304?ref_src=twsrc%5Etfw">June 6, 2018</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/css?src=hash&amp;ref_src=twsrc%5Etfw">#css</a> There&#39;s a website I use often that, for text boxes, has &quot;resize: none&quot; enabled for the TEXTAREA. Since the text box is really small, is there a way disable this on the domain entirely instead of doing it page by page? <a href="https://t.co/fh6ITQqdFp">https://t.co/fh6ITQqdFp</a></p>&mdash; Dzmitry Radkevich (@gradar) <a href="https://twitter.com/gradar/status/996791993794691073?ref_src=twsrc%5Etfw">May 16, 2018</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">next time I see a website with &quot;resize: none&quot; in their CSS for a textarea I expect a two page essay what the thought process behind it was</p>&mdash; Alexander Prinzhorn (@Prinzhorn) <a href="https://twitter.com/Prinzhorn/status/966954666721505280?ref_src=twsrc%5Etfw">February 23, 2018</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Dear <a href="https://twitter.com/PeoplePerHour?ref_src=twsrc%5Etfw">@PeoplePerHour</a>, if you&#39;re going to give me a really small textarea where I&#39;m likely going to want to write a few paragraphs, at least remove the `resize:none` CSS so I can make it bigger myself. Cheers. 🤔 <a href="https://t.co/iva97ezXQt">pic.twitter.com/iva97ezXQt</a></p>&mdash; Luke Harrison (@WebDevLuke) <a href="https://twitter.com/WebDevLuke/status/934917818881052672?ref_src=twsrc%5Etfw">November 26, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Putting `resize: none;` on a &lt;textarea&gt; is criminal behaviour. And yet &quot;Showing 1,960,901 available code results&quot; <a href="https://t.co/kCXhfz7MzM">https://t.co/kCXhfz7MzM</a></p>&mdash; David Humphrey (@humphd) <a href="https://twitter.com/humphd/status/911287694550028288?ref_src=twsrc%5Etfw">September 22, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">you can explain to the web department that a textarea should never have a &quot;resize:none;&quot; property :)</p>&mdash; Louis Hoebregts (@Mamboleoo) <a href="https://twitter.com/Mamboleoo/status/741231266692014080?ref_src=twsrc%5Etfw">June 10, 2016</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>