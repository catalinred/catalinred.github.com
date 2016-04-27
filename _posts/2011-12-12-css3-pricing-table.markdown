---
author: Red
comments: true
date: 2011-12-12 02:00:01+00:00
layout: post
slug: css3-pricing-table
title: CSS3 pricing table
description: In this article you'll learn how to build an awesome CSS3 pricing table, with no images and minimal HTML markup.
wordpress_id: 3938
categories:
- CSS
tags:
- CSS3
- HTML
- usability
---

When designing a pricing table for a product or service, your job as a web designer/developer is to make sure that the table is easy to understand, intuitive and clear. This way, you will help users to choose the best plan for theirs needs.

So, in this article you'll learn how to build an awesome CSS3 pricing table, with no images and minimal HTML markup.

![CSS3 pricing table](/dist/uploads/2011/12/css3-pricing-table.png)

<!-- more -->

[View demo](/dist/uploads/2011/12/css3-pricing-table-demo.html)

[![](/dist/uploads/2011/12/css3-pricing-table-preview.png)](/dist/uploads/2011/12/css3-pricing-table-demo.html)

_If you're in a hurry, just check the final result._

## The HTML

Here's a markup excerpt with the Enterprise section:
    
{% highlight html %}
<div id="pricing-table" class="clear">
    <div class="plan">
        <h3>Enterprise<span>$59</span></h3>
        <a class="signup" href="">Sign up</a>         
        <ul>
            <li><b>10GB</b> Disk Space</li>
            <li><b>100GB</b> Monthly Bandwidth</li>
            <li><b>20</b> Email Accounts</li>
        <li><b>Unlimited</b> subdomains</li>            
        </ul> 
    </div>
    ...
</div>
{% endhighlight %} 

## The CSS

Keep your CSS as simple as possible:

{% highlight css %}
#pricing-table {
    margin: 100px auto;
    text-align: center;
    width: 892px; /* total computed width = 222 x 3 + 226 */
}

#pricing-table .plan {
    font: 12px 'Lucida Sans', 'trebuchet MS', Arial, Helvetica;
    text-shadow: 0 1px rgba(255,255,255,.8);        
    background: #fff;      
    border: 1px solid #ddd;
    color: #333;
    padding: 20px;
    width: 180px; /* plan width = 180 + 20 + 20 + 1 + 1 = 222px */      
    float: left;
    position: relative;
}

#pricing-table #most-popular {
    z-index: 2;
    top: -13px;
    border-width: 3px;
    padding: 30px 20px;
    border-radius: 5px;
    box-shadow: 20px 0 10px -10px rgba(0, 0, 0, .15), -20px 0 10px -10px rgba(0, 0, 0, .15);    
}

#pricing-table .plan:nth-child(1) {
    border-radius: 5px 0 0 5px;        
}

#pricing-table .plan:nth-child(4) {
    border-radius: 0 5px 5px 0;        
}

/* --------------- */   

#pricing-table h3 {
    font-size: 20px;
    font-weight: normal;
    padding: 20px;
    margin: -20px -20px 50px -20px;
    background-color: #eee;
    background-image: linear-gradient(#fff, #eee);
}

#pricing-table #most-popular h3 {
    background-color: #ddd;
    background-image: linear-gradient(#eee, #ddd);
    margin-top: -30px;
    padding-top: 30px;
    border-radius: 5px 5px 0 0;         
}

#pricing-table .plan:nth-child(1) h3 {
    border-radius: 5px 0 0 0;       
}

#pricing-table .plan:nth-child(4) h3 {
    border-radius: 0 5px 0 0;       
}   

#pricing-table h3 span {
    display: block;
    font: bold 25px/100px Georgia, Serif;
    color: #777;
    background: #fff;
    border: 5px solid #fff;
    height: 100px;
    width: 100px;
    margin: 10px auto -65px;
    border-radius: 100px;
    box-shadow: 0 5px 20px #ddd inset, 0 3px 0 #999 inset;
}

/* --------------- */

#pricing-table ul {
    margin: 20px 0 0 0;
    padding: 0;
    list-style: none;
}

#pricing-table li {
    border-top: 1px solid #ddd;
    padding: 10px 0;
}

/* --------------- */
    
#pricing-table .signup {
    position: relative;
    padding: 8px 20px;
    margin: 20px 0 0 0;  
    color: #fff;
    font: bold 14px Arial, Helvetica;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;       
    background-color: #72ce3f;
    background-image: linear-gradient(#72ce3f, #62bc30);
    border-radius: 3px;     
    text-shadow: 0 1px 0 rgba(0,0,0,.3);        
    box-shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 2px 0 rgba(0, 0, 0, .7);
}

#pricing-table .signup:hover {
    background-color: #62bc30;
    background-image: linear-gradient(#62bc30, #72ce3f); 
}

#pricing-table .signup:active, #pricing-table .signup:focus {
    background: #62bc30;       
    top: 2px;
    box-shadow: 0 0 3px rgba(0, 0, 0, .7) inset; 
}

/* --------------- */

.clear:before, .clear:after {
  content:"";
  display:table
}

.clear:after {
  clear:both
}

.clear {
  zoom:1
}    
{% endhighlight %}

## So, why should I use this pricing table design?

While its structure isn't actually based on [tables](http://www.red-team-design.com/practical-css3-tables-with-rounded-corners), here are some pros:
    
  * Minimal HTML code.    
  * No images at all and CSS3 ready, so this is easy to maintain/update.    
  * Graceful degradation for older browsers. 

![Internet Explorer preview](/dist/uploads/2011/12/css3-pricing-table-ie8.png)

_[Internet Explorer](http://www.red-team-design.com/how-to-solve-common-ie-bugs) 8 - preview_

## Conclusion

For this CSS3 pricing table, I tried to follow some best practices as:  
    
  * Highlighting a recommended plan.    
  * Making the price stand out.    
  * Placing the plans in a descending order. 

I hope you like the result and don't hesitate to share your thoughts about it. Thanks for reading!