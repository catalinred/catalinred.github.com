---
author: Red
comments: true
date: 2012-05-21 05:00:34+00:00
layout: post
slug: google-play-minimal-tabs-with-css3-jquery
title: Google Play's minimal tabs with CSS3 & jQuery
description: In this article you'll learn how to build some new CSS3 & jQuery tabs inspired by Google Play's design.
wordpress_id: 4617
categories:
- CSS
- JavaScript
tags:
- CSS3
- JavaScript
- jQuery
- usability
- User experience
---

The tab navigation is an element you often meet in your daily browsing. There are so many ways, so many styles, but the idea is the same: you click a tab and see its content without a page refresh.

In this article you'll learn how to build some new CSS3 & jQuery tabs inspired by [Google Play](https://play.google.com)'s design.

![](/wp-content/uploads/2012/05/minimal-tabs-css3-jquery.png)

<!-- more -->

[View demo](/wp-content/uploads/2012/05/google-play-minimal-tabs-with-css3-jquery-demo.html)

Before going further, you may want to check the other tabs tutorials I wrote:

[![CSS3 tabs with beveled corners](/wp-content/uploads/2011/09/css3-jquery-tabs.png)](http://www.red-team-design.com/css3-tabs-with-beveled-corners)
_[CSS3 tabs with beveled corners](http://www.red-team-design.com/css3-tabs-with-beveled-corners)_

[![CSS3 & jQuery folder tabs](/wp-content/uploads/2012/01/css3-jquery-folder-tabs.png)](http://www.red-team-design.com/css3-jquery-folder-tabs)
_[CSS3 & jQuery folder tabs](http://www.red-team-design.com/css3-jquery-folder-tabs)_

## The HTML

Getting back to this tutorial, here's the markup, simple as usual. You may notice the similarity between an anchor's `name` attribute and related content's `id` block. Further, this will be our hook.
   
{% highlight html %}
<ul id="tabs">
    <li><a href="#" name="#tab1">One</a></li>
    <li><a href="#" name="#tab2">Two</a></li>
    <li><a href="#" name="#tab3">Three</a></li>
    <li><a href="#" name="#tab4">Four</a></li>    
</ul>

<div id="content"> 
    <div id="tab1">...</div>
    <div id="tab2">...</div>
    <div id="tab3">...</div>
    <div id="tab4">...</div>
</div>
{% endhighlight %}

## The CSS

The goal here, as always, is to do it without using any images and with as little CSS as possible.

That's all, this is not just a CSS piece, it's the whole CSS used to create these tabs. I think it's pretty cool, not even [pseudo-elements](http://www.red-team-design.com/before-after-pseudo-elements) were used here, just CSS borders.

{% highlight css %}
#tabs {
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

#tabs li {
  float: left;
  margin: 0 -15px 0 0;
}

#tabs a {
  float: left;
  position: relative;
  padding: 0 40px;
  height: 0; 
  line-height: 30px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  border-right: 30px solid transparent;
  border-bottom: 30px solid #3D3D3D;
  border-bottom-color: #777\9;
  opacity: .3;
  filter: alpha(opacity=30);    
}

#tabs a:hover,
#tabs a:focus {
  border-bottom-color: #2ac7e1;
  opacity: 1;
  filter: alpha(opacity=100);
}

#tabs a:focus {
  outline: 0;
}

#tabs #current {
  z-index: 3;
  border-bottom-color: #3d3d3d;
  opacity: 1;
  filter: alpha(opacity=100);   
}
{% endhighlight %}

#### Deconstructing it

Here's where the magic happens:

{% highlight css %}
#tabs a {
  height: 0; 
  line-height: 30px;
  border-right: 30px solid transparent;
  border-bottom: 30px solid #3D3D3D;    
}
{% endhighlight %}

![CSS border tabs technique example](/wp-content/uploads/2012/05/css-border-tabs-technique.png)

## The jQuery

Comparing to my previous tabs article, this time I think I improved a bit the jQuery code. Also, this time you have the possibility to access the tabs directly by URL, e.g. mywebsite.com/tabs.html#tab2.


{% highlight js %}
function resetTabs(){
    $("#content > div").hide(); //Hide all content
    $("#tabs a").attr("id",""); //Reset id's      
}

var myUrl = window.location.href; //get URL
var myUrlTab = myUrl.substring(myUrl.indexOf("#")); // For mywebsite.com/tabs.html#tab2, myUrlTab = #tab2     
var myUrlTabName = myUrlTab.substring(0,4); // For the above example, myUrlTabName = #tab

(function(){
    $("#content > div").hide(); // Initially hide all content
    $("#tabs li:first a").attr("id","current"); // Activate first tab
    $("#content > div:first").fadeIn(); // Show first tab content
    
    $("#tabs a").on("click",function(e) {
        e.preventDefault();
        if ($(this).attr("id") == "current"){ //detection for current tab
         return       
        }
        else{             
        resetTabs();
        $(this).attr("id","current"); // Activate this
        $($(this).attr('name')).fadeIn(); // Show content for current tab
        }
    });

    for (i = 1; i <= $("#tabs li").length; i++) {
      if (myUrlTab == myUrlTabName + i) {
          resetTabs();
          $("a[name='"+myUrlTab+"']").attr("id","current"); // Activate url tab
          $(myUrlTab).fadeIn(); // Show url tab content        
      }
    }
})()
{% endhighlight %}

## In the end...

This technique has a small drawback, the tabs do not behave as they should if you're using IE6. But, with your permission, I'd say we could skip IE6 this time. However, if you really want a graceful degradation for IE6, it can be done with some specific targeting. Maybe I'll do that in the future, or maybe not :)

I'm looking forward to read your comments, hope you enjoyed this. Thanks for reading it!