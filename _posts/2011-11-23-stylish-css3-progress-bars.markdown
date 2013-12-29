---
author: Red
comments: true
date: 2011-11-23 06:30:51+00:00
layout: post
slug: stylish-css3-progress-bars
title: Stylish CSS3 progress bars
wordpress_id: 3152
categories:
- CSS
tags:
- CSS3
---

You've seen progress bars everywhere, they are those bars that display the current completion state for a process, such as a download or file transfer. Whether you're building a desktop or a web application, at a certain point, you may need to use this UI element.

Having said that, in this article you'll learn how to create **stylish and [animated](http://www.red-team-design.com/css3-animated-dropdown-menu) progress bars** using CSS3.

![Stylish CSS3 progress bars preview](http://www.red-team-design.com/wp-content/uploads/2011/11/stylish-css3-progress-bars.png)

<!-- more -->




[View demo](http://www.red-team-design.com/wp-content/uploads/2011/11/css3-slick-progress-bars-demo.html)






### The HTML


The markup could not be simpler than that: 


    
    
    <div class="progress-bar blue stripes">
        <span style="width: 40%"></span>
    </div>
    






	
  * `.progress-bar` - defines the general styles for our progress bar.

	
  * `.blue` - in this case, the blue CSS class add a blue style for the progress bar.

	
  * `.stripes` - animation type for the current progress bar.

	
  * `span` - this will help you filling the progress bar. An inline set `width` will help you specifying the "fill" state.





### The CSS



General styles for the CSS3 progress bar and filled area:


    
    
    .progress-bar {
    	background-color: #1a1a1a;
    	height: 25px;
    	padding: 5px;
    	width: 350px;
    	margin: 50px 0;			
    	-moz-border-radius: 5px;
    	-webkit-border-radius: 5px;
    	border-radius: 5px;
    	-moz-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;
    	-webkit-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;
    	box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;	          
    }
    
    .progress-bar span {
    	display: inline-block;
    	height: 100%;	
    	-moz-border-radius: 3px;
    	-webkit-border-radius: 3px;
    	border-radius: 3px;
    	-moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
    	-webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
    	box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
            -webkit-transition: width .4s ease-in-out;
            -moz-transition: width .4s ease-in-out;
            -ms-transition: width .4s ease-in-out;
            -o-transition: width .4s ease-in-out;
            transition: width .4s ease-in-out;    
    }
    



![](http://www.red-team-design.com/wp-content/uploads/2011/11/css3-progress-bar-default.png)

Let's add some color/[gradients](http://www.red-team-design.com/css-gradients-quick-tutorial):

    
    
    .blue span {
    	background-color: #34c2e3;   
    }
    
    .orange span {
    	  background-color: #fecf23;
    	  background-image: -webkit-gradient(linear, left top, left bottom, from(#fecf23), to(#fd9215));
    	  background-image: -webkit-linear-gradient(top, #fecf23, #fd9215);
    	  background-image: -moz-linear-gradient(top, #fecf23, #fd9215);
    	  background-image: -ms-linear-gradient(top, #fecf23, #fd9215);
    	  background-image: -o-linear-gradient(top, #fecf23, #fd9215);
    	  background-image: linear-gradient(top, #fecf23, #fd9215);  
    }	
    
    .green span {
    	  background-color: #a5df41;
    	  background-image: -webkit-gradient(linear, left top, left bottom, from(#a5df41), to(#4ca916));
    	  background-image: -webkit-linear-gradient(top, #a5df41, #4ca916);
    	  background-image: -moz-linear-gradient(top, #a5df41, #4ca916);
    	  background-image: -ms-linear-gradient(top, #a5df41, #4ca916);
    	  background-image: -o-linear-gradient(top, #a5df41, #4ca916);
    	  background-image: linear-gradient(top, #a5df41, #4ca916);  
    }
    





#### Stripes



You may have seen this [CSS3 technique](http://www.red-team-design.com/cool-notification-messages-with-css3-jquery) before, I just adapted it a little for this example:


    
    
    .stripes span {
    	-webkit-background-size: 30px 30px;
    	-moz-background-size: 30px 30px;
    	background-size: 30px 30px;			
    	background-image: -webkit-gradient(linear, left top, right bottom,
    						color-stop(.25, rgba(255, 255, 255, .15)), color-stop(.25, transparent),
    						color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .15)),
    						color-stop(.75, rgba(255, 255, 255, .15)), color-stop(.75, transparent),
    						to(transparent));
    	background-image: -webkit-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
    						transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
    						transparent 75%, transparent);
    	background-image: -moz-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
    						transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
    						transparent 75%, transparent);
    	background-image: -ms-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
    						transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
    						transparent 75%, transparent);
    	background-image: -o-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
    						transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
    						transparent 75%, transparent);
    	background-image: linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
    						transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
    						transparent 75%, transparent);            
    	
    	-webkit-animation: animate-stripes 3s linear infinite;
    	-moz-animation: animate-stripes 3s linear infinite;       		
    }
    
    @-webkit-keyframes animate-stripes { 
    	0% {background-position: 0 0;} 100% {background-position: 60px 0;}
    }
    
    @-moz-keyframes animate-stripes {
    	0% {background-position: 0 0;} 100% {background-position: 60px 0;}
    }
    



![](http://www.red-team-design.com/wp-content/uploads/2011/11/css3-progress-bar-stripes.png)



#### Shine


Not sure if this is the best name I could find for this CSS3 animation, but here we go:


    
    
    .shine span {
    	position: relative;
    }
    
    .shine span::after {
    	content: '';
    	opacity: 0;
    	position: absolute;
    	top: 0;
    	right: 0;
    	bottom: 0;
    	left: 0;
    	background: #fff;
    	-moz-border-radius: 3px;
    	-webkit-border-radius: 3px;
    	border-radius: 3px;			
    	
    	-webkit-animation: animate-shine 2s ease-out infinite;
    	-moz-animation: animate-shine 2s ease-out infinite; 			
    }
    
    @-webkit-keyframes animate-shine { 
    	0% {opacity: 0; width: 0;}
    	50% {opacity: .5;}
    	100% {opacity: 0; width: 95%;}
    }
    
    
    @-moz-keyframes animate-shine {
    	0% {opacity: 0; width: 0;}
    	50% {opacity: .5;}
    	100% {opacity: 0; width: 95%;}
    }
    



This CSS3 progress bar example uses an CSS3 `::after` [pseudo-element](http://www.red-team-design.com/before-after-pseudo-elements) which animates. Currently, animating generated content with CSS3 is available only on **latest Firefox browsers**. I hope that soon it will be a wider support for that.

![](http://www.red-team-design.com/wp-content/uploads/2011/11/css3-progress-bar-shine.png)



#### Glow



CSS3 keyframes animation based on [box-shadow](http://www.red-team-design.com/how-to-create-slick-effects-with-css3-box-shadow) property:


    
    
    .glow span {
    	-moz-box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;
    	-webkit-box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;
    	box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;
    	
    	-webkit-animation: animate-glow 1s ease-out infinite;
    	-moz-animation: animate-glow 1s ease-out infinite; 			
    }
    
    @-webkit-keyframes animate-glow {
     0% { -webkit-box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;} 
     50% { -webkit-box-shadow: 0 5px 5px rgba(255, 255, 255, .3) inset, 0 -5px 5px rgba(255, 255, 255, .3) inset;} 
     100% { -webkit-box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;}
     }
    
    @-moz-keyframes animate-glow {
     0% { -moz-box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;} 
     50% { -moz-box-shadow: 0 5px 5px rgba(255, 255, 255, .3) inset, 0 -5px 5px rgba(255, 255, 255, .3) inset;} 
     100% { -moz-box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;}
     }
    



![](http://www.red-team-design.com/wp-content/uploads/2011/11/css3-progress-bar-glow.png)





[View demo](http://www.red-team-design.com/wp-content/uploads/2011/11/css3-slick-progress-bars-demo.html)






### Hey, what about older browsers?


![](http://www.red-team-design.com/wp-content/uploads/2011/11/progress-bars-older-browsers.png)
_The progress bars look pretty well thanks to graceful degradation._



### That's all!


For further web development, to achieve the result you wish for, you just need to play with JavaScript or jQuery to change the `span`'s `width` value for these progress bars.

I hope you liked this tutorial, please feel free to share your thoughts. Thanks for reading!



### Update


I just added some jQuery to the [demo page](http://www.red-team-design.com/wp-content/uploads/2011/11/css3-slick-progress-bars-demo.html). So, now you can also play with progress bars values. Hope you like it! 
