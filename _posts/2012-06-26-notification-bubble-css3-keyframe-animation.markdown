---
author: Red
comments: true
date: 2012-06-26 05:00:01+00:00
layout: post
slug: notification-bubble-css3-keyframe-animation
title: Notification bubble with CSS3 keyframe animation
description: In this article you'll learn how to animate a notification bubble every time its value is dynamically changed.
wordpress_id: 4764
categories:
- CSS
- JavaScript
tags:
- CSS3
- jQuery
- User experience
---

The other day, while working on a web project, I had to emphasize somehow a dynamic notification bubble. Basically, every time the notification value changes, a visual effect was needed in order to get user's attention. So I made that using CSS3 keyframe animation.

![Simple notification bubble](http://www.red-team-design.com/wp-content/uploads/2012/06/notification-bubble-animation.png)

<!-- more -->

[View demo](http://www.red-team-design.com/wp-content/uploads/2012/06/notification-bubble-css3-keyframe-animation-demo.html)


## The HTML

For this example, we'll borrow the markup structure and look from my [CSS3 dropdown menu](http://www.red-team-design.com/css3-animated-dropdown-menu).    

{% highlight html %}
<ul class="menu">
    <li><a href="">Dashboard</a></li>
    <li><a href="">Stats</a></li>
    <li>
        <a href="">
            Todo list
            <span class="bubble">9</span>
        </a>
    </li>
    <li><a href="">Settings</a></li>
</ul>
{% endhighlight %}

The focus will be on the `<span class="bubble">`, which is the notification bubble that will be animated.

## The CSS

The `.animating` class represents an CSS3 animation that uses a [bezier curve](http://cubic-bezier.com/#0,1,1,0).

{% highlight css %}
.animating{
    animation: animate 1s cubic-bezier(0,1,1,0);            
}

@keyframes animate{
    from {
       transform: scale(1);
    }
    to {
       transform: scale(1.7);
    }
}
{% endhighlight %}

## The jQuery

It's not as easy as you might think to restart an animation and Chris Coyier wrote a [good article](http://css-tricks.com/restart-css-animation/) about it.

The method I chose for this example involves using JavaScript's `setTimeout()` method. So, every time the notification value changes, the `.animating` class is removed after a second (exactly how long the proper animation lasts). 

In production, you will not need the `counterValue` variable. This is used just for our working example in order to be able to increment and decrement the notification value.

{% highlight js %}
var counterValue = parseInt($('.bubble').html()); // Get the current bubble value

function removeAnimation(){
    setTimeout(function() {
        $('.bubble').removeClass('animating')
    }, 1000);           
}

$('#decrease').on('click',function(){
    counterValue--; // decrement
    $('.bubble').html(counterValue).addClass('animating'); // animate it
    removeAnimation(); // remove CSS animating class
})

$('#increase').on('click',function(){
    counterValue++; // increment
    $('.bubble').html(counterValue).addClass('animating'); // animate it
        removeAnimation(); // remove CSS animating class 
{% endhighlight %}

## Simple, but effective

I think this is a simple and practical example on how to use a CSS3 animation to **enhance user experience**. Further, you can experiment with the bezier curve values and come up with some other cool effects.

Thanks for reading and looking forward to read your thoughts!