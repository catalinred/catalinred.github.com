---
author: Red
comments: true
date: 2010-09-21 16:06:09+00:00
layout: post
slug: css-shorthand-tips
title: 5 CSS shorthand tips and how to optimize CSS
wordpress_id: 672
categories:
- CSS
tags:
- CSS
---

If you want to write efficient and optimized CSS code then you'll surely need to have in mind the following shorthand tips.

These tips and tricks apparently don't seem to be so important at the first sight. But once you write thousands of CSS lines you will wish to optimize every single line.

Why's that? Because loading speed does matter (Google introduced this to their ranking algorithms) and your web pages will load faster because your stylesheet file size will be smaller.

Below I will present you a short, yet comprehensive CSS shorthand guide to help you get started optimizing your CSS file. So let's have a look at some examples and see exactly how we can optimize a CSS file.
<!-- more -->


### 1.Background properties in one line


Defining a background property could be made in an easier way than we often happen to see.

Why using:

    
     background: url(example.gif);
     background-color: #eaeaea ;
     background-repeat: repeat-x;
     background-position: top left;


... when you could easier write:

    
    background: #eaeaea url(example.gif) repeat-x top left;




### 2.Border property


When all of the border widths are the same, instead using:

    
    border-color: red;
    border-width: 1px;
    border-style: solid;


... you can simply write this:

    
    border: 1px solid red;




### 3.List properties


The following list properties:

    
    list-style-position: outside;
    list-style-image: none;
    list-style-type: disc;


... could be simplified into:

    
    list-style: disc outside;
    /* shorthand notation for list properties */
    /* list-style: [list-style-type] [list-style-position] [list-style-image];*/




### 4.Font and line-height properties


Font and line-height properties like the ones below:

    
    font-family: Arial, Helvetica;
    font-weight: bold;
    font-style: italic;
    font-size: 1em;
    line-height: 1.5em;


... can be easily transformed into:

    
    font: bold italic 1em/1.5em Arial, Helvetica;


Much simpler huh? :)


### 5.Margin and padding properties


This example applies for margin and also for padding, so next we'll use as example the CSS margin property.

    
    /* top=10px, right=5px, bottom=15px, left=20px */
    margin: 10px 5px 15px 20px;
    
    /* top=10px, right=5px, bottom=10px, left=5px*/
    margin: 10px 5px;
    
    /* top=10px, right=5px, bottom=15px, left=5px*/
    margin: 10px 5px 15px;


Now let's see what else we can do to write optimized CSS:


### Always remember that "0" anyhing equals to "0"


Use the "0" value instead 0px or 0em  so instead the the following [CSS properties](/things-you-should-know-about-css-anatomy)

    
    margin: 0px;
    padding: 0em;


you could use:

    
    margin: 0;
    padding: 0;




### Use shortcuts for hexadecimal colors


White color equal to "#ffffff" or just "#fff",  #aabbcc can be wrote like #abc and so on.


### Simplify non integer CSS values


Instead writing 0.5em you can use .5em, 0.5px is equal to .5px


### The last property semicolon it's not required?



    
    div
    {
    margin: 0;
    padding: 0 /* note that you can skip the last rule semicolon, and yes it passes W3C validation */
    }




### Floated elements inherits "display:block" declaration


When floating an element there's no need to add also "display: block" declaration as we often see. This is helpful for avoiding redundancy and save us one line of CSS.

These are some CSS shorthand tips I often use and they are very helpful for me, when coding CSS. I hope they will also help you writing shorter, better CSS code.

**Over to you**

What do you think about the tips I presented above and what else do you use for optimizing the CSS file?
