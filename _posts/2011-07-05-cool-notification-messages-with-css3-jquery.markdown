---
author: Red
comments: true
date: 2011-07-05 07:30:12+00:00
layout: post
slug: cool-notification-messages-with-css3-jquery
title: Cool notification messages with CSS3 & jQuery
description: Learn how to create cool notification messages with CSS3 and jQuery.
categories:
- CSS
- JavaScript
- User experience
---

Nowadays, UX is a key factor when it comes to creating and designing a product or system. To keep users happy, developers struggle to create a good experience and better interactivity.

The user experience is a term used to describe the overall experience and satisfaction a user has when using a product or system. So, a good UX will always make users happy and businesses more successful.

Notification messages are an important part of the user experience and you can't afford to omit them. A notification alert message should appear every time the user performs important tasks.

In this article, you'll learn how to create some alert messages with CSS3 and jQuery.

![Info, error, warning & success notification messages with CSS and jQuery](/dist/uploads/2011/07/css3-jquery-notification-messages.jpg)

<!-- more -->

[View demo](/dist/uploads/2011/07/cool-notification-messages-with-css3-and-jquery-demo.html)

## Message Types

Below is a list with common notification messages:

  * Info
  * Error
  * Warning
  * Success

## The info notification type

Its purpose is to inform the user regarding a relevant matter.

![CSS info message on a blue background](/dist/uploads/2011/07/info-msg.png)


## The error notification type

When an operation has failed, the user must be notified. For example: "The account couldn't be deleted." or "Your settings weren't saved" etc.

![CSS error message on a red background](/dist/uploads/2011/07/error-msg.png)

## The warning notification type

This type of message notifies the user of a condition that might cause a problem in the future.

![CSS warning message on a yellow background](/dist/uploads/2011/07/warning-msg.png)

## The success notification type

The success message should be displayed after the user successfully performs an action.

![CSS success message on a green background](/dist/uploads/2011/07/success-msg.png)

## The HTML code

{% highlight html %}
  <div class="info message">
  <h3>FYI, something just happened!</h3>
  <p>This is just an info notification message.</p>
  </div>

  <div class="error message">
  <h3>Ups, an error ocurred</h3>
  <p>This is just an error notification message.</p>
  </div>

  <div class="warning message">
  <h3>Wait, I must warn you!</h3>
  <p>This is just a warning notification message.</p>
  </div>

  <div class="success message">
  <h3>Congrats, you did it!</h3>
  <p>This is just a success notification message.</p>
  </div>
{% endhighlight %}

## The CSS

{% highlight css %}
  .message{
    background-size: 40px 40px;
    background-image: linear-gradient(135deg, rgba(255, 255, 255, .05) 25%,
                      transparent 25%,
                      transparent 50%, rgba(255, 255, 255, .05) 50%,
                      rgba(255, 255, 255, .05) 75%,
                      transparent 75%, transparent);
    box-shadow: inset 0 -1px 0 rgba(255,255,255,.4);
    width: 100%;
    border: 1px solid;
    color: #fff;
    padding: 15px;
    position: fixed;
    _position: absolute;
    text-shadow: 0 1px 0 rgba(0,0,0,.5);
    animation: animate-bg 5s linear infinite;
  }

  .info{
    background-color: #4ea5cd;
    border-color: #3b8eb5;
  }

  .error{
    background-color: #de4343;
    border-color: #c43d3d;
  }

  .warning{
    background-color: #eaaf51;
    border-color: #d99a36;
  }

  .success{
    background-color: #61b832;
    border-color: #55a12c;
  }

  .message h3{
    margin: 0 0 5px 0;
  }

  .message p{
    margin: 0;
  }

  @keyframes animate-bg {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -80px 0;
    }
  }
{% endhighlight %}

Note the `animate-bg`, which animate the [CSS gradients](/css-gradients-quick-tutorial/) background diagonal stripes. Of course, to see this effect, you should use the latest Webkit browsers like Chrome/Safari or Mozilla 5+.

The notification messages will be hidden initially. For that, we'll use fixed positioning (`absolute` value just for IE6 - as there is no `position:fixed` support).

{% highlight css %}
  position: fixed;
  _position: absolute; /* IE6 only */
{% endhighlight %}

## The jQuery

Define the messages types using an array:

{% highlight js %}
  var myMessages = ['info','warning','error','success'];
{% endhighlight %}

The below function hides the notification messages. Messages could have dynamic heights and for that, each message's height is calculated in order to hide it properly.

{% highlight js %}
  function hideAllMessages() {
    var messagesHeights = new Array(); // this array will store height for each

    for (i=0; i<myMessages.length; i++) {
    messagesHeights[i] = $('.' + myMessages[i]).outerHeight(); // fill array
    $('.' + myMessages[i]).css('top', -messagesHeights[i]); //move element outside viewport
    }
  }
{% endhighlight %}

The `showMessage` function is called when document ready.

{% highlight js %}
  function showMessage(type) {
    $('.'+ type +'-trigger').click(function(){
          hideAllMessages();
          $('.'+type).animate({top:"0"}, 500);
    });
  }
{% endhighlight %}

On page load, first of all, we'll hide all the messages: `hideAllMessages()`. Then, for each trigger, show the equivalent message:

{% highlight js %}
  $(document).ready(function(){

    // Initially, hide them all
    hideAllMessages();

    // Show message
    for(var i=0;i<myMessages.length;i++)
    {
      showMessage(myMessages[i]);
    }

    // When message is clicked, hide it
    $('.message').click(function(){
            $(this).animate({top: -$(this).outerHeight()}, 500);
    });

  });
{% endhighlight %}

## Conclusion

Using CSS3, I think you can find endless possibilities to design notification messages. The above is just a minimal example, with no images (for simplicity's sake).

But, the design is not everything, as functionality and interactivity have a very important role here.