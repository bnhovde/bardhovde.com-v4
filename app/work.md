---
layout: page
title: Selected Works
permalink: /my-work/
order: 1
sitemap:
  exclude: 'yes'
---


#Work.

I’ve been lucky to work on a wide range of projects in the last few years. Below are a few of these.

<hr class="hr hr--line" />

<div class="cards">
    {% assign sorted = (site.work | sort: 'order') %}
	
    {% for job in sorted %}
	
		{% capture modulo %}{{ forloop.index0 | mod:2 }}{% endcapture %}
		
		{% if modulo == '0' or forloop.first %}
			<div class="grid"><!--
		{% endif %}
		
			--><div class="grid__item child--one-half">
				<article class="card card--{{ job.variant }}">
					<a class="card__media" href="{{ job.url }}">
						<i class="card__circle"></i>
						<svg class="card__icon icon"><use xlink:href="#icon-{{ job.icon }}"></use></svg>    
					</a>
					<h2 class="card__title h4">{{ job.title }}</h2>
					<div class="card__meta">{{ job.type }}</div>
					<div class="card__copy">{{ job.tags }}</div>
					<a class="card__action" href="{{ job.url }}">View details</a>
					<div class="card__footer"></div>
				</article>
			</div><!--
		
		{% if modulo == '1' or modulo == '3' %}
			--></div>
			<div class="grid"><!--
		{% endif %}
		
		{% if forloop.last %}
			--></div>
		{% endif %}
		
	{% endfor %}
</div>

<article class="card card--stack card--v1">
	<h2 class="card__title h4">DBD Media</h2>
	<div class="card__meta">Web Project</div>
	<a class="card__action" href="http://dbdmedia.co.uk">View website</a>
</article>

<article class="card card--stack card--v2">
	<h2 class="card__title h4">Pentalver</h2>
	<div class="card__meta">Web Project</div>
	<a class="card__action" href="#">Being deployed (coming soon)</a>
</article>

---

##Talks.

Upcoming & past talks.

<hr class="hr hr--line" />

<section class="articles">
	<article class="card card--stack card--v4">
		<h2 class="card__title h4">ES6 in production</h2>
		<div class="card__copy">Upcoming talk at <a href="http://www.meetup.com/DeveloperSouthCoast/" alt="Developer South Coast">Developer South Coast</a></div>
		<a class="card__action" href="http://www.meetup.com/DeveloperSouthCoast/events/227278738/">View event</a>
	</article>
	
	<article class="card card--stack card--v5">
		<h2 class="card__title h4">PAST: Ferronats</h2>
		<div class="card__copy">Browser performance primer at digital hampshire</div>
		<a class="card__action" href="http://www.themediaflow.com/blog/digital-hampshire-the-highlights">Read summary</a>
	</article>
</section>