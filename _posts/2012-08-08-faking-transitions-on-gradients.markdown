---
author: Red
comments: true
date: 2012-08-08 05:00:43+00:00
layout: post
slug: faking-transitions-on-gradients
title: Faking transitions on gradients
description: Check this article to learn about two interesting workarounds for faking transitions on background gradients.
wordpress_id: 5149
categories:
- CSS
tags:
- CSS3
---

CSS transitions do not have any effect on background gradients. As far as I know, the thing is that something similar would be quite difficult to achieve considering the multitude of possible gradients that can be created using a color palette.

Though, there are some simple ways you can simulate smooth transitions on gradients and below you'll see how to do that.

![Transitions on gradients](/wp-content/uploads/2012/08/faking-transitions-on-gradients.png)

<!-- more -->

I wrote about this matter before in [one of my articles](http://www.red-team-design.com/css-pitfalls-and-how-to-overcome-them) and I was thinking this new article will hopefully be more useful to you as it contains one more extra technique that can help you faking transitions on background gradients.

So, what is this about and why would you care about transitions on gradients? The answer is very simple: just think about the situation when you're designing some [CSS3 buttons](http://www.red-team-design.com/just-another-awesome-css3-buttons). To make them look awesome, it's almost mandatory to use shadows, rounded corners and **gradients**.

Read the workarounds described below and you'll be able to greatly improve your gradient buttons, especially their `:hover` state. 

[View demo](/wp-content/uploads/2012/08/fake-transitions-on-gradients-demo.html)


## Initial styles

For this demo, we're using three colored boxes to whom are applied the following workarounds.

I extracted only the important styles needed and as you can see, the `background-color` has the most important role, as it's the one who's actually being transitioned here.     

{% highlight css %}
.boxes li{
    transition: background-color .2s ease-out;
}

.boxes .red{
    background-color: #da232a;
}

.boxes .red:hover{
    background-color: #e75f64;
}   

.boxes .green{
    background-color: #72b01a;
}

.boxes .green:hover{
    background-color: #9ed354;
}   

.boxes .blue{
    background-color: #269ce9;
}

.boxes .blue:hover{
    background-color: #70b9e8;
}
{% endhighlight %}


## 1. Background-image

Having already a transitioned `background-color`, you just need to set a semi transparent background using `background-image` and the result will be a smooth gradient transition for the element to whom these styles are applied to.
    
{% highlight css %}
background-image: linear-gradient(top, rgba(255,255,255,.5), rgba(255,255,255,0));
{% endhighlight %}

## 2. Box-shadow

Perhaps this is a bit dirtier, but it's still a fully working technique. Instead of a semi transparent background as above, this assume using an inset [box-shadow](http://www.red-team-design.com/how-to-create-slick-effects-with-css3-box-shadow):


{% highlight css %}
box-shadow: 0 60px 50px -30px rgba(255, 255, 255, .5) inset;
{% endhighlight %}

## Conclusion

As you can see, the workarounds above are quite simple and easy to implement. Also, the big advantage is that they don't require any additional markup element to work. 

Thanks for reading and feel free to share your thoughts!