---
layout: default
title: Archive
permalink: /archive/
---

<ul>
  {% for post in site.posts %}
    {% unless post.next %}
      <h2>{{ post.date | date: '%Y' }}</h2>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h2>{{ post.date | date: '%Y' }}</h2>
      {% endif %}
    {% endunless %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> {{ post.date | date_to_string }} </li>
  {% endfor %}
</ul>