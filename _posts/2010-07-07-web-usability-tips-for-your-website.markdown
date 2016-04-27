---
author: Red
comments: true
date: 2010-07-07 20:12:40+00:00
layout: post
slug: web-usability-tips-for-your-website
title: 10 Web Usability tips for your website
description: A beginner's list with web usability tips for your website.
wordpress_id: 565
categories:
- Miscellaneous
tags:
- accessibility
- HTML
- usability
---

At the beginning, perhaps you were developing websites just for fun or you were just learning some new tricks, but now, when you are developing a website or a web application you can't afford to skip the usability basics rules.

In this article we'll try to remember some basic, unwritten  web usability rules.

[![Usability Tips for your website or web application](/dist/uploads/2010/07/usability-tips.png)](http://www.red-team-design.com/web-usability-tips-for-your-website)

<!-- more -->

### 1. Place the logo always in the left corner of the viewport

As drivers use to search for green traffic light to start leaving the intersection, users search the logo in the left side of the website to click on it. They are used to click on it to access the home/main page of the website. Also, as usability tests proved, the left corner of a website is the most visible content.

### 2. Add CSS states (almost) to everything


Nothing is more annoying that hovering a website menu, or a button, link etc without seeing a change. The user is searching for interactivity and if you, as web developer don't offer him that, you will lose him. Beside hover, for example a button should have also an **active state** (pressed style). This way the user will fell he's always under control.

#### CSS states example

{% highlight css %}
#button {
  background: #eaeaea;
}

#button:hover {
  background: #9c9c9c;
}

#button:active {
  background: #777777;
}
{% endhighlight %}


### 3. Use label's "for" attribute

When in a form, and you need to click on a checkbox input or radio input, it will always be easier to be able to check/uncheck the input by toggle-ing also on the label. Using labels for forms is also an accesibility  "golden rule". Getting back to usability rules, a common mistake is to use the label tag without it's **for** attribute. Here is a good example for using labels when inner a form:

{% highlight html %}
<input type="radio" name="options" id="id-1">
<label for="id-1">First option </label>

<input type="radio" name="options" id="id-2">
<label for="id-2">Second option </label>
{% endhighlight %}    

## 4. Breadcrumbs

Using breadcrumbs could be compared with GPS navigation, the user will know his current position inside the website, it will help him to no get lost. You want to guide him through your website and you don't want to have him annoyed by the fact he's lost - because in this case you risk to loose him, he could exit your website immediately. Get inspired by the [well known breadcrumbs patterns](http://www.smashingmagazine.com/2009/03/17/breadcrumbs-in-web-design-examples-and-best-practices-2/) around the internet.

### 5. Highlight form fields

If you are dealing with text inputs and textareas you should  use CSS focus state to specify when the user has clicked inside an input or textarea. This way user will know which form element he clicked.

### Quick CSS example

{% highlight css %}
input[type=text] {
  border: 1px solid #9c9c9c;
  background: #eaeaea;
}

input[type=text]:focus {
  border: 1px solid #323232;
  background: white;
}
{% endhighlight %}

## 6. Use HTML tags accordingly

Use heading, paragraph, bold elements in the right way, as they should be used. Take advantage of them by using heading to highlighting titles, use paragraphs to add a text section and bold to highlight words in the text section. Make your text easier to read by creating a text flow, this way the user will easier scan titles and sections.

Also keep in mind to use headings in their "normal" order: h1, h2,...etc. It's recommended again not having more then one h1 per page, usually h1 contains a very important text like main title of the page, for example could be "purchase" or "download".

## 7. Create a sitemap

A site map is a website structure representation, a link collection that helps improving user's website navigation.

## 8. Rich content footer

Every time you build a site you should keep in mind that a website should have a header, content and **footer**, in some cases the last one is missing and the website looks a bit strange...it's like "hmm...something's missing?!". Lately footers are getting richer and richer content, so **take advantage** and add information to it and do not forget to [get inspired](http://www.smashingmagazine.com/2009/06/17/informative-and-usable-footers-in-web-design/).

## 9. Think as you are the user

Also, you are an user after all, but imagine you are your own website user, try scenarios, act as you have no idea about the content of your site and try finding important links as purchase, download etc. If it's hard for you, because you already know every comma in your site, ask a friend or colleague for a feedback. Keep in mind that every opinion matters.

## 10. Read, read and....read again about usability

If you think you know enough, that means you still have a lot to learn. Usability evolves, but the main principles are staying and reading can help you improve yourself.
Here's a short book list I'd recommend to read:
	
  * Don't Make Me Think - [Steve Krug](http://www.sensible.com/)	
  * Designing Web Usability: The Practice of Simplicity - [Jakob Nielsen](http://www.useit.com)	
  * Designing Web Interfaces: Principles and Patterns for Rich Interactions - [O'Reilly](http://oreilly.com/catalog/9780596516253)