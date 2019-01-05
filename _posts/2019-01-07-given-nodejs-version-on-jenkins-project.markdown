---
author: Red
comments: true
date: 2019-01-07 10:10:00
layout: post
slug: given-nodejs-version-on-jenkins-project
title: Use a given version of Node.js on a Jenkins project
description: Figure out a way to have a different Node.js version on a Jenkins project.
categories:
- nodejs
- misc
- front-end
---

Like many others, we're using Jenkins at Caphyon for tasks like testing or deploying some of our projects. These days I had to figure out a way to have a different Node.js version on a Jenkins project bound to a branch I was working on.

![Jenkins](/dist/uploads/2019/01/jenkins.png)

<!-- more -->

## What is Jenkins?

> [Jenkins](https://jenkins.io/) is a self-contained, open source automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.

*from the [docs](https://jenkins.io/doc/)*

## The scenario

So I had a branch I was working on and needed a different Node.js version for that, mostly for trying out things, without risking to change any other Jenkins project configuration.

Specifically, I had a branch with some tests based on Jest and Puppeteer that rely on `async/await` which is available from Node.js 7.6. Whilst the Node.js version installed on the Jenkins machine was lower than that, I was needing a newer Node.js for my Jenkins project that my branch was bound to.

The solution I found was to install the [Jenkins NodeJS Plugin](https://plugins.jenkins.io/nodejs) which was already having some of the features and functionality I was looking for.

![Jenkins w/ Node.js given version](/dist/uploads/2019/01/jenkins-setup.png)
*The Jenkins project with a given Node.js 8.0 version.*

So, what Jenkins NodeJS Plugin does:

- It allows creating as many Node.js installations "profiles" as you want. Let's say you could have some installations to play with like legacy 6x, 8x or latest stable Node.js.

- It auto installs the given version of Node.js, on every Jenkins project where it will be needed.

- It allows to install globally some npm packages inside each Node.js installation and these npm packages will be made available to the PATH: those could be Gulp, Webpack or you name it.

- It allows executing Node.js scripts, under the given Node.js installation.

That's pretty much it, hope you find this useful!