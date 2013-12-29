---
author: Red
comments: true
date: 2011-09-18 22:00:04+00:00
layout: post
slug: slick-login-form-with-html5-css3
title: Slick login form with HTML5 & CSS3
wordpress_id: 3154
categories:
- CSS
- HTML5
tags:
- CSS3
- HTML5
- usability
- User experience
---

We already know that CSS3 has the ability to create a lot of new possibilities to design and implement better web forms. Also, HTML5 has its important role when it comes about creating more usable forms, without actually needing any Javascript code.

Knowing that, check out the below preview to see the login form we're going to create in this article:

![](http://www.red-team-design.com/wp-content/uploads/2011/09/login-form.png)

<!-- more -->




[View demo](http://www.red-team-design.com/wp-content/uploads/2011/09/slick-login-form-with-html5-css3-demo.html)






### Markup



    
    
    <form id="login">
        <h1>Log In</h1>
        <fieldset id="inputs">
            <input id="username" type="text" placeholder="Username" autofocus required>   
            <input id="password" type="password" placeholder="Password" required>
        </fieldset>
        <fieldset id="actions">
            <input type="submit" id="submit" value="Log in">
            <a href="">Forgot your password?</a><a href="">Register</a>
        </fieldset>
    </form>
    





#### The HTML5 stuff


New HTML5 attributes descriptions, according to latest specifications:


	

  * **placeholder** - A short hint (one word or a short phrase) intended to aid the user when entering data into the control represented by its element.


  * **required** - Specifies that the element is a required part of form submission.


  * **autofocus** - Specifies that the element represents a control to which a UA is meant to give focus as soon as the document is loaded.


  * **type="password"** - Specifies that its input element is a one-line plain-text edit control for entering a password. (not HTML5 specific)





### The CSS



For this article, I will not paste the whole lines here. Instead, I'll just add  the ones who help creating  some cool effects.



#### Paper stack effect



[Box-shadow](/how-to-create-slick-effects-with-css3-box-shadow) will help us creating this nice effect by defining multiple shadows that actually overlap.

![](http://www.red-team-design.com/wp-content/uploads/2011/09/paper-stack-effect.png)


    
    
    #login
    {
        box-shadow:
              0 0 2px rgba(0, 0, 0, 0.2),  
              0 1px 1px rgba(0, 0, 0, .2),
              0 3px 0 #fff,
              0 4px 0 rgba(0, 0, 0, .2),
              0 6px 0 #fff,  
              0 7px 0 rgba(0, 0, 0, .2);
    }
    





#### Stitch effect



This effect is added using [pseudo-elements](/before-after-pseudo-elements). Using pseudo-elements helps you avoid extra markup and this is a perfect example: keep the markup clean and let the CSS do the magic.

![](http://www.red-team-design.com/wp-content/uploads/2011/09/stitch-effect.png)


    
    
    #login
    {
        position: absolute;
        z-index: 0;
    }
    
    #login:before
    {
        content: '';
        position: absolute;
        z-index: -1;
        border: 1px dashed #ccc;
        top: 5px;
        bottom: 5px;
        left: 5px;
        right: 5px;
        -moz-box-shadow: 0 0 0 1px #fff;
        -webkit-box-shadow: 0 0 0 1px #fff;
        box-shadow: 0 0 0 1px #fff;
    }
    


_Styles excerpt._



#### Subtle gradient lines



I've first seen this effect on [Gene Locklin](http://playground.genelocklin.com/gradient-hr/)'s page and I thought this is pretty cool. So, I decided to use it for highlighting the "Log in" heading. Using pseudo-elements (again) and [CSS3 gradients](/css-gradients-quick-tutorial) some cool lines are added to simulate a strikeout effect.

![](http://www.red-team-design.com/wp-content/uploads/2011/09/heading-gradient-lines.png)


    
    
    h1
    {
        text-shadow: 0 1px 0 rgba(255, 255, 255, .7), 0px 2px 0 rgba(0, 0, 0, .5);
        text-transform: uppercase;
        text-align: center;
        color: #666;
        margin: 0 0 30px 0;
        letter-spacing: 4px;
        font: normal 26px/1 Verdana, Helvetica;
        position: relative;
    }
    
    h1:after, h1:before
    {
        background-color: #777;
        content: "";
        height: 1px;
        position: absolute;
        top: 15px;
        width: 120px;   
    }
    
    h1:after
    { 
        background-image: -webkit-gradient(linear, left top, right top, from(#777), to(#fff));
        background-image: -webkit-linear-gradient(left, #777, #fff);
        background-image: -moz-linear-gradient(left, #777, #fff);
        background-image: -ms-linear-gradient(left, #777, #fff);
        background-image: -o-linear-gradient(left, #777, #fff);
        background-image: linear-gradient(left, #777, #fff);      
        right: 0;
    }
    
    h1:before
    {
        background-image: -webkit-gradient(linear, right top, left top, from(#777), to(#fff));
        background-image: -webkit-linear-gradient(right, #777, #fff);
        background-image: -moz-linear-gradient(right, #777, #fff);
        background-image: -ms-linear-gradient(right, #777, #fff);
        background-image: -o-linear-gradient(right, #777, #fff);
        background-image: linear-gradient(right, #777, #fff);
        left: 0;
    }
    





### The final result



Using the above techniques, here's the final result:

[![](http://www.red-team-design.com/wp-content/uploads/2011/09/login-form-final-result.png)](http://www.red-team-design.com/wp-content/uploads/2011/09/slick-login-form-with-html5-css3-demo.html)




[View demo](http://www.red-team-design.com/wp-content/uploads/2011/09/slick-login-form-with-html5-css3-demo.html)






### Conclusion



This login form looks very well also on older browsers, as you can see below:

![](http://www.red-team-design.com/wp-content/uploads/2011/09/login-form-final-result-ie8.png)
_Internet Explorer 8 screenshot._

As a future improvement, you can add also HTML5 `placeholder` fallback as you have seen in one of my [previous articles](/how-to-create-a-cool-and-usable-css3-search-box).
