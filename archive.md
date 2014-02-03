---
layout: default
title: Archive
description: Browse through all the articles I've written until now.
permalink: /archive/
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> 
      <small>{{ post.date | date_to_string }}</small>
    </li>
  {% endfor %}
</ul>