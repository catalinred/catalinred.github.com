---
author: Red
comments: true
date: 2012-05-28 05:00:45+00:00
layout: post
slug: css-parent-selector
title: Thoughts on upcoming CSS parent selector
description: Using the upcoming CSS parent selector, you won't need to rely on JavaScript to select a parent element.
wordpress_id: 4664
categories:
- CSS
tags:
- CSS4
---

I wrote a while ago about the future [CSS4 Selectors](http://www.red-team-design.com/meet-the-css4-selectors), namely about CSS Selectors Level 4 Working Draft release. It was such a good news to see that things are continuously moving on. I'm saying that because it's a long way until CSS3 will reach final recommendation phase and yet we're seeing news about the future CSS4. Isn't that cool? 

Meanwhile, I thought a little bit about the upcoming CSS parent selector. At this time, if you ask me, I think it will be the most awesome feature and definitely is at the top of my CSS wishlist.

![](http://www.red-team-design.com/wp-content/uploads/2012/05/css-parent-selector.png)

<!-- more -->

## Syntax

Ever since the CSS parent selector was brought into attention, there has been a lot of discussion regarding its syntax. Mostly disapproving the way the syntax looks in currently Working Draft:    

{% highlight css %}   
$E > F {
    background: #fff;
}
{% endhighlight %}     


_Select an E element parent of an F element._

However, along with the latest [Editor's Draft](http://dev.w3.org/csswg/selectors4/#subject), it seems that things improved a bit:

{% highlight css %}
E! > F {
    background: #fff;
}
{% endhighlight %}

_Again, the newest syntax that helps determining the subject of a selector._

Well, this will probably not be the last edit to the syntax so I bet we'll witness more changes in the future.

### CSS parent selector in practice

This article is not about the syntax itself, it's more about how would you use the CSS parent selector in your daily work? Also, how much can this help you writing **better and smarter lines of CSS**? 

These are the questions I'm asking myself lately about this matter so I thought about some example scenarios:

#### Dropdown menu

For [CSS dropdown menus](http://www.red-team-design.com/css3-animated-dropdown-menu), we would be able to style the `li` accordingly when it contains a sub menu.

![](http://www.red-team-design.com/wp-content/uploads/2012/05/css-dropdown.png)

In this case, for the Categories section, here's how we could add an arrow to the right for the parent list element:
    
{% highlight css %}
li! > ul {
  background: url(arrow.png) no-repeat right center;
  padding: 0 20px 0 0;
}
{% endhighlight %}

#### Interactive form

As I mentioned in my previous [CSS4 selectors](http://www.red-team-design.com/meet-the-css4-selectors) article, highlighting a form when an inner input is focused could be a practical example for the CSS parent selector.

![Interactive form](http://www.red-team-design.com/wp-content/uploads/2011/12/css4-selectors-fieldset.png)


{% highlight css %}
fieldset! > input:focus {
  background: #f3eab1; /* light yellow */
}
{% endhighlight %}

#### New clearing method

With this new powerful selector, I think we could have all the ingredients to use a new [clearing floats](http://www.red-team-design.com/clearing-floats-nowadays) method based on already existing ones.

![Clearing floats](http://www.red-team-design.com/wp-content/uploads/2011/08/clearing-floats.png)

Thinking there's absolutely no situation when you wouldn't want to clear the floats within a wrapper, if having the markup below:
    
{% highlight html %}
<div>
  <div class="float-left"></div>
  <div class="float-right"></div>
</div>
{% endhighlight %}

and a CSS framework that contains:


{% highlight css %}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
{% endhighlight %}

... this could be a future clearing solution:

{% highlight css %}
div:before! > .float-left, div:after! > .float-left,
div:before! > .float-right, div:after! > .float-right {
  content:"";
  display:table;
}

div:after! > .float-left,
div:after! > .float-right {
  clear:both;
}

div! > .float-left,
div! > .float-right {
  zoom:1;
}
{% endhighlight %}

If it would be to translate the above: if a `div` contains a `.float-left` or `.float-right` then clear the floats properly.

## CSS parent selector will rock

I'm pretty sure that, once it will be supported, a lot of clever techniques will appear in the wild. The above situations are just some ideas I had in mind and I wanted to share with you. 

The cool thing is that we won't need to rely on JavaScript to select a parent element and this opens way to new opportunities.