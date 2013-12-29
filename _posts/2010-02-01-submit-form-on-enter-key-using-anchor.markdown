---
author: Red
comments: true
date: 2010-02-01 11:47:14+00:00
layout: post
slug: submit-form-on-enter-key-using-anchor
title: 'Submit form on enter key using anchor '
wordpress_id: 498
categories:
- CSS
tags:
- CSS
---

These days I tested what's happening if you have a form and instead a submit input you choose to submit the form using an anchor. If you do that, you will notice that the form won't submit on ENTER key. So how can we submit a form on enter key using anchor?

[![](http://www.red-team-design.com/wp-content/uploads/2010/02/html-form-example.png)](http://www.red-team-design.com/submit-form-on-enter-key-using-anchor/)

<!-- more -->


### Using input type="submit"


A form can be submitted using a button like input type="button" having the advantage that you don't need to click actually on it. You can just press ENTER key on your keyboard and your form will be submitted.


[Submit form using input type="submit" - demo](http://www.red-team-design.com/wp-content/uploads/2010/02/form-example-input.html)





### Using anchor element


Everything is fine until now but let's  see what happens when you need to submit a form using an anchor. You may ask yourself why you would need that, but all I can say is that there are cases when you need to use an element which is not an input to submit a form.

I encountered this situation two days ago and I thought that would be interesting to share this with you. I needed to find a solution because I didn't like the fact that my form wasn't submitted when pressed ENTER key.

The trick is to use a hidden submit input in your form. I wasn't able to use display: none or visibility: hidden because IE ignores the submit button that way so I hide the button using classic style :) .

    
    .input-hidden
    {
      border: none;
      width: 0;
      height: 0;
      line-height: 0;
      padding:0;
      margin: 0;
    }




[Submit form using anchor and hidden input - demo](http://www.red-team-design.com/wp-content/uploads/2010/02/form-example-anchor.html)


This is the way how it worked for me and I find this to be a very good solution. But, I hope this will also help you.

In either case, please leave a comment below with your feedback.
