---
author: Red
comments: true
date: 2011-06-20 06:30:16+00:00
layout: post
slug: sexy-css3-menu
title: Sexy CSS3 menu
wordpress_id: 2998
categories:
- CSS
tags:
- CSS
- CSS3
- usability
---

One of the most common elements when talking about a website or an application design is definitely the menu navigation. No matter if vertical or horizontal, simple or complex, a menu is essential and it has to look that way.

In today's article, you'll learn how to create a good looking menu using some CSS3 _magic_.

![](http://www.red-team-design.com/wp-content/uploads/2011/06/sexy-css3-menu.png)

<!-- more -->



[View demo](http://www.red-team-design.com/wp-content/uploads/2011/06/css3-menu.html)





### The idea


If you are a web developer you may have heard of tools called CSS pre-processors. [Less](http://lesscss.org/) is probably the most well known CSS preprocessor, but that is another story.

While visiting LESS's site, I noticed their download button, which is an image, and I thought to myself: I can do it using CSS only.

![](http://www.red-team-design.com/wp-content/uploads/2011/06/less-download-button.jpg)
_LESS download button - at this time_



### The HTML




    
    
    <nav>
    	<ul>
    		<li><a href="#"><span>Home</span></a></li>
    		<li><a href="#"><span>Categories</span></a></li>
    		<li><a href="#"><span>About</span></a></li>				
    		<li><a href="#"><span>Portfolio</span></a></li>
    		<li><a href="#"><span>Contact</span></a></li>
    	</ul>
    </nav>
    



Pretty [clean](/useful-css-snippets-to-save-your-time), except for the `span` element. You'll see further why we need that `span`.

![](http://www.red-team-design.com/wp-content/uploads/2011/06/initial-menu-rendering.png)



### The CSS



The demo example contains also a header and a [logo](/html5-logo-using-css3) (so, extra styles), but I'll list here only the styles used for this menu.



#### Removing the default list styles



    
    
    nav ul
    {
    	padding: 0;
    	margin: 0;
    	list-style: none;  	
    }
    
    nav li
    {
    	float: left;
    }
    





#### Style the anchor



    
    
    nav a
    {
        float: left;
        color: #eee;
        margin: 0 5px;
        padding: 3px;
        text-decoration: none;
        border: 1px solid #831608;
        font: bold 14px Arial, Helvetica; 	
        background-color: #831608;
        background-image: -moz-linear-gradient(#bb413b, #831608);
        background-image: -webkit-gradient(linear, left top, left bottom, from(#bb413b), to(#831608));    
        background-image: -webkit-linear-gradient(#bb413b, #831608);
        background-image: -o-linear-gradient(#bb413b, #831608);
        background-image: -ms-linear-gradient(#bb413b, #831608);
        background-image: linear-gradient(#bb413b, #831608);
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        text-shadow: 0 -1px 0 rgba(0,0,0,.8);    
        -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3), 0 3px 0 rgba(0, 0, 0, 0.7), 0 2px 2px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.5) inset;
        -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3), 0 3px 0 rgba(0, 0, 0, 0.7), 0 2px 2px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.5) inset;
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3), 0 3px 0 rgba(0, 0, 0, 0.7), 0 2px 2px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.5) inset;	
    }
    
    nav a:hover
    {
        background-color: #bb413b;
        background-image: -moz-linear-gradient(#831608, #bb413b);
        background-image: -webkit-gradient(linear, left top, left bottom, from(#831608), to(#bb413b));      
        background-image: -webkit-linear-gradient(#831608, #bb413b);
        background-image: -o-linear-gradient(#831608, #bb413b);
        background-image: -ms-linear-gradient(#831608, #bb413b);
        background-image: linear-gradient(#831608, #bb413b);
    }
    
    nav a:active
    {
        background: #bb413b;
        position: relative;
        top: 2px;    
        -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.7) inset;
        -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.7) inset;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.7) inset; 
    }
    



![](http://www.red-team-design.com/wp-content/uploads/2011/06/css3-menu-anchor.png)
_Multiple CSS3 properties were used to create the above._



#### Style the span element




    
    
    nav span
    {
        border: 1px dashed #eba1a3;
        display: inline-block;
        padding: 4px 15px;
        cursor: pointer;	
        background-color: #bb413b;
        background-image: -moz-linear-gradient(#d4463c, #aa2618);
        background-image: -webkit-gradient(linear, left top, left bottom, from(#d4463c), to(#aa2618));      
        background-image: -webkit-linear-gradient(#d4463c, #aa2618);
        background-image: -o-linear-gradient(#d4463c, #aa2618);
        background-image: -ms-linear-gradient(#d4463c, #aa2618);
        background-image: linear-gradient(#d4463c, #aa2618);
    }
    
    nav a:hover span
    {	
        background-color: #bb413b;
        background-image: -moz-linear-gradient(#aa2618, #d4463c);
        background-image: -webkit-gradient(linear, left top, left bottom, from(#aa2618), to(#d4463c));      
        background-image: -webkit-linear-gradient(#aa2618, #d4463c);
        background-image: -o-linear-gradient(#aa2618, #d4463c);
        background-image: -ms-linear-gradient(#aa2618, #d4463c);
        background-image: linear-gradient(#aa2618, #d4463c);
    }
    



![](http://www.red-team-design.com/wp-content/uploads/2011/06/css3-menu-span.png)



[View demo](http://www.red-team-design.com/wp-content/uploads/2011/06/css3-menu.html)





#### Browser support


If above you have seen how the menu looks in modern browsers, here's how the menu look in [older browsers](http://www.red-team-design.com/how-to-solve-common-ie-bugs):

![](http://www.red-team-design.com/wp-content/uploads/2011/06/css3-menu-fallback.png)
_Fallback styles for older browsers_



#### Advantages





	
  * 
**Scalability**  
You can simply adjust its size by updating the `anchor`'s font-size:
    
    font: bold <mark>14px</mark> Arial, Helvetica;
    


	
  * **No images**, so there are less HTTP image requests, also easy to maintain and update.


  * You could easily transform this menu into a nice [dropdown menu](http://www.red-team-design.com/css3-dropdown-menu).





### Conclusion


The menu we created using this tutorial isn't a _Sci-Fi_ one or a _super mega_ complex one. The main purpose is to see how CSS3 can help us achieve interesting effects without needing images anymore.

I hope you enjoyed this tutorial, thanks for reading it!


