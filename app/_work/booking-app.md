---
layout: "job"
title: "booking app"
type: "Web Application"
tags: "Planning, Development"
icon: "suitcase"
variant: "v1"
order: "1"
---

> Psst! This article is still work in progress

The booking app is a single-page application currently in development at [@cddnation](http://cddnation.com).

The app is the biggest SPA I've worked on, and I'm very excited about where we're at with it so far.

Once in production, it will serve as the booking platform for 10+ hotels across the UK, running in 10+ separate instances on their individual websites.

---
{: .hr .hr--line}

### Challenges

#### 3rd party API

A requirement of the build is that all booking data needs to go through a third party provider that's well established in the UK.

This provided us with a few challenges as we're not fully in control of what data we can access, but thorough planning has helped.

#### Style leaks

Style leaks were a concern as we didn't want any styling to leak beetwen the booking app and the website it would be running within.

The way we got around this is using a namespace for all booking app styles. We already use BEM-notation for all modules, but to prevent any base styles, font sizing from leaking across the namespace was our savior. It's a shame web components isn't quite there yet as this could have prevented this worry via the shadow DOM.

#### Testing

For such an important part of the business, testing has been at the front of my mind throughout the build. I've found this quite challenging as there are a lot of modules and the app itself is very data-driven, but it's been hugely educational for me. 

The knowledge that changing something won't break something else is very liberating, especially when the app goes into production.