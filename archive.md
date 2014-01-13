---
layout: default
title: Archive
permalink: /archive/
---

{% for post in site.posts %}
<article>
	{% unless post.next %}
<h2>{{ post.date | date: '%Y' }}</h2>
	{% else %}
		{% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
		{% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
		{% if year != nyear %}
<h2>{{ post.date | date: '%Y' }}</h2>
		{% endif %}
	{% endunless %}
<span class="meta">{{ post.date | date_to_string }}</span>
<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
</article>
{% endfor %}