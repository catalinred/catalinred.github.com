---
author: Red
comments: true
date: 2013-01-28 06:00:44+00:00
layout: post
slug: css-3d-folding-list-with-social-buttons
title: CSS 3D folding list with social buttons
wordpress_id: 5898
categories:
- CSS
- jQuery
tags:
- CSS3
- JavaScript
- jQuery
- User experience
---

CSS 3D transforms are just awesome. I've seen before some cool and inspiring implementations in the wild and still I can't believe I didn't had the chance to write an article on this topic 'til now.

So, what's the idea for this article? Let's say you own a blog, I was thinking about having a nice looking 3D folding list that contains the main social buttons and when people reach at the end of an article, the initial folded list would smoothly unfold. This could be helpful if you want to draw users' attention, something like: _"Hey, did you like my article? Connect with me!"_.

![CSS 3D folding list with social buttons](http://www.red-team-design.com/wp-content/uploads/2013/01/css-3d-folding-list-with-social-buttons.png)

<!-- more -->




[View demo](http://www.red-team-design.com/wp-content/uploads/2013/01/css-3d-folding-list-with-social-buttons-demo.html)






## The HTML


The markup is built using an unordered list which contains snippets and links for each social network. Also, the heading will be able to toggle the folding list.

Each `li` has an HTML hook class attribute for using color coding: blue for Twitter, orange for RSS and so forth. The `fontawesome-*` ones are responsible for rendering the social icons using [Font Awesome](http://fortawesome.github.com/Font-Awesome/).


    
    
    <h2 class="connect">Connect with me</h2>
    <ul class="folding folded">
    	<li class="fb">
    		<div class="content">
    			[Facebook snippet]
    			<a href="" class="fontawesome-facebook"></a>
    		</div>
    	</li>
    	<li class="tw">
    		<div class="content">
    			[Twitter snippet]
    			<a href="" class="fontawesome-twitter"></a> 
    		</div>
    	</li>
    	<li class="gp">
    		<div class="content">
    			[Google+ snippet]
    			<a href="" class="fontawesome-google-plus"></a>
    		</div>
    	</li>
    	<li class="rss">
    		<div class="content">
    			[Simple RSS link]
    			<a href="" class="fontawesome-rss"></a>
    		</div>
    	</li>
    </ul>
    





## The JavaScript


We'll need some jQuery to manipulate the folding list and [Modernizr](http://modernizr.com/) for CSS 3D transforms detection. 

As you can see below, the code will be executed only if `csstransforms3d` HTML class is added by Modernizr. The advantage here is that the rest of jQuery code will not be executed on browsers that do not support CSS 3D transforms. 


    
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
    <script>
    (function(){			
    
    	if ($('html').hasClass('csstransforms3d')) {
    
    		var foldingList = $('.folding'),
    			foldingListHeight = $('.folding').height();
    			topElemOffset = foldingList.offset().top,
    			// Function responsible for unfolding the list
    			unfold = function(){
    				setTimeout(function(){
    					if (foldingList.hasClass('folded')){
    						foldingList.removeClass('folded');
    						return;
    					}
    				}, 500);
    			}
    
    		// Fold/Unfold the list
    		$('.connect').on("click",function(){
    			foldingList.toggleClass('folded');
    		})
    		// If needed, unfold the list right away
    		if (topElemOffset <= $(window).height() - foldingListHeight)
    			unfold();
    		// Check whether to unfold the list when scrolling/resizing
    		$(window).on("scroll resize", function(){
    			var th = $(this);				
    			if (th.scrollTop() + th.height() - foldingListHeight  >=  topElemOffset)
    				unfold();				
    		})
    	}
    
    })()
    </script>
    





## The CSS



If you're willing to read more about CSS 3D Transforms, then you should try [Intro to CSS 3D transforms](http://desandro.github.com/3dtransforms/), I can't recommend it enough. 

For simplicity's sake, I will not include below all the vendor prefixed properties. You'll find them all in the demo.


    
    
    .folding {  			
    	list-style-type: none;
    	margin: 0;
    	padding: 0;
    }
    
    .csstransforms3d .folding {
    	perspective: 700px;	
    }		
    
    .folding li {
    	height: 50px;
    	color: #fff;
    	padding-left: 30px;
    	border-left: 30px solid rgba(0,0,0,.1);
    }
    
    .csstransforms3d .folding li {
    	transition: ease .15s all;		
    }		
    
    .csstransforms3d .folding li:nth-child(even) {
    	margin-top: -1px;
    	transform-origin: 50% 100%;
    	transform: rotateX(10deg);
    }
    
    .csstransforms3d .folding li:nth-child(odd) {
    	transform-origin: 50% 0%;
    	transform: rotateX(-10deg);
    }		
    
    .folding .fb {
    	background-color: #3959a6;
    }	
    
    .folding .tw {
    	background-color: #2fc6ff;
    }	
    
    .folding .gp {
    	background-color:#d84d30;
    }	
    
    .folding .rss {
    	background-color: #ff7e09;
    }
    
    .rss-link {
    	color: #fff;
    	font: .9em Arial, Helvetica;
    }
    
    .folding .content {
    	position: relative;
    	overflow: hidden;
    	display: block;
    	height: 20px;
    	padding: 15px 0;
    }
    
    .csstransforms3d .folded li:nth-child(even) {
    	margin-top: -75px;
    	transform: rotateX(75deg);
    	background-image: linear-gradient(rgba(255,255,255,0) 50%,
                              rgba(255,255,255,.5));
    }
    
    .csstransforms3d .folded li:nth-child(odd) {
    	transform: rotateX(-75deg);
    }
    
    .csstransforms3d .folded .content {
    	display: none;
    }
    
    /* Folding list heading */
    .connect {
    	padding: 12px 0 12px 30px;
    	margin: 0 0 1px 0;
    	color: #fff;
    	border-left: 30px solid rgba(0,0,0,.2);
    	cursor: pointer;
    	font: bold .9em 'Lucida sans unicode',Arial, Helvetica;
    	background-color: #555;
    }		
    
    .csstransforms3d .connect {	
    	background-image: url(data:image/png;base64[shortened]);
    	background-repeat: no-repeat;
    	background-position: -24px center;
    }
    





### Font Awesome styles


Besides the above styles, we'll need to include also the custom web font we're using it here for the social icons. Including a font for these icons might seem overwhelming, but if you're already using it in your project or website, this will come in handy.

For this example, I chose to include it using [WeLoveFontIcons](http://weloveiconfonts.com/) service made by Tim Pietrusky. Also, be aware because last time I checked, Firefox [didn’t allow cross-domain fonts by default](http://www.red-team-design.com/firefox-doesnt-allow-cross-domain-fonts-by-default).


    
    
    [class*="fontawesome-"]::before {
    	font-family: 'FontAwesome', sans-serif;
    	position: absolute;
    	font-size: 55px;
    	right: 30px;
    	bottom: -15px;
    	color: #fff;
    }
    
    [class*="fontawesome-"]:hover::before {
    	bottom: -10px;
    }	
    





## Optimised async loading of cross-domain scripts


When you need to deal with multiple scripts for different tools or social stuff, this is a winner. I use [this snippet](https://gist.github.com/1025811) almost all the time and I highly recommend it.


    
    
    (function(doc, script) {
        var js, 
            fjs = doc.getElementsByTagName(script)[0],
            add = function(url, id) {
                if (doc.getElementById(id)) {return;}
                js = doc.createElement(script);
                js.src = url;
                id && (js.id = id);
                fjs.parentNode.insertBefore(js, fjs);
            };
        // Google+ button
        add('https://apis.google.com/js/plusone.js');
        // Facebook SDK
        add('//connect.facebook.net/en_US/all.js', 'facebook-jssdk');
        // Twitter SDK
        add('//platform.twitter.com/widgets.js', 'twitter-wjs');
    }(document, 'script
    





## jQuery tip


You can bind multiple events at once when using jQuery's `.on()`. In this case, we had to use the same code when scrolling or resize and this tip was very handy, considering DRY principle. 


    
    
    $(window).on("scroll resize", function(){
    	// code here				
    })
    



Check jQuery Fundamentals if you want to read more about [Events and Event Delegation](http://jqfundamentals.com/chapter/events).



## The future sounds good


Think about the power of Modernizr tool translated to CSS. This is exactly what the upcoming `[@supports](http://dev.opera.com/articles/view/native-css-feature-detection-via-the-supports-rule/)` is willing to achieve: native CSS feature detection. Sounds cool, huh?



## Graceful degradation



The nice part about this CSS 3D folding list is that it degrades into a simple list [when CSS 3D transforms are not available](http://caniuse.com/transforms3d), thanks to Modernizr and its features detection.

![CSS 3D folding list using graceful degradation](http://www.red-team-design.com/wp-content/uploads/2013/01/css-3d-folding-list-graceful-degradation.png)



### Mozilla Firefox



Unfortunately, at this time on Firefox, the sides are a bit jagged when using CSS 3D transforms. Still, I'm very confident this will improve soon.




[View demo](http://www.red-team-design.com/wp-content/uploads/2013/01/css-3d-folding-list-with-social-buttons-demo.html)






## That's it!



I'm thinking to add this piece to the end of my articles too. Until then, I'm looking forward to read your thoughts on this article. Thanks for reading it!
  *[DRY]: Don't repeat yourself
