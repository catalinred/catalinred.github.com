---
author: Red
comments: true
date: 2011-04-06 22:46:31+00:00
layout: post
slug: css-ribbons
title: CSS ribbons
wordpress_id: 2522
categories:
- CSS
tags:
- CSS
- CSS3
---

You may already know what a ribbon is and how it looks. Nowadays, the CSS ribbon effect is a web design trend. It's cool and it can help you by adding a 3D effect to your design. 

So, in this article you'll learn how to create CSS ribbons, without any images and minimal HTML markup.

![](http://www.red-team-design.com/wp-content/uploads/2011/04/css-ribbons.png)

<!-- more -->



### Why would I need CSS ribbons?



As a matter of fact, you could just use images for your ribbons. But, using CSS to create the ribbons has the following advantages:




	
  * No images, no extra HTTP requests

        
  * Flexibility

        
  * Easy to update: color, size, etc

        
  * Spice up the ribbons with CSS3 and you'll love them ;)





[View demo](http://www.red-team-design.com/wp-content/uploads/2011/04/css-ribbons-demo.html)





### CSS ribbon structure


Initially, let's say you have a wrapper with `padding: 20px`. What is about with this `padding`? Usually, you need a spacing for your box and you'll see below why this matters when it's about ribbons.

![](http://www.red-team-design.com/wp-content/uploads/2011/04/wrapper.png)

Now let's add the element that will become our ribbon. For that, you will need just one element, like a `h1` for example:

![](http://www.red-team-design.com/wp-content/uploads/2011/04/heading.png)
_H1 element with some styling_

Remember the above `20px` padding value? In order to build your ribbon, you need the heading to overcome the box sides:


    
    
    h1
    {
      margin: 0 -30px; /* top:0, right:-30px, bottom:0, left:-30px */
    }
    



![](http://www.red-team-design.com/wp-content/uploads/2011/04/heading-expanded.png)

Further, to add the corners, we'll use [CSS triangles](http://www.red-team-design.com/css3-dropdown-menu) made with  pseudo-elements.


    
    
        h1{
            text-align: center;
            position: relative;
            color: #fff;    
            margin: 0 -30px 30px -30px;
            padding: 10px 0; 
            text-shadow: 0 1px rgba(0,0,0,.8);
            background: #5c5c5c;
            background-image: -moz-linear-gradient(rgba(255,255,255,.3), rgba(255,255,255,0));
            background-image: -webkit-linear-gradient(rgba(255,255,255,.3), rgba(255,255,255,0));
            background-image: -o-linear-gradient(rgba(255,255,255,.3), rgba(255,255,255,0));
            background-image: -ms-linear-gradient(rgba(255,255,255,.3), rgba(255,255,255,0));
            background-image:  linear-gradient(rgba(255,255,255,.3), rgba(255,255,255,0));
            -moz-box-shadow: 0 2px 0 rgba(0,0,0,.3);
            -webkit-box-shadow: 0 2px 0 rgba(0,0,0,.3);
            box-shadow: 0 2px 0 rgba(0,0,0,.3);
        }
        
        h1:before, h1:after
        {
            content: '';
            position: absolute;
            border-style: solid;
            border-color: transparent;
            bottom: -10px;
        }
        
        h1:before
        {
            border-width: 0 10px 10px 0;
            border-right-color: #222;
            left: 0;
        }
        
        h1:after
        {
            border-width: 0 0 10px 10px;
            border-left-color: #222;
            right: 0;
        }
    



Using the above CSS, you will achieve something like this:

![](http://www.red-team-design.com/wp-content/uploads/2011/04/ribbon-result.png)

Check aslo the demo page to see some ribbons I made:



[View demo](http://www.red-team-design.com/wp-content/uploads/2011/04/css-ribbons-demo.html)





### Browser support


IE6 and IE7 does not support pseudo-elements but, if you need them also, just replace the `:before` and `:after` with HTML elements like `span`. That should do it for you in this case!

IE8, IE9, IE10, Firefox, Opera, Chrome and Safari render well the ribbon. There are some minor differences, but just because of incomplete or missing CSS3 support. **Guess who**!?



### Thanks for reading this article!


If you enjoyed this article, tweet it and/or [follow me](http://twitter.com/catalinred)!

