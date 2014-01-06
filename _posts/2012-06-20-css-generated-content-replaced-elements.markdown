---
author: Red
comments: true
date: 2012-06-20 05:00:57+00:00
layout: post
slug: css-generated-content-replaced-elements
title: CSS generated content on replaced elements
description: Read more about the HTML replaced elements and pseudo-elements. Also, find out more about WebKit Shadow DOM and its advantages.
wordpress_id: 4752
categories:
- CSS
tags:
- CSS
- CSS3
- CSS4
---

Using pseudo-elements like `:before` and `:after` helps you specifying which content should be inserted before (or after) the content of an element. Replaced elements like `input` or `img` have no content, therefore, you shouldn't be able to use generated content for them.

But, there's almost always a but, it seems that you can use generated content on a number of replaced elements that varies from browser to browser. This is something that has intrigued me lately and that's why I decided to write down this article.

![CSS generated content on replaced elements preview](http://www.red-team-design.com/wp-content/uploads/2012/06/css-generated-content-replaced-elements.png)

<!-- more -->

## What is a replaced element?

> An element whose content is outside the scope of the CSS formatting model, such as an image, embedded document, or applet.


This is an excerpt from the [specifications](http://www.w3.org/TR/CSS21/conform.html), but to keep it simple, just remember that a replaced element is any element whose appearance and dimensions are predefined without any use of CSS.

### Some replaced elements:
	
  * `<img>`	
  * `<input>`	
  * `<select>`	
  * `<textarea>`	
  * `<object>`	
  * `<br>`	
  * `<hr>`

## Getting back to our topic

I've seen a lot of cool demos like [this](http://jsfiddle.net/joshnh/evePU/), [this](http://lab.simurai.com/umbrui/) or [this one](http://ericbidelman.tumblr.com/post/23615290220/data-binding-using-data-attributes) that work only on Chrome (at this time) whilst according to [specs](http://www.w3.org/TR/CSS2/generate.html#before-after-content), the interaction of `:before` and `:after` with "replaced elements" is not defined.

More than that, it seems that all these Chrome examples have something to do with using Shadow DOM.

### Shadow DOM

[What the Heck is Shadow DOM?](http://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/). That's exactly my first question that came up in my head when I first heard about this. All the above examples I mentioned about are based on this WebKit only ability to control a shadow DOM subtree of an element. 

I agree it might sound a little overwhelming, and that's why I recommend you to read [Dimitri Glazkov](http://glazkov.com/)'s article. 

## What people say

The question is: **Is this technically a "bug" in WebKit, or should we expect this to be implemented in other browsers too?**

For this article, I had the pleasure of getting feedback from some of the best web developers I know:

![Lea Verou](http://www.red-team-design.com/wp-content/uploads/2012/06/lea-verou.jpg)
### [Lea Verou](http://lea.verou.me/)
[@leaverou](https://twitter.com/LeaVerou)

> Yes, although convenient, this behavior is technically a bug in these engines. I think extending :before and :after to apply to replaced elements was discussed in the CSSWG and rejected, because it’s not consistent with the way these pseudos work for non-replaced elements (they are not treated like siblings, but like children).

> The Generated & Replaced content [module](http://www.w3.org/TR/css3-content/) used to define something that would help solve this problem: an ::outside pseudo-element, that could also be combined with ::before and ::after, essentially mimicking what these engines do for replaced content. Unfortunately, there are no implementations (apparently it's hard to implement) and this draft is not actively maintained any more (last update was at 2003!) and thus, is now obsolete. I really hope someone picks it up and starts working on it, this kind of functionality is badly needed.

![Louis Lazaris](http://www.red-team-design.com/wp-content/uploads/2012/06/louis-lazaris.jpg)
### [Louis Lazaris](http://www.impressivewebs.com/)
[@ImpressiveWebs](https://twitter.com/ImpressiveWebs)

> That's pretty interesting. I wasn't aware that WebKit allows that to happen. My reaction to that is that it's a bug, and it shouldn't work. The spec says "This specification does not fully define the interaction of :before and :after with replaced elements." But, technically, that's not really true. The interaction (which is to say, no interaction) is defined when the spec says:

>"the :before and :after pseudo-elements specify the location of content before and after an element's document tree content..."

>A replaced element does not have any "document tree content". So according to the spec, replaced elements shouldn't allow pseudo-elements to be placed "inside" them. Also, if it works for an input element, then it should work with all input elements and also img tags. But it doesn't work with "type=submit" or images, so it seems inconsistent to me.


![Roger Johansson](http://www.red-team-design.com/wp-content/uploads/2012/06/roger-johansson.jpg)
### [Roger Johansson](http://www.456bereastreet.com/)
[@rogerjohansson](https://twitter.com/rogerjohansson)

>   1. The :before and :after pseudo-elements would probably be more intuitive if they were called :prepend and :append instead, since I think that better describes what they do.
        
>   2. I don't use Chrome much, so I wasn't aware that it allowed generated content on replaced elements. Other Webkit browsers don't so it's a bit strange that it does.
	
>   3. It's hard to tell what other browsers will do, but it doesn't look like it's coming to Firefox at least: [https://bugzilla.mozilla.org/show_bug.cgi?id=241985](https://bugzilla.mozilla.org/show_bug.cgi?id=241985).



![Chris Coyier](http://www.red-team-design.com/wp-content/uploads/2012/06/chris-coyier.jpg)
### [Chris Coyier](http://css-tricks.com/)
[@chriscoyier](https://twitter.com/chriscoyier)

> The way I think about it is this:

> It's not "before" and "after" **the element**, it's "before" and "after" **the content inside the element**. 

> Pseudo elements aren't actually in the DOM, but that's how they behave. 

> So if you think about a checkbox: `<input type="checkbox" />`

> Where does the content you are adding go? There isn't any "inside". As such, those elements are called "no content" elements.

> Conceptually, it makes sense for me for pseudo elements to not be allowed on elements like that. 

> Practically, with those awesome demos you have seen, it makes for some pretty cool possibilities. I just wish it was defined better, or there were pseudo elements like :outside and :inside that accommodated those things (there were, but they were poorly defined in the spec and removed before any browser implemented them). 

> If I could control the world, I'd make :before and :after stop working on no content elements and get the pseudo elements and shadow DOM specs moving along so we can make those demos work in a standard way.

> Also, you may want to check this cool [presentation on pseudo elements](https://speakerdeck.com/u/chriscoyier/p/css-pseudo-elements-for-fun-and-profit) made by Chris.

![simurai](http://www.red-team-design.com/wp-content/uploads/2012/06/simurai.jpg)
### [simurai](http://simurai.com/)
[@simurai](https://twitter.com/simurai)

> Well, as far as I know... :before/:after pseudo elements were never intended to be used as layers for additional visual styling and just for adding additional text in front or after some content. So it's more of a hack. I guess the reason why lots of people ab(use) them for purely visual effects is the desire to keep the markup clean. I mean you could easily add a couple <span>'s, but that just feels unnecessary.

> There are two things that would make it more useful:

>   1. Have unlimited pseudo elements and not just 2.
>   2. Better browser support for transitioning them. Works in Firefox but not in WebKit.

> Maybe an alternative will be Web Components.


![Harry Roberts](http://www.red-team-design.com/wp-content/uploads/2012/06/harry-roberts.jpg)
### [Harry Roberts](http://csswizardry.com/)
[@csswizardry](https://twitter.com/@csswizardry)

> Well the spec does say that the implementation is undefined as yet, so I don’t think it’s a bug so much as a bit over-keenness on WebKit’s part, perhaps…?

> It would certainly be really cool to have a) a solid definition and b) that definition to allow for content on replaced elements.

![Thierry Koblentz](http://www.red-team-design.com/wp-content/uploads/2012/06/thierry-koblentz.jpg)
### [Thierry Koblentz](http://tjkdesign.com/)
[@thierrykoblentz](https://twitter.com/@thierrykoblentz)

> I think it makes sense that this is not defined as
if we look at the current specs we see that:

>   1. The :before and :after pseudo-elements specify the location of content
before and after an element's document tree content.  
[http://www.w3.org/[..]before-after-content](http://www.w3.org/TR/CSS2/generate.html#before-after-content)
	
>   2. A replaced element is an element whose content is outside the scope of
the CSS formatting model [...] The content of replaced elements is not
considered in the CSS rendering model.  
[http://www.w3.org/TR/CSS21/conform.html](http://www.w3.org/TR/CSS21/conform.html)

> I think we could argue that #2 does not say for sure that pseudo-elements
could not be used with replaced elements (unless content is seen as a
whole), but IMHO, #1 is less subject to interpretation as it states that
pseudo-elements specify the location of content in relation to the *document
tree content* - and IMO, there is no such thing here.

> I usually think of those as void elements, this helps me accept the fact
that I can't use replaced elements with pseudo-elements. As it is easier to
conceptualize looking at the difference in syntax (`<element/>` versus
`<element></element>`)...

![Jeff Starr](http://www.red-team-design.com/wp-content/uploads/2012/06/jeff-starr.jpg)
### [Jeff Starr](http://perishablepress.com/)
[@perishable](https://twitter.com/@perishable)

> Technically, replaced elements have no content, and so therefore :before and :after shouldn't apply in that case. But I also feel that the new possibilities afforded by the new shadow DOM hold vast potential and should be explored further.

> Then again, it could well open the doors to chaos and anarchy if browsers start doing whatever they want, outside of W3C specification.

![Faruk Ateş](http://www.red-team-design.com/wp-content/uploads/2012/06/faruk-ates.jpg)
### [Faruk Ateş](http://farukat.es/)
[@KuraFire](https://twitter.com/@KuraFire)

> I think for generated content, any interaction is coincidental and problematic, because the spec is basically silent on the matter, and that always causes issues for browser vendors. The fact that the CSS3 version of the spec hasn't been touched since 2003 doesn't give me much confidence that will change anytime soon.

> Anything with interaction should be really well-defined and clear, because inconsistencies in “How Stuff Works™” between browsers are really awful to deal with for developers—just look at the mess of built-in date pickers for the input type="date" feature in HTML5.

> Whatever interaction currently is possible with CSS generated content in browsers should be, if you ask me, treated as a bug with potentially confusing side effects.

## One step ahead?

As you already may know, the Chrome Settings area is made with pure HTML. You may find interesting the fact that their developers took this one step further, as all their checkboxes and radios are customized using this approach.

![Chrome's form elements example](http://www.red-team-design.com/wp-content/uploads/2012/06/chrome-form-elements.png)

So, it sounds to me that they are quite serious about further developing this technique.

## A test case

While doing some research on this article, I reminded I read a while ago an article by Chris Coyier regarding [styling horizontal rules](http://css-tricks.com/simple-styles-for-horizontal-rules/). The `hr` is a replaced element, as Chris also states in that article. Now, the interesting part here is that [pseudo-elements](http://www.red-team-design.com/before-after-pseudo-elements) work on `hr` element whilst they shouldn't. And this happens on all major browsers too. So, it's pretty interesting huh?

I decided to create a rough test case for generated content on replaced elements and the  results are a totally mess if you ask me :)

[View test case](http://www.red-team-design.com/wp-content/uploads/2012/06/generated-content-on-replaced-elements-test.html)

Also, [Divya Manian](http://nimbupani.com/) was so kind and made a more advanced [test](http://jsfiddle.net/nimbu/GvwVy/show/) for pseudos on replaced elements.

As you can notice, the results across modern browsers are inconsistent and this does not help us at all.

## Conclusion

I think all these misunderstandings are caused by the way specs were written on this matter. We should all agree the spec could have been more explicit here.

Let's just hope this situation will clarify soon so we can move further and make those cool demos work according to some clear standards.

Last but not least, a big **thanks to all above people** who've responded to my initiative. You rock!