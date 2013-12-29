---
author: Red
comments: true
date: 2011-10-09 22:00:14+00:00
layout: post
slug: cool-css3-navigation-menu
title: Cool CSS3 navigation menu
wordpress_id: 3524
categories:
- CSS
tags:
- CSS
- CSS3
---

We all try to be very creative when it comes to designing a website navigation. It's a sure thing: a good looking navigation menu can really enhance your website.

I wrote before about how to create [different](/css3-dropdown-menu) [menus](/sexy-css3-menu) and today you'll learn how to create another stylish CSS3 navigation menu.

![](http://www.red-team-design.com/wp-content/uploads/2011/10/cool-navigation-menu.jpg)

<!-- more -->




[View demo](/wp-content/uploads/2011/10/cool-css3-navigation-menu-demo.html)






### The HTML



The markup could not be simpler and includes also the new HTML5 `nav` element.


    
    
    <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Categories</a></li>
            <li><a href="">About</a></li>				
            <li><a href="">Portfolio</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
    





### The CSS



The CSS lines below are [easy to understand](/css-shorthand-tips) and I think there isn't too much to explain:


    
    
    nav  {
    	display: block;
    	width: 100%;
    	overflow: hidden;
    }
    
    nav ul {
    	margin: 80px 0 20px 0;
    	padding: .7em;
    	float: left;
    	list-style: none;
    	background: #444;
    	background: rgba(0,0,0,.2);
    	-moz-border-radius: .5em;
    	-webkit-border-radius: .5em;
    	border-radius: .5em;    
    	-moz-box-shadow: 0 1px 0 rgba(255,255,255,.2), 0 2px 1px rgba(0,0,0,.8) inset;
    	-webkit-box-shadow: 0 1px 0 rgba(255,255,255,.2), 0 2px 1px rgba(0,0,0,.8) inset;
    	box-shadow: 0 1px 0 rgba(255,255,255,.2), 0 2px 1px rgba(0,0,0,.8) inset; 
    }
    
    nav li {
    	float:left;
    }
    
    nav a {
    	float:left;
    	padding: .8em 1.5em;
    	text-decoration: none;
    	color: #555;
    	text-shadow: 0 1px 0 rgba(255,255,255,.5);
    	font: bold 1.1em/1 'trebuchet MS', Arial, Helvetica;
    	letter-spacing: 1px;
    	text-transform: uppercase;
    	border-width: 1px;
    	border-style: solid;
    	border-color: #fff #ccc #999 #eee;
    	background: #c1c1c1;
    	background: -moz-linear-gradient(#f5f5f5, #c1c1c1);
    	background: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#c1c1c1));
    	background: -webkit-linear-gradient(#f5f5f5, #c1c1c1);
    	background: -o-linear-gradient(#f5f5f5, #c1c1c1);
    	background: -ms-linear-gradient(#f5f5f5, #c1c1c1);
    	background: linear-gradient(#f5f5f5, #c1c1c1);            
     }
     
    nav a:hover, nav a:focus {
    	outline: 0;
    	color: #fff;
    	text-shadow: 0 1px 0 rgba(0,0,0,.2);
    	background: #fac754;
    	background: -moz-linear-gradient(#fac754, #f8ac00);
    	background: -webkit-gradient(linear, left top, left bottom, from(#fac754), to(#f8ac00));
    	background: -webkit-linear-gradient(#fac754, #f8ac00);
    	background: -o-linear-gradient(#fac754, #f8ac00);
    	background: -ms-linear-gradient(#fac754, #f8ac00);
    	background: linear-gradient(#fac754, #f8ac00);
    }
    
    nav a:active {
    	-moz-box-shadow: 0 0 2px 2px rgba(0,0,0,.3) inset;
    	-webkit-box-shadow: 0 0 2px 2px rgba(0,0,0,.3) inset;
    	box-shadow: 0 0 2px 2px rgba(0,0,0,.3) inset;
    }
     
    nav li:first-child a {
    	border-left: 0;
    	-moz-border-radius: 4px 0 0 4px;
    	-webkit-border-radius: 4px 0 0 4px;
    	border-radius: 4px 0 0 4px;            
    }
    
    nav li:last-child a {
    	border-right: 0;
    	-moz-border-radius: 0 4px 4px 0;
    	-webkit-border-radius: 0 4px 4px 0;
    	border-radius: 0 4px 4px 0;            
    }
    





### The result



[![](http://www.red-team-design.com/wp-content/uploads/2011/10/cool-navigation-menu-result.jpg)](/wp-content/uploads/2011/10/cool-css3-navigation-menu-demo.html)

_[Gradients](/css-gradients-quick-tutorial) and [inset shadows](/how-to-create-slick-effects-with-css3-box-shadow) were used for the `:hover` and `:active` states._




[View demo](/wp-content/uploads/2011/10/cool-css3-navigation-menu-demo.html)






### Browser support



I like to make things work across all browsers, degrading gracefully:

![](http://www.red-team-design.com/wp-content/uploads/2011/10/cool-navigation-menu-ie.jpg)
_[IE trident](/how-to-solve-common-ie-bugs) preview_



### We’re done!



You can use this anytime as a navigation menu for your website or web application. I hope you like the final result and feel free to share your thoughts about it!

