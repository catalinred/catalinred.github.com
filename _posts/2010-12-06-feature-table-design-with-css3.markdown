---
author: Red
comments: true
date: 2010-12-06 08:25:48+00:00
layout: post
slug: feature-table-design-with-css3
title: Feature table design with CSS3
wordpress_id: 1721
categories:
- CSS
tags:
- CSS
- CSS3
- HTML
---

I love shadows, rounded corners, gradients and all the CSS3 features. That's why, there are some days when I find myself designing in CSS3 more than in Photoshop. 

The idea of building a features table just by using CSS3 came to me a while ago and I decided to share it with you in this article.

[![Feature table design with CSS3](/wp-content/uploads/2010/12/css3-feature-table.png)](/feature-table-design-with-css3)

<!-- more -->

You can check a preview of the result below, or view the demo and download the source files from the buttons below the image.

![](/wp-content/uploads/2010/12/feature-table-preview.png)

## The HTML markup

Below you can find the minimal HTML:

{% highlight html %}
<table class="features-table">
  <thead>
    <tr>
      <td></td>
      <td>Standard</td>
      <td>Professional</td>
      <td>Enterprise</td>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td></td>
      <td>$99</td>
      <td>$199</td>
      <td>$399</td>
    </tr>
  </tfoot>          
  <tbody>
    <tr>
      <td>Custom domain</td>
      <td><img src="check.png" width="16" height="16" alt="check"></td>
      <td><img src="check.png" width="16" height="16" alt="check"></td>
      <td><img src="check.png" width="16" height="16" alt="check"></td>     
    </tr>
    <tr>
      <td>Advanced control</td>
      <td><img src="check.png" width="16" height="16" alt="check"></td>
      <td><img src="check.png" width="16" height="16" alt="check"></td>
      <td><img src="check.png" width="16" height="16" alt="check"></td>     
    </tr>
    <tr>
      <td>Unlimited support</td>
      <td><img src="cross.png" width="16" height="16" alt="cross"></td>
      <td><img src="check.png" width="16" height="16" alt="check"></td>
      <td><img src="check.png" width="16" height="16" alt="check"></td>
    </tr>
    <tr>
      <td>User registration</td>
      <td><img src="cross.png" width="16" height="16" alt="cross"></td>
      <td><img src="cross.png" width="16" height="16" alt="cross"></td>
      <td><img src="check.png" width="16" height="16" alt="check"></td>
    </tr>
  </tbody>
</table>
{% endhighlight %} 

Note that the markup it's quite minimal, excepting the check and cross icons needed to point available and unavailable features.

To better target the cells I used elements like [thead](http://www.w3schools.com/tags/tag_thead.asp), [tfoot](http://www.w3schools.com/tags/tag_tfoot.asp) or [tbody](http://www.w3schools.com/TAGS/tag_tbody.asp). You'll see below that's easier now to select cells, without adding different CSS classes for rows and/or cells.

## The CSS:

For this example, I used CSS3 selectors (or pseudo-selectors) as `:nth-child(n)` or `:first-child`. Of course IE6 to IE8 won't render the table as modern browsers like Firefox, Chrome, Safari or Opera.

IE9 and Opera instead behaves nice, excepting the lack of support for [CSS gradients](/css-gradients-quick-tutorial).

{% highlight css %}
.features-table {
  width: 100%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0;
  text-shadow: 0 1px 0 #fff;
  color: #2a2a2a;
  background: #fafafa;  
  background-image: linear-gradient(top, #fff, #eaeaea, #fff);
}

.features-table td {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #cdcdcd;
  box-shadow: 0 1px 0 white;
  white-space: nowrap;
  text-align: center;
}

/*Body*/
.features-table tbody td {
  text-align: center;
  font: normal 12px Verdana, Arial, Helvetica;
  width: 150px;
}

.features-table tbody td:first-child {
  width: auto;
  text-align: left;
}

.features-table td:nth-child(2), 
.features-table td:nth-child(3) {
  background: #efefef;
  background: rgba(144,144,144,0.15);
  border-right: 1px solid white;
}


.features-table td:nth-child(4) {
  background: #e7f3d4;  
  background: rgba(184,243,85,0.3);
}

/*Header*/
.features-table thead td {
  font: bold 1.3em 'trebuchet MS', 'Lucida Sans', Arial;  
  border-radius-topright: 10px;
  border-radius-topleft: 10px; 
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top: 1px solid #eaeaea; 
}

.features-table thead td:first-child {
  border-top: none;
}

/*Footer*/
.features-table tfoot td {
  font: bold 1.4em Georgia;  
  border-radius-bottomright: 10px;
  border-radius-bottomleft: 10px; 
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom: 1px solid #dadada;
}

.features-table tfoot td:first-child {
  border-bottom: none;
}
{% endhighlight %}   

[View Demo](/wp-content/uploads/2010/12/feature-table.html)[Download Files](/wp-content/uploads/2010/12/feature-table.zip)


## IE Graceful Degradation

Now if you want this table to degrade gracefully for IE you must add different classes for cells and skip the pseudo-selectors part. The main disadvantage is the use of extra markup.

![](/wp-content/uploads/2010/12/feature-table-ie-preview.png)

I also made an example without pseudo-selectors and bellow you can see a demo or download files.

[View 2nd example Demo](/wp-content/uploads/2010/12/feature-table-ie.html)[Download 2nd example Files](/wp-content/uploads/2010/12/feature-table-ie.zip)

Hope you enjoyed this article and looking forward for your opinions regarding it!