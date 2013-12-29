---
author: Red
comments: true
date: 2011-03-17 22:28:13+00:00
layout: post
slug: css3-dropdown-menu
title: CSS3 dropdown menu
wordpress_id: 1947
categories:
- CSS
tags:
- CSS
- CSS3
- JavaScript
- usability
---

While this is still an up-to-date version, I just wanted to let you know I made also an improved and [animated version](http://www.red-team-design.com/css3-animated-dropdown-menu) of this CSS3 menu.



Today you'll learn how to create your own CSS3 dropdown menu, without any additional Javascript code. There are no images used and, as usual, minimal HTML markup. Let's see how is made:

![](http://www.red-team-design.com/wp-content/uploads/2011/03/css-menu.png)
<!-- more -->

If you're in a hurry, here's the result:



[View demo](http://www.red-team-design.com/wp-content/uploads/2011/03/css3-dropdown-menu-demo.html)





### HTML structure



As you can see in the following lines, the HTML structure does not contain more than we need, it's a minimal one and easy to understand.


    
    
    <ul id="menu">
    	<li><a href="#">Home</a></li>
    	<li>
    		<a href="#">Categories</a>
    		<ul>
    			<li><a href="#">CSS</a></li>
    			<li><a href="#">Graphic design</a></li>
    			<li><a href="#">Development tools</a></li>
    			<li><a href="#">Web design</a></li>
    		</ul>
    	</li>
    	<li><a href="#">Work</a></li>
    	<li><a href="#">About</a></li>
    	<li><a href="#">Contact</a></li>
    </ul>
    



One more thing, also very important, this is [semantic HTML](http://en.wikipedia.org/wiki/Semantic_HTML). It's a logical structure and has a correct meaning, even if styling is totally missing at this point:

![](http://www.red-team-design.com/wp-content/uploads/2011/03/html-semantic-menu-structure.png)
_Clean and accessible HTML structure_

In my example, the "Categories" section is the only one who contains a sub-list, but you can easy add sub-lists to any item.



### The CSS



    
    
    /* Main */
    #menu{
    	width: 100%;
    	margin: 0;
    	padding: 10px 0 0 0;
    	list-style: none;  
    	background: #111;
    	background: -moz-linear-gradient(#444, #111); 
            background: -webkit-gradient(linear,left bottom,left top,color-stop(0, #111),color-stop(1, #444));	
    	background: -webkit-linear-gradient(#444, #111);	
    	background: -o-linear-gradient(#444, #111);
    	background: -ms-linear-gradient(#444, #111);
    	background: linear-gradient(#444, #111);
    	-moz-border-radius: 50px;
    	border-radius: 50px;
    	-moz-box-shadow: 0 2px 1px #9c9c9c;
    	-webkit-box-shadow: 0 2px 1px #9c9c9c;
    	box-shadow: 0 2px 1px #9c9c9c;
    }
    
    #menu li{
    	float: left;
    	padding: 0 0 10px 0;
    	position: relative;
    }
    
    #menu a{
    	float: left;
    	height: 25px;
    	padding: 0 25px;
    	color: #999;
    	text-transform: uppercase;
    	font: bold 12px/25px Arial, Helvetica;
    	text-decoration: none;
    	text-shadow: 0 1px 0 #000;
    }
    
    #menu li:hover > a{
    	color: #fafafa;
    }
    
    *html #menu li a:hover{ /* IE6 */
    	color: #fafafa;
    }
    
    #menu li:hover > ul{
    	display: block;
    }
    
    /* Sub-menu */
    
    #menu ul{
        list-style: none;
        margin: 0;
        padding: 0;    
        display: none;
        position: absolute;
        top: 35px;
        left: 0;
        z-index: 99999;    
        background: #444;
        background: -moz-linear-gradient(#444, #111);
        background: -webkit-gradient(linear,left bottom,left top,color-stop(0, #111),color-stop(1, #444));
        background: -webkit-linear-gradient(#444, #111);    
        background: -o-linear-gradient(#444, #111);	
        background: -ms-linear-gradient(#444, #111);	
        background: linear-gradient(#444, #111);	
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
    
    #menu ul li{
        float: none;
        margin: 0;
        padding: 0;
        display: block;  
        -moz-box-shadow: 0 1px 0 #111111, 0 2px 0 #777777;
        -webkit-box-shadow: 0 1px 0 #111111, 0 2px 0 #777777;
        box-shadow: 0 1px 0 #111111, 0 2px 0 #777777;
    }
    
    #menu ul li:last-child{   
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;    
    }
    
    #menu ul a{    
        padding: 10px;
        height: auto;
        line-height: 1;
        display: block;
        white-space: nowrap;
        float: none;
        text-transform: none;
    }
    
    *html #menu ul a{ /* IE6 */   
    	height: 10px;
    	width: 150px;
    }
    
    *:first-child+html #menu ul a{ /* IE7 */    
    	height: 10px;
    	width: 150px;
    }
    
    #menu ul a:hover{
            background: #0186ba;
    	background: -moz-linear-gradient(#04acec,  #0186ba);	
    	background: -webkit-gradient(linear, left top, left bottom, from(#04acec), to(#0186ba));
    	background: -webkit-linear-gradient(#04acec,  #0186ba);
    	background: -o-linear-gradient(#04acec,  #0186ba);
    	background: -ms-linear-gradient(#04acec,  #0186ba);
    	background: linear-gradient(#04acec,  #0186ba);
    }
    
    #menu ul li:first-child a{
        -moz-border-radius: 5px 5px 0 0;
        -webkit-border-radius: 5px 5px 0 0;
        border-radius: 5px 5px 0 0;
    }
    
    #menu ul li:first-child a:after{
        content: '';
        position: absolute;
        left: 30px;
        top: -8px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 8px solid #444;
    }
    
    #menu ul li:first-child a:hover:after{
        border-bottom-color: #04acec; 
    }
    
    #menu ul li:last-child a{
        -moz-border-radius: 0 0 5px 5px;
        -webkit-border-radius: 0 0 5px 5px;
        border-radius: 0 0 5px 5px;
    }
    
    /* Clear floated elements */
    #menu:after{
    	visibility: hidden;
    	display: block;
    	font-size: 0;
    	content: " ";
    	clear: both;
    	height: 0;
    }
    
    * html #menu             { zoom: 1; } /* IE6 */
    *:first-child+html #menu { zoom: 1; } /* IE7 */
    



_Quite long list, huh? This is it..._



### CSS shape


You may have noticed the triangle shape that appears along with the sub-menu. That's a [CSS shape](http://css-tricks.com/examples/ShapesOfCSS/) and its purpose is to increase [usability](http://www.useit.com/) for this CSS3 menu.

![](http://www.red-team-design.com/wp-content/uploads/2011/03/css-triangle-shape.png)

It's made using the `:after` [pseudo-element](http://www.w3.org/TR/CSS2/selector.html#pseudo-elements):


    
    
    #menu ul li:first-child a:after{
        content: '';
        position: absolute;
        left: 30px;
        top: -8px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 8px solid #444;
    }
    
    #menu ul li:first-child a:hover:after{
        border-bottom-color: #04acec; 
    }
    






### [Taming the IE6 "beast"](http://sixrevisions.com/web-development/definitive-guide-to-taming-the-ie6-beast/)


The sub-menu is displayed when hovering on a `li` element. As you already know, IE6 doesn't support hovering on a non-anchor element. 

Although, at the beginning of this article I said "without any Javascript", in order maintain accessibility also for IE6, please allow me to add some scripting code:


    
    
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript">
    	$(function() {
    	  if ($.browser.msie && $.browser.version.substr(0,1)<7)
    	  {
    		$('li').has('ul').mouseover(function(){
    			$(this).children('ul').show();
    			}).mouseout(function(){
    			$(this).children('ul').hide();
    			})
    	  }
    	});        
    </script>
    


_You may skip that, as IE6 is going down. The final [countdown ](http://ie6countdown.com/)began!_

The above solution requires Jquery. Also, I think this shouldn't be a problem at all, while, nowadays Jquery is almost "a default" when talking about modern websites.



#### Target IE6 & IE7 browsers


Besides this Jquery fallback, the above CSS includes some lines specifically for IE6 and IE7:


    
    
    <mark>* html</mark> #menu             { zoom: 1; } /* IE6 */
    <mark>*:first-child+html</mark> #menu { zoom: 1; } /* IE7 */
    



There are also other IE hacks that won't pass CSS file validation... If you don't like it this way, just use conditional comments!



[View demo](http://www.red-team-design.com/wp-content/uploads/2011/03/css3-dropdown-menu-demo.html)





### The end (of this article)


Hope you enjoyed this tutorial, don't forget to leave a comment!



### Later edit


Just as I promised, the CSS3 dropdown menu is now a multi-level one. Please check the demo page to see the updated version:

[![](http://www.red-team-design.com/wp-content/uploads/2011/03/css3-multi-level-dropdown-menu.png)](http://www.red-team-design.com/wp-content/uploads/2011/03/css3-dropdown-menu-demo.html)



### Another update


I took advantage of some free time and I updated the CSS3 dropdown menu demo:

[![](http://www.red-team-design.com/wp-content/uploads/2011/03/css3-multi-level-dropdown-menu-2.png)](http://www.red-team-design.com/wp-content/uploads/2011/03/css3-dropdown-menu-demo.html)
