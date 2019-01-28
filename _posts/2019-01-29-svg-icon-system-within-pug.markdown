---
author: Red
comments: true
date: 2019-01-29 10:00:00
layout: post
slug: svg-icon-system-within-pug
title: SVG icon system within Pug/Jade
description: How to include a minified, production-ready SVG icon system, using symbols within the Pug/Jade pages.
categories:
- SVG
- JS
- HTML
- Miscellaneous
---

I'm working on a project that uses Node.js and Pug, formerly Jade, to generate a static website and I couldn't be more happy about how this works.

Still, one thing was bothering me for some time, and namely how to efficiently include a minified, production-ready SVG icon system, using `symbol`s within the Pug pages.

![Pug and SVGs ](/dist/uploads/2019/01/pug-include-svg.png)

<!-- more -->

## TL;DR

I had to find a better way to include an **SVG icon system**, both **inline** and **minified**, using `symbol`s within the Pug generated files.

- I minified the `symbols.svg` output with [`imagemin`](https://github.com/imagemin/imagemin)
- I read the resulted content and passed it to [Pug](https://pugjs.org/) using the `locals` object.
- I inlined the already now minified SVG result in the source files using a [Pug dot block](https://pugjs.org/language/plain-text.html#block-in-a-tag).

## The struggle

The system that helps to generate the static files consists of `gulp`, `pug`, `sass`, `imagemin`, `uglify` and all the front-end buzzwords you can think of. Lots of buzzwords, I told you I know how to make websites.

Leaving the joke aside, Pug, formerly Jade, has a simple mechanism to [include non-Pug files](https://pugjs.org/language/includes.html) as raw text and it works just fine.

{% highlight js %}
style
  include style.css

script
  include script.js

body
  include symbols.svg
{% endhighlight %}

All good except the fact that if you choose to minify the Pug files output, e.g. when in `production`, if your included non-Pug files aren't minified/uglified already, you'll end up with some mixed output in your final HTML source file.

![Mixed HTML code](/dist/uploads/2019/01/mixed-source-code.png)

*Mixed HTML code output, both minified and non-minified*

In the beginning, I have to admit I started by having two files to maintain: `symbols.svg` and `symbols.min.svg` and whenever a new symbol was added to `symbols.svg`, had to update the `symbols.min.svg` file too. I'm not so proud of this, but it worked, and I knew I had to find a better way to handle this situation.

## My take on this

New year, new ideas.

It's not new year's resolution or something like that, but the first thing I made when got back to work in 2019, besides updating the footers to &copy; 2019 :), was to handle this SVG inline include in my Pug files.

Here's how the `symbols.svg` icon system looks like:

{% highlight html %}
<svg xmlns="http://www.w3.org/2000/svg"
     width="0" height="0"
     display="none">
  <symbol id="...">
    <title>...</title>
    <path d="..."/>
  </symbol>
  <symbol id="...">
    <title>...</title>
    <path d="..."/>
  </symbol>
   ...
</svg>
{% endhighlight %}

---

### Quick tip
The `display` attribute lets you control the rendering of graphical or container elements. No need to add any CSS class helper to visually hide the SVG content. More on [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display).

---

The following gulp task excerpt will move and optimize the `symbols.svg`. Note the [SVGO](https://github.com/svg/svgo) options that we're passing on for our SVG, they are useful and mandatory in this case otherwise lots of stuff will get removed from the optimized output.

{% highlight js %}
const imagesTask = () => gulp
  .src('src/assets/img/**/*')
  .pipe(
    gulpif(argv.dist, imagemin([
      imagemin.gifsicle(),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng(),
      imagemin.svgo({
        plugins: [
          { removeHiddenElems: false },
          { removeUnusedNS: false },
          { removeUselessDefs: false },
          { collapseGroups: false },
          { cleanupIDs: false },
          { removeEmptyContainers: false }],
      }),
    ])),
  )
  .pipe(gulp.dest('dist/assets/img'));
{% endhighlight %}

Within the `pugTask`, I'm passing the already minified SVG file as a property of the `locals` object, which is part of the [Pug API](https://pugjs.org/api/getting-started.html). Also, I always make sure the above gulp `imagesTask` runs before the `pugTask`, in order to have the `locals.svg` available. As I just switched everything to [gulp 4](https://www.npmjs.com/package/gulp), I use [series()](https://gulpjs.com/docs/en/api/series) to execute tasks one after another.

{% highlight js %}
const pugTask = () => gulp
  .src(['src/views/**/*.pug'])
  .pipe(
    gulpif(argv.dist,
      pug({
        pretty: false,
        compileDebug: true,
        locals: {
          svg: fs.readFileSync('dist/assets/img/svg/symbols.svg', 'utf8'),
        },
        basedir: 'src',
      })),
  )
  .on('error', (err) => {
    console.log(err.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('dist'));
{% endhighlight %}

Finally, I'll be able to include the minified result in a partial Pug file using a dot block of plain text and unescaped string interpolation:

{% highlight js %}
.
  !{locals.svg}
{% endhighlight %}

### From Pug docs:
- [Block in a tag](https://pugjs.org/language/plain-text.html#block-in-a-tag)
- [String interpolation unescaped](https://pugjs.org/language/interpolation.html#string-interpolation-unescaped)

## That's it!

![Minified HTML code](/dist/uploads/2019/01/minified-source-code.png)

*Better, beautiful & minified HTML output*

I'm pretty happy I managed to find a way to improve this piece within my build process and will dig even further to see how to improve things. Let me know if you know a better way to do it, would love to hear it!
